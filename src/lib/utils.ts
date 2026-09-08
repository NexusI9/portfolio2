import { ComponentPropsWithoutRef } from "react";
import { IProjectDescriptor } from "@/types/project";
import ProjectCard from "@/components/project-card/project-card";
import Sidebar from "@/components/project/sidebar/sidebar";
import { PROJECT_DESCRIPTOR_LIST } from "@/lib/project-descriptors";
import { Dictionary } from "@/i18n/Context";
import Banner from "@/components/project/banner/banner";
import { IBlogVisual } from "@/components/blog/layout";


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


export const projectPath = (name: string, locale: string) => `/${locale}/project/${name}`;

export const imPath = (projectName: string, image: string) => `/assets/projects/${projectName}/${image}.png`;


export const mapFromDescriptor: (desc: IProjectDescriptor, dico: Dictionary) =>
	{
		banner: ComponentPropsWithoutRef<typeof Banner>,
		sidebar: ComponentPropsWithoutRef<typeof Sidebar>
	} = (desc, dico) => ({
		banner: {
			...desc,
			overline: dico.projects.common.case_study,
			headline: desc.name,
			subtitle: desc.description,
			visual: desc.banner,
		},
		sidebar: {
			content: desc.tableContent,
			projects: PROJECT_DESCRIPTOR_LIST(dico),
			activeProject: desc.name,
		}
	});


export const emptyVisual = { kind: "gallery" as const, rows: [] };

export const statsVisual: (stats: any[][]) => IBlogVisual = (stats: any[][]) => ({ kind: "stats", rows: stats as any });
