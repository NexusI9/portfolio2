"use client"

import { Text } from "@/components/text/text";
import styles from "./outcome.module.scss";
import blog_styles from "./blog.module.scss";
import Mosaic from "@/components/mosaic/mosaic";
import { Blog } from "./blog";
import clsx from "clsx";

interface IOutcome {
	headline: string;
	items: string[];
}


export default function Outcome({ headline, items }: IOutcome) {
	return (
		<Blog.Section>

			<Blog.Anchor role="H3" style="H3">{headline}</Blog.Anchor>
			<ul className={styles.outcome}>
				{items.map((item, i) => <li key={item + i} className={styles.item}>
					<div className="relative pl-[22px]">
						<Mosaic row={3} column={3} className={styles.mosaic} animation="BLINK" />
						<Text.Body className={clsx(blog_styles.number, styles.number)}>{i + 1}</Text.Body>
					</div>
					<Text.Body>{item}</Text.Body>
				</li>)}
			</ul>

		</Blog.Section>);
}
