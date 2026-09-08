"use client"

import { IComponentSize } from "@/types/component";
import styles from "./label.module.scss"
import { Text } from "../text/text";
import clsx from "clsx";

interface ILabel {
	className?: string;
	size: IComponentSize;
	leadingIcon?: React.ReactNode;
	trailingIcon?: React.ReactNode;
	children?: React.ReactNode;
}

export default function Label({
	className,
	size,
	leadingIcon: LeadingIcon,
	trailingIcon: TrailingIcon,
	children
}: ILabel) {

	const TextWrapper = size == "MEDIUM" ? Text.LabelMedium : size == "SMALL" ? Text.LabelSmall : Text.LabelLarge;

	return (<div className={clsx(styles.label, className)} data-size={size}>
		{LeadingIcon}
		{children && <TextWrapper>{children}</TextWrapper>}
		{TrailingIcon}
	</div>);

};
