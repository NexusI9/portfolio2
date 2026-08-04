"use client";

import common from "@locales/en/common.json";
import projectCommon from "@locales/en/projects/common.json";
import home from "@locales/en/home.json";
import animal from "@locales/en/projects/animal.json";
import azusa from "@locales/en/projects/azusa.json";
import pulse from "@locales/en/projects/pulse.json";
import stylestudio from "@locales/en/projects/stylestudio.json";
import webgpu from "@locales/en/projects/webgpu.json";

import { createContext, useContext, ReactNode } from "react";

// Type for your dictionary (adjust to your JSON structure)
export type Dictionary = {
	common: typeof common;
	home: typeof home;
	projects: {
		common: typeof projectCommon;
		animal: typeof animal;
		azusa: typeof azusa;
		pulse: typeof pulse;
		stylestudio: typeof stylestudio;
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
