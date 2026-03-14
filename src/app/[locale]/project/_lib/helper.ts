import { IProjectDescriptor } from "@/app/[locale]/_types/project";
import { ComponentPropsWithoutRef } from "react";
import Template from "../_components/template/template";
import Sidebar from "../_components/sidebar/sidebar";
import { PROJECT_DESCRIPTOR_LIST } from "./descriptors";
import { Dictionary } from "@/i18n/Context";
import Banner from "../_components/banner/banner";


const projectList: (name: string, dico: Dictionary, locale: string) => ComponentPropsWithoutRef<typeof Sidebar>["projects"] = (name, dico, locale) => {
	return PROJECT_DESCRIPTOR_LIST(dico).map(project => ({
		label: project.name,
		path: projectPath(project.pageName, locale),
		active: project.name == name,
	}));
}

export const mapFromDescriptor: (desc: IProjectDescriptor, dico: Dictionary, locale: string) =>
	{
		banner: ComponentPropsWithoutRef<typeof Banner>,
		sidebar: ComponentPropsWithoutRef<typeof Sidebar>
	} = (desc, dico, locale) => ({
		banner: {
			overline: dico.projects.common.case_study,
			headline: desc.name,
			subtitle: desc.description,
			roles: desc.roles,
			status: desc.status,
			context: desc.context,
			stack: desc.stack,
			diagram: desc.diagram,
		},
		sidebar: {
			content: desc.tableContent,
			projects: projectList(desc.name, dico, locale),
		}
	});


export const projectPath = (name: string, locale: string) => `/${locale}/project/${name}`;


export const imPath = (projectName: string, image: string) => `/assets/projects/${projectName}/${image}.png`;
