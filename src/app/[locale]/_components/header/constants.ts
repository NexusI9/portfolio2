

import GithubIcon from "@assets/icons/solid/github.svg"
import LinkedinIcon from "@assets/icons/solid/linkedin.svg"
import EmailIcon from "@assets/icons/solid/envelope.svg"
import { Dictionary } from "@/i18n/Context";


export const CONTACT_INFO = (dico: Dictionary) => [
	{
		label: "Github",
		icon: GithubIcon,
		link: "https://github.com/elkhantour",
	},
	{
		label: "LinkedIn",
		icon: LinkedinIcon,
		link: "https://www.linkedin.com/in/elkhantour/",
	},
	{
		label: dico.common.header.contact,
		icon: EmailIcon,
		link: "mailto:nassim.elkhantour@gmail.com",
	}
];
