"use client"

import Container from "@components/container/container";
import { ComponentPropsWithoutRef, useRef, RefObject } from "react";
import ProjectCard from "./_components/project-card";
import { Text } from "@components/text/text";
import Mosaic from "@components/mosaic/mosaic";
import styles from "./project-category.module.scss"
import ViewCatcher from "@components/view-catcher/view-catcher";
import { useNavigation } from "@/app/[locale]/_context/navigation/navigation";

interface IProjectCategory extends ComponentPropsWithoutRef<"section"> {
	headline: string;
	projects: Array<ComponentPropsWithoutRef<typeof ProjectCard>>;
}

export default function ProjectCategory({ headline, projects, id }: IProjectCategory) {

	const containerRef = useRef<HTMLElement>(null);
	const { setActive } = useNavigation();

	const onEnter = () => {
		if (!id) return;
		history.replaceState(null, "", `#${id}`);
		setActive(id);
	}

	return (
		<ViewCatcher
			targetRef={containerRef as RefObject<HTMLElement>}
			onEnter={onEnter}
		>
		  <Container ref={containerRef} id={id} size="WIDE" className={`${styles["project-category"]} flex flex-col gap-(--size-space-extra-large-4)`}>

				<hgroup>
					<Mosaic row={3} column={3} className={styles.mosaic} animation="BLINK" />
				  <Text.Display className={styles.display}>{headline}</Text.Display>
				</hgroup>

				<div className={styles["project-wrapper"]}>
					{projects.map((props) => <ProjectCard key={props.thumbnail.src} {...props} />)}
				</div>


			</Container>
		</ViewCatcher>
	);


}
