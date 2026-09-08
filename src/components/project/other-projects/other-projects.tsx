import { TProjectDesciptorFn } from "@/types/project";
import { PROJECT_DESCRIPTOR_LIST } from "@/lib/project-descriptors";
import { useDictionary } from "@/i18n/Context";
import Container from "@/components/container/container";
import { Text, TextBase } from "@/components/text/text";
import styles from "./other-projects.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projectPath } from "@/lib/utils";
import Image from "next/image";
import ProjectCard from "@/components/project-card/project-card";
import { mapProjectFromDescriptor } from "@/lib/utils";


interface IOtherProjects {
	activeProject: TProjectDesciptorFn;
}

export default function OtherProjects({ activeProject }: IOtherProjects) {

	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;


	const filteredList = PROJECT_DESCRIPTOR_LIST(dico)
		.filter(project => project.name !== activeProject(dico).name)
		.map(project => mapProjectFromDescriptor(project, locale as string));

	return (

		<Container className={"py-(--size-space-extra-large-7) flex flex-col items-center justify-center gap-(--size-space-extra-large-4)"}>
			<TextBase role="H4" style="H2">{dico.projects.common.other_projects}</TextBase>
			<div className={styles["projects-container"]}>
				{filteredList.map(props => <ProjectCard key={props.href} {...props} size="SMALL" />)}
			</div>
		</Container>

	);


}
