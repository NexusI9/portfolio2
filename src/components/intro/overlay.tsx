"use client"

import { XIcon } from "lucide-react";
import { useEffect } from "react"
import { createPortal } from "react-dom"

interface IOverlay {
	open: boolean;
	children?: React.ReactNode;
	onClose: () => void;
}

export function Overlay({ open, children, onClose }: IOverlay) {
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose()
		}
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [onClose]);

	if (!open) return null

	return createPortal(
		<div className="fixed inset-0 z-[9999] flex items-center justify-center">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/70 backdrop-blur-sm"
				onClick={onClose}
			/>

			<XIcon
				onClick={onClose}
				className="absolute top-(--size-space-large) right-(--size-space-large) z-20 stroke-(--color-icon-on-dark) w-(--size-icon-medium) h-auto aspect-square cursor-pointer"
			/>


			{/* Modal */}
			<div className="relative z-10 w-[80vw] aspect-video bg-black overflow-hidden">
				{children}
			</div>
		</div>,
		document.body
	)
}
