"use client"

import { Text } from "@components/text/text";
import styles from "./sidebar.module.scss"
import { useDictionary } from "@/i18n/Context";
import TableOfContents from "../table-of-content/table-of-content";
import ProjectsList from "./projects-list";
import { IProjectDescriptor } from "@/app/[locale]/_types/project";

interface ISidebar {
	content: Record<any, any>;
	projects: Array<IProjectDescriptor>;
	activeProject: string;
}

export default function Sidebar({ content, projects, activeProject }: ISidebar) {
	const dico = useDictionary();

	return (
		<aside className={styles.sidebar}>
			<div>
				<Text.H6>{dico.projects.common.sidebar.table_content}</Text.H6>
				<TableOfContents data={content} maxLevel={1} />
			</div>

			<div className="flex flex-col gap-(--size-space-large)">
				<Text.H6>{dico.projects.common.sidebar.all_projects}</Text.H6>
				<ProjectsList projects={projects} activeProject={activeProject} />
			</div>

		</aside>
	);
}
