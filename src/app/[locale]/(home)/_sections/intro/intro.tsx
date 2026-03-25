"use client"

import BannerAnchor from "@components/banner-anchor/banner-anchor";
import { PROJECT_CATEGORIES_ANCHORS } from "@lib/constants";
import Container from "@components/container/container";
import styles from "./intro.module.scss";
import VideoWrapper from "./_components/video-wrapper";
import { useDictionary } from "@/i18n/Context";

export default function Intro() {

	const dico = useDictionary();

	return (<Container className={styles.intro} size="WIDE">
		<div className={styles["category-list"]}>
			{PROJECT_CATEGORIES_ANCHORS(dico).map(({ label, anchor }) =>
				<BannerAnchor key={`anchor${label}${anchor}`} label={label} anchor={`#${anchor}`} />
			)}
		</div>
		<VideoWrapper />
	</Container>);

}
