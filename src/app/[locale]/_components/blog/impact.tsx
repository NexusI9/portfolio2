"use client"

import { Text, TextBase } from "../text/text";
import { Blog } from "./blog";
import styles from "./impact.module.scss";

type AffixFormat = "default" | "exponent" | "subscript";

interface IImpactAffix {
	text: string;
	format?: AffixFormat;
}

interface IImpactItem {
	value: string;
	label: string;
	prefix?: IImpactAffix[];
	suffix?: IImpactAffix[];
}

interface IImpact {
	headline: string;
	items: IImpactItem[];
}

// "exponent" raises + shrinks a segment, e.g. 100% -> 100 with a small raised %,
// or 1st -> 1 with a small raised st.
// "subscript" lowers + shrinks a segment, e.g. CO2 -> CO with a small dropped 2.
// prefix/suffix are arrays so a single affix can mix multiple segments/formats,
// e.g. suffix: [{ text: "kg CO" }, { text: "2", format: "subscript" }].


const AFFIX_FORMAT_CLASS: Record<AffixFormat, string | undefined> = {
	default: undefined,
	exponent: styles["impact-affix--exponent"],
	subscript: styles["impact-affix--subscript"]
};

function ImpactAffixGroup({ segments }: { segments: IImpactAffix[] }) {
	return (
		<>
			{segments.map(({ text, format = "default" }, index) => (
				<span className={AFFIX_FORMAT_CLASS[format]} key={index}>{text}</span>
			))}
		</>
	);
}

function ImpactValue({ value, prefix, suffix }: Omit<IImpactItem, "label">) {
	return (
		<TextBase role="BODY" style="H2" className={`${styles["impact-value"]} text-(--color-text-brand-base)`}>
			{prefix && <ImpactAffixGroup segments={prefix} />}
			{value}
			{suffix && <ImpactAffixGroup segments={suffix} />}
		</TextBase>
	);
}

export default function Impact({ headline, items }: IImpact) {
	return (
		<Blog.Section>

			<Blog.Group>
				<Blog.Anchor role="H3" style="H3">{headline}</Blog.Anchor>
				<ul className={styles["impact-cards"]}>
					{items.map((item) => (
						<li className={styles["impact-card"]} key={item.label}>
							<ImpactValue {...item} />
							<Text.Body>{item.label}</Text.Body>
						</li>
					))}
				</ul>
			</Blog.Group>
		</Blog.Section>
	);
}
