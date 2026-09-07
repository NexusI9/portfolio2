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
import { Text } from "../text/text"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import clsx from "clsx"
import { IComponentTheme } from "../../_types/component"

type Option = {
	value: string
	label: string
}

type ComboboxProps = {
	options: Option[]
	value?: Option
	onChange?: (value: Option) => void
	placeholder?: string
	className?: string
	/** Show this instead of the selected label in the trigger (e.g. <GlobeIcon /> for a language picker) */
	triggerIcon?: React.ReactNode
	theme?: IComponentTheme;
}

export default function Combobox({
	options,
	value,
	onChange,
	placeholder = "Select...",
	className,
	triggerIcon,
	theme = "LIGHT",
}: ComboboxProps) {
	const [open, setOpen] = useState(false)
	const [internalValue, setInternalValue] = useState<Option | undefined>(value)
	const [highlightIndex, setHighlightIndex] = useState(0)
	const wrapperRef = useRef<HTMLDivElement>(null)
	const dropdownRef = useRef<HTMLUListElement>(null)

	const selected = useMemo(
		() => options.find(o => o.value === (value?.value ?? internalValue?.value)),
		[options, value, internalValue]
	)

	const handleSelect = (val: Option) => {
		if (!value) setInternalValue(val)
		onChange?.(val)
		setOpen(false)
	}

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!wrapperRef.current?.contains(e.target as Node)) {
				setOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	useEffect(() => {
		if (open) {
			const idx = options.findIndex(o => o.value === selected?.value)
			setHighlightIndex(idx >= 0 ? idx : 0)
		}
	}, [open])

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
				handleSelect(options[highlightIndex])
				break
			case "Escape":
				setOpen(false)
				break
		}
	}

	return (
		<div
			ref={wrapperRef}
			className={clsx(styles.combobox, className)}
			tabIndex={0}
			onKeyDown={handleKeyDown}
			role="combobox"
			aria-expanded={open}
			aria-label={triggerIcon ? (selected?.label ?? placeholder) : undefined}
			data-theme={theme}
		>
			<div onClick={() => setOpen(o => !o)} className="flex flex-row items-center gap-(--size-space-small)">
				{triggerIcon ?? <Text.LabelMedium>{selected?.label ?? placeholder}</Text.LabelMedium>}
				{open ? <ChevronUpIcon /> : <ChevronDownIcon />}
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
