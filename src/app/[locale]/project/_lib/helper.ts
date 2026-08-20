import { IProjectDescriptor } from "@/app/[locale]/_types/project";
import { ComponentPropsWithoutRef } from "react";
import Sidebar from "../_components/sidebar/sidebar";
import { PROJECT_DESCRIPTOR_LIST } from "./descriptors";
import { Dictionary } from "@/i18n/Context";
import Banner from "../_components/banner/banner";
import { IBlogVisual } from "../../_components/blog/layout";


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


export const projectPath = (name: string, locale: string) => `/${locale}/project/${name}`;


export const imPath = (projectName: string, image: string) => `/assets/projects/${projectName}/${image}.png`;


export const emptyVisual = { kind: "gallery" as const, rows: [] };

export const statsVisual: (stats: any[][]) => IBlogVisual = (stats: any[][]) => ({ kind: "stats", rows: stats as any });
