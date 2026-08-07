"use client"

import { ComponentPropsWithoutRef } from "react";
import styles from "./group.module.scss";
import clsx from "clsx";

interface IGroup extends ComponentPropsWithoutRef<"div"> {
	direction?: "COLUMN" | "ROW";
	size?: "FULL" | "HALF";
}

export default function Group({ direction = "COLUMN", size = "FULL", children, className }: IGroup) {

	return (<div
		className={clsx(styles.group, className)}
		data-direction={direction}
		data-size={size}
	>
		{children}
	</div>);

}
