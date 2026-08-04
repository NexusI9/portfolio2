"use client"

import { Text } from "@components/text/text";
import styles from "./sidebar.module.scss"
import { useDictionary } from "@/i18n/Context";
import TableOfContents, { TocCollapsedMap } from "../table-of-content/table-of-content";
import ProjectsList from "./projects-list";
import { IProjectDescriptor } from "@/app/[locale]/_types/project";
import { useState } from "react";
import { Button } from "@/app/[locale]/_components/button/button";
import { ListChevronsDownUpIcon } from "lucide-react";
import TocIcon from "@assets/icons/solid/book-open.svg";
import { useOverflowDetection } from "./helper";

interface ISidebar {
	content: Record<any, any>;
	projects: Array<IProjectDescriptor>;
	activeProject: string;
}

export default function Sidebar({ content, projects, activeProject }: ISidebar) {
	const dico = useDictionary();
	const [open, setOpen] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const { ref: tocWrapperRef, isOverflowing: isTocOverflowing } = useOverflowDetection<HTMLDivElement>([content]);

	const handleOnCollapseChange = (collapsed: TocCollapsedMap) => {
		setIsExpanded(collapsed.values().some(t => !t));
	}

	return (
		<>
			{/*Tablet & Mobile*/}
			<div className={styles.button}>
				<Button
					role="PRIMARY"
					style="GHOST"
					size="LARGE"
					onClick={() => setOpen(!open)}
					decoration={false}
				>
					<TocIcon />
				</Button>
			</div>
			<aside className={styles.sidebar} data-open={open}>
				<div className="flex flex-col gap-(--size-space-medium)">
					<TableOfContents.Root data={content} maxLevel={2} collapsible onCollapseChange={handleOnCollapseChange}>
						<div className="flex flex-row justify-between items-center">
							<Text.H6>{dico.projects.common.sidebar.table_content}</Text.H6>

							<TableOfContents.Trigger action="COLLAPSE_ALL">
								<Button role={isExpanded ? "PRIMARY" : "DISABLED"}
									style="GHOST"
									size="SMALL"
								>
									<ListChevronsDownUpIcon />
								</Button>
							</TableOfContents.Trigger>

						</div>
						<div
							ref={tocWrapperRef}
							className={styles["toc-wrapper"]}
							data-overflowing={isTocOverflowing}
						>
							<TableOfContents.Content />
						</div>
					</TableOfContents.Root>
				</div>

				<div className="flex flex-col gap-(--size-space-large)">
					<Text.H6>{dico.projects.common.sidebar.all_projects}</Text.H6>
					<ProjectsList projects={projects} activeProject={activeProject} />
				</div>

			</aside>
		</>
	);
}
