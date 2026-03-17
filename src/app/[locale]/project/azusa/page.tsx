"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_AZUSA } from "../_lib/descriptors";
import { Blog } from "../../_components/blog/blog";
import { Gallery } from "../../_components/gallery/gallery";
import { List } from "../../_components/list/list";
import { Text } from "../../_components/text/text";
import { imPath } from "../_lib/helper";

export default function Azusa() {


	const dico = useDictionary();
	const p = dico.projects.azusa;
	const pName = "azusa";



	return (<Template project={PROJECT_DESCRIPTOR_AZUSA}>

		<Blog.Section>

			<Blog.Group>
				<Blog.Heading>{p.intention.headline}</Blog.Heading>
				<Blog.Paragraph>{p.intention.body}</Blog.Paragraph>
			</Blog.Group>
		</Blog.Section>

		<Blog.Constraints headline={p.constraints.headline} items={p.constraints.body} />

		<Blog.Section>

			<Blog.Heading>{p.exploration.headline}</Blog.Heading>

			<Blog.Group>

				<Blog.Heading role="H4">{p.exploration.creative_research.headline}</Blog.Heading>

				<Blog.Group>
					<Gallery.Wrapper>

						<Blog.Group direction="ROW">

							<Blog.Group>
								<Blog.Heading role="H5">{p.exploration.creative_research.early_concepts.headline}</Blog.Heading>
								<Blog.Paragraph>{p.exploration.creative_research.early_concepts.body}</Blog.Paragraph>
								<List.Root>
									{p.exploration.creative_research.early_concepts.list.map(it => <List.Item key={it}><Text.Body>{it}</Text.Body></List.Item>)}
								</List.Root>
							</Blog.Group>

							<Gallery.Row>
								<Gallery.Image src={imPath(pName, "main-island-moodboard")} />
							</Gallery.Row>

						</Blog.Group>

						<Gallery.AutoLayout noWrapper rows={[
							[imPath(pName, "concept-aerodrome"),],
							[
								imPath(pName, "concept-citadel"),
								imPath(pName, "concept-raft"),
							],
							[
								imPath(pName, "concept-parc"),
								imPath(pName, "concept-nexus"),
								imPath(pName, "concept-echo-chamber"),
							],
						]} />

					</Gallery.Wrapper>

				</Blog.Group>
			</Blog.Group>

			<Blog.Group>

				<Blog.Heading role="H5">{p.exploration.creative_research.satellite.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.creative_research.satellite.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[
					[
						imPath(pName, "satellite-islands-brainstorm"),
						imPath(pName, "satellite-islands-sketch"),
						imPath(pName, "satellite-islands-render"),
					],
				]} />


			</Blog.Group>

			<Blog.Group>

				<Blog.Heading role="H5">{p.exploration.creative_research.cartography.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.creative_research.cartography.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[
					[
						imPath(pName, "politics"),
						imPath(pName, "aesthetics"),
					],
				]} />


			</Blog.Group>


			<Blog.Group>

				<Blog.Heading role="H5">{p.exploration.creative_research.character_design.headline}</Blog.Heading>

				<Blog.Paragraph>{p.exploration.creative_research.character_design.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[[imPath(pName, "character-design")]]} />
			</Blog.Group>

			<Blog.Group>

				<Blog.Heading role="H5">{p.exploration.creative_research.iconography.headline}</Blog.Heading>

				<Blog.Paragraph>{p.exploration.creative_research.iconography.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[[imPath(pName, "ui-iconography")]]} />
			</Blog.Group>


			<Blog.Group>
				<Gallery.Wrapper>

					<Blog.Group direction="ROW">

						<Blog.Group>
							<Blog.Heading role="H5">{p.exploration.creative_research.ui.headline}</Blog.Heading>
							<Blog.Paragraph>{p.exploration.creative_research.ui.body}</Blog.Paragraph>

						</Blog.Group>

						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "ui-character-editor")} />
						</Gallery.Row>

					</Blog.Group>

					<Gallery.AutoLayout noWrapper rows={[
						[
							imPath(pName, "ui-sprites"),
						]
					]} />

				</Gallery.Wrapper>

			</Blog.Group>
		</Blog.Section>

	</Template>);
}
