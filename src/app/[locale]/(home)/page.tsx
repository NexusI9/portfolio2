"use client"

import NavBar from "@components/navbar/navbar";
import styles from "@components/navbar/navbar.module.scss";
import { PROJECT_CATEGORIES_ANCHORS } from "@lib/constants";
import Intro from "./_sections/intro/intro";
import Quotes from "./_sections/quotes/quotes";
import ProjectCategoryWrapper from "./_sections/project-category/project-category-wrapper";
import { useDictionary } from "@/i18n/Context";

export default function Home() {

	const dico = useDictionary();

	return (
		<>

			<Intro />

			<div className={styles["navbar-wrapper"]}>
				<NavBar options={PROJECT_CATEGORIES_ANCHORS(dico)} />
			</div>

			<ProjectCategoryWrapper />
			<Quotes />

		</>

	);
}
