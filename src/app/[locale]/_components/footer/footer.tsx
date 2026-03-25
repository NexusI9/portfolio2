"use client"

import Container from "@components/container/container";
import styles from "./footer.module.scss";
import { Text, TextBase } from "../text/text";
import Portrait from "./_components/portrait";
import DecoFrame from "../deco-frame/deco-frame";
import Mosaic from "../mosaic/mosaic";
import Arrow from "@assets/icons/outline/arrow-wide-left.svg";
import CornerFrame from "../corner-frame/corner-frame";
import { useDictionary } from "@/i18n/Context";

export default function Footer() {

	const dico = useDictionary();

	return (<footer className={styles.footer}>

		  <Container className={styles.container}>
			<div className={styles.inner}>

				<div className={styles.contact}>
					<Portrait className={styles.portrait}>
						<span className={styles["portrait-top-deco"]}>
							<DecoFrame size="134px" className="border-(--color-border-brand-subtle)" />
							<Mosaic row={6} column={6} animation="BLINK" className={styles["portrait-mosaic"]} />
						</span>

						<DecoFrame size="167px" className={styles["portrait-bottom-frame"]} />
					</Portrait>

					<hgroup className="flex flex-col gap-(--size-space-extra-large-2)">
					  <TextBase role="H2" style="DISPLAY" className={styles.display}>{dico.common.footer.contact}</TextBase>
						<a href="mailto:nassim.elkhantour@gmail.com" className="flex flex-row gap-(--size-space-large) items-center">
							<Arrow className={styles.arrow} />
							<div className={styles.email}>
								<CornerFrame className={styles["corner-frame"]} />
								<Text.H4>nassim.elkhantour@gmail.com</Text.H4>
							</div>
						</a>
					</hgroup>
				</div>

			  <div className={styles.credits}>
					<Text.Footnote>{dico.common.footer.credits}</Text.Footnote>
					<Text.Footnote>© Nassim El Khantour {new Date().getFullYear()}</Text.Footnote>
				</div>
			</div>

		</Container>


	</footer>);

}
