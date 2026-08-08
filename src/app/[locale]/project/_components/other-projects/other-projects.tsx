import { TProjectDesciptorFn } from "@/app/[locale]/_types/project";
import { PROJECT_DESCRIPTOR_LIST } from "../../_lib/descriptors";
import { useDictionary } from "@/i18n/Context";
import Container from "@/app/[locale]/_components/container/container";
import { Text, TextBase } from "@/app/[locale]/_components/text/text";
import styles from "./other-projects.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projectPath } from "../../_lib/helper";
import Image from "next/image";
import ProjectCard from "@/app/[locale]/_components/project-card/project-card";
import { mapProjectFromDescriptor } from "@/app/[locale]/_lib/utils";


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
