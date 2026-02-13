import { Text } from "@components/text/text";
import Logo from "@assets/icons/nek-logo.svg"
import Link from "next/link";
import styles from "./header.module.scss"
import { Button } from "@components/button/button";
import Circle from "@assets/icons/circle.svg"

export default function Header() {

	return (<div className={styles.header}>
		<Link href="./" className={`${styles.signature} flex flex-row gap-(--size-space-medium) items-center`}>
			<Logo />
			<div>
				<Text.Label.Large>Nassim El Khantour</Text.Label.Large>
				<Text.Caption>Taiwan</Text.Caption>
			</div>
		</Link>

		<Button leadingIcon={Circle} trailingIcon={Circle} size="LARGE" role="PRIMARY" style="SOLID">
			Button
		</Button>

		<Button leadingIcon={Circle} trailingIcon={Circle} size="LARGE" role="PRIMARY" style="OUTLINE">
			Button
		</Button>

		<Button leadingIcon={Circle} trailingIcon={Circle} size="LARGE" role="PRIMARY" style="GHOST">
			Button
		</Button>



		<Button leadingIcon={Circle} trailingIcon={Circle} size="MEDIUM" role="PRIMARY" style="SOLID">
			Button
		</Button>

		<Button leadingIcon={Circle} trailingIcon={Circle} size="MEDIUM" role="PRIMARY" style="OUTLINE">
			Button
		</Button>

		<Button leadingIcon={Circle} trailingIcon={Circle} size="MEDIUM" role="PRIMARY" style="GHOST">
			Button
		</Button>


		<Button leadingIcon={Circle} trailingIcon={Circle} size="SMALL" role="PRIMARY" style="SOLID">
			Button
		</Button>

		<Button leadingIcon={Circle} trailingIcon={Circle} size="SMALL" role="PRIMARY" style="OUTLINE">
			Button
		</Button>

		<Button leadingIcon={Circle} trailingIcon={Circle} size="SMALL" role="PRIMARY" style="GHOST">
			Button
		</Button>



	</div>);


};
