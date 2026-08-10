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
	const p = dico.projects.workflow;
	const pName = "workflow";

	return (<Template project={PROJECT_DESCRIPTOR_STYLE_STUDIO}>

		<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />
		<Blog.Section>

			<Blog.Group>
				<Blog.HeadingOverline
					overline={p.problem.anchor}
					headline={p.problem.headline}
				/>

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

		{/* DELETEME <Blog.Constraints headline={p.constraints.anchor} items={p.constraints.body} />*/}

		<Blog.Section>

			<Blog.Anchor role="H3" style="H3">{p.ui_research.anchor}</Blog.Anchor>

			<Blog.Group>


				<Blog.HeadingOverline
					overline={p.ui_research.benchmark.anchor}
					headline={p.ui_research.benchmark.headline}
				/>

				<Blog.Paragraph>{p.ui_research.benchmark.body}</Blog.Paragraph>


				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "reference-moodboard-UIUX"),
							imPath(pName, "reference-moodboard-tokens"),
							imPath(pName, "reference-moodboard-design-systems"),
						],
					]} />
			</Blog.Group>


			<Blog.Group>

				<Gallery.Wrapper>

					<Blog.HeadingOverline
						overline={p.ui_research.layouts.anchor}
						headline={p.ui_research.layouts.headline}
					/>

					<Blog.Group direction="ROW">
						<Blog.Paragraph>{p.ui_research.layouts.body}</Blog.Paragraph>
					</Blog.Group>
					{/*DELETEME <Gallery.AutoLayout noWrapper
							rows={[
								[
									imPath(pName, "ui-1"),
								],
								]} />*/}

					<Gallery.AutoLayout noWrapper
						rows={[
							[
								imPath(pName, "ui-2"),
							],
						]} />
				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>


				<Blog.HeadingOverline
					overline={p.ui_research.swatch.anchor}
					headline={p.ui_research.swatch.headline}
				/>


				<Blog.Paragraph>{p.ui_research.swatch.body}</Blog.Paragraph>

				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "workbench"),
						],
					]} />
			</Blog.Group>

			<Blog.Group>

				<Blog.HeadingOverline
					overline={p.ui_research.google.anchor}
					headline={p.ui_research.google.headline}
				/>

				<Gallery.Wrapper>

					<Blog.Group direction="ROW">
						<Blog.Paragraph>{p.ui_research.google.body}</Blog.Paragraph>
						{/* DELETEME <Gallery.Row><Gallery.Image src={imPath(pName, "workbench-function-based")} /></Gallery.Row>*/}
					</Blog.Group>

					<Gallery.Row><Gallery.Image src={imPath(pName, "workbench-function-based-result")} /></Gallery.Row>
				</Gallery.Wrapper>
			</Blog.Group>



			<Blog.Group>

				<Blog.HeadingOverline
					overline={p.ui_research.gradient.anchor}
					headline={p.ui_research.gradient.headline}
				/>


				<Gallery.Wrapper>

					<Blog.Group direction="ROW">
						<Blog.Paragraph>{p.ui_research.gradient.body}</Blog.Paragraph>
						{/* DELETEME <Gallery.Row><Gallery.Image src={imPath(pName, "workbench-gradient")} /></Gallery.Row>*/}
					</Blog.Group>

					<Gallery.Row><Gallery.Image src={imPath(pName, "workbench-gradient-result")} /></Gallery.Row>
				</Gallery.Wrapper>
			</Blog.Group>


		</Blog.Section>

		<Blog.Section>

			<Blog.Anchor role="H3" style="H3">{p.tech_research.anchor}</Blog.Anchor>

			<Blog.Group>

				<Blog.HeadingOverline
					overline={p.tech_research.ownership.anchor}
					headline={p.tech_research.ownership.headline}
				/>

				<Blog.Paragraph>{p.tech_research.ownership.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "server"),
							imPath(pName, "ownership-2"),
						],
					]} />
			</Blog.Group>

			<Blog.Group>

				<Gallery.Wrapper>

					<Blog.HeadingOverline
						overline={p.tech_research.sync.anchor}
						headline={p.tech_research.sync.headline}
					/>

					<Blog.Group direction="ROW">
						<Blog.Group>
							<Blog.Headline role="H5">{p.tech_research.sync.context.anchor}</Blog.Headline>
							<Blog.Paragraph>{p.tech_research.sync.context.body}</Blog.Paragraph>
						</Blog.Group>

						<Gallery.AutoLayout noWrapper
							rows={[
								[
									imPath(pName, "sync-2"),
								],
							]} />

					</Blog.Group>


					<Blog.Group direction="ROW">
						<Blog.Group>
							<Blog.Headline role="H5">{p.tech_research.sync.transformer.anchor}</Blog.Headline>
							<Blog.Paragraph>{p.tech_research.sync.transformer.body}</Blog.Paragraph>
						</Blog.Group>
						<Gallery.AutoLayout noWrapper
							rows={[
								[
									imPath(pName, "set-transformer"),
								],
							]} />
					</Blog.Group>

				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>

				<Blog.HeadingOverline
					overline={p.tech_research.library.anchor}
					headline={p.tech_research.library.headline}
				/>

				<Blog.Paragraph>{p.tech_research.library.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "figma-radix-plugin"),
							imPath(pName, "figma-dual-theme"),
						],
					]} />
			</Blog.Group>


		</Blog.Section>

		<Blog.Section>
			<Blog.Anchor role="H3" style="H3">{p.solution.anchor}</Blog.Anchor>
			<Blog.Group>
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


		<Blog.TradeOffs headline={p.tradeoffs.anchor} items={p.tradeoffs.body.map(t => ({ ...t, heading: <TradeOffHeader items={t.heading} /> }))} />
		<Blog.Outcome headline={p.outcomes.anchor} items={p.outcomes.body} />


	</Template>);
}
