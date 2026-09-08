"use client"

import NextImage from "next/image";
import { TouchEvent, useState } from "react";
import { createPortal } from "react-dom";
import { IRegisterableImage } from "./image";
import styles from "./gallery.module.scss";

interface IModal {
	images: IRegisterableImage[];
	activeId: string;
	onClose: () => void;
	onSelect: (id: string) => void;
};

export default function Modal({
	images,
	activeId,
	onClose,
	onSelect,
}: IModal) {
	const activeIndex = images.findIndex(i => i.id === activeId);
	const active = images[activeIndex];
	const [touchStartX, setTouchStartX] = useState<number | null>(null);

	if (!active) return null;

	const handleTouchStart = (e: TouchEvent) => {
		setTouchStartX(e.touches[0].clientX);
	};

	const handleTouchEnd = (e: TouchEvent) => {
		if (touchStartX === null) return;
		const touchEndX = e.changedTouches[0].clientX;
		const diff = touchStartX - touchEndX;

		if (Math.abs(diff) > 50) {
			if (diff > 0 && activeIndex < images.length - 1) {
				// swipe left → next
				onSelect(images[activeIndex + 1].id);
			} else if (diff < 0 && activeIndex > 0) {
				// swipe right → prev
				onSelect(images[activeIndex - 1].id);
			}
		}
		setTouchStartX(null);
	};

	return createPortal(
		<div
			onClick={onClose}
			onTouchStart={(e) => handleTouchStart(e)}
			onTouchEnd={(e) => handleTouchEnd(e)}
			className={styles.modal}
		>
			{/* Main Image */}
			<div
				className={styles["modal-image-container"]}
				style={active.background ? { background: active.background } : undefined}
			>
				<NextImage
					src={active.src}
					alt={active.alt || ""}
					fill
					className={styles["modal-image"]}
				/>
			</div>

			{/* Legend — sits above the thumbnail strip */}
			{active.legend && (
				<p
					onClick={e => e.stopPropagation()}
					className={styles["modal-legend"]}
				>
					{active.legend}
				</p>
			)}

			{/* Thumbnails */}
			{images.length > 1 && <div
				onClick={e => e.stopPropagation()}
				className={styles["modal-thumbnail-layout"]}
			>
				{images.map(img => (
					<div
						key={img.id}
						onClick={() => onSelect(img.id)}
						className={styles["modal-thumbnail-container"]}
						data-active={img.id === activeId}
						style={img.background ? { background: img.background } : undefined}
					>
						<NextImage
							src={img.src}
							alt={img.alt || ""}
							fill
							className={styles["modal-thumbnail"]}
						/>
					</div>
				))}
			</div>}
		</div>,
		document.body
	);
}
