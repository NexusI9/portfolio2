"use client"

import { ReactNode } from "react";
import { Button } from "@components/button/button";
import { useSlider } from "./context";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";


type ButtonProps = {
	children?: ReactNode
	className?: string;
};

export function ButtonLeft({ className }: ButtonProps) {
	const { scrollLeft } = useSlider();
	return (
		<Button
			role="PRIMARY"
			style="OUTLINE"
			size="LARGE"
			type="ICON"
			onClick={scrollLeft}
			className={className}>
			<ChevronLeftIcon />
		</Button>
	);
}

export function ButtonRight({ className }: ButtonProps) {
	const { scrollRight } = useSlider();
	return (
		<Button
			role="PRIMARY"
			style="OUTLINE"
			size="LARGE"
			type="ICON"
			onClick={scrollRight}
			className={className}>
			<ChevronRightIcon />
		</Button>
	);
}

