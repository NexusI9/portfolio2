"use client"

import { useDictionary } from "@/i18n/Context";
import { Blog } from "../../_components/blog/blog";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER } from "../_lib/descriptors";
import { Gallery } from "../../_components/gallery/gallery";
import { imPath } from "../_lib/helper";
import { List } from "../../_components/list/list";
import TradeOffHeader from "../_components/tradeoff-header/tradeoff-header";
import TradeOffList from "../../_components/tradeoff-card/_components/list";
import PlusIcon from "@assets/icons/solid/plus-circle.svg"
import MinusIcon from "@assets/icons/solid/minus-circle.svg"

export default function EmotionalMapper() {

	const dico = useDictionary();
	const p = dico.projects.pulse;
	const pName = "pulse";

	return (<Template project={PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER}>

		<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />
		<Blog.Section>
			<Blog.Group>
				<Blog.Headline>{p.problem.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.problem.body}</Blog.Paragraph>
			</Blog.Group>
		</Blog.Section>

		<Blog.Section>

			<Blog.Headline>{p.strategic_framing.anchor}</Blog.Headline>

			<Blog.Group>
				<Blog.Headline role="H4">{p.strategic_framing.scope.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.strategic_framing.scope.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "strategy-scope")]]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Headline role="H4">{p.strategic_framing.workflow.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.strategic_framing.workflow.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "strategy-workflow")]]} />
			</Blog.Group>


		</Blog.Section>

		<Blog.Section>

			<Blog.Headline>{p.tech_research.anchor}</Blog.Headline>

			<Blog.Group>
				<Blog.Headline role="H4">{p.tech_research.persona.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.tech_research.persona.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "strategy-persona")]]} />
			</Blog.Group>

			<Blog.Group>
				<Gallery.Wrapper>
					<Blog.Headline role="H4">{p.tech_research.engines.anchor}</Blog.Headline>

					<Blog.Group direction="ROW">
						<Blog.Paragraph>{p.tech_research.engines.challenge}</Blog.Paragraph>

						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "engine-glue")} />
						</Gallery.Row>

					</Blog.Group>
					<Blog.Paragraph>{p.tech_research.engines.body}</Blog.Paragraph>
					<List.Root>{p.tech_research.engines.list.map(item => <List.Item key={item}>{item}</List.Item>)}</List.Root>

					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "engine")} />
					</Gallery.Row>

				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>
				<Blog.Headline role="H4">{p.tech_research.system_design.anchor}</Blog.Headline>
				<Blog.Group>
					<Blog.Headline role="H5">{p.tech_research.system_design.expressivity.anchor}</Blog.Headline>
					<Blog.Paragraph>{p.tech_research.system_design.expressivity.body}</Blog.Paragraph>
					<Gallery.AutoLayout rows={[[imPath(pName, "expressivity")]]} />
				</Blog.Group>


				<Blog.Group direction="ROW">
					<Blog.Group>
						<Blog.Headline role="H5">{p.tech_research.system_design.module.anchor}</Blog.Headline>
						<Blog.Paragraph>{p.tech_research.system_design.module.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "module-action-reward")]]} />
				</Blog.Group>

				<Blog.Group >
					<Blog.Group>
						<Blog.Headline role="H5">{p.tech_research.system_design.architecture.anchor}</Blog.Headline>
						<Blog.Paragraph>{p.tech_research.system_design.architecture.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[
						imPath(pName, "module-action-reward-flow"),
						imPath(pName, "persona-action-reward-flow")
					]]} />
				</Blog.Group>
			</Blog.Group>

			<Blog.Group>
				<Blog.Headline role="H4">{p.tech_research.formulas.anchor}</Blog.Headline>

				<Blog.Group direction="ROW">
					<Blog.Group>
						<Blog.Headline role="H5">{p.tech_research.formulas.intro.anchor}</Blog.Headline>
						<Blog.Paragraph>{p.tech_research.formulas.intro.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "module-formulas")]]} />
				</Blog.Group>

				<Blog.Group>

					<Blog.Headline role="H5">{p.tech_research.formulas.impact.anchor}</Blog.Headline>
					<Blog.Paragraph>{p.tech_research.formulas.impact.body}</Blog.Paragraph>

					<Gallery.AutoLayout rows={[[imPath(pName, "module-desire-aversion")]]} />
				</Blog.Group>



				<Blog.Group direction="ROW">

					<Blog.Group>
						<Blog.Headline role="H5">{p.tech_research.formulas.tweaking.anchor}</Blog.Headline>
						<Blog.Paragraph>{p.tech_research.formulas.tweaking.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "normal-distribution")]]} />

				</Blog.Group>
			</Blog.Group>
		</Blog.Section>

		<Blog.Section>

			<Blog.Group>
				<Blog.Headline>{p.software_architecture.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.software_architecture.body}</Blog.Paragraph>
			</Blog.Group>

			<Blog.Group>
				<Blog.Headline role="H4">{p.software_architecture.optimizations.anchor}</Blog.Headline>

				<Blog.Group>
					<Blog.Headline role="H5">{p.software_architecture.resource_manager.anchor}</Blog.Headline>
					<Blog.Paragraph>{p.software_architecture.resource_manager.body}</Blog.Paragraph>
				</Blog.Group>

				<Blog.Group direction="ROW">

					<Blog.Group>
						<TradeOffList
							style="SUCCESS"
							heading={p.software_architecture.resource_manager.benefits.heading}
							leadingIcon={<PlusIcon />}
							items={p.software_architecture.resource_manager.benefits.items}
						/>

						<TradeOffList
							style="DANGER"
							heading={p.software_architecture.resource_manager.limits.heading}
							leadingIcon={<MinusIcon />}
							items={p.software_architecture.resource_manager.limits.items}
						/>

					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "software-rem")]]} />
				</Blog.Group>

				<Blog.Group>
					<Blog.Headline role="H5">{p.software_architecture.state_array.anchor}</Blog.Headline>
					<Blog.Paragraph>{p.software_architecture.state_array.body}</Blog.Paragraph>
				</Blog.Group>

				<Blog.Group direction="ROW">

					<Blog.Group>
						<TradeOffList
							style="SUCCESS"
							heading={p.software_architecture.state_array.benefits.heading}
							leadingIcon={<PlusIcon />}
							items={p.software_architecture.state_array.benefits.items}
						/>

						<TradeOffList
							style="DANGER"
							heading={p.software_architecture.state_array.limits.heading}
							leadingIcon={<MinusIcon />}
							items={p.software_architecture.state_array.limits.items}
						/>
					</Blog.Group>


					<Gallery.AutoLayout rows={[[imPath(pName, "software-state-based-array")]]} />

				</Blog.Group>

			</Blog.Group>

			<Blog.Group>
				<Blog.Headline role="H4">{p.software_architecture.semantics.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.software_architecture.semantics.body}</Blog.Paragraph>
				<Gallery.AutoLayout
					rows={[
						[imPath(pName, "software-semantic-box"),
						imPath(pName, "software-semantic-function")]
					]}
				/>
			</Blog.Group>

			<Blog.Group>
				<Blog.Headline role="H4">{p.software_architecture.immediate.anchor}</Blog.Headline>
				<Blog.Group direction="ROW">
					<Blog.Group>
						<Blog.Headline role="H5">{p.software_architecture.ui_caching.anchor}</Blog.Headline>
						<Blog.Paragraph>{p.software_architecture.ui_caching.body}</Blog.Paragraph>
					</Blog.Group>
					<Gallery.AutoLayout rows={[[imPath(pName, "software-immediate-mode-ui-pipeline")]]} />
				</Blog.Group>

				<Blog.Group direction="ROW">
					<Gallery.AutoLayout rows={[[imPath(pName, "software-immediate-mode-model-relationship")]]} />
					<Blog.Group>
						<Blog.Headline role="H5">{p.software_architecture.ui_splitting.anchor}</Blog.Headline>
						<Blog.Paragraph>{p.software_architecture.ui_splitting.body}</Blog.Paragraph>
					</Blog.Group>

				</Blog.Group>

				<Blog.Group>

					<Blog.Headline role="H5">{p.software_architecture.heatmap_flow.anchor}</Blog.Headline>
					<Blog.Paragraph>{p.software_architecture.heatmap_flow.body}</Blog.Paragraph>
					<Gallery.AutoLayout rows={[[imPath(pName, "software-immediate-mode-heatmap")]]} />

				</Blog.Group>
			</Blog.Group>

		</Blog.Section>


		<Blog.Section>

			<Blog.Headline>{p.ui_research.anchor}</Blog.Headline>

			<Blog.Group>
				<Blog.Headline role="H4">{p.ui_research.brainstorm.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.ui_research.brainstorm.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[[imPath(pName, "ui-global-brainstorm")]]} />
			</Blog.Group>

			<Blog.Group>

				<Blog.Headline role="H4">{p.ui_research.physical.anchor}</Blog.Headline>
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
					<Blog.Headline role="H4">{p.ui_research.documentation.anchor}</Blog.Headline>
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
							<Blog.Headline role="H4">{p.ui_research.gamified.anchor}</Blog.Headline>
							<Blog.Paragraph>{p.ui_research.gamified.body}</Blog.Paragraph></Blog.Group>

					</Blog.Group>

					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "ui-pod-brainstorm")} />
					</Gallery.Row>
				</Gallery.Wrapper>
			</Blog.Group>


		</Blog.Section>


		<Blog.Section>

			<Blog.Headline>{p.solution.anchor}</Blog.Headline>

			<Blog.Group>

				<Blog.Headline role="H4">{p.solution.brand.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.solution.brand.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "solution-brand-bento")]]} />

			</Blog.Group>

			<Blog.Group direction="ROW">

				<Blog.Group>
					<Blog.Headline role="H4">{p.solution.analysis.anchor}</Blog.Headline>
					<Blog.Paragraph>{p.solution.analysis.body}</Blog.Paragraph>
				</Blog.Group>
				<Gallery.AutoLayout rows={[[imPath(pName, "solution-process-flow")]]} />

			</Blog.Group>

			<Blog.Group>

				<Blog.Headline role="H4">{p.solution.tools.anchor}</Blog.Headline>
				<Blog.Paragraph>{p.solution.tools.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "software-immediate-mode")]]} />

			</Blog.Group>

			<Blog.Group>

				<Blog.Headline role="H4">{p.solution.software.anchor}</Blog.Headline>
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

		<Blog.TradeOffs headline={p.tradeoffs.anchor} items={p.tradeoffs.body.map(t => ({ ...t, heading: <TradeOffHeader items={t.heading} /> }))} />
		<Blog.Outcome headline={p.outcomes.anchor} items={p.outcomes.body} />



	</Template >);
}
