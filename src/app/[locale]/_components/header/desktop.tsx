"use client"

import { Text } from "@components/text/text";
import Logo from "@assets/icons/solid/nek-logo.svg"
import Link from "next/link";
import styles from "./header.module.scss"
import { Button } from "@components/button/button";
import LocaleSelector from "./locale-selector";
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";

import GithubIcon from "@assets/icons/solid/github.svg"
import LinkedinIcon from "@assets/icons/solid/linkedin.svg"
import EmailIcon from "@assets/icons/solid/envelope.svg"


export default function DesktopHeader() {

	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;

	return (<header className={`${styles.header} flex flex-row justify-between items-center`} role="menubar">
		<Link href={`/${locale}`} className={`${styles.signature} flex flex-row gap-(--size-space-medium)  [:lang(zh-TW)_&]:gap-(--size-space-large) items-center`}>
			<Logo />
			<div className="flex flex-col [:lang(en)_&]:gap-(--size-space-small)">
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

				<Button size="MEDIUM" role="PRIMARY" style="GHOST" href="https://github.com/elkhantour">
					<GithubIcon />
				</Button>
				<Button size="MEDIUM" role="PRIMARY" style="GHOST" href="https://www.linkedin.com/in/elkhantour/">
					<LinkedinIcon />
				</Button>
				<Button size="MEDIUM" role="PRIMARY" style="GHOST" href="mailto:nassim.elkhantour@gmail.com">
					<EmailIcon />
				</Button>
				<LocaleSelector />
			</div>
		</div>


	</header>);

}
