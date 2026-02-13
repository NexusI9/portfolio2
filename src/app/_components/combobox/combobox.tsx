"use client"

import {
	useState,
	useRef,
	useEffect,
	useMemo,
	KeyboardEvent,
	RefObject,
} from "react"
import DropdownList from "./_components/dropdown-list"
import styles from "./combobox.module.scss"
import { catClass } from "@lib/utils"
import ChevronDown from "@assets/icons/chevron-down.svg"
import ChevronUp from "@assets/icons/chevron-up.svg"


type Option = {
	value: string
	label: string
}

type ComboboxProps = {
	options: Option[]
	value?: string
	onChange?: (value: string) => void
	placeholder?: string
	className?: string
}

export default function Combobox({
	options,
	value,
	onChange,
	placeholder = "Select...",
	className,
}: ComboboxProps) {
	const [open, setOpen] = useState(false)
	const [internalValue, setInternalValue] = useState<string | undefined>(value)
	const [highlightIndex, setHighlightIndex] = useState(0)

	const wrapperRef = useRef<HTMLDivElement>(null)
	const dropdownRef = useRef<HTMLUListElement>(null)

	const selected = useMemo(
		() => options.find(o => o.value === (value ?? internalValue)),
		[options, value, internalValue]
	)

	const handleSelect = (val: string) => {
		if (!value) setInternalValue(val)
		onChange?.(val)
		setOpen(false)
	}

	// Click outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!wrapperRef.current?.contains(e.target as Node)) {
				setOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	// Keyboard navigation
	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
			setOpen(true)
			return
		}

		if (!open) return

		switch (e.key) {
			case "ArrowDown":
				setHighlightIndex(prev => (prev + 1) % options.length)
				break
			case "ArrowUp":
				setHighlightIndex(prev =>
					prev === 0 ? options.length - 1 : prev - 1
				)
				break
			case "Enter":
				handleSelect(options[highlightIndex].value)
				break
			case "Escape":
				setOpen(false)
				break
		}
	}

	return (
		<div
			ref={wrapperRef}
			className={catClass([styles.combobox, className])}
			tabIndex={0}
			onKeyDown={handleKeyDown}
			role="combobox"
			aria-expanded={open}
		>
			<div onClick={() => setOpen(o => !o)} className="flex flex-row gap-(--size-space-medium)">
				{selected?.label ?? placeholder}
				{open ? <ChevronUp /> : <ChevronDown />}
			</div>


			{open && (
				<DropdownList
					anchorRef={wrapperRef as RefObject<HTMLDivElement>}
					ref={dropdownRef}
					options={options}
					selected={selected}
					highlightIndex={highlightIndex}
					setHighlightIndex={setHighlightIndex}
					onSelect={handleSelect}
				/>
			)}



		</div>
	)
}
