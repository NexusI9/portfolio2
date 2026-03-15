// src/i18n/getDictionary.ts
import path from "path";
import fs from "fs/promises";
import type { Dictionary } from "./Context";
import { DEFAULT_LOCALE, locales, Locale } from "./config";

const dictionaryStructure = {
	common: "common.json",
	home: "home.json",
	projects: {
		common: "projects/common.json",
		animal: "projects/animal.json",
		azusa: "projects/azusa.json",
		emma: "projects/emma.json",
		stylestudio: "projects/stylestudio.json",
		webgpu: "projects/webgpu.json",
	},
} as const;

async function loadStructure(
	basePath: string,
	structure: any
): Promise<any> {
	const entries = await Promise.all(
		Object.entries(structure).map(async ([key, value]) => {
			if (typeof value === "string") {
				const filePath = path.join(basePath, value);
				const file = await fs.readFile(filePath, "utf-8");
				try {
					const json = JSON.parse(file);
					return [key, json];
				} catch (_) {
					console.error(_);
					console.error(`JSON file invalid: ${filePath}`);
				}

			}

			if (typeof value === "object") {
				const nested = await loadStructure(basePath, value);
				return [key, nested];
			}

			return [key, null];
		})
	);

	return Object.fromEntries(entries);
}

export async function getDictionary(locale: string): Promise<Dictionary> {
	// fallback if locale is invalid
	const usedLocale = locales.includes(locale as Locale) ? locale : DEFAULT_LOCALE;

	const basePath = path.resolve("./locales", usedLocale);

	// merge them into one dictionary (adjust keys to your context)
	const dictionary = (await loadStructure(
		basePath,
		dictionaryStructure
	)) as Dictionary;

	return dictionary;
}
