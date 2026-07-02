"use client"

import { ComponentPropsWithoutRef } from "react";
import styles from "./deco-frame.module.scss"
import clsx from "clsx";

interface IDecoFrame extends ComponentPropsWithoutRef<"span"> {
	size: string;
}

export default function DecoFrame({ size, className }: IDecoFrame) {
	return (<span className={clsx(styles["deco-frame"], className)} style={{ width: size }}></span>);

}
