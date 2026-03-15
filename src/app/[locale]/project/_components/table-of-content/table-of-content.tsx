"use client"

import { slugify } from "@components/blog/helper";
import { extractHeadlines } from "./helper";
import styles from "./table-of-content.module.scss";


interface TocProps {
	data: any;
	maxLevel?: number;
}


function TocList({ nodes, maxLevel }: { nodes: any[]; maxLevel?: number }) {
	return (
		<ul className="pl-(--size-space-extra-large-2)">
			{nodes.map((node, i) => {
				if (maxLevel && node.level > maxLevel) return null;

				const id = slugify(node.headline);

				return (
					<li key={i} className={styles.item}>
						<a href={`#${id}`}>{node.headline}</a>

						{node.children?.length > 0 && (
							<TocList nodes={node.children} maxLevel={maxLevel} />
						)}
					</li>
				);
			})}
		</ul>
	);
}

export default function TableOfContents({ data, maxLevel = 2 }: TocProps) {
	const tree = extractHeadlines(data);
	return <TocList nodes={tree} maxLevel={maxLevel} />;
}
