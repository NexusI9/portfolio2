"use client"

import ConstraintCard from "../constraint-card/constraint-card";
import { Blog } from "./blog";
import styles from "./constraints.module.scss";

interface IConstraints {
	headline: string;
	items: string[];
}


export default function Constraints({ headline, items }: IConstraints) {

	return (
		<Blog.Section>
			<Blog.Heading role="H3">{headline}</Blog.Heading>
			<ul className={styles["constraint-cards"]}>
				{items.map((item, i) => <ConstraintCard key={item + i} label={item} number={i + 1} />)}
			</ul>
		</Blog.Section>);
}
