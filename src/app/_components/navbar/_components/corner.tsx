"use client"
import styles from "./corner.module.scss"

type TCornerSide = "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";

interface ICorner {
	side: TCornerSide;
}

export default function Corner({ side }: ICorner) {
	return (<span className={styles.corner} data-side={side}></span>);
}
