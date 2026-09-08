"use client"
import { ComponentPropsWithoutRef } from "react";
import styles from "./brackets.module.scss";
import clsx from "clsx";
import { IComponentTheme } from "@/types/component";

interface IBrackets extends ComponentPropsWithoutRef<"span"> {
	theme?: IComponentTheme;
}

export default function Brackets({ theme, className }: IBrackets) {

	return (
		<span className={clsx(styles.brackets, className)} data-theme={theme}>
			<span className={styles.bracket} data-side="LEFT"></span>
			<span className={styles.bracket} data-side="RIGHT"></span>
		</span>
	);
}
