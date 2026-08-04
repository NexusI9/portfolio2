"use client"

import { useState } from "react";
import Logo from "@assets/icons/solid/nek-logo.svg";
import LocaleSelector from "./locale-selector";
import styles from "./header.module.scss";
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";
import { Button } from "../button/button";
import Link from "next/link";
import { PROJECT_CATEGORIES_ANCHORS } from "../../_lib/constants";
import { Text } from "../text/text";
import { CONTACT_INFO } from "./constants";

import CaseIcon from "@assets/icons/solid/briefcase.svg"

export default function MobileHeader() {

	const [open, setOpen] = useState(false)
	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;

	function toggleMenu() {
		setOpen(!open)
	}

	return (
		<header className={styles["mobile-menu"]} data-open={open}>

			<div className={styles["mobile-menu-bar"]}>

				<Link href={`/${locale}`}>
					<Logo className={styles["mobile-menu-logo"]} />
				</Link>

				<div className={styles["mobile-menu-actions"]}>

					{open && <LocaleSelector />}

					<button className={styles["mobile-menu-bars"]} onClick={toggleMenu} aria-label="menu">
						<div className={styles["mobile-menu-bars-default"]}>
							<span></span>
							<span></span>
						</div>
						<div className={styles["mobile-menu-bars-close"]}>
							<span></span>
							<span></span>
						</div>
					</button>

				</div>

			</div>


			<nav className={styles["mobile-menu-panel"]}>

				<div className={styles["mobile-menu-section"]}>
					<Text.Overline className={styles["mobile-menu-overline"]}>{dico.common.header.mobile["project-categories"]}</Text.Overline>
					{PROJECT_CATEGORIES_ANCHORS(dico).map(({ label, anchor }) =>
						<Button
							key={`anchor${label}${anchor}`}
							size="LARGE"
							role="PRIMARY"
							style="GHOST"
							href={`/${locale}#${anchor}`}
							onClick={() => setOpen(false)}>
							{label}
						</Button>)}

				</div>
				<hr />
				<div className={styles["mobile-menu-section"]}>
					<Text.Overline className={styles["mobile-menu-overline"]}>{dico.common.header.mobile.resources}</Text.Overline>
					<Button size="LARGE" role="PRIMARY" style="GHOST" leadingIcon={<CaseIcon />}>
						{dico.common.header.resume}
					</Button>

					{CONTACT_INFO(dico).map(({ icon: Icon, link, label }) =>
						<Button key={label} size="MEDIUM" role="PRIMARY" style="GHOST" href={link} leadingIcon={<Icon />}>
							{label}
						</Button>)}
				</div>

			</nav>

		</header>
	)
}
