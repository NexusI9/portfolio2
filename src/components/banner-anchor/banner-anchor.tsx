"use client"

import Link from "next/link";
import { Text } from "@components/text/text";
import styles from "./banner-anchor.module.scss"
import Mosaic from "../mosaic/mosaic";

interface IBannerAnchor {
	label: string;
	anchor: string;
}



export default function BannerAnchor({ label, anchor }: IBannerAnchor) {

	return (
		<Link href={anchor} className={`${styles["banner-anchor"]} relative flex flex-row items-center`}>
			<Mosaic row={3} column={2} className={styles["banner-anchor-mosaic"]} />
			<Text.H3>{label}</Text.H3>
		</Link>);
}
