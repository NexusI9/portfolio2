"use client"
import { useState } from "react";
import LocaleSelector from "../locale-selector";
import styles from "../header.module.scss";
import { useDictionary } from "@/i18n/Context";
import { Button } from "@/components/button/button";
import { Text } from "@/components/text/text";
import { CONTACT_INFO } from "../constants";

import CaseIcon from "@/assets/icons/solid/briefcase.svg"
import { Signature } from "../_components/signature";
import { useScrolled } from "../_hooks/use-scrolled";
import { useIsProjectPage } from "../_hooks/use-is-project-page";
import { IComponentTheme } from "@/types/component";

export default function MobileHeader() {

	const [open, setOpen] = useState(false)
	const dico = useDictionary();
	const scrolled = useScrolled(24);
	const isProjectPage = useIsProjectPage();
	const theme: IComponentTheme = isProjectPage && !scrolled && !open ? "DARK" : "LIGHT";

	function toggleMenu() {
		setOpen(!open)
	}

	return (
		<header className={styles["mobile-menu"]} data-open={open} data-scrolled={scrolled} data-theme={theme}>

			<div className={styles["mobile-menu-bar"]}>

				<Signature theme={theme} />

				<div className={styles["mobile-menu-actions"]}>

					<div className={styles["mobile-menu-locale-selector"]}>
						<LocaleSelector />
					</div>

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
					<Button
						size="LARGE"
						role="PRIMARY"
						style="GHOST"
						leadingIcon={<CaseIcon />}
						href={dico.common.header["resume-url"]}
						openNewTab
					>
						{dico.common.header.resume}
					</Button>

					{CONTACT_INFO(dico).map(({ icon: Icon, link, label }) =>
						<Button key={label} size="LARGE" role="PRIMARY" style="GHOST" href={link} leadingIcon={<Icon />}>
							{label}
						</Button>)}
				</div>

			</nav>

		</header>
	)
}
