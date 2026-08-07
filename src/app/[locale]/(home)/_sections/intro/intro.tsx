"use client"
import Container from "@components/container/container";
import styles from "./intro.module.scss";
import VideoWrapper from "./_components/video-wrapper";
import { useDictionary } from "@/i18n/Context";
import { TextBase } from "@/app/[locale]/_components/text/text";
import { Button } from "@/app/[locale]/_components/button/button";
import { ArrowDownIcon } from "lucide-react";

export default function Intro() {

	const dico = useDictionary();

	return (<Container className={styles.intro}>

		<div className={styles.left}>
			<TextBase role="H1" style="H3"><b>{dico.home.headlines.uvp}</b></TextBase>
			<div>
				<Button size="LARGE" style="GHOST" role="PRIMARY" trailingIcon={<ArrowDownIcon />}>{dico.home["intro-button"]}</Button>
			</div>

		</div>

		<div className={styles.right}>
			<VideoWrapper />
			<TextBase className="text-(--color-text-subtle-on-light)" role="H2" style="H5">{dico.home.headlines.subtitle}</TextBase>
		</div>

	</Container>);

}
