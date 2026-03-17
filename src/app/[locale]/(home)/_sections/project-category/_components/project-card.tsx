"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "./project-card.module.scss"
import { Text } from "@components/text/text";

interface IProjectCard {
	headline?: string;
	subtitle?: string;
	thumbnail: string;
	alt: string;
	href: string;
}

export default function ProjectCard({ headline, subtitle, thumbnail, alt, href }: IProjectCard) {

	return (
		<Link
			href={href}
			className={styles["project-card"]}
		>
			<Image src={thumbnail} width={550} height={437} alt={alt} className="absolute top-0 left-0 w-full h-full object-cover" />
			<div className={styles["project-card-description"]}>
				<hgroup className="flex flex-col gap-(--size-space-small)">
					<Text.H4>{headline}</Text.H4>
					<Text.Subtitle1>{subtitle}</Text.Subtitle1>
				</hgroup>

				{/*TODO: Make tags in phase 2?*/}
			</div>
		</Link>);
}
