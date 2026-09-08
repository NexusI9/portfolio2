"use client";

import styles from "./navbar.module.scss";
import { Text } from "@components/text/text";
import CornerFrame from "../corner-frame/corner-frame";
import { IProjectCategoriesAnchors } from "@/app/[locale]/_types/project";
import { useNavigation } from "@/app/[locale]/_context/navigation/navigation";

interface INavBar {
	options: Array<IProjectCategoriesAnchors>;
}

export default function NavBar({ options }: INavBar) {

	const { active, setActive } = useNavigation();

	return (
		<nav className={styles.navbar}>
			{options.map(({ label, anchor }) => (
				<a
					key={`navbar${label}`}
					href={`#${anchor}`}
					onClick={() => setActive(anchor)}
					className={active === anchor ? styles.active : undefined}
				>
					<CornerFrame className={styles["corner-frame"]} />
					<Text.LabelLarge>{label}</Text.LabelLarge>
				</a>
			))}
		</nav>);
}
