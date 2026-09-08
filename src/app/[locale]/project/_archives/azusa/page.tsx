"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "@/components/project/template/template"
import { PROJECT_DESCRIPTOR_AZUSA } from "@/lib/project-descriptors";
import { Blog } from "@/components/blog/blog";
import { Gallery } from "@/components/gallery/gallery";
import { imPath } from "@/lib/utils";
import { List } from "@/components/list/list";
import { Text } from "@/components/text/text";
import TradeOffHeader from "@/components/project/tradeoff-header/tradeoff-header";

export default function Azusa() {


	const dico = useDictionary();
	const p = dico.projects.azusa;
	const pName = "azusa";



	return (<Template project={PROJECT_DESCRIPTOR_AZUSA}>

		<Blog.Section>

			<Blog.Group>
				<Blog.Headline>{p.intention.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.intention.body}</Blog.Paragraph>
			</Blog.Group>
		</Blog.Section>

		<Blog.Constraints headline={p.constraints.anchor} items={p.constraints.body} />

		<Blog.Section>

			<Blog.Headline>{p.exploration.anchor}</Blog.Headline>

			<Blog.Group>

				<Blog.Headline role="H4">{p.exploration.creative_research.anchor}</Blog.Headline>

				<Blog.Group>
					<Gallery.Wrapper>

						<Blog.Group direction="ROW">

							<Blog.Group>
								<Blog.Headline role="H5">{p.exploration.creative_research.early_concepts.anchor}</Blog.Headline>
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

				<Blog.Headline role="H5">{p.exploration.creative_research.satellite.anchor}</Blog.Headline>
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

				<Blog.Headline role="H5">{p.exploration.creative_research.cartography.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.exploration.creative_research.cartography.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[
					[
						imPath(pName, "politics"),
						imPath(pName, "aesthetics"),
					],
				]} />


			</Blog.Group>


			<Blog.Group>
				<Gallery.Wrapper>
					<Blog.Group direction="ROW">

						<Blog.Group>
							<Blog.Headline role="H5">{p.exploration.creative_research.character_design.anchor}</Blog.Headline>

							<Blog.Paragraph>{p.exploration.creative_research.character_design.body}</Blog.Paragraph>
						</Blog.Group>

						<Gallery.AutoLayout noWrapper rows={[[imPath(pName, "character-design")]]} />

					</Blog.Group>




					<Gallery.AutoLayout noWrapper rows={[[imPath(pName, "character-model")]]} />
				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>

				<Blog.Headline role="H5">{p.exploration.creative_research.iconography.anchor}</Blog.Headline>

				<Blog.Paragraph>{p.exploration.creative_research.iconography.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[[imPath(pName, "ui-iconography")]]} />
			</Blog.Group>


			<Blog.Group>
				<Gallery.Wrapper>

					<Blog.Group direction="ROW">

						<Blog.Group>
							<Blog.Headline role="H5">{p.exploration.creative_research.ui.anchor}</Blog.Headline>
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

			<Blog.Group>

				<Blog.Headline role="H4">{p.exploration.procedural_systems.anchor}</Blog.Headline>

				<Blog.Group>
					<Gallery.Wrapper>
						<Blog.Headline role="H5">{p.exploration.procedural_systems.island.anchor}</Blog.Headline>
						<Blog.Paragraph>{p.exploration.procedural_systems.island.body}</Blog.Paragraph>

						<Blog.Group direction="ROW">
							<Blog.Group>
								<Blog.Headline role="H6">{p.exploration.procedural_systems.island.topology.anchor}</Blog.Headline>
								<Blog.Paragraph>{p.exploration.procedural_systems.island.topology.body}</Blog.Paragraph>
							</Blog.Group>

							<Gallery.AutoLayout noWrapper rows={[[imPath(pName, "island-generation-topo")]]} />
						</Blog.Group>

						<Blog.Group direction="ROW">
							<Blog.Group>
								<Blog.Headline role="H6">{p.exploration.procedural_systems.island.texture.anchor}</Blog.Headline>
								<Blog.Paragraph>{p.exploration.procedural_systems.island.texture.body}</Blog.Paragraph>
							</Blog.Group>

							<Gallery.AutoLayout noWrapper rows={[[imPath(pName, "island-generation-texture")]]} />
						</Blog.Group>

						<Gallery.AutoLayout noWrapper rows={[[imPath(pName, "island-generation-ingame")]]} />
					</Gallery.Wrapper>
				</Blog.Group>

				<Blog.Group>
					<Blog.Headline role="H5">{p.exploration.procedural_systems.vegetation.anchor}</Blog.Headline>
					<Blog.Paragraph>{p.exploration.procedural_systems.vegetation.body}</Blog.Paragraph>

					<Gallery.AutoLayout rows={[
						[
							imPath(pName, "flora-perlin-grid"),
							imPath(pName, "flora-jittered-process"),
						],
						[
							imPath(pName, "flora-foot-print"),
							imPath(pName, "flora-jittered-ingame"),
						]
					]} />

				</Blog.Group>

				<Blog.Group>
					<Blog.Headline role="H5">{p.exploration.procedural_systems.nomad_house.anchor}</Blog.Headline>
					<Blog.Paragraph>{p.exploration.procedural_systems.nomad_house.body}</Blog.Paragraph>

					<Gallery.AutoLayout rows={[
						[
							imPath(pName, "nomad-kit-slot"),
							imPath(pName, "nomad-kit-texture"),
						],
						[
							imPath(pName, "nomad-kit-ingame"),
						]
					]} />
				</Blog.Group>

			</Blog.Group>
		</Blog.Section>

		<Blog.Section>

			<Blog.Headline>{p.solution.anchor}</Blog.Headline>

			<Blog.Group>
				<Blog.Headline role="H5">{p.solution.props.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.solution.props.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[
					[
						imPath(pName, "props-gem-bag"),
						imPath(pName, "props-stamina-elixir"),
						imPath(pName, "props-dispenser"),
					],
					[
						imPath(pName, "props-nomad house"),
						imPath(pName, "props-character"),
						imPath(pName, "props-bike"),
					],
					[
						imPath(pName, "props-plant-1"),
						imPath(pName, "props-plant-2"),
						imPath(pName, "props-potion"),
					],
				]} />


			</Blog.Group>


			<Blog.Group>
				<Blog.Headline role="H5">{p.solution.scenes.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.solution.scenes.body}</Blog.Paragraph>

			</Blog.Group>

		</Blog.Section>

		<Blog.TradeOffs headline={p.tradeoffs.anchor} items={p.tradeoffs.body.map(t => ({ ...t, heading: <TradeOffHeader items={t.heading} /> }))} />
		<Blog.Outcome headline={p.outcomes.anchor} items={p.outcomes.body} />

	</Template>);
}
