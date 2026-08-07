"use client"

import Container from "@components/container/container";
import { ComponentPropsWithoutRef, useRef, RefObject } from "react";
import ProjectCard from "./_components/project-card";
import { Text } from "@components/text/text";
import Mosaic from "@components/mosaic/mosaic";
import styles from "./project-category.module.scss"
import ViewCatcher from "@components/view-catcher/view-catcher";
import { useNavigation } from "@/app/[locale]/_context/navigation/navigation";
import clsx from "clsx";

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
			<Container ref={containerRef} id={id} className={clsx(styles["project-category"], "flex flex-col gap-(--size-space-extra-large-4) py-(--size-space-extra-large-3)")}>
					{projects.map((props) => <ProjectCard key={props.thumbnail.src} {...props} />)}
			</Container>
		</ViewCatcher>
	);


}
