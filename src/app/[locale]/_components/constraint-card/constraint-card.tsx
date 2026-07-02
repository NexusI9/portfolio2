"use client"

import { Text } from "../text/text";
import styles from "./constraint-card.module.scss";
import blog_styles from "../blog/blog.module.scss";
import clsx from "clsx";

interface IConstraintCard {
	label: string;
	number?: number;
}


export default function ConstraintCard({ label, number }: IConstraintCard) {

	return (<li className={styles["constraint-card"]}>
		{number && <Text.Body className={clsx(blog_styles.number, styles.number)}>{number}</Text.Body>}
		<Text.Body>{label}</Text.Body>
	</li>);

}
