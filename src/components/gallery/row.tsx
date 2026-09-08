"use client"

import { ReactNode } from "react";
import styles from "./gallery.module.scss";

export default function Row({ children }: { children: ReactNode }) {
	return (<div className={styles.row}>{children}</div>);
}


