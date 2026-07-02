"use client"

import clsx from "clsx";

interface IHeadline {
	children?: React.ReactNode;
	className?: string;
}

export default function Headline({ children, className }: IHeadline) {
	return (<hgroup className={clsx("flex flex-col gap-(--size-space-medium)", className)}>{children}</hgroup>);
}
