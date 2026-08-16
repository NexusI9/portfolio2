import { Dictionary } from "@/i18n/Context";
import { IProjectDescriptor, TProjectDesciptorFn } from "../../_types/project";

export const PROJECT_DESCRIPTOR_STYLE_STUDIO: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: dico.projects.workflow.name,
	description: dico.projects.workflow.description,
	timeline: dico.projects.workflow.timeline,
	pageName: "workflow-acceleration-toolkit",
	alt: "Style Studio plugin snapshot displayed on a macbook mockup.",
	thumbnail: { ratio: "DEFAULT", src: "/assets/thumbnails/workflow.png" },
	preview: "/assets/thumbnails/workflow.png",
	banner: {
		src: "/assets/banners/workflow.png",
		alt: "Style Studio plugin snapshot displayed on a macbook mockup.",
		color: { start: "#FFFFFF00", end: "#7ABEDC" },
	},
	roles: [
		dico.projects.common.roles.product_owner,
		dico.projects.common.roles.developer,
		dico.projects.common.roles.ui_ux_designer
	],
	team: [
		dico.projects.common.team.design,
		dico.projects.common.team.engineer,
		dico.projects.common.team.consultant,
	],
	stack: ["TYPESCRIPT", "REACT", "FIGMA", "ADOBE"],
	diagram: "/assets/diagrams/style-studio.svg",
	tableContent: dico.projects.workflow,
});

export const PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: dico.projects.pulse.name,
	description: dico.projects.pulse.description,
	timeline: dico.projects.pulse.timeline,
	pageName: "hr-engagement-platform",
	alt: "A software snapshot displayed on a monitor with 2 iphones mockup next to it.",
	thumbnail: { ratio: "DEFAULT", src: "/assets/thumbnails/pulse.png" },
	preview: "/assets/thumbnails/pulse.png",
	banner: {
		src: "/assets/banners/pulse.png",
		alt: "A software snapshot displayed on a monitor with 2 iphones mockup next to it.",
		color: { start: "#FFFFFF00", end: "#E5B4EE" },
	},
	roles: [
		dico.projects.common.roles.business_strategist,
		dico.projects.common.roles.developer,
		dico.projects.common.roles.ui_ux_designer
	],
	team: [
		dico.projects.common.team.design,
		dico.projects.common.team.consultant,
		dico.projects.common.team.analyst,
		dico.projects.common.team.executive,
	],
	stack: ["C", "C++", "WEBGPU", "FIGMA"],
	diagram: "/assets/diagrams/pulse.svg",
	tableContent: dico.projects.pulse,
});

export const PROJECT_DESCRIPTOR_AZUSA: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: dico.projects.azusa.name,
	description: dico.projects.azusa.description,
	timeline: dico.projects.azusa.timeline,
	pageName: "azusa",
	alt: "Video game snapshot with 3D characters in front.",
	thumbnail: { ratio: "DEFAULT", src: "/assets/thumbnails/azusa.png" },
	preview: "/assets/thumbnails/azusa.png",
	banner: {
		src: "/assets/banners/azusa.png",
		alt: "Video game snapshot with 3D characters in front.",
		color: { start: "#FFFFFF00", end: "#D493D7" },
	},
	roles: [
		dico.projects.common.roles.developer,
		dico.projects.common.roles.tech_artist,
		dico.projects.common.roles.game_designer,
		dico.projects.common.roles.art_director,
	],
	stack: ["C", "C#", "UNITY", "ZBRUSH", "BLENDER", "SUBSTANCE_PAINTER", "ADOBE", "FIGMA"],
	diagram: "/assets/diagrams/azusa.svg",
	tableContent: dico.projects.azusa,
});

export const PROJECT_DESCRIPTOR_USABILITY: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: dico.projects.usability.name,
	description: dico.projects.usability.description,
	timeline: dico.projects.usability.timeline,
	pageName: "data-driven-ux-improvement",
	alt: "Video game snapshot with 3D characters in front.",
	thumbnail: { ratio: "DEFAULT", src: "/assets/thumbnails/usability.png" },
	preview: "/assets/thumbnails/usability.png",
	banner: {
		src: "/assets/banners/usability.png",
		alt: "Video game snapshot with 3D characters in front.",
		color: { start: "#FFFFFF00", end: "#39A59F" },
	},
	roles: [
		dico.projects.common.roles.ui_ux_designer,
		dico.projects.common.roles.developer,
	],
	stack: ["GA4", "VISUAL_BASIC", "FIGMA"],
	team: [
		dico.projects.common.team.design,
		dico.projects.common.team.analyst,
		dico.projects.common.team.pm,
		dico.projects.common.team.executive,
	],
	diagram: "/assets/diagrams/azusa.svg",
	tableContent: dico.projects.usability,
});


export const PROJECT_DESCRIPTOR_WEBGPU: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: dico.projects.webgpu.name,
	description: dico.projects.webgpu.description,
	timeline: dico.projects.webgpu.timeline,
	pageName: "3d-production-pipeline",
	alt: "A macbook mockup with a 3D engine interface displayed on the screen.",
	thumbnail: { ratio: "DEFAULT", src: "/assets/thumbnails/webgpu.png" },
	preview: "/assets/thumbnails/webgpu.png",
	banner: {
		src: "/assets/banners/webgpu.png",
		alt: "A macbook mockup with a 3D engine interface displayed on the screen.",
		color: { start: "#FFFFFF00", end: "#73C8C7" },
	},
	roles: [
		dico.projects.common.roles.threed_designer,
		dico.projects.common.roles.developer,
	],
	stack: ["C", "C++", "WEBGPU", "WASM", "BLENDER"],
	team: [
		dico.projects.common.team.design,
		dico.projects.common.team.engineer,
		dico.projects.common.team.executive,
	],
	diagram: "/assets/diagrams/webgpu.svg",
	tableContent: dico.projects.webgpu,
});


export const PROJECT_DESCRIPTOR_ANIMAL: TProjectDesciptorFn = (dico: Dictionary) => ({
	name: dico.projects.animal.name,
	description: dico.projects.animal.description,
	timeline: dico.projects.animal.timeline,
	pageName: "animal-chamber-apocalypse-beat",
	alt: "Video snapshots layed out next to 3D characters standing close to one another.",
	thumbnail: {
		ratio: "WIDE",
		src: "/assets/thumbnails/animal.png",
		small: "/assets/thumbnails/animal-sm.png",
	},
	preview: "/assets/thumbnails/animal-sm.png",
	banner: {
		src: "/assets/banners/animal.png",
		alt: "Video snapshots layed out next to 3D characters standing close to one another.",
		color: { start: "#FFFFFF00", end: "#EEB4CE" },
	},
	roles: [
		dico.projects.common.roles.art_director,
		dico.projects.common.roles.animator,
		dico.projects.common.roles.compositor
	],
	team: [
		dico.projects.common.team.design,
		dico.projects.common.team.producer,
	],
	stack: ["BLENDER", "PYTHON", "ZBRUSH", "ADOBE", "SUBSTANCE_PAINTER"],
	diagram: "/assets/diagrams/animal.svg",
	tableContent: dico.projects.animal,
});


export const PROJECT_DESCRIPTOR_LIST: (dico: Dictionary) => IProjectDescriptor[] = (dico: Dictionary) => [
	PROJECT_DESCRIPTOR_STYLE_STUDIO(dico),
	PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER(dico),
	PROJECT_DESCRIPTOR_USABILITY(dico),
	PROJECT_DESCRIPTOR_WEBGPU(dico),
	//PROJECT_DESCRIPTOR_ANIMAL(dico),
]
