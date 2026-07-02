"use client"

import clsx from "clsx";
import { Text } from "../text/text";
import styles from "./paragraph.module.scss";

interface IParagraph {
	children?: string | string[] | React.ReactNode;
}


export default function Paragraph({ children }: IParagraph) {

	if (typeof children === "string")
		return (<Text.Body className={styles.base}>{children}</Text.Body>);
	else if (Array.isArray(children))
		return (<Text.Body className={clsx(styles.base, styles.list)}>{children.map(item => <span key={item}>{item}</span>)}</Text.Body>);
}

