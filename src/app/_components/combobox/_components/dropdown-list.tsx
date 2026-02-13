"use client"

import { Ref, forwardRef, useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"
import styles from "./dropdown-list.module.scss"

type Option = {
	label: string
	value: string
}

type DropdownListProps = {
	anchorRef: React.RefObject<HTMLElement>
	options: Option[]
	selected?: Option | null
	highlightIndex: number
	setHighlightIndex: (index: number) => void
	onSelect: (value: string) => void
}

const DropdownList = forwardRef<HTMLUListElement, DropdownListProps>(
	(
		{ anchorRef, options, selected, highlightIndex, setHighlightIndex, onSelect },
		ref
	) => {
		const [position, setPosition] = useState({ top: 0, left: 0, width: 0 })

		useLayoutEffect(() => {
			if (!anchorRef.current) return
			const rect = anchorRef.current.getBoundingClientRect()
			setPosition({
				top: rect.bottom + window.scrollY,
				left: rect.left + window.scrollX,
				width: rect.width,
			})
		}, [anchorRef])

		return createPortal(
			<ul
				ref={ref}
				role="listbox"
				className={`${styles["dropdown-list"]} absolute max-h-60 overflow-auto z-[9999]`}
				style={{
					top: position.top,
					left: position.left,
					width: position.width,
				}}
			>
				{
					options.map((option, index) => (
						<li
							key={option.value}
							role="option"
							aria-selected={selected?.value === option.value}
							onMouseEnter={() => setHighlightIndex(index)}
							onMouseDown={(e) => {
								e.preventDefault()
								onSelect(option.value)
							}}
							className={`cursor-pointer ${index === highlightIndex ? styles.highlight : ""
								}`}
						>
							{option.label}
						</li>
					))
				}
			</ul >,
			document.body
		)
	}
)

DropdownList.displayName = "DropdownList"

export default DropdownList
