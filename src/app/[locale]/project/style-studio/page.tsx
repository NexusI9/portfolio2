"use client"

import { Blog } from "@components/blog/blog";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_STYLE_STUDIO } from "../_lib/descriptors";
import { Text } from "@components/text/text";
import { useDictionary } from "@/i18n/Context";
import { List } from "../../_components/list/list";
import { Gallery } from "../../_components/gallery/gallery";
import { imPath } from "../_lib/helper";
import TradeOffHeader from "../_components/tradeoff-header/tradeoff-header";

export default function StyleStudio() {

	const dico = useDictionary();
	const p = dico.projects.stylestudio;
	const pName = "stylestudio";

	return (<Template project={PROJECT_DESCRIPTOR_STYLE_STUDIO}>

		<Blog.Section>

			<Blog.Group>

				<Blog.Heading>{p.problem.headline}</Blog.Heading>

				<Blog.Paragraph>
					{p.problem.body}
				</Blog.Paragraph>

				<List.Root>
					{p.problem.list.map(item =>
						<List.Item key={item}>
							<Text.Body>{item}</Text.Body>
						</List.Item>
					)}
				</List.Root>

				<Gallery.AutoLayout rows={[[imPath(pName, "benchmark")]]} />
			</Blog.Group>

		</Blog.Section>

		<Blog.Constraints headline={p.constraints.headline} items={p.constraints.body} />

		<Blog.Section>

			<Blog.Heading>{p.ui_research.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.ui_research.benchmark.headline}</Blog.Heading>
				<Blog.Paragraph>{p.ui_research.benchmark.body}</Blog.Paragraph>

				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "reference-moodboard-UIUX"),
						],
						[
							imPath(pName, "reference-moodboard-tokens"),
							imPath(pName, "reference-moodboard-design-systems"),
						],
					]} />
			</Blog.Group>


			<Blog.Group>
				<Blog.Heading role="H4">{p.ui_research.layouts.headline}</Blog.Heading>
				<Blog.Paragraph>{p.ui_research.layouts.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "ui-1"),
							imPath(pName, "ui-2"),
						],
					]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.ui_research.swatch.headline}</Blog.Heading>
				<Blog.Paragraph>{p.ui_research.swatch.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "workbench"),
						],
					]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.ui_research.google.headline}</Blog.Heading>
				<Gallery.Wrapper>

					<Blog.Group direction="ROW">
						<Blog.Paragraph>{p.ui_research.google.body}</Blog.Paragraph>
						<Gallery.Row><Gallery.Image src={imPath(pName, "workbench-function-based")} /></Gallery.Row>
					</Blog.Group>

					<Gallery.Row><Gallery.Image src={imPath(pName, "workbench-function-based-result")} /></Gallery.Row>
				</Gallery.Wrapper>
			</Blog.Group>



			<Blog.Group>
				<Blog.Heading role="H4">{p.ui_research.gradient.headline}</Blog.Heading>
				<Gallery.Wrapper>

					<Blog.Group direction="ROW">
						<Blog.Paragraph>{p.ui_research.gradient.body}</Blog.Paragraph>
						<Gallery.Row><Gallery.Image src={imPath(pName, "workbench-gradient")} /></Gallery.Row>
					</Blog.Group>

					<Gallery.Row><Gallery.Image src={imPath(pName, "workbench-gradient-result")} /></Gallery.Row>
				</Gallery.Wrapper>
			</Blog.Group>


		</Blog.Section>

		<Blog.Section>

			<Blog.Heading>{p.tech_research.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.tech_research.ownership.headline}</Blog.Heading>
				<Blog.Paragraph>{p.tech_research.ownership.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "server"),
							imPath(pName, "ownership-1"),
						],
						[
							imPath(pName, "ownership-2"),
						],
					]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.tech_research.sync.headline}</Blog.Heading>
				<Blog.Paragraph>{p.tech_research.sync.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "sync-1"),
							imPath(pName, "sync-2"),
						],
					]} />
			</Blog.Group>

		</Blog.Section>

		<Blog.Section>
			<Blog.Heading>{p.solution.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.solution.transformer.headline}</Blog.Heading>
				<Blog.Paragraph>{p.solution.transformer.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "set-transformer"),
						],
					]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.solution.library.headline}</Blog.Heading>
				<Blog.Paragraph>{p.solution.library.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "figma-radix-plugin"),
							imPath(pName, "figma-dual-theme"),
						],
					]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.solution.features.headline}</Blog.Heading>
				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "ui-presentation-1"),
							imPath(pName, "ui-presentation-2"),
						],
						[
							imPath(pName, "ui-presentation-5"),
						],
						[
							imPath(pName, "ui-presentation-3"),
							imPath(pName, "ui-presentation-4"),
						],
						[
							imPath(pName, "ui-presentation-6"),
						],
						[
							imPath(pName, "ui-presentation-7"),
							imPath(pName, "ui-presentation-8"),
						],
					]}
				/>

			</Blog.Group>
		</Blog.Section>


		<Blog.TradeOffs headline={p.tradeoffs.headline} items={p.tradeoffs.body.map(t => ({ ...t, heading: <TradeOffHeader items={t.heading} /> }))} />
		<Blog.Outcome headline={p.outcomes.headline} items={p.outcomes.body} />


	</Template>);
}
