"use client"
import { ComponentPropsWithoutRef } from "react";
import Status from "@components/status/status";
import styles from "./banner.module.scss";
import Container from "@components/container/container";
import { Text } from "@components/text/text";
import AttributeRow from "./_components/attribute-row";
import Stack from "./_components/stack";
import Image from "next/image";
import { useDictionary } from "@/i18n/Context";


interface IBanner {

	overline?: string;
	headline?: string;
	subtitle?: string;

	roles?: string[];
	status?: ComponentPropsWithoutRef<typeof Status>["type"];
	context?: string[];
	stack?: Array<ComponentPropsWithoutRef<typeof Stack>["type"]>;

	diagram?: string;
}

export default function Banner({ overline, headline, subtitle, roles, status, context, stack, diagram }: IBanner) {

	const dico = useDictionary();

	return (
		<div className={styles["banner-wrapper"]}>
			<Container className={styles.banner}>

				<div className="flex flex-col gap-(--size-space-extra-large-4)">
					<hgroup>
						{overline && <Text.Overline className="text-(--color-text-brand-base)">{overline}</Text.Overline>}
						{headline && <Text.H2>{headline}</Text.H2>}
						{subtitle && <Text.Subtitle1 className="text-(--color-text-subtle-on-light)">{subtitle}</Text.Subtitle1>}
					</hgroup>

					<ul className="flex flex-col gap-(--size-space-extra-large-2)">
						{roles && <AttributeRow header={dico.projects.common.attributes.roles} value={roles.join(dico.common.glyphs.separator_comma)} />}
						{status && <AttributeRow header={dico.projects.common.attributes.status}><Status type={status} /></AttributeRow>}
						{context && <AttributeRow header={dico.projects.common.attributes.context} value={context.join(dico.common.glyphs.separator_comma)} />}
						{stack && <AttributeRow header={dico.projects.common.attributes.stack}>{
							stack.map(item => <Stack key={item} type={item} />)
						}</AttributeRow>}
					</ul>
				</div>

				{diagram && <Image src={diagram} className={styles.diagram} alt="Triangular diagram highlighting project key expertises." width={545} height={347} />}

			</Container>
		</div>);
}
