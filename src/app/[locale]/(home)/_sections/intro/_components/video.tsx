"use client"

import { useRef, useState, useEffect } from "react"
import styles from "./video.module.scss"
import { PlayIcon } from "lucide-react";

interface IVideo {
	previewSrc: string;
	posterSrc: string;
	onOpen: () => void;
	paused?: boolean;
}

export function Video({
	previewSrc,
	posterSrc,
	onOpen,
	paused,
}: IVideo) {
	const containerRef = useRef<HTMLDivElement>(null);
	const cursorRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null)

	const [hovering, setHovering] = useState(false);

	const mouse = useRef({ x: 0, y: 0 });
	const current = useRef({ x: 0, y: 0 });
	const animationFrame = useRef<number>(0);

	const lerp = (start: number, end: number, factor: number) =>
		start + (end - start) * factor;

	useEffect(() => {
		if (!videoRef.current) return

		if (paused) {
			videoRef.current.pause()
		} else {
			videoRef.current.play().catch(() => {})
		}
	}, [paused])


	useEffect(() => {
		const animate = () => {
			current.current.x = lerp(current.current.x, mouse.current.x, 0.15);
			current.current.y = lerp(current.current.y, mouse.current.y, 0.15);

			if (cursorRef.current) {
				cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
			}

			animationFrame.current = requestAnimationFrame(animate);
		}

		if (hovering) {
			animationFrame.current = requestAnimationFrame(animate);
		}

		return () => {
			if (animationFrame.current)
				cancelAnimationFrame(animationFrame.current);
		}
	}, [hovering]);

	const handleMouseMove = (e: React.MouseEvent) => {
		const rect = containerRef.current?.getBoundingClientRect();
		if (!rect) return;

		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const offset = 40;
		mouse.current.x = x - offset;
		mouse.current.y = y - offset;
	}

	return (
		<div
			ref={containerRef}
			className={`${styles.video} relative overflow-hidden cursor-none group`}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onMouseMove={handleMouseMove}
			onClick={onOpen}
		>
			{/* WebM Preview */}
			<video
				src={previewSrc}
				poster={posterSrc}
				ref={videoRef}
				autoPlay
				muted
				loop
				playsInline
				className="object-cover"
			/>

			{/* Smooth Follow Play Button */}
			{hovering && (
				<div
					ref={cursorRef}
					className="absolute pointer-events-none transition-opacity duration-300 top-0 left-0"
				>
					<div className="w-30 h-30 rounded-full bg-(--color-surface-highest) flex items-center justify-center shadow-(--shadow-medium)  pl-(--size-space-large)">
						<PlayIcon className="fill-(--color-icon-brand-base) stroke-none w-(--size-icon-extra-large) aspect-square h-auto mr-2" />
					</div>
				</div>
			)}
		</div>
	)
}
