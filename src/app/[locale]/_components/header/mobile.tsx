"use client"

import { useState } from "react";
import Logo from "@assets/icons/solid/nek-logo.svg";
import LocaleSelector from "./locale-selector";
import styles from "./header.module.scss";

export default function MobileHeader() {

	const [open, setOpen] = useState(false)

	function toggleMenu() {
		setOpen(!open)
	}

	return (
		<header className={styles["mobile-menu"]} data-open={open}>

			<div className={styles["mobile-menu-bar"]}>

				<Logo className={styles["mobile-menu-logo"]} />

				<div className={styles["mobile-menu-actions"]}>

					{open && <LocaleSelector />}

					<button
						className={styles["mobile-menu-toggle"]}
						onClick={toggleMenu}
						aria-label="menu"
					>
						<span />
						<span />
					</button>

				</div>

			</div>


			<nav className={styles["mobile-menu-panel"]}>

				<div className={[styles["mobile-menu-section"], styles["mobile-menu-categories"]].join(" ")}>
					<a href="#">Category 1</a>
					<a href="#">Category 2</a>
					<a href="#">Category 3</a>
				</div>

				<div className={[styles["mobile-menu-section"], styles["mobile-menu-secondary"]].join(" ")}>
					<a href="#">Resume</a>
					<a href="#">Contact</a>
				</div>

			</nav>

		</header>
	)
}
