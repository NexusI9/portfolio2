"use client"

import clsx from "clsx";
import { IComponentRole } from "@/types/component";
import { List } from "../list/list";
import Tag from "../tag/tag";
import { Text } from "../text/text";
import styles from "./taglist.module.scss";

type TagListProps = {
	role: IComponentRole;
	items: string[];
	label: string;
	className?: string;
};

export default function TagList({ role, items, label, className }: TagListProps) {
	return (
		<div className={clsx(styles.taglist, className)}>
			<Tag className={styles.tag} role={role}>
				<Text.Overline>{label}</Text.Overline>
			</Tag>

			<List.Root>
				{items.map((item) => (
					<List.Item key={item}>{item}</List.Item>
				))}
			</List.Root>
		</div>
	);
};
