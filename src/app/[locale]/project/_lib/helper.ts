import { IProjectDescriptor } from "@/app/[locale]/_types/project";
import { ComponentPropsWithoutRef } from "react";
import Sidebar from "../_components/sidebar/sidebar";
import { PROJECT_DESCRIPTOR_LIST } from "./descriptors";
import { Dictionary } from "@/i18n/Context";
import Banner from "../_components/banner/banner";


export const mapFromDescriptor: (desc: IProjectDescriptor, dico: Dictionary) =>
	{
		banner: ComponentPropsWithoutRef<typeof Banner>,
		sidebar: ComponentPropsWithoutRef<typeof Sidebar>
	} = (desc, dico) => ({
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
			projects: PROJECT_DESCRIPTOR_LIST(dico),
			activeProject: desc.name,
		}
	});


export const projectPath = (name: string, locale: string) => `/${locale}/project/${name}`;


export const imPath = (projectName: string, image: string) => `/assets/projects/${projectName}/${image}.png`;
