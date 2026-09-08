"use client"

import { ReactNode, useRef, useState, PointerEvent, RefObject } from "react";
import { SliderContext } from "./context";


type RootProps = {
	children: ReactNode;
	damping?: number;
	className?: string;
};

export default function Root({ children, damping = 0.35, className }: RootProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollStart, setScrollStart] = useState(0);

	const scrollByAmount = (amount: number) => {
		if (!containerRef.current) return;
		containerRef.current.scrollBy({
			left: amount,
			behavior: "smooth",
		});
	};

	const STEP = 0.8;

	const scrollLeft = () => {
		if (!containerRef.current) return;
		scrollByAmount(-containerRef.current.clientWidth * STEP);
	};

	const scrollRight = () => {
		if (!containerRef.current) return;
		scrollByAmount(containerRef.current.clientWidth * STEP);
	};

	const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;

		setIsDragging(true);
		setStartX(e.clientX);
		setScrollStart(containerRef.current.scrollLeft);

		containerRef.current.setPointerCapture(e.pointerId);
	};

	const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
		if (!isDragging || !containerRef.current) return;

		const dx = e.clientX - startX;
		const container = containerRef.current;

		let nextScroll = scrollStart - dx;

		const maxScroll =
			container.scrollWidth - container.clientWidth;

		// Edge damping
		if (nextScroll < 0) {
			nextScroll = nextScroll * damping;
		}

		if (nextScroll > maxScroll) {
			const excess = nextScroll - maxScroll;
			nextScroll = maxScroll + excess * damping;
		}

		container.scrollLeft = nextScroll;
	};

	const onPointerUp = () => {
		setIsDragging(false);
	};

	return (
		<SliderContext.Provider
			value={{
				containerRef: containerRef as RefObject<HTMLDivElement>,
				scrollLeft,
				scrollRight,
				onPointerDown,
				onPointerMove,
				onPointerUp,
			}}
		>
			{children}
		</SliderContext.Provider>
	);
}




