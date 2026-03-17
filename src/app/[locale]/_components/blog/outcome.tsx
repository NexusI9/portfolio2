"use client"

import { Text } from "@components/text/text";
import styles from "./outcome.module.scss";
import blog_styles from "./blog.module.scss";
import Mosaic from "@components/mosaic/mosaic";
import { catClass } from "@lib/utils";
import { Blog } from "./blog";

interface IOutcome {
	headline: string;
	items: string[];
}


export default function Outcome({ headline, items }: IOutcome) {
	return (
		<Blog.Section>

			<Blog.Heading role="H3">{headline}</Blog.Heading>
			<ul className={styles.outcome}>
				{items.map((item, i) => <li key={item + i} className={styles.item}>
					<div className="relative">
						<Mosaic row={3} column={3} className={styles.mosaic} animation="BLINK" />
						<Text.Body className={catClass([blog_styles.number, styles.number])}>{i + 1}</Text.Body>
					</div>
					<Text.Body>{item}</Text.Body>
				</li>)}
			</ul>

		</Blog.Section>);
}
