import Container from "@/app/[locale]/_components/container/container";
import { TextBase } from "@/app/[locale]/_components/text/text";
import { useDictionary } from "@/i18n/Context";
import ExperienceItem, { Experience } from "./experience-item";
import { Button } from "@/app/[locale]/_components/button/button";
import { DownloadIcon } from "lucide-react";

export default function Experiences() {

	const dico = useDictionary();

	const experiences: Experience[] = dico.home.experiences;

	return (
		<Container className="py-(--size-space-extra-large-7)">
			<div className="mx-auto flex flex-col gap-(--size-space-large) md:flex-row md:gap-(--size-space-extra-large-7)">
				{/* Left: headline */}
				<div className="md:w-1/3 md:shrink-0">
					<div className="md:top-24 flex flex-col gap-(--size-space-extra-large-3)">
						<TextBase role="H2" style="H2">
							{dico.home.headlines.experiences}
						</TextBase>
						<Button style="OUTLINE" size="MEDIUM" leadingIcon={<DownloadIcon />}><b>{dico.home["resume-button"]}</b></Button>
					</div>
				</div>

				{/* Right: list */}
				<ul className="flex-1 divide-y divide-(--color-border-subtlest-on-light)">
					{experiences.map((exp, expIndex) => (
						<ExperienceItem key={`${exp.company}-${expIndex}`} experience={exp} />
					))}
				</ul>
			</div>
		</Container>
	);
}
