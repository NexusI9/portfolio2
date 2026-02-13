import { IComponentRole, IComponentSize, IComponentStyle } from "@/app/_types/component";
import styles from "./button.module.scss"
import { BaseSyntheticEvent } from "react";
import Link from "next/link";
import Label from "../label/label";
import { catClass } from "@lib/utils"

interface IButton {
	leadingIcon?: string;
	trailingIcon?: string;
	size: IComponentSize;
	role: IComponentRole;
	style: IComponentStyle;
	children: React.ReactNode;
	onClick?: (e: BaseSyntheticEvent) => any;
	href?: string;
	className?: string;
}

export const Button = ({ leadingIcon, trailingIcon, size, role, style, children, className, onClick, href }: IButton) => {

	const Wrapper = href ? Link : "div";

	return (
		<Wrapper className={catClass([styles.button, className])}
			data-size={size}
			data-role={role}
			data-style={style}
			onClick={onClick && onClick}
			href={String(href)}
		>
			<Label size={size} leadingIcon={leadingIcon} trailingIcon={trailingIcon}>{children}</Label>
		</Wrapper >
	);

};


