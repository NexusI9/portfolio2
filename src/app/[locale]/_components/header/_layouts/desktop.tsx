"use client"

import styles from "../header.module.scss"
import { Button } from "@components/button/button";
import LocaleSelector from "../locale-selector";
import { useDictionary } from "@/i18n/Context";
import { CONTACT_INFO } from "../constants";
import { Signature } from "../_components/signature";
import { useScrolled } from "../_hooks/use-scrolled";
import { useIsProjectPage } from "../_hooks/use-is-project-page";
import { IComponentTheme } from "@/app/[locale]/_types/component";

export default function DesktopHeader() {

	const dico = useDictionary();
	const scrolled = useScrolled(24);
	const isProjectPage = useIsProjectPage();
	const theme: IComponentTheme = isProjectPage && !scrolled ? "DARK" : "LIGHT";

	return (<header className={styles.header} role="menubar" data-scrolled={scrolled} data-theme={theme}>
		<div className={styles["header-inner"]}>
			<Signature theme={theme} />
			<div className="flex flex-row gap-(--size-space-extra-large-2) items-center">
				<Button size="MEDIUM" role="PRIMARY" style="GHOST" theme={theme}>
					<b>{dico.common.header.resume}</b>
				</Button>
				<div className="flex flex-row gap-(--size-space-extra-large) items-center">
					{CONTACT_INFO(dico).map(({ icon: Icon, link, label }) =>
						<Button key={label} size="MEDIUM" role="PRIMARY" style="GHOST" theme={theme} href={link}>
							<Icon />
						</Button>)}
					<LocaleSelector />
				</div>
			</div>
		</div>

	</header>);

}
