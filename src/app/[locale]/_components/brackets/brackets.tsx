"use client"
import { ComponentPropsWithoutRef } from "react";
import styles from "./brackets.module.scss";
import clsx from "clsx";

export default function Brackets(props: ComponentPropsWithoutRef<"span">) {

	return (
		<span {...props} className={clsx(styles.brackets, props.className)}>
			<span className={styles.bracket} data-side="LEFT"></span>
			<span className={styles.bracket} data-side="RIGHT"></span>
		</span>
	);
}
