"use client"

import { Text } from "@components/text/text";
import Logo from "@assets/icons/nek-logo.svg"
import Link from "next/link";
import styles from "./header.module.scss"
import { Button } from "@components/button/button";
import Combobox from "@components/combobox/combobox";

export default function Header() {

	const comboboxOptions = [{ value: "en", label: "EN" }, { value: "zh", label: "ZH" }];

	return (<div className={`${styles.header} flex flex-row justify-between items-center`} role="menubar">
		<Link href="./" className={`${styles.signature} flex flex-row gap-(--size-space-medium) items-center`}>
			<Logo />
			<div>
				<Text.Label.Large>Nassim El Khantour</Text.Label.Large>
				<Text.Caption>Taiwan</Text.Caption>
			</div>
		</Link>


		<div className="flex flex-row gap-(--size-space-extra-large-3) items-center">
			<div className="flex flex-row gap-(--size-space-extra-large-3) items-center">
				<Button size="MEDIUM" role="PRIMARY" style="GHOST">Resume</Button>
				<Button size="MEDIUM" role="PRIMARY" style="GHOST">Contact</Button>
			</div>
			<Combobox options={comboboxOptions} />
		</div>


	</div>);


};
