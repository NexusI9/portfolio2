"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_WEBGPU } from "../_lib/descriptors";
import { Blog } from "../../_components/blog/blog";
import { emptyVisual, imPath } from "../_lib/helper";
import { BLOG_HEADLINE_STYLE } from "../../_components/blog/constants";

export default function Webgpu() {

	const dico = useDictionary();
	const p = dico.projects.webgpu;
	const pName = "webgpu";

	return (<Template project={PROJECT_DESCRIPTOR_WEBGPU}>

		<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />


		<Blog.Section>
			<Blog.Anchor role="H3" style={BLOG_HEADLINE_STYLE}>
				{dico.projects.common.headline.overview}
			</Blog.Anchor>
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
			visual={emptyVisual}
		/>

		{/* --- Strategy --- */}
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			anchor={p.strategy.anchor}
			headline={p.strategy.paths.headline}
			body={p.strategy.paths.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_RIGHT_GALLERY_LEFT"
			headline={p.strategy.focus.headline}
			body={p.strategy.focus.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.strategy.flexibility.headline}
			body={p.strategy.flexibility.body}
			visual={emptyVisual}
		/>

		{/* --- Architecture --- */}
		<Blog.Layout
			variant="TEXT_ONLY"
			anchor={p.architecture.anchor}
			headline={p.architecture.performance.headline}
			body={p.architecture.performance.body}
		/>
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.architecture.split.headline}
			body={p.architecture.split.body}
			visual={emptyVisual}
		/>

		{/* --- Resolution --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.resolution.anchor}
			headline={p.resolution.branding.headline}
			body={p.resolution.branding.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_TOP_STAT_BOTTOM"
			headline={p.resolution.speed.headline}
			body={p.resolution.speed.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.resolution.profiling.headline}
			body={p.resolution.profiling.body}
			visual={emptyVisual}
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
