"use client";

import common from "../../locales/en/common.json";
import projectCommon from "../../locales/en/projects/common.json";
import home from "../../locales/en/home.json";
import animal from "../../locales/en/projects/animal.json";
import azusa from "../../locales/en/projects/azusa.json";
import usability from "../../locales/en/projects/usability.json";
import pulse from "../../locales/en/projects/pulse.json";
import workflow from "../../locales/en/projects/workflow.json";
import webgpu from "../../locales/en/projects/webgpu.json";

import { createContext, useContext, ReactNode } from "react";

// Type for your dictionary (adjust to your JSON structure)
export type Dictionary = {
	common: typeof common;
	home: typeof home;
	projects: {
		common: typeof projectCommon;
		animal: typeof animal;
		azusa: typeof azusa;
		usability: typeof usability;
		pulse: typeof pulse;
		workflow: typeof workflow;
		webgpu: typeof webgpu;
	};
};

const DictionaryContext = createContext<Dictionary | null>(null);

type Props = {
	children: ReactNode;
	dictionary: Dictionary;
};

export function DictionaryProvider({ children, dictionary }: Props) {
	return (
		<DictionaryContext.Provider value={dictionary}>
			{children}
		</DictionaryContext.Provider>
	);
}

// Custom hook for consuming dictionary
export function useDictionary(): Dictionary {
	const context = useContext(DictionaryContext);
	if (!context) {
		throw new Error("useDictionary must be used within a DictionaryProvider");
	}
	return context;
}
