"use client"

import Banner from "../banner/banner"
import Content from "../content/content";
import Sidebar from "../sidebar/sidebar";
import styles from "./template.module.scss"
import Container from "@components/container/container";
import { TProjectDesciptorFn } from "@/app/[locale]/_types/project";
import { useDictionary } from "@/i18n/Context";
import { useParams } from "next/navigation";
import { mapFromDescriptor } from "../../_lib/helper";

interface ITemplate {
	children?: React.ReactNode;
	project: TProjectDesciptorFn;
}

export default function Template({ project, children }: ITemplate) {

	const dico = useDictionary();
	const projectDescriptor = project(dico);
	const { banner, sidebar } = mapFromDescriptor(projectDescriptor, dico);

	return (<>
		<Banner {...banner} />
		<div className="inline-block">
			<Container className={styles.container} type="FLUID">
				<Sidebar {...sidebar} />
				<Content>{children}</Content>
			</Container >
		</div>
	</>);

}
