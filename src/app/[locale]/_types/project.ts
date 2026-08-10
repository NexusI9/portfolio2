import { ComponentPropsWithoutRef } from "react";
import Status from "../_components/status/status";
import Sidebar from "../project/_components/sidebar/sidebar";
import Stack from "../project/_components/banner/_components/stack";
import { Dictionary } from "@/i18n/Context";
import { IBannerVisual } from "../project/_components/banner/banner";

export interface IProjectCategoriesAnchors {
	label: string;
	headline: string; // add a headline attribute cause chinese font use a simplified character, but menus use traditional
	anchor: string;
}

export interface IThumbnail {
	ratio: "DEFAULT" | "WIDE";
	src: string;
	small?: string;
}

export interface IProjectDescriptor {
	name: string;
	description: string;
	pageName: string;
	thumbnail: IThumbnail;
	preview: string;
	banner: IBannerVisual;
	alt: string;

	roles?: string[];
	status?: ComponentPropsWithoutRef<typeof Status>["type"];
	team?: string[];
	context?: string[];
	stack?: Array<ComponentPropsWithoutRef<typeof Stack>["type"]>;
	diagram: string;

	tableContent: ComponentPropsWithoutRef<typeof Sidebar>["content"];

}

export type TProjectDesciptorFn = (dico: Dictionary) => IProjectDescriptor;

