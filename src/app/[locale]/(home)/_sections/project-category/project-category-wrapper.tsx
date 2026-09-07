"use client"

import { PROJECT_CATEGORIES_ANCHORS } from "@lib/constants";
import { ComponentPropsWithoutRef } from "react";
import ProjectCategory from "./project-category";
import { PROJECT_DESCRIPTOR_ANIMAL, PROJECT_DESCRIPTOR_AZUSA, PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER, PROJECT_DESCRIPTOR_STYLE_STUDIO, PROJECT_DESCRIPTOR_USABILITY, PROJECT_DESCRIPTOR_WEBGPU } from "@/app/[locale]/project/_lib/descriptors";
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";
import { Text, TextBase } from "@/app/[locale]/_components/text/text";
import { mapProjectFromDescriptor } from "@/app/[locale]/_lib/utils";
import Container from "@/app/[locale]/_components/container/container";

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
		<Container>
	  <TextBase role="H2" style="H2" id="work" className="text-center relative mb-(--size-space-extra-large-3) pt-(--size-space-extra-large-6)">
				{dico.home.headlines.work}
			</TextBase>
			{PROJECT_SECTIONS.map(project => <ProjectCategory key={project.id} {...project} />)}
		</Container>);

}
