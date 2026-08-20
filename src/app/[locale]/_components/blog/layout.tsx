import { Fragment, ReactNode } from "react";
import { Gallery } from "../gallery/gallery";
import Group from "./group";
import HeadingOverline from "./HeadingOverline";
import { IImpactItem, ImpactRow } from "./impact";
import Paragraph from "./paragraph";
import Section from "./section";
import Headline from "./headline";
import { BLOG_HEADLINE_STYLE } from "./constants";

export type IBlogVisual =
	| { kind: "gallery"; rows: string[][] } // passed straight to Gallery.AutoLayout
	| { kind: "stats"; rows: IImpactItem[][] }; // each row -> one <Impact items={row} />


// CAPITAL_SNAKE variants, matching the "Layout Type" column in the CSV 1:1.
export type BlogLayoutVariant =
	| "TEXT_ONLY"
	| "TEXT_LEFT_GALLERY_RIGHT"
	| "TEXT_RIGHT_GALLERY_LEFT"
	| "TEXT_TOP_GALLERY_BOTTOM"
	| "TEXT_LEFT_STAT_RIGHT"
	| "TEXT_RIGHT_STAT_LEFT"
	| "TEXT_TOP_STAT_BOTTOM";

// A body entry is either a plain paragraph string (the common case, auto-wrapped
// in <Paragraph>) or a custom node (e.g. a <List.Root>, a highlighted callout, etc.)
// rendered as-is. This replaces the old dedicated `list` prop — a list is just
// another body entry now.
export type BlogLayoutBodyEntry = string | ReactNode;

export interface IBlogLayoutProps {
	variant: BlogLayoutVariant;
	anchor?: string;
	headline?: string;
	body?: BlogLayoutBodyEntry | BlogLayoutBodyEntry[];
	visual?: IBlogVisual; // gallery or stats — the variant decides the arrangement
	extra?: IBlogVisual; // "Extra Section Below" from the CSV — always rendered under the block
}

function VisualBlock({ visual }: { visual: IBlogVisual }) {
	if (visual.kind === "gallery") {
		return <Gallery.AutoLayout rows={visual.rows} />;
	}
	return (
		<>
			{visual.rows.map((row, i) =>
				<ImpactRow key={i} items={row} style="SOLID" />
			)}
		</>
	);
}

function BodyEntry({ entry, index }: { entry: BlogLayoutBodyEntry; index: number }) {
	// Plain strings are the common case: auto-wrap in a Paragraph.
	// Anything else (a List.Root, a custom callout, ...) is already a valid
	// node and renders as-is.
	if (typeof entry === "string") {
		return <Paragraph key={index}>{entry}</Paragraph>;
	}
	return <Fragment key={index}>{entry}</Fragment>;
}

const ROW_VARIANTS = new Set<BlogLayoutVariant>([
	"TEXT_LEFT_GALLERY_RIGHT",
	"TEXT_RIGHT_GALLERY_LEFT",
	"TEXT_LEFT_STAT_RIGHT",
	"TEXT_RIGHT_STAT_LEFT",
]);

const VISUAL_FIRST_VARIANTS = new Set<BlogLayoutVariant>([
	"TEXT_RIGHT_GALLERY_LEFT",
	"TEXT_RIGHT_STAT_LEFT",
]);

export default function Layout({ variant, anchor, headline, body, visual, extra }: IBlogLayoutProps) {
	const entries = Array.isArray(body) ? body : body != null ? [body] : [];

	const text = (
		<Group>
			{(anchor && headline) && <HeadingOverline overline={anchor} headline={headline} />}
			{(!anchor && headline) && <Headline role={BLOG_HEADLINE_STYLE}>{headline}</Headline>}
			{entries.map((entry, i) => (
				<BodyEntry key={i} entry={entry} index={i} />
			))}
		</Group>
	);

	const isRow = ROW_VARIANTS.has(variant);
	const visualFirst = VISUAL_FIRST_VARIANTS.has(variant);
	const visualNode = variant !== "TEXT_ONLY" && visual ? <VisualBlock visual={visual} /> : null;

	const content =
		variant === "TEXT_ONLY" ? (
			text
		) : (
			<Group direction={isRow ? "ROW" : "COLUMN"}>
				{visualFirst ? (
					<>
						{visualNode}
						{text}
					</>
				) : (
					<>
						{text}
						{visualNode}
					</>
				)}
			</Group>
		);

	return (
		<Section>
			{content}
			{/* "Extra Section Below" from the CSV — embedded as its own group under the block */}
			{extra && (
				<Group>
					<VisualBlock visual={extra} />
				</Group>
			)}
		</Section>
	);
}
