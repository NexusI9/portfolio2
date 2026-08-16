"use client"

import { Blog } from "@components/blog/blog";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_USABILITY } from "../_lib/descriptors";
import { useDictionary } from "@/i18n/Context";
import { emptyVisual, imPath } from "../_lib/helper";
import { renderList } from "@components/list/helper";
import { BLOG_HEADLINE_STYLE } from "../../_components/blog/constants";

export default function Usability() {

	const dico = useDictionary();
	const p = dico.projects.usability;
	const pName = "usability";

	return (<Template project={PROJECT_DESCRIPTOR_USABILITY}>

		<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />


		<Blog.Section>
			<Blog.Anchor role="H3" style={BLOG_HEADLINE_STYLE}>
				{dico.projects.common.headline.overview}
			</Blog.Anchor>
		</Blog.Section>

		{/* --- Brief --- */}
		<Blog.Layout
			variant="TEXT_ONLY"
			anchor={p.brief.anchor}
			headline={p.brief.goal.headline}
			body={p.brief.goal.body}
		/>
		<Blog.Layout
			variant="TEXT_RIGHT_GALLERY_LEFT"
			headline={p.brief.priorities.headline}
			body={[...p.brief.priorities.body, renderList(p.brief.priorities.list)]}
			visual={emptyVisual}
			extra={emptyVisual} // Extra Section Below: Stats
		/>

		{/* --- Testing --- */}
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			anchor={p.testing.anchor}
			headline={p.testing.setup.headline}
			body={p.testing.setup.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_TOP_STAT_BOTTOM"
			headline={p.testing.findings.headline}
			body={p.testing.findings.body}
			visual={emptyVisual}
		/>

		{/* --- Analysis --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.analysis.anchor}
			headline={p.analysis.categories.headline}
			body={p.analysis.categories.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.analysis.fixes.headline}
			body={[...p.analysis.fixes.body, renderList(p.analysis.fixes.list), ...p.analysis.fixes.body2]}
			visual={emptyVisual}
		/>

		{/* --- Resolution --- */}
		<Blog.Layout
			variant="TEXT_ONLY"
			anchor={p.resolution.anchor}
			headline={p.resolution.trust.headline}
			body={p.resolution.trust.body}
		/>
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.resolution.feedback.headline}
			body={p.resolution.feedback.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_LEFT_STAT_RIGHT"
			headline={p.resolution.direction.headline}
			body={p.resolution.direction.body}
			visual={emptyVisual}
			extra={emptyVisual} // Extra Section Below: Gallery
		/>

		{/* --- Results --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.results.anchor}
			headline={p.results.impact.headline}
			body={p.results.impact.body}
			visual={emptyVisual}
		/>

		{/* --- Learning --- */}
		<Blog.Learning anchor={p.learning.anchor} items={p.learning.next.list as any} />

	</Template>);
}
