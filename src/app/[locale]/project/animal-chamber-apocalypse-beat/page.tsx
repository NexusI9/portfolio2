"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_ANIMAL } from "../_lib/descriptors";
import { Blog } from "../../_components/blog/blog";
import TradeOffHeader from "../_components/tradeoff-header/tradeoff-header";
import { Gallery } from "../../_components/gallery/gallery";
import { imPath } from "../_lib/helper";

export default function AnimalChamberApocalypseBeat() {

	const dico = useDictionary();
	const p = dico.projects.animal;
	const pName = "animal";

	return (<Template project={PROJECT_DESCRIPTOR_ANIMAL}>


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
				<Blog.Heading role="H4">{p.exploration.genre.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.genre.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[
					[imPath(pName, "overall-moodboard")],
					[imPath(pName, "style-diagram")]
				]} />
			</Blog.Group>


			<Blog.Group>
				<Blog.Heading role="H4">{p.exploration.character.headline}</Blog.Heading>
				<Blog.Group>
					<Blog.Heading role="H5">{p.exploration.character.design.headline}</Blog.Heading>
					<Blog.Paragraph>{p.exploration.character.design.body}</Blog.Paragraph>

					<Gallery.AutoLayout rows={[
						[
							imPath(pName, "character-moodboard")
						],
						[
							imPath(pName, "char-design-male-1"),
							imPath(pName, "char-design-male-2"),
							imPath(pName, "char-design-male-3")
						],
						[
							imPath(pName, "char-design-fem-1"),
							imPath(pName, "char-design-fem-2")
						]
					]} />

				</Blog.Group>

				<Gallery.Wrapper>

					<Blog.Group direction="ROW">
						<Blog.Group>
							<Blog.Heading role="H5">{p.exploration.character.tech.headline}</Blog.Heading>
							<Blog.Paragraph>{p.exploration.character.tech.body}</Blog.Paragraph>
						</Blog.Group>
						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "character-3D")} />
						</Gallery.Row>
					</Blog.Group>
					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "character-haircut-expression")} />
					</Gallery.Row>
				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.exploration.environment.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.environment.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[
					imPath(pName, "city-step-1"),
					imPath(pName, "city-step-2"),
					imPath(pName, "city-step-3")
				]]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.exploration.vehicles.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.vehicles.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[
					[
						imPath(pName, "vehicles"),
						imPath(pName, "vehicles-renders"),
						imPath(pName, "train")
					],
					[
						imPath(pName, "train-1")
					]
				]} />
			</Blog.Group>


			<Blog.Group>
				<Blog.Heading role="H4">{p.exploration.design_language.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.design_language.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[
					[
						imPath(pName, "system-expressivity")
					],
					[
						imPath(pName, "kit-organic"),
						imPath(pName, "kit-texture")
					]
				]} />

			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.exploration.pachinko.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.pachinko.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[
					imPath(pName, "pachinko-addict"),
					imPath(pName, "pachinko-icons")
				]]} />
			</Blog.Group>

		</Blog.Section>


		<Blog.Section>
			<Blog.Heading>{p.production.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.production.storyboard.headline}</Blog.Heading>
				<Blog.Paragraph>{p.production.storyboard.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[
					imPath(pName, "storyboard-1"),
					imPath(pName, "storyboard-2"),
					imPath(pName, "storyboard-3")
				]]} />
			</Blog.Group>

			<Blog.Group>

				<Gallery.Wrapper>
					<Blog.Group direction="ROW">

						<Blog.Group>
							<Blog.Heading role="H4">{p.production.shader.headline}</Blog.Heading>
							<Blog.Paragraph>{p.production.shader.body}</Blog.Paragraph>
						</Blog.Group>

						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "material")} />
						</Gallery.Row>

					</Blog.Group>

					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "material-1")} />
					</Gallery.Row>

				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>

				<Blog.Heading role="H4">{p.production.render.headline}</Blog.Heading>
				<Blog.Paragraph>{p.production.render.body}</Blog.Paragraph>

				<div style={{ padding: "41.28% 0 0 0", position: "relative" }}><iframe src="https://player.vimeo.com/video/502583843?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Philip Pentacle - ACAB (Animal Chamber Apocalypse Beat )"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

				<Gallery.AutoLayout rows={[
					[
						imPath(pName, "render-01"),
						imPath(pName, "render-02"),
						imPath(pName, "render-03"),
						imPath(pName, "render-04"),
					],
					[
						imPath(pName, "render-05"),
						imPath(pName, "render-06"),
						imPath(pName, "render-07"),
						imPath(pName, "render-08"),
					],
					[
						imPath(pName, "render-09"),
						imPath(pName, "render-10"),
						imPath(pName, "render-11"),
						imPath(pName, "render-12"),
					],
					[
						imPath(pName, "render-13"),
						imPath(pName, "render-14"),
						imPath(pName, "render-15"),
						imPath(pName, "render-16"),
					],
					[
						imPath(pName, "render-17"),
						imPath(pName, "render-18"),
					],
				]} />

			</Blog.Group>
		</Blog.Section>


		<Blog.TradeOffs headline={p.tradeoffs.headline} items={p.tradeoffs.body.map(t => ({ ...t, heading: <TradeOffHeader items={t.heading} /> }))} />
		<Blog.Outcome headline={p.outcomes.headline} items={p.outcomes.body} />


	</Template>);
}
