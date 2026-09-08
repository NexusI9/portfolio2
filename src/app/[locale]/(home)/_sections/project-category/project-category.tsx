"use client"

import { ComponentPropsWithoutRef, useRef } from "react";
import ProjectCard from "@/components/project-card/project-card";
import styles from "./project-category.module.scss"
import clsx from "clsx";

interface IProjectCategory extends ComponentPropsWithoutRef<"section"> {
	projects: Array<ComponentPropsWithoutRef<typeof ProjectCard>>;
}

export default function ProjectCategory({ projects, id }: IProjectCategory) {

	const containerRef = useRef<HTMLDivElement>(null);

	return (

		<div ref={containerRef} id={id} className={clsx(styles["project-category"], "flex flex-col gap-(--size-space-extra-large-4) py-(--size-space-extra-large-3)")}>
			{projects.map((props) => <ProjectCard key={props.thumbnail.src} {...props} />)}
		</div>

	);


}
