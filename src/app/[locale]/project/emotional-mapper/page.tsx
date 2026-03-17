"use client"

import { useDictionary } from "@/i18n/Context";
import { Blog } from "../../_components/blog/blog";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER } from "../_lib/descriptors";
import { Gallery } from "../../_components/gallery/gallery";
import { imPath } from "../_lib/helper";
import { List } from "../../_components/list/list";
import TradeOffHeader from "../_components/tradeoff-header/tradeoff-header";

export default function EmotionalMapper() {

	const dico = useDictionary();
	const p = dico.projects.emma;
	const pName = "emma";

	return (<Template project={PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER}>

		<Blog.Section>
			<Blog.Group>
				<Blog.Heading>{p.problem.headline}</Blog.Heading>
				<Blog.Paragraph>{p.problem.body}</Blog.Paragraph>
			</Blog.Group>
		</Blog.Section>

		<Blog.Constraints headline={p.constraints.headline} items={p.constraints.body} />

		<Blog.Section>

			<Blog.Heading>{p.strategic_framing.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.strategic_framing.scope.headline}</Blog.Heading>
				<Blog.Paragraph>{p.strategic_framing.scope.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "strategy-scope")]]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.strategic_framing.workflow.headline}</Blog.Heading>
				<Blog.Paragraph>{p.strategic_framing.workflow.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "strategy-workflow")]]} />
			</Blog.Group>


		</Blog.Section>

		<Blog.Section>

			<Blog.Heading>{p.ui_research.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.ui_research.brainstorm.headline}</Blog.Heading>
				<Blog.Paragraph>{p.ui_research.brainstorm.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[[imPath(pName, "ui-global-brainstorm")]]} />
			</Blog.Group>

			<Blog.Group>

				<Blog.Heading role="H4">{p.ui_research.physical.headline}</Blog.Heading>
				<Blog.Paragraph>{p.ui_research.physical.body}</Blog.Paragraph>
				<Gallery.Wrapper>
					<Gallery.Mosaic images={[
						imPath(pName, "ui-knob-sketches"),
						imPath(pName, "ui-navbar-sketches"),
						imPath(pName, "ui-bookmark-sketches"),
					]} />
				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>
				<Gallery.Wrapper>
					<Blog.Group direction="ROW">
						<Blog.Paragraph>{p.ui_research.industrial.body}</Blog.Paragraph>
						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "ui-slide-movement")} />
						</Gallery.Row>
					</Blog.Group>

					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "ui-knob-table")} />
					</Gallery.Row>

				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group direction="ROW">
				<Blog.Group>
					<Blog.Heading role="H4">{p.ui_research.documentation.headline}</Blog.Heading>
					<Blog.Paragraph>{p.ui_research.documentation.body}</Blog.Paragraph>
				</Blog.Group>

				<Gallery.AutoLayout rows={[[imPath(pName, "ui-docu-brainstorm")]]} />

			</Blog.Group>

			<Blog.Group>
				<Gallery.Wrapper>
					<Blog.Group direction="ROW">
						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "ui-pod-sketches")} />
						</Gallery.Row>
						<Blog.Group>
							<Blog.Heading role="H4">{p.ui_research.gamified.headline}</Blog.Heading>
							<Blog.Paragraph>{p.ui_research.gamified.body}</Blog.Paragraph></Blog.Group>

					</Blog.Group>

					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "ui-pod-brainstorm")} />
					</Gallery.Row>
				</Gallery.Wrapper>
			</Blog.Group>


		</Blog.Section>

		<Blog.Section>

			<Blog.Heading>{p.tech_research.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.tech_research.persona.headline}</Blog.Heading>
				<Blog.Paragraph>{p.tech_research.persona.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "strategy-persona")]]} />
			</Blog.Group>

			<Blog.Group>
				<Gallery.Wrapper>
					<Blog.Heading role="H4">{p.tech_research.engines.headline}</Blog.Heading>
					<Blog.Paragraph>{p.tech_research.engines.body}</Blog.Paragraph>
					<List.Root>{p.tech_research.engines.list.map(item => <List.Item key={item}>{item}</List.Item>)}</List.Root>

					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "engine")} />
					</Gallery.Row>

					<Blog.Group direction="ROW">
						<Blog.Paragraph>{p.tech_research.engines.end}</Blog.Paragraph>

						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "engine-glue")} />
						</Gallery.Row>

					</Blog.Group>
				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.tech_research.system_design.headline}</Blog.Heading>
				<Blog.Group>
					<Blog.Heading role="H5">{p.tech_research.system_design.expressivity.headline}</Blog.Heading>
					<Blog.Paragraph>{p.tech_research.system_design.expressivity.body}</Blog.Paragraph>
					<Gallery.AutoLayout rows={[[imPath(pName, "expressivity")]]} />
				</Blog.Group>


				<Blog.Group direction="ROW">
					<Blog.Group>
						<Blog.Heading role="H5">{p.tech_research.system_design.module.headline}</Blog.Heading>
						<Blog.Paragraph>{p.tech_research.system_design.module.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "module-action-reward")]]} />
				</Blog.Group>

				<Blog.Group >
					<Blog.Group>
						<Blog.Heading role="H5">{p.tech_research.system_design.architecture.headline}</Blog.Heading>
						<Blog.Paragraph>{p.tech_research.system_design.architecture.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[
						imPath(pName, "module-action-reward-flow"),
						imPath(pName, "persona-action-reward-flow")
					]]} />
				</Blog.Group>
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.tech_research.formulas.headline}</Blog.Heading>

				<Blog.Group direction="ROW">
					<Blog.Group>
						<Blog.Heading role="H5">{p.tech_research.formulas.intro.headline}</Blog.Heading>
						<Blog.Paragraph>{p.tech_research.formulas.intro.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "module-formulas")]]} />
				</Blog.Group>

				<Blog.Group>

					<Blog.Heading role="H5">{p.tech_research.formulas.impact.headline}</Blog.Heading>
					<Blog.Paragraph>{p.tech_research.formulas.impact.body}</Blog.Paragraph>

					<Gallery.AutoLayout rows={[[imPath(pName, "module-desire-aversion")]]} />
				</Blog.Group>



				<Blog.Group direction="ROW">

					<Blog.Group>
						<Blog.Heading role="H5">{p.tech_research.formulas.tweaking.headline}</Blog.Heading>
						<Blog.Paragraph>{p.tech_research.formulas.tweaking.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "normal-distribution")]]} />

				</Blog.Group>
			</Blog.Group>
		</Blog.Section>

		<Blog.Section>

			<Blog.Group>
				<Blog.Heading>{p.software_architecture.headline}</Blog.Heading>
				<Blog.Paragraph>{p.software_architecture.body}</Blog.Paragraph>
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.software_architecture.optimizations.headline}</Blog.Heading>
				<Blog.Group direction="ROW">
					<Blog.Group>
						<Blog.Heading role="H5">{p.software_architecture.resource_manager.headline}</Blog.Heading>
						<Blog.Paragraph>{p.software_architecture.resource_manager.body}</Blog.Paragraph>
						<Blog.TagList
							role="SUCCESS"
							label={p.software_architecture.resource_manager.benefits.heading}
							items={p.software_architecture.resource_manager.benefits.items}
						/>

						<Blog.TagList
							role="DANGER"
							label={p.software_architecture.resource_manager.limits.heading}
							items={p.software_architecture.resource_manager.limits.items}
						/>

					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "software-rem")]]} />
				</Blog.Group>

				<Blog.Group direction="ROW">
					<Blog.Group>
						<Blog.Heading role="H5">{p.software_architecture.state_array.headline}</Blog.Heading>
						<Blog.Paragraph>{p.software_architecture.state_array.body}</Blog.Paragraph>

						<Blog.TagList
							role="SUCCESS"
							label={p.software_architecture.state_array.benefits.heading}
							items={p.software_architecture.state_array.benefits.items}
						/>

						<Blog.TagList
							role="DANGER"
							label={p.software_architecture.state_array.limits.heading}
							items={p.software_architecture.state_array.limits.items}
						/>

					</Blog.Group>

					<Gallery.AutoLayout rows={[[imPath(pName, "software-state-based-array")]]} />

				</Blog.Group>
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.software_architecture.semantics.headline}</Blog.Heading>
				<Blog.Paragraph>{p.software_architecture.semantics.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[imPath(pName, "software-semantic-box"),
						imPath(pName, "software-semantic-function")]
					]}
				/>
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.software_architecture.immediate.headline}</Blog.Heading>
				<Blog.Group direction="ROW">
					<Blog.Group>
						<Blog.Heading role="H5">{p.software_architecture.ui_caching.headline}</Blog.Heading>
						<Blog.Paragraph>{p.software_architecture.ui_caching.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "software-immediate-mode-ui-pipeline")]]} />
				</Blog.Group>

				<Blog.Group direction="ROW">
					<Gallery.AutoLayout rows={[[imPath(pName, "software-immediate-mode-model-relationship")]]} />
					<Blog.Group>
						<Blog.Heading role="H5">{p.software_architecture.ui_splitting.headline}</Blog.Heading>
						<Blog.Paragraph>{p.software_architecture.ui_splitting.body}</Blog.Paragraph>
					</Blog.Group>

				</Blog.Group>

				<Blog.Group>

					<Blog.Heading role="H5">{p.software_architecture.heatmap_flow.headline}</Blog.Heading>
					<Blog.Paragraph>{p.software_architecture.heatmap_flow.body}</Blog.Paragraph>
					<Gallery.AutoLayout rows={[[imPath(pName, "software-immediate-mode-heatmap")]]} />

				</Blog.Group>
			</Blog.Group>

		</Blog.Section>

		<Blog.Section>

			<Blog.Heading>{p.solution.headline}</Blog.Heading>

			<Blog.Group>

				<Blog.Heading role="H4">{p.solution.brand.headline}</Blog.Heading>
				<Blog.Paragraph>{p.solution.brand.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "solution-brand-bento")]]} />

			</Blog.Group>

			<Blog.Group direction="ROW">

				<Blog.Group>
					<Blog.Heading role="H4">{p.solution.analysis.headline}</Blog.Heading>
					<Blog.Paragraph>{p.solution.analysis.body}</Blog.Paragraph>
				</Blog.Group>
				<Gallery.AutoLayout rows={[[imPath(pName, "solution-process-flow")]]} />

			</Blog.Group>

			<Blog.Group>

				<Blog.Heading role="H4">{p.solution.tools.headline}</Blog.Heading>
				<Blog.Paragraph>{p.solution.tools.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "software-immediate-mode")]]} />

			</Blog.Group>

			<Blog.Group>

				<Blog.Heading role="H4">{p.solution.software.headline}</Blog.Heading>
				<Blog.Paragraph>{p.solution.software.body}</Blog.Paragraph>


				<Gallery.AutoLayout
					rows={[
						[
							imPath(pName, "solution-minified-layout"),
							imPath(pName, "solution-octalysis"),
						],
						[
							imPath(pName, "solution-heatmap"),
						],
						[
							imPath(pName, "solution-iconography"),
							imPath(pName, "solution-manip"),
						],
						[
							imPath(pName, "solution-sidemenu-configuration"),
						],
					]}
				/>


			</Blog.Group>

		</Blog.Section>

		<Blog.TradeOffs headline={p.tradeoffs.headline} items={p.tradeoffs.body.map(t => ({ ...t, heading: <TradeOffHeader items={t.heading} /> }))} />
		<Blog.Outcome headline={p.outcomes.headline} items={p.outcomes.body} />



	</Template >);
}
