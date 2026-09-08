"use client"

import { Text } from "@/components/text/text";
import styles from "./list.module.scss";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface IList extends Omit<ComponentPropsWithoutRef<"div">, "style"> {
	heading: string;
	leadingIcon?: React.ReactNode;
	items: string[];
	style: "SUCCESS" | "DANGER";
};

export default function List({ heading, leadingIcon, items, style, className }: IList) {

	return (
		<div data-style={style} className={clsx(styles.list, className)}>
			<Text.Subtitle2 className="flex flex-row gap-(--size-space-small) items-center">{leadingIcon}{heading}</Text.Subtitle2>
			<ul className="flex flex-col gap-(--size-space-small)">
				{items.map((item, i) =>
					<li key={item + i}>
						<Text.Body>{item}</Text.Body>
					</li>)}
			</ul>
		</div>);
}
