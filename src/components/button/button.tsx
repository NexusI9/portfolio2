"use client"
import { IComponentRole, IComponentSize, IComponentStyle, IComponentTheme } from "@/types/component";
import styles from "./button.module.scss"
import { BaseSyntheticEvent } from "react";
import Link from "next/link";
import Label from "../label/label";
import Brackets from "../brackets/brackets";
import clsx from "clsx";
interface IButton {
	leadingIcon?: React.ReactNode;
	trailingIcon?: React.ReactNode;
	size?: IComponentSize;
	role?: IComponentRole;
	style?: IComponentStyle;
	theme?: IComponentTheme;
	children: React.ReactNode;
	type?: "TEXT" | "ICON";
	onClick?: (e: BaseSyntheticEvent) => any;
	href?: string;
	className?: string;
	decoration?: boolean;
	openNewTab?: boolean;
}
export const Button = ({
	leadingIcon,
	trailingIcon,
	size = "LARGE",
	role = "PRIMARY",
	style = "SOLID",
	theme = "LIGHT",
	children,
	className,
	onClick,
	href,
	type = "TEXT",
	decoration = true,
	openNewTab = false
}: IButton) => {
	const Wrapper = href ? Link : "div";
	const isExternal = openNewTab || href?.startsWith("https");
	return (
		<Wrapper className={clsx([className, styles.button])}
			data-size={size}
			data-role={role}
			data-style={style}
			data-theme={theme}
			data-type={type}
			onClick={onClick && onClick}
			role="button"
			href={String(href)}
			{...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
			{...(role === "DISABLED" && { disabled: true })}
		>
			{decoration && style == "GHOST" && <Brackets className={styles.brackets} theme={theme} />}
			<Label size={size} leadingIcon={leadingIcon} trailingIcon={trailingIcon}>{children}</Label>
		</Wrapper >
	);
};
