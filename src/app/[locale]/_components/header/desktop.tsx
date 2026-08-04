"use client"

import { Text } from "@components/text/text";
import Logo from "@assets/icons/solid/nek-logo.svg"
import Link from "next/link";
import styles from "./header.module.scss"
import { Button } from "@components/button/button";
import LocaleSelector from "./locale-selector";
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";
import { CONTACT_INFO } from "./constants";


export default function DesktopHeader() {

	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;

	return (<header className={`${styles.header} flex flex-row justify-between items-center`} role="menubar">
		<Link href={`/${locale}`} className={`${styles.signature} flex flex-row gap-(--size-space-medium)  [:lang(zh-TW)_&]:gap-(--size-space-large) items-center`}>
			<Logo />
			<div className="flex flex-col">
				<Text.LabelMedium>{dico.common.header.name}</Text.LabelMedium>
				<div className="flex flex-row gap-(--size-space-small) items-center">
					<Text.Caption>{dico.common.header.subtitle}</Text.Caption>
					<Text.Caption>::</Text.Caption>
					<Text.Caption>{dico.common.header.location}</Text.Caption>
				</div>
			</div>
		</Link>


		<div className="flex flex-row gap-(--size-space-extra-large-3) items-center">
			<Button size="MEDIUM" role="PRIMARY" style="GHOST">
				<b>{dico.common.header.resume}</b>
			</Button>
			<div className="flex flex-row gap-(--size-space-extra-large) items-center">
				{CONTACT_INFO(dico).map(({ icon: Icon, link, label }) =>
					<Button key={label} size="MEDIUM" role="PRIMARY" style="GHOST" href={link}>
						<Icon />
					</Button>)}
				<LocaleSelector />
			</div>
		</div>


	</header>);

}
