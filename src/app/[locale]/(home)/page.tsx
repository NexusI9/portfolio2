"use client"

import Intro from "./_sections/intro/intro";
import Quotes from "./_sections/quotes/quotes";
import Projects from "./_sections/projects/projects";
import Experiences from "./_sections/experiences/experiences";

export default function Home() {
	return (
		<>

			<Intro />
			<Projects />
			<Experiences />
			<Quotes />
		</>

	);
}
