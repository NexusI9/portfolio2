import { ComponentPropsWithoutRef } from "react";
import { IProjectDescriptor } from "../_types/project";
import ProjectCard from "../_components/project-card/project-card";
import { projectPath } from "../project/_lib/helper";

/**
	Concat and Sanitize class name
 */
export function catClass(values: Array<String | undefined>) {
	return values.filter(n => n && n.length).join(" ");
}


export function randomInt(mn: number, mx: number) { // min and max included
	return Math.floor(Math.random() * (mx - mn + 1) + mn);
}



export const mapProjectFromDescriptor: (desc: IProjectDescriptor, locale: string) => ComponentPropsWithoutRef<typeof ProjectCard> = (desc, locale) => ({
	headline: desc.name,
	subtitle: desc.description,
	alt: desc.alt,
	href: projectPath(desc.pageName, locale),
	thumbnail: desc.thumbnail,
});
