"use client"

import { Text } from "@components/text/text";
import Image from "next/image";
import styles from "./quote-card.module.scss"
import { ComponentPropsWithoutRef } from "react";
import { catClass } from "@lib/utils";

interface IQuoteCard extends ComponentPropsWithoutRef<"blockquote"> {
	children: React.ReactNode;
	thumbnail: string;
	name: string;
	position: string;
	location: string;
}



export default function QuoteCard({ children, thumbnail, name, position, location, className }: IQuoteCard) {

	return (
		<blockquote className={catClass([className, styles["quote-card"]])}>

			<Text.Body className={styles.body}>{children}</Text.Body>
			<div className="flex flex-col gap-(--size-space-medium)">
				<hr />
				<div className="flex flex-row items-start gap-(--size-space-medium)">
					<Image className="rounded-full" alt="small avatar picture" width={32} height={32} src={thumbnail} />
					<div className="flex flex-col">
						<Text.Body2>{name}</Text.Body2>
						<Text.Caption><strong>{position}</strong></Text.Caption>
						<Text.Caption>{location}</Text.Caption>
					</div>
				</div>
			</div>

		</blockquote>
	);
}
