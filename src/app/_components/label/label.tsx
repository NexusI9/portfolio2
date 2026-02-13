import { IComponentSize } from "@/app/_types/component";
import styles from "./label.module.scss"
import { createElement } from "react";
import { Text } from "../text/text";
import { catClass } from "@lib/utils";

interface ILabel {
	className?: string;
	size: IComponentSize;
	leadingIcon?: string;
	trailingIcon?: string;
	children?: React.ReactNode;
}

export default function Label({ className, size, leadingIcon, trailingIcon, children }: ILabel) {

	const TextWrapper = size == "MEDIUM" ? Text.Label.Medium : size == "SMALL" ? Text.Label.Small : Text.Label.Large;

	return (<div className={catClass([styles.label, className])} data-size={size}>
		{leadingIcon && createElement(leadingIcon)}
		{children && <TextWrapper>children</TextWrapper>}
		{trailingIcon && createElement(trailingIcon)}
	</div>);

};
