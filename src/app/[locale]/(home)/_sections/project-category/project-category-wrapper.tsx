"use client"

import { PROJECT_CATEGORIES_ANCHORS } from "@lib/constants";
import { ComponentPropsWithoutRef, useRef } from "react";
import ProjectCategory from "./project-category";
import { useNavigation } from "@/app/[locale]/_context/navigation/navigation";
import { PROJECT_DESCRIPTOR_ANIMAL, PROJECT_DESCRIPTOR_AZUSA, PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER, PROJECT_DESCRIPTOR_STYLE_STUDIO, PROJECT_DESCRIPTOR_WEBGPU } from "@/app/[locale]/project/_lib/descriptors";
import { mapFromDescriptor } from "./helper";
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";
import { Text } from "@/app/[locale]/_components/text/text";

export default function ProjectCategoryWrapper() {

	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;

	const PROJECT_SECTIONS: Array<ComponentPropsWithoutRef<typeof ProjectCategory>> = [
		{
			id: PROJECT_CATEGORIES_ANCHORS(dico)[0].anchor,
			projects: [
				mapFromDescriptor(PROJECT_DESCRIPTOR_STYLE_STUDIO(dico), locale as string),
				mapFromDescriptor(PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER(dico), locale as string),
			],
		},
		{
			id: PROJECT_CATEGORIES_ANCHORS(dico)[1].anchor,
			projects: [
				mapFromDescriptor(PROJECT_DESCRIPTOR_AZUSA(dico), locale as string),
				mapFromDescriptor(PROJECT_DESCRIPTOR_WEBGPU(dico), locale as string),
			]
		},
		{
			id: PROJECT_CATEGORIES_ANCHORS(dico)[2].anchor,
			projects: [
				mapFromDescriptor(PROJECT_DESCRIPTOR_ANIMAL(dico), locale as string),
			]
		}
	];

	return (
		<>
	  <Text.Display id="work" className="text-center relative mb-(--size-space-extra-large-4) pt-(--size-space-extra-large-7)">
				{dico.home.headlines.work}
			</Text.Display>
			{PROJECT_SECTIONS.map(project => <ProjectCategory key={project.id} {...project} />)}
		</>);

}
