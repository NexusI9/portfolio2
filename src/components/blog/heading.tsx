"use client"

import clsx from "clsx";

interface IHeading {
	children: React.ReactNode;
	className?: string;
}

export default function Heading({ children, className }: IHeading) {

	return (<hgroup className={clsx("flex flex-col", className)}>
		{children}
	</hgroup>);

}
