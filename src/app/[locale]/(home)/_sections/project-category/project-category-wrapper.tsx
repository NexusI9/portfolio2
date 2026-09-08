"use client"

import { PROJECT_CATEGORIES_ANCHORS } from "@/lib/constants";
import { ComponentPropsWithoutRef } from "react";
import ProjectCategory from "./project-category";
import {
	PROJECT_DESCRIPTOR_ANIMAL,
	PROJECT_DESCRIPTOR_AZUSA,
	PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER,
	PROJECT_DESCRIPTOR_STYLE_STUDIO,
	PROJECT_DESCRIPTOR_USABILITY,
	PROJECT_DESCRIPTOR_WEBGPU
} from "@/lib/project-descriptors";
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";
import { TextBase } from "@/components/text/text";
import { mapProjectFromDescriptor } from "@/lib/utils";
import Container from "@/components/container/container";

export default function ProjectCategoryWrapper() {

	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;

	const PROJECT_SECTIONS: Array<ComponentPropsWithoutRef<typeof ProjectCategory>> = [
		{
			id: PROJECT_CATEGORIES_ANCHORS(dico)[0].anchor,
			projects: [
				mapProjectFromDescriptor(PROJECT_DESCRIPTOR_STYLE_STUDIO(dico), locale as string),
				mapProjectFromDescriptor(PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER(dico), locale as string),
			],
		},
		{
			id: PROJECT_CATEGORIES_ANCHORS(dico)[1].anchor,
			projects: [
				mapProjectFromDescriptor(PROJECT_DESCRIPTOR_USABILITY(dico), locale as string),
				mapProjectFromDescriptor(PROJECT_DESCRIPTOR_WEBGPU(dico), locale as string),
			]
		},
		/*{
			id: PROJECT_CATEGORIES_ANCHORS(dico)[2].anchor,
			projects: [
				mapProjectFromDescriptor(PROJECT_DESCRIPTOR_ANIMAL(dico), locale as string),
			]
		}*/
	];

	return (
		<Container className="pb-(--size-space-extra-large-5)">
			<TextBase role="H2" style="H2" id="work" className="text-center relative mb-(--size-space-extra-large-3) pt-(--size-space-extra-large-6)">
				{dico.home.headlines.work}
			</TextBase>
			{PROJECT_SECTIONS.map(project => <ProjectCategory key={project.id} {...project} />)}
		</Container>);

}
