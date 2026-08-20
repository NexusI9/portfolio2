"use client"

import { Blog } from "@components/blog/blog";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_STYLE_STUDIO } from "../_lib/descriptors";
import { useDictionary } from "@/i18n/Context";
import { emptyVisual, statsVisual } from "../_lib/helper";
import { renderList } from "@components/list/helper";
import { BLOG_HEADLINE_STYLE } from "../../_components/blog/constants";

export default function Workflow() {
	const dico = useDictionary();
	const p = dico.projects.workflow;

	return (
		<Template project={PROJECT_DESCRIPTOR_STYLE_STUDIO}>

			<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />

			<Blog.Section>
				<Blog.Anchor role="H3" style={BLOG_HEADLINE_STYLE}>
					{dico.projects.common.headline.overview}
				</Blog.Anchor>
			</Blog.Section>

			{/* --- Challenge --- */}
			<Blog.Layout
				variant="TEXT_ONLY"
				anchor={p.challenge.anchor}
				headline={p.challenge.pain.headline}
				body={[...p.challenge.pain.body, renderList(p.challenge.pain.list, "FAIL")]}
			/>
			<Blog.Layout
				variant="TEXT_LEFT_GALLERY_RIGHT"
				headline={p.challenge.source.headline}
				body={p.challenge.source.body}
				visual={emptyVisual}
			/>

			{/* --- Solution --- */}
			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				anchor={p.solution.anchor}
				headline={p.solution.split.headline}
				body={[...p.solution.split.body, renderList(p.solution.split.list)]}
				visual={emptyVisual}
			/>
			<Blog.Layout
				variant="TEXT_RIGHT_GALLERY_LEFT"
				headline={p.solution.tokens.headline}
				body={p.solution.tokens.body}
				visual={statsVisual(p.solution.tokens.stat as any)}
			/>
			<Blog.Layout
				variant="TEXT_LEFT_GALLERY_RIGHT"
				headline={p.solution.prototype.headline}
				body={p.solution.prototype.body}
				visual={emptyVisual}
			/>
			<Blog.Layout
				variant="TEXT_RIGHT_GALLERY_LEFT"
				headline={p.solution.copy.headline}
				body={p.solution.copy.body}
				visual={emptyVisual}
			/>

			{/* --- Resolution --- */}
			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				anchor={p.resolution.anchor}
				headline={p.resolution.layout.headline}
				body={p.resolution.layout.body}
				visual={emptyVisual}
			/>
			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				headline={p.resolution.tagging.headline}
				body={p.resolution.tagging.body}
				visual={emptyVisual}
			/>
			<Blog.Layout
				variant="TEXT_LEFT_GALLERY_RIGHT"
				headline={p.resolution.latency.headline}
				body={p.resolution.latency.body}
				visual={statsVisual(p.resolution.latency.stat as any)}
			/>

			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				headline={p.resolution.tab.headline}
				body={p.resolution.tab.body}
				visual={emptyVisual}
			/>

			{/* --- Rollout --- */}
			<Blog.Layout
				variant="TEXT_RIGHT_GALLERY_LEFT"
				anchor={p.rollout.anchor}
				headline={p.rollout.phasing.headline}
				body={p.rollout.phasing.body}
				visual={emptyVisual}
			/>
			<Blog.Layout
				variant="TEXT_LEFT_GALLERY_RIGHT"
				headline={p.rollout.adoption.headline}
				body={p.rollout.adoption.body}
				visual={emptyVisual}
			/>

			{/* --- Outcome --- */}
			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				anchor={p.outcome.anchor}
				headline={p.outcome.results.headline}
				body={p.outcome.results.body}
				visual={emptyVisual}
			/>

			{/* --- Learning --- */}
			<Blog.Learning anchor={p.learning.anchor} items={p.learning.next.list as any} />

		</Template>
	);
}
