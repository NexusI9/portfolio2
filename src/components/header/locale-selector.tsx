"use client"

import { useParams, usePathname, useRouter } from "next/navigation";
import Combobox from "@/components/combobox/combobox";
import GlobeIcon from "@/assets/icons/solid/globe-alt.svg"
import { IComponentTheme } from "@/types/component";

interface ILocaleSelector {
	className?: string;
	theme?: IComponentTheme;
}

export default function LocaleSelector({ className, theme = "LIGHT" }: ILocaleSelector) {

	const comboboxOptions = [
		{ value: "en", label: "EN" },
		{ value: "zh-TW", label: "繁體" }
	];
	const params = useParams();
	const { locale } = params;
	const router = useRouter();
	const pathname = usePathname();

	const currentOption = comboboxOptions.find(option => option.value === locale) ?? comboboxOptions[0];

	const handleChange = (selected: { value: string; label: string }) => {
		if (!pathname) return; // router might not be hydrated yet
		const segments = pathname.split('/').filter(Boolean);
		segments[0] = selected.value; // replace locale
		router.push('/' + segments.join('/'));
	};

	return (
		<Combobox
			className={className}
			options={comboboxOptions}
			value={currentOption}
			placeholder={currentOption.label}
			onChange={handleChange}
			triggerIcon={<GlobeIcon />}
			theme={theme}
		/>
	);


}
