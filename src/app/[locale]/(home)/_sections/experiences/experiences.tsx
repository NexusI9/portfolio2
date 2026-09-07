import Container from "@/app/[locale]/_components/container/container";
import { TextBase } from "@/app/[locale]/_components/text/text";
import { useDictionary } from "@/i18n/Context";
import ExperienceItem, { Experience } from "./experience-item";

export default function Experiences() {

	const dico = useDictionary();

	const experiences: Experience[] = dico.home.experiences;

	return (
		<Container className="py-(--size-space-extra-large-7)">
			<div className="mx-auto flex flex-col gap-(--size-space-large) md:flex-row md:gap-(--size-space-extra-large-7)">
				{/* Left: headline */}
				<div className="md:w-1/3 md:shrink-0">
					<div className="md:sticky md:top-24">
						<TextBase role="H2" style="H2">
							Past Experiences
						</TextBase>
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
