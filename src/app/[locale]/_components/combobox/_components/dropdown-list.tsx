"use client"

import { Ref, forwardRef, useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"
import styles from "./dropdown-list.module.scss"
import { Text, TextBase } from "../../text/text"

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
	onSelect: (value: Option) => void
}

const DropdownList = forwardRef<HTMLUListElement, DropdownListProps>(
	(
		{ anchorRef, options, selected, highlightIndex, setHighlightIndex, onSelect },
		ref
	) => {
		const [position, setPosition] = useState({ top: 0, left: 0, width: 0 })

		useLayoutEffect(() => {
			if (!anchorRef.current) return
			const updatePosition = () => {
				const rect = anchorRef.current!.getBoundingClientRect()
				setPosition({ top: rect.bottom, left: rect.left, width: rect.width })
			}
			updatePosition()
			window.addEventListener("resize", updatePosition)
			return () => window.removeEventListener("resize", updatePosition)
		}, [anchorRef]);

		return createPortal(
			<ul
				ref={ref}
				role="listbox"
				className={styles["dropdown-list"]}
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
								onSelect(option)
							}}
							className={`cursor-pointer ${index === highlightIndex ? styles.highlight : ""
								}`}
						>
							<Text.LabelMedium>{option.label}</Text.LabelMedium>
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
