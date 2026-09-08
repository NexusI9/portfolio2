import { forwardRef, useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import styles from "./dropdown-list.module.scss"
import { Text } from "../../text/text"

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

		const listRef = useRef<HTMLUListElement | null>(null)
		const [position, setPosition] = useState({ top: 0, left: 0, width: 0 })

		const setRefs = (node: HTMLUListElement | null) => {
			listRef.current = node
			if (typeof ref === "function") ref(node)
			else if (ref) (ref as React.MutableRefObject<HTMLUListElement | null>).current = node
		}

		useLayoutEffect(() => {

			if (!anchorRef.current) return

			const Y_OFFSET = 3;
			const updatePosition = () => {
				const rect = anchorRef.current!.getBoundingClientRect()
				const viewportWidth = window.innerWidth

				// Actual rendered width of the dropdown (respects your CSS min-width)
				const renderedWidth = listRef.current?.offsetWidth ?? rect.width

				// Would it overflow the right edge if left-aligned to the trigger?
				const overflowsRight = rect.left + renderedWidth > viewportWidth

				const left = overflowsRight
					? rect.right - renderedWidth // align dropdown's right edge to trigger's right edge
					: rect.left // default: align dropdown's left edge to trigger's left edge

				setPosition({ top: rect.bottom + Y_OFFSET, left, width: rect.width })
			}

			updatePosition()
			window.addEventListener("resize", updatePosition)
			return () => window.removeEventListener("resize", updatePosition)
		}, [anchorRef, options.length])

		return createPortal(
			<ul
				ref={setRefs}
				role="listbox"
				className={styles["dropdown-list"]}
				style={{
					position: "fixed",
					top: position.top,
					left: position.left,
					width: position.width,
				}}
			>
				{options.map((option, index) => (
					<li
						key={option.value}
						role="option"
						aria-selected={selected?.value === option.value}
						onMouseEnter={() => setHighlightIndex(index)}
						onMouseDown={(e) => {
							e.preventDefault()
							onSelect(option)
						}}
						className={`cursor-pointer ${index === highlightIndex ? styles.highlight : ""}`}
					>
						<Text.LabelMedium>{option.label}</Text.LabelMedium>
					</li>
				))}
			</ul>,
			document.body
		)
	}
)

DropdownList.displayName = "DropdownList"
export default DropdownList
