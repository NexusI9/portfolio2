"use client"

import { IComponentRole, IComponentSize, IComponentStyle } from "@/app/[locale]/_types/component";
import styles from "./button.module.scss"
import { BaseSyntheticEvent } from "react";
import Link from "next/link";
import Label from "../label/label";
import { catClass } from "@lib/utils"
import Brackets from "../brackets/brackets";

interface IButton {
	leadingIcon?: React.ReactNode;
	trailingIcon?: React.ReactNode;
	size: IComponentSize;
	role: IComponentRole;
	style: IComponentStyle;
	children: React.ReactNode;
	type?: "TEXT" | "ICON";
	onClick?: (e: BaseSyntheticEvent) => any;
	href?: string;
	className?: string;
	decoration?: boolean;
}

export const Button = ({ leadingIcon, trailingIcon, size, role, style, children, className, onClick, href, type = "TEXT", decoration = true }: IButton) => {

	const Wrapper = href ? Link : "div";

	return (
		<Wrapper className={catClass([className, styles.button])}
			data-size={size}
			data-role={role}
			data-style={style}
			data-type={type}
			onClick={onClick && onClick}
			role="button"
			href={String(href)}
		>
			{decoration && style == "GHOST" && <Brackets className={styles.brackets} />}
			<Label size={size} leadingIcon={leadingIcon} trailingIcon={trailingIcon}>{children}</Label>
		</Wrapper >
	);

};


