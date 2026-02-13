"use client"

import { Fragment, useState } from "react";
import styles from "./navbar.module.scss"
import { Text } from "@components/text/text";
import CornerFrame from "./_components/corner-frame";

interface IOption {
	label: string;
	anchor: string;
}

interface INavBar {
	options: Array<IOption>;
}

export default function NavBar({ options }: INavBar) {

	const [active, setActive] = useState<string>(window.location.hash.slice(1));

	return (<nav className={styles.navbar}>
		{
			options.map(({ label, anchor }: IOption) =>
				<a
					key={`navbar${label}`}
					href={`#${anchor}`}
					onClick={() => setActive(anchor)}
					className={active === anchor ? styles.active : undefined}
				>
					<CornerFrame className={styles["corner-frame"]} />
					<Text.Label.Large>{label}</Text.Label.Large>
				</a>
			)
		}
	</nav>);


}
