"use client"

import { PROJECT_CATEGORIES_ANCHORS } from "@lib/constants";
import { ComponentPropsWithoutRef, RefObject, useRef } from "react";
import ProjectCategory from "./project-category";
import ViewCatcher from "@components/view-catcher/view-catcher";
import { useNavigation } from "@/app/[locale]/_context/navigation/navigation";
import { PROJECT_DESCRIPTOR_ANIMAL, PROJECT_DESCRIPTOR_AZUSA, PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER, PROJECT_DESCRIPTOR_STYLE_STUDIO, PROJECT_DESCRIPTOR_WEBGPU } from "@/app/[locale]/project/_lib/descriptors";
import { mapFromDescriptor } from "./helper";
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";

export default function ProjectCategoryWrapper() {

	const divRef = useRef<HTMLDivElement>(null);
	const { setActive } = useNavigation();
	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;

	const PROJECT_SECTIONS: Array<ComponentPropsWithoutRef<typeof ProjectCategory>> = [
		{
			headline: PROJECT_CATEGORIES_ANCHORS(dico)[0].headline,
			id: PROJECT_CATEGORIES_ANCHORS(dico)[0].anchor,
			projects: [
				mapFromDescriptor(PROJECT_DESCRIPTOR_STYLE_STUDIO(dico), locale as string),
				mapFromDescriptor(PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER(dico), locale as string),
			],
		},
		{
			headline: PROJECT_CATEGORIES_ANCHORS(dico)[1].headline,
			id: PROJECT_CATEGORIES_ANCHORS(dico)[1].anchor,
			projects: [
				mapFromDescriptor(PROJECT_DESCRIPTOR_AZUSA(dico), locale as string),
				mapFromDescriptor(PROJECT_DESCRIPTOR_WEBGPU(dico), locale as string),
			]
		},
		{
			headline: PROJECT_CATEGORIES_ANCHORS(dico)[2].headline,
			id: PROJECT_CATEGORIES_ANCHORS(dico)[2].anchor,
			projects: [
				mapFromDescriptor(PROJECT_DESCRIPTOR_ANIMAL(dico), locale as string),
			]
		}
	];


	const onLeave = () => {
		const { pathname, search } = window.location;
		history.replaceState(null, "", `${pathname}${search}`);
		setActive("");
	}

	return (
		<>
			{/* DELETEME <hgroup>
					<Mosaic row={3} column={3} className={styles.mosaic} animation="BLINK" />
				  <Text.Display className={styles.display}>{headline}</Text.Display>
				  </hgroup>*/}
			{PROJECT_SECTIONS.map(project => <ProjectCategory key={project.headline} {...project} />)}
		</>);

}
