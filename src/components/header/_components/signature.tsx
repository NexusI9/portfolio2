
import { Text } from "@/components/text/text";
import LogoIcon from "@/assets/icons/solid/nek-logo.svg"
import Link from "next/link";
import styles from "./signature.module.scss"
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";
import { IComponentTheme } from "@/types/component";

interface ISignature {
	theme?: IComponentTheme;
}

export function Signature({ theme = "LIGHT" }: ISignature) {

	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;

	return <Link href={`/${locale}`} className={`${styles.signature} flex flex-row gap-(--size-space-medium)  [:lang(zh-TW)_&]:gap-(--size-space-large) items-center`} data-theme={theme}>
		<LogoIcon />
		<div className="flex flex-col">
			<Text.LabelMedium>{dico.common.header.name}</Text.LabelMedium>
			<div className="flex flex-row gap-(--size-space-small) items-center">
				<Text.Caption>{dico.common.header.subtitle}</Text.Caption>
				<Text.Caption>::</Text.Caption>
				<Text.Caption>{dico.common.header.location}</Text.Caption>
			</div>
		</div>
	</Link>;



}
