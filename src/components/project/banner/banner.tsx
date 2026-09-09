"use client"
import { ComponentPropsWithoutRef } from "react";
import Status from "@/components/status/status";
import styles from "./banner.module.scss";
import Container from "@/components/container/container";
import { Text, TextBase } from "@/components/text/text";
import AttributeRow from "./_components/attribute-row";
import Stack from "./_components/stack";
import Image from "next/image";
import { useDictionary } from "@/i18n/Context";


export interface IBannerVisual {
	src?: string;
	alt?: string;
	color?: { start: string; end: string; }
}

interface IBanner {

	overline?: string;
	headline?: string;
	subtitle?: string;

	roles?: string[];
	team?: string[];
	timeline?: string;
	status?: ComponentPropsWithoutRef<typeof Status>["type"];
	context?: string[];
	stack?: Array<ComponentPropsWithoutRef<typeof Stack>["type"]>;

	visual?: IBannerVisual;

}


export default function Banner({ overline, headline, subtitle, roles, status, context, stack, visual, team, timeline }: IBanner) {

	const dico = useDictionary();

	return (
		<div className={styles["banner-wrapper"]}>
			<Container className={styles.banner}>

				<picture className={styles.background}>
					<source media="(min-width: 1440px)" srcSet="/assets/project-banner-bg@1440w.webp" />
					<source media="(max-width: 1024px)" srcSet="/assets/project-banner-bg@1024w.webp" />
					<source media="(max-width: 360px)" srcSet="/assets/project-banner-bg@360w.webp" />
					<img src="/assets/project-banner-bg@1440w.webp" alt="Abstract dark background with purple lines" />
				</picture>

				<div className={styles.content}>
					<hgroup>
						{overline && <Text.Overline className={styles.overline}>{overline}</Text.Overline>}
						{headline && <TextBase role="H1" style="H3">{headline}</TextBase>}
						{subtitle && <Text.H6 className="mt-(--size-space-small)">{subtitle}</Text.H6>}
					</hgroup>

					<ul className="flex flex-col gap-(--size-space-extra-large-2)">
						{
							roles &&
							<AttributeRow
								header={dico.projects.common.attributes.roles}
								value={roles.join(dico.common.glyphs.separator_comma)}
							/>
						}

						{
							team &&
							<AttributeRow
								header={dico.projects.common.attributes.team}
								value={team.join(dico.common.glyphs.separator_comma)}
							/>
						}

						{
							timeline &&
							<AttributeRow
								header={dico.projects.common.attributes.timeline}
								value={timeline}
							/>
						}

						{
							status &&
							<AttributeRow
								header={dico.projects.common.attributes.status}>
								<Status type={status} />
							</AttributeRow>
						}

						{
							context &&
							<AttributeRow
								header={dico.projects.common.attributes.context}
								value={context.join(dico.common.glyphs.separator_comma)} />
						}

						{
							stack &&
							<AttributeRow
								header={dico.projects.common.attributes.stack}>
								{
									stack.map(item => <Stack key={item} type={item} />)
								}
							</AttributeRow>
						}
					</ul>
				</div>

				{visual && visual.src && <div
					className={styles.visual}
				>
					{/*visual.color && <span
						className={styles.backdrop}
						style={{ backgroundImage: `linear-gradient(${visual.color.start}, ${visual.color.end} 85%, #FFFFFF00 100%)` }} />
					*/}
					<Image
						src={visual.src}
						alt={visual.alt || "A macbook mockup with design work displayed on its screen."}
						width={545}
						height={347}
					/>
				</div>}

			</Container>
		</div>);
}
