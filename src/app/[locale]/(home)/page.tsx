"use client"

import Intro from "./_sections/intro/intro";
import Quotes from "./_sections/quotes/quotes";
import ProjectCategoryWrapper from "./_sections/project-category/project-category-wrapper";
import Experiences from "./_sections/experiences/experiences";

export default function Home() {
	return (
		<>

			<Intro />
			<ProjectCategoryWrapper />
			<Experiences />
			<Quotes />
		</>

	);
}
