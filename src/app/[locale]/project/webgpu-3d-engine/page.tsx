"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_WEBGPU } from "../_lib/descriptors";
import { Blog } from "../../_components/blog/blog";
import { Gallery } from "../../_components/gallery/gallery";
import { imPath } from "../_lib/helper";
import TradeOffHeader from "../_components/tradeoff-header/tradeoff-header";

export default function WebgpuEngine() {

	const dico = useDictionary();
	const p = dico.projects.webgpu;
	const pName = "webgpu";

	return (<Template project={PROJECT_DESCRIPTOR_WEBGPU}>

		<Blog.Section>

			<Blog.Group>
				<Blog.Heading>{p.problem.headline}</Blog.Heading>
				<Blog.Paragraph>{p.problem.body}</Blog.Paragraph>
			</Blog.Group>

		</Blog.Section>

		<Blog.Constraints headline={p.constraints.headline} items={p.constraints.body} />

		<Blog.Section>
			<Blog.Heading>{p.exploration.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.exploration.ui_research.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.ui_research.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "ui-research")]]} />
			</Blog.Group>

			<Blog.Heading role="H4">{p.exploration.tech_research.headline}</Blog.Heading>

			<Blog.Group direction="ROW">

				<Blog.Group>
					<Blog.Heading role="H5">{p.exploration.tech_research.dod.headline}</Blog.Heading>
					<Blog.Paragraph>{p.exploration.tech_research.dod.body}</Blog.Paragraph>
				</Blog.Group>
				<Gallery.AutoLayout rows={[[imPath(pName, "packet")]]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H5">{p.exploration.tech_research.material.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.tech_research.material.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "material"), imPath(pName, "pso")]]} />

			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H5">{p.exploration.tech_research.scene_pool.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.tech_research.scene_pool.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "scene-pool"), imPath(pName, "ressource-manager")]]} />

			</Blog.Group>

			<Blog.Group direction="ROW">

				<Blog.Group>
					<Blog.Heading role="H5">{p.exploration.tech_research.callback.headline}</Blog.Heading>
					<Blog.Paragraph>{p.exploration.tech_research.callback.body}</Blog.Paragraph>
				</Blog.Group>
				<Gallery.AutoLayout rows={[[imPath(pName, "extended-callback")]]} />
			</Blog.Group>

			<Blog.Group>

				<Gallery.Wrapper>

					<Blog.Group direction="ROW">

						<Blog.Group>
							<Blog.Heading role="H5">{p.exploration.tech_research.mbin.headline}</Blog.Heading>
							<Blog.Paragraph>{p.exploration.tech_research.mbin.body}</Blog.Paragraph>
						</Blog.Group>

						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "loading-object-method")} />
						</Gallery.Row>
					</Blog.Group>
					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "gltf-mbin-snapshot")} />
					</Gallery.Row>
					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "mbin-benchmark-load-time")} />
						<Gallery.Image src={imPath(pName, "mbin-benchmark-file-size")} />
					</Gallery.Row>


				</Gallery.Wrapper>
			</Blog.Group>



			<Blog.Group>

				<Gallery.Wrapper>



					<Blog.Group>
						<Blog.Heading role="H5">{p.exploration.tech_research.ambient.headline}</Blog.Heading>
						<Blog.Paragraph>{p.exploration.tech_research.ambient.body}</ Blog.Paragraph>
					</Blog.Group>

					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "ao")} />
					</Gallery.Row>
					<Gallery.Mosaic images={[
						imPath(pName, "AO-benchmark"),
						imPath(pName, "AO-global-benchmark"),
						imPath(pName, "AO-local-benchmark")]}
					/>

				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>
				<Gallery.Wrapper>
					<Blog.Group direction="ROW">
						<Blog.Group>
							<Blog.Heading role="H5">{p.exploration.tech_research.reflection.headline}</Blog.Heading>
							<Blog.Paragraph>{p.exploration.tech_research.reflection.body}</ Blog.Paragraph>
						</Blog.Group>

						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "reflection-3")} />
						</Gallery.Row>
					</Blog.Group>
					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "reflection-1")} />
						<Gallery.Image src={imPath(pName, "reflection-2")} />
					</Gallery.Row>


				</Gallery.Wrapper>
			</Blog.Group>
		</Blog.Section >

		<Blog.Section>

			<Blog.Heading>{p.solution.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.solution.ubo.headline}</Blog.Heading>
				<Blog.Paragraph>{p.solution.ubo.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[[
					imPath(pName, "UBO-flow"),
					imPath(pName, "UBO-graph"),
				]]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.solution.segmentation.headline}</Blog.Heading>
				<Blog.Group>
					<Blog.Heading role="H5">{p.solution.segmentation.systems.headline}</Blog.Heading>
					<Blog.Paragraph>{p.solution.segmentation.systems.body}</Blog.Paragraph>

					<Gallery.AutoLayout rows={[[
						imPath(pName, "core-system-segmentation"),
					]]} />
				</Blog.Group>

				<Blog.Group direction="ROW">
					<Blog.Group>
						<Blog.Heading role="H5">{p.solution.segmentation.core_split.headline}</Blog.Heading>
						<Blog.Paragraph>{p.solution.segmentation.core_split.body}</Blog.Paragraph>
					</Blog.Group>

					<Gallery.AutoLayout rows={[[
						imPath(pName, "core-gui-segmentation"),
					]]} />
				</Blog.Group>
			</Blog.Group>

			<Blog.Group>

				<Gallery.Wrapper>

					<Blog.Heading role="H4">{p.solution.batch.headline}</Blog.Heading>

					<Blog.Group direction="ROW">
						<Blog.Group>
							<Blog.Heading role="H5">{p.solution.batch.hash.headline}</Blog.Heading>
							<Blog.Paragraph>{p.solution.batch.hash.body}</Blog.Paragraph>
						</Blog.Group>
						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "batch-hash-structure")} />
						</Gallery.Row>
					</Blog.Group>

					<Blog.Heading role="H5">{p.solution.batch.organize.headline}</Blog.Heading>
					<Blog.Paragraph>{p.solution.batch.organize.body}</Blog.Paragraph>

					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "renderer")} />
						<Gallery.Image src={imPath(pName, "batch-perf")} />
					</Gallery.Row>

				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>

				<Gallery.Wrapper>

					<Blog.Heading role="H4">{p.solution.cold_hot.headline}</Blog.Heading>

					<Blog.Group direction="ROW">
						<Blog.Group>
							<Blog.Heading role="H5">{p.solution.cold_hot.semantic.headline}</Blog.Heading>
							<Blog.Paragraph>{p.solution.cold_hot.semantic.body}</Blog.Paragraph>
						</Blog.Group>
						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "hot-cold-path-semantic")} />
						</Gallery.Row>
					</Blog.Group>

					<Blog.Group direction="ROW">
						<Blog.Group>
							<Blog.Heading role="H5">{p.solution.cold_hot.process.headline}</Blog.Heading>
							<Blog.Paragraph>{p.solution.cold_hot.process.body}</Blog.Paragraph>
						</Blog.Group>
						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "hot-cold-path")} />
						</Gallery.Row>
					</Blog.Group>

				</Gallery.Wrapper>

			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.solution.resource_manager.headline}</Blog.Heading>
				<Blog.Paragraph>{p.solution.resource_manager.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[[imPath(pName, "core-rem-registry")]]} />
			</Blog.Group >

			<Blog.Group>
				<Gallery.Wrapper>
					<Blog.Heading role="H4">{p.solution.dynamic_rendering.headline}</Blog.Heading>
					<Blog.Paragraph>{p.solution.dynamic_rendering.body}</Blog.Paragraph>

					<Gallery.AutoLayout noWrapper rows={[
						[imPath(pName, "core-dynamic-rendering")]
					]} />

					<Blog.Heading role="H5">{p.solution.dynamic_rendering.topology.headline}</Blog.Heading>
					<Blog.Paragraph>{p.solution.dynamic_rendering.topology.body}</Blog.Paragraph>
					<Gallery.AutoLayout noWrapper rows={[
						[
							imPath(pName, "core-dynamic-rendering-route"),
							imPath(pName, "core-dynamic-rendering-topo"),
							imPath(pName, "core-dynamic-rendering-anchor")
						]
					]} />

				</Gallery.Wrapper>
			</Blog.Group >

			<Blog.Group>
				<Blog.Heading role="H4">{p.solution.ui_presentation.headline}</Blog.Heading>
				<Gallery.AutoLayout rows={[
					[
						imPath(pName, "UI-postfx"),
					],
					[
						imPath(pName, "UI-editor"),
						imPath(pName, "UI-profiling")
					],
					[
						imPath(pName, "UI-shadowmap"),
						imPath(pName, "UI-dynamic-rendering"),
					],
					[
						imPath(pName, "UI-rendering"),
					],
					[
						imPath(pName, "UI-registry"),
						imPath(pName, "UI-log"),
					],
					[
						imPath(pName, "UI-treeview"),
						imPath(pName, "UI-icons"),
					],
					[
						imPath(pName, "UI-gizmo"),
					]
				]} />
			</Blog.Group>
		</Blog.Section >


		<Blog.TradeOffs headline={p.tradeoffs.headline} items={p.tradeoffs.body.map(t => ({ ...t, heading: <TradeOffHeader items={t.heading} /> }))} />

		<Blog.Outcome headline={p.outcomes.headline} items={p.outcomes.body} />
	</Template >);
}
