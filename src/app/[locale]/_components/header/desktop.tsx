"use client"

import { Text } from "@components/text/text";
import Logo from "@assets/icons/solid/nek-logo.svg"
import Link from "next/link";
import styles from "./header.module.scss"
import { Button } from "@components/button/button";
import LocaleSelector from "./locale-selector";
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";

export default function DesktopHeader() {

	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;

	return (<header className={`${styles.header} flex flex-row justify-between items-center`} role="menubar">
		<Link href={`/${locale}`} className={`${styles.signature} flex flex-row gap-(--size-space-medium) items-center`}>
			<Logo />
			<div>
				<Text.LabelMedium>{dico.common.header.name}</Text.LabelMedium>
				<div className="flex flex-row gap-(--size-space-medium) items-center">
					<Text.Caption>{dico.common.header.subtitle}</Text.Caption>
					<Text.Caption>::</Text.Caption>
					<Text.Caption>{dico.common.header.location}</Text.Caption>
				</div>
			</div>
		</Link>


		<div className="flex flex-row gap-(--size-space-extra-large-3) items-center">
			<div className="flex flex-row gap-(--size-space-extra-large-3) items-center">
				<Button size="MEDIUM" role="PRIMARY" style="GHOST">
					{dico.common.header.resume}
				</Button>
				<Button size="MEDIUM" role="PRIMARY" style="GHOST" href="mailto:nassim.elkhantour@gmail.com">
					{dico.common.header.contact}
				</Button>
			</div>
			<LocaleSelector />
		</div>


	</header>);

}
