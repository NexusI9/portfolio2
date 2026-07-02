"use client"

import { ComponentPropsWithoutRef } from "react";
import styles from "./group.module.scss";
import clsx from "clsx";

interface IGroup extends ComponentPropsWithoutRef<"div"> {
	direction?: "COLUMN" | "ROW";
}

export default function Group({ direction = "COLUMN", children, className }: IGroup) {

	return (<div className={clsx(styles.group, className)} data-direction={direction}>{children}</div>);

}
