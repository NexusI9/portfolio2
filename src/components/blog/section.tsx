"use client"

import styles from "./section.module.scss";

interface ISection {
	layout?: "FULL" | "COLUMN_2";
	children?: React.ReactNode;
	type?: "DEFAULT" | "FLUID";
}


export default function Section({ layout = "FULL", type = "DEFAULT", children }: ISection) {
	return (<section
		className={styles["blog-section"]}
		data-layout={layout}
		data-type={type}
	>
		{children}
	</section>);
}
