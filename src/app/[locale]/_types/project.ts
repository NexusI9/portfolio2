import { ComponentPropsWithoutRef } from "react";
import Status from "../_components/status/status";
import Sidebar from "../project/_components/sidebar/sidebar";
import Stack from "../project/_components/banner/_components/stack";
import { Dictionary } from "@/i18n/Context";

export interface IProjectCategoriesAnchors {
	label: string;
	anchor: string;
}

export interface IProjectDescriptor {
	name: string;
	description: string;
	pageName: string;
	thumbnail: string;
	alt: string;

	roles: string[];
	status: ComponentPropsWithoutRef<typeof Status>["type"];
	context: string[];
	stack: Array<ComponentPropsWithoutRef<typeof Stack>["type"]>;
	diagram: string;

	tableContent: ComponentPropsWithoutRef<typeof Sidebar>["content"];

}

export type TProjectDesciptorFn = (dico: Dictionary) => IProjectDescriptor;

