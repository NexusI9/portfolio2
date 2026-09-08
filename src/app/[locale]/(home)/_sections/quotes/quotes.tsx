"use client"
import Container from "@/components/container/container";
import styles from "./quotes.module.scss"
import { TextBase } from "@/components/text/text";
import QuoteCard from "@/components/quote-card/quote-card";
import { useDictionary } from "@/i18n/Context";
import { mapQuoteFromDico } from "./helper";

export default function Quotes() {
	const dico = useDictionary();
	const QUOTES_THUMBNAIL: Array<string> = [
		"/assets/avatars/louhann.png",
		"/assets/avatars/pa.png",
		"/assets/avatars/matteo.png",
		"/assets/avatars/alex.png",
		"/assets/avatars/nader.png"
	];

	const renderQuotes = (keyPrefix: string) =>
		QUOTES_THUMBNAIL.map((thumbnail, i) => (
			<QuoteCard
				key={`${keyPrefix}${i}`}
				{...mapQuoteFromDico(dico.home.quotes[i], thumbnail)}
				className="relative"
			/>
		));

	return (
		<Container id="quotes" className={styles.quotes}>
			<hgroup className="w-fit m-auto relative">
				<TextBase role="H2" style="H2" className="text-left relative">
					{dico.home.headlines.quotes}
				</TextBase>
			</hgroup>
			<div className={styles["quotes-wrapper"]}>
				<div className={styles["quotes-fade-left"]} aria-hidden="true" />
				<div className={styles["quotes-fade-right"]} aria-hidden="true" />
				<div className={styles["quotes-track"]}>
					{renderQuotes("quote-a")}
					{renderQuotes("quote-b")}
				</div>
			</div>
		</Container>
	);
}
