"use client"

import Intro from "./_sections/intro/intro";
import Quotes from "./_sections/quotes/quotes";
import ProjectCategoryWrapper from "./_sections/project-category/project-category-wrapper";

export default function Home() {
	return (
		<>

			<Intro />
			<ProjectCategoryWrapper />
			<Quotes />

		</>

	);
}
