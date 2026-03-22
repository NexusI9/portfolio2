"use client"

import Image, { getImageProps } from "next/image";
import Link from "next/link";
import styles from "./project-card.module.scss"
import { Text } from "@components/text/text";
import { IThumbnail } from "@/app/[locale]/_types/project";
import { TABLET_WIDTH, THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH, THUMBNAIL_WIDTH_WIDE } from "@/app/[locale]/_lib/constants";

interface IProjectCard {
	headline?: string;
	subtitle?: string;
	thumbnail: IThumbnail;
	alt: string;
	href: string;
}

export default function ProjectCard({ headline, subtitle, thumbnail, alt, href }: IProjectCard) {

	const width = thumbnail.ratio
		== "DEFAULT" ? THUMBNAIL_WIDTH : THUMBNAIL_WIDTH_WIDE;

	let Picture = <Image src={thumbnail.src} width={width} height={THUMBNAIL_HEIGHT} alt={alt} />;


	if (thumbnail.small) {
		const common = { alt, sizes: '100vw' }
		const {
			props: { srcSet: desktop },
		} = getImageProps({
			...common,
			width: THUMBNAIL_WIDTH_WIDE,
			height: THUMBNAIL_HEIGHT,
			quality: 80,
			src: thumbnail.src,
		});

		const {
			props: { srcSet: mobile, ...rest },
		} = getImageProps({
			...common,
			width: THUMBNAIL_WIDTH,
			height: THUMBNAIL_HEIGHT,
			quality: 70,
			src: thumbnail.small,
		});

		Picture =
			<picture>
				<source media={`(min-width: ${TABLET_WIDTH}px)`} srcSet={desktop} />
				<source media={`(max-width: ${TABLET_WIDTH - 1}px)`} srcSet={mobile} />
				<img {...rest} style={{ width: '100%', height: '100%', objectFit: "cover" }} />
			</picture>
	}

	return (
		<Link
			href={href}
			className={styles["project-card"]}
		>

			{Picture}
			<div className={styles["project-card-description"]}>
				<hgroup className="flex flex-col gap-(--size-space-small)">
					<Text.H4>{headline}</Text.H4>
					<Text.Subtitle1>{subtitle}</Text.Subtitle1>
				</hgroup>

				{/*TODO: Make tags in phase 2?*/}
			</div>
		</Link>);
}
