"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "@/components/project/template/template"
import { PROJECT_DESCRIPTOR_WEBGPU } from "@/lib/project-descriptors";
import { Blog } from "@/components/blog/blog";
import { BLOG_HEADLINE_STYLE } from "@/components/blog/constants";
import { Gallery } from "@/components/gallery/gallery";
import { ImpactRow } from "@/components/blog/impact";
import { RATIO_HALF } from "@/lib/constants";
import { imPath, statsVisual } from "@/lib/utils";

export default function Webgpu() {

	const dico = useDictionary();
	const p = dico.projects.webgpu;
	const pName = "webgpu";

	return (<Template project={PROJECT_DESCRIPTOR_WEBGPU}>

		<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />


		<Blog.Section>
			<Blog.Anchor role="H3" style={BLOG_HEADLINE_STYLE}>
				{p.overview.anchor}
			</Blog.Anchor>

			<Gallery.AutoLayout rows={[
				[{
					src: imPath(pName, "overview-1"),
					legend: p.overview.legend.engine,
					ratio: "720 / 439",
				}],
				[{
					src: imPath(pName, "overview-2"),
					legend: p.overview.legend.website
				}],
				[{
					src: imPath(pName, "overview-3"),
					legend: p.overview.legend.infographic
				}],
			]} />

		</Blog.Section>

		{/* --- Opportunity --- */}
		<Blog.Layout
			variant="TEXT_ONLY"
			anchor={p.opportunity.anchor}
			headline={p.opportunity.service.headline}
			body={p.opportunity.service.body}
		/>
		<Blog.Layout
			variant="TEXT_TOP_STAT_BOTTOM"
			headline={p.opportunity.benchmark.headline}
			body={p.opportunity.benchmark.body}
			visual={statsVisual(p.opportunity.benchmark.stat)}
		/>

		{/* --- Strategy --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.strategy.anchor}
			headline={p.strategy.paths.headline}
			body={p.strategy.paths.body}
			visual={{ kind: "gallery", rows: [[imPath(pName, "roadmap")]] }}
		/>
		<Blog.Layout
			variant="TEXT_RIGHT_GALLERY_LEFT"
			headline={p.strategy.focus.headline}
			body={p.strategy.focus.body}
			visual={{
				kind: "gallery", rows: [[{
					src: imPath(pName, "models-examples"),
					static: true,
					ratio: RATIO_HALF,
				}]]
			}}
		/>
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.strategy.flexibility.headline}
			body={p.strategy.flexibility.body}
			visual={{
				kind: "gallery", rows: [[{
					src: imPath(pName, "atomic-structure"),
					static: true,
					ratio: RATIO_HALF,
				}]]
			}}
			extra={{
				kind: "gallery", rows: [
					[{
						src: imPath(pName, "geomertry-node"),
						legend: p.strategy.flexibility.legend.geometry
					}],
					[{
						src: imPath(pName, "procedural"),
						legend: p.strategy.flexibility.legend.procedural
					}]
				]
			}}

		/>

		{/* --- Architecture --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.architecture.anchor}
			headline={p.architecture.performance.headline}
			body={p.architecture.performance.body}
			visual={{ kind: "gallery", rows: [[imPath(pName, "engine-stack")]] }}
		/>
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.architecture.split.headline}
			body={p.architecture.split.body}
			visual={{ kind: "gallery", rows: [[imPath(pName, "split-core-ui")]] }}
		/>

		{/* --- Resolution --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.resolution.anchor}
			headline={p.resolution.branding.headline}
			body={p.resolution.branding.body}
			visual={{
				kind: "gallery", rows: [
					[{
						src: imPath(pName, "kv-rejected"),
						legend: p.resolution.branding.legend.before
					}],
					[{
						src: imPath(pName, "kv-accepted"),
						legend: p.resolution.branding.legend.after
					}]
				]
			}}
		/>

		<Blog.Section>
			<Blog.Layout
				asChild
				variant="TEXT_ONLY"
				headline={p.resolution.speed.headline}
				body={p.resolution.speed.body}
			/>

			<Blog.Group>
				<Blog.Headline role="H5">{p.resolution.speed.ubo.headline}</Blog.Headline>
				<Blog.Paragraph>{p.resolution.speed.ubo.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[
					[
						{
							src: imPath(pName, "ubo-diagram-before"),
							legend: p.resolution.speed.ubo.legend.before,
							ratio: RATIO_HALF,

						},
						{
							src: imPath(pName, "ubo-diagram-after"),
							legend: p.resolution.speed.ubo.legend.after,
							ratio: RATIO_HALF,
						}
					]
				]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Headline role="H5">{p.resolution.speed.batch.headline}</Blog.Headline>
				<Blog.Paragraph>{p.resolution.speed.batch.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[
					[
						{
							src: imPath(pName, "batch-rendering-diagram-before"),
							legend: p.resolution.speed.batch.legend.before,
							ratio: RATIO_HALF,

						},
						{
							src: imPath(pName, "batch-rendering-diagram-after"),
							legend: p.resolution.speed.batch.legend.after,
							ratio: RATIO_HALF,
						}
					]
				]} />
			</Blog.Group>


			<Blog.Group>
				<Blog.Headline role="H5">{p.resolution.speed.result.headline}</Blog.Headline>
				<Blog.Paragraph>{p.resolution.speed.result.body}</Blog.Paragraph>

				<ImpactRow items={p.resolution.speed.stat as any} style="SOLID" />
			</Blog.Group>


		</Blog.Section>


		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.resolution.profiling.headline}
			body={p.resolution.profiling.body}
			visual={{
				kind: "gallery", rows: [
					[imPath(pName, "inspector")],
					[imPath(pName, "dynamic-rendering")]
				]
			}}
		/>

		{/* --- Outcome --- */}
		<Blog.Layout
			variant="TEXT_ONLY"
			anchor={p.outcome.anchor}
			headline={p.outcome.impact.headline}
			body={p.outcome.impact.body}
		/>

		{/* --- Learning --- */}
		<Blog.Learning anchor={p.learning.anchor} items={p.learning.next.list as any} />


	</Template >);
}
