"use client"

import { useState } from "react";
import { FloatingPreview } from "./floating-preview";
import { Button } from "@components/button/button";
import { IProjectDescriptor } from "@/app/[locale]/_types/project";
import { useParams } from "next/navigation";
import { projectPath } from "../../_lib/helper";
import { DEFAULT_LOCALE } from "@/i18n/config";

interface IPreview {
	src: string | null;
	alt: string | null;
};


export default function ProjectsList({ projects, activeProject }:
	{
		projects: IProjectDescriptor[];
		activeProject: string;
	}) {

	const [preview, setPreview] = useState<IPreview>({ src: null, alt: null });
	const [rect, setRect] = useState<DOMRect | null>(null);
	const params = useParams();
	const { locale } = params;

	return (<><ul className="flex flex-col gap-(--size-space-large)">
		{projects.map((project) => (
			<li
				key={project.name}
				onMouseEnter={(e) => {
					setPreview({
						src: project.preview,
						alt: project.alt
					});
					setRect(e.currentTarget.getBoundingClientRect());
				}}
				onMouseLeave={() => {
					setPreview({
						src: null,
						alt: null
					});
				}}
			>
				<Button
					href={projectPath(project.pageName, (locale || DEFAULT_LOCALE) as string)}
					size="MEDIUM"
					style="GHOST"
					role={activeProject == project.name ? "DISABLED" : "PRIMARY"}
				>
					{project.name}
				</Button>
			</li>
		))}
	</ul>
		<FloatingPreview src={preview.src} rect={rect} alt={preview.alt} />
	</>);

}
