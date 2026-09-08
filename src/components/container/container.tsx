"use client"

import styles from "./container.module.scss";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface IContainer
	extends ComponentPropsWithoutRef<"section"> {
	children?: React.ReactNode;
	type?: "DEFAULT" | "FLUID";
	size?: "DEFAULT" | "WIDE";
}

const Container = forwardRef<
	HTMLElement,
	IContainer
>(function Container(
	{ children, type = "DEFAULT", size = "DEFAULT", className, ...props },
	ref
) {
	return (
		<section
			ref={ref}
			className={clsx(styles.container, className)}
			data-type={type}
			data-size={size}
			{...props}
		>
			{children}
		</section>
	);
});

export default Container;
