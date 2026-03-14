import { Dictionary } from "@/i18n/Context";
import { IProjectDescriptor, TProjectDesciptorFn } from "../../_types/project";

export const PROJECT_DESCRIPTOR_STYLE_STUDIO: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: "Style Studio",
	description: dico.projects.stylestudio.description,
	pageName: "style-studio",
	alt: "Style Studio plugin snapshot displayed on a macbook mockup.",
	thumbnail: "/assets/thumbnails/style-studio.png",
	roles: [
		dico.projects.common.roles.product_owner,
		dico.projects.common.roles.developer,
		dico.projects.common.roles.ui_ux_designer
	],
	status: "COMPLETE",
	context: [dico.projects.common.context.prod_ready],
	stack: ["TYPESCRIPT", "REACT", "REDUX", "FIGMA", "ADOBE"],
	diagram: "/assets/diagrams/style-studio.svg",
	tableContent: dico.projects.stylestudio,
});

export const PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: "Emotional Mapper",
	description: dico.projects.emma.description,
	pageName: "emotional-mapper",
	alt: "Emotional Mapper software snapshot displayed on a macbook mockup with icons and other UI elements floating out of it.",
	thumbnail: "/assets/thumbnails/emotional-mapper.png",
	roles: [
		dico.projects.common.roles.business_strategist,
		dico.projects.common.roles.developer,
		dico.projects.common.roles.ui_ux_designer
	],
	status: "PROGRESS",
	context: [
		dico.projects.common.context.client_facing,
		dico.projects.common.context.internal_rd
	],
	stack: ["C", "C++", "WEBGPU", "WASM", "FIGMA", "ADOBE"],
	diagram: "/assets/diagrams/emotional-mapper.svg",
	tableContent: dico.projects.emma,
});

export const PROJECT_DESCRIPTOR_AZUSA: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: "Azusa",
	description: dico.projects.azusa.description,
	pageName: "azusa",
	alt: "Video game snapshot with 3D characters in front.",
	thumbnail: "/assets/thumbnails/azusa.png",
	roles: [
		dico.projects.common.roles.developer,
		dico.projects.common.roles.tech_artist,
		dico.projects.common.roles.game_designer,
		dico.projects.common.roles.art_director,
	],
	status: "PROGRESS",
	context: [
		dico.projects.common.context.expe_proto,
		dico.projects.common.context.internal_rd
	],
	stack: ["C", "C#", "UNITY", "ZBRUSH", "BLENDER", "SUBSTANCE_PAINTER", "ADOBE", "FIGMA"],
	diagram: "/assets/diagrams/azusa.svg",
	tableContent: dico.projects.azusa,
});

export const PROJECT_DESCRIPTOR_WEBGPU: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: "WebGPU 3D Engine",
	description: dico.projects.webgpu.description,
	pageName: "webgpu-3d-engine",
	alt: "A macbook mockup with a 3D engine interface displayed on the screen.",
	thumbnail: "/assets/thumbnails/webgpu-engine.png",
	roles: [
		dico.projects.common.roles.developer,
		dico.projects.common.roles.ui_ux_designer,
		dico.projects.common.roles.tech_artist,
	],
	status: "PROGRESS",
	context: [
		dico.projects.common.context.expe_proto,
		dico.projects.common.context.internal_rd
	],
	stack: ["C", "C++", "WEBGPU", "WASM", "BLENDER", "FIGMA", "ADOBE"],
	diagram: "/assets/diagrams/webgpu.svg",
	tableContent: dico.projects.webgpu,
});


export const PROJECT_DESCRIPTOR_ANIMAL: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: "Animal Chamber Apocalypse Beat",
	description: dico.projects.animal.description,
	pageName: "animal-chamber-apocalypse-beat",
	alt: "Video snapshots layed out next to 3D characters standing close to one another.",
	thumbnail: "/assets/thumbnails/animal.png",
	roles: [
		dico.projects.common.roles.art_director,
		dico.projects.common.roles.animator,
		dico.projects.common.roles.compositor
	],
	status: "COMPLETE",
	context: [dico.projects.common.context.prod_ready],
	stack: ["BLENDER", "ZBRUSH", "ADOBE", "SUBSTANCE_PAINTER"],
	diagram: "/assets/diagrams/animal.svg",
	tableContent: dico.projects.animal,
});


export const PROJECT_DESCRIPTOR_LIST: (dico: Dictionary) => IProjectDescriptor[] = (dico: Dictionary) => [
	PROJECT_DESCRIPTOR_STYLE_STUDIO(dico),
	PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER(dico),
	PROJECT_DESCRIPTOR_AZUSA(dico),
	PROJECT_DESCRIPTOR_WEBGPU(dico),
	PROJECT_DESCRIPTOR_ANIMAL(dico),
]
