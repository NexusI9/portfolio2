"use client"

import styles from "../header.module.scss"
import { Button } from "@components/button/button";
import LocaleSelector from "../locale-selector";
import { useDictionary } from "@/i18n/Context";
import { CONTACT_INFO } from "../constants";
import { Signature } from "../_components/signature";



export default function DesktopHeader() {

	const dico = useDictionary();

	return (<header className={styles.header} role="menubar">
		<div className={styles["header-inner"]}>
			<Signature />
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
		</div>

	</header>);

}
