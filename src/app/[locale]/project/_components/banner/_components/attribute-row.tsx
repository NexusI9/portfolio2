"use client"

import { Text } from "@components/text/text";
import styles from "./attribute-row.module.scss";

interface IAttributeRow {
	header: string;
	value?: string;
	children?: React.ReactNode;
}

export default function AttributeRow({ header, value, children }: IAttributeRow) {

	return (
		<li className={styles["attribute-row"]}>
	  <Text.Body2 className="uppercase tracking-(--font-letter-spacing-overline) text-(--color-text-on-dark)">{header}</Text.Body2>
			<div className="flex flex-row gap-x-(--size-space-extra-large-3) gap-y-(--size-space-extra-large) flex-wrap">
				{value && <Text.Body>{value}</Text.Body>}
				{children}
			</div>
		</li>)
}
