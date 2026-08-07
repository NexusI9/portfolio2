"use client"
import styles from "./corner.module.scss"

type TCornerSide = "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";
type TCornerRole = "BRAND" | "ON LIGHT" | "ON DARK";

interface ICorner {
	side: TCornerSide;
	role?: TCornerRole;
}

export default function Corner({ side, role = "BRAND" }: ICorner) {
	return (<span className={styles.corner} data-side={side} data-role={role}></span>);
}
