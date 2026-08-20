"use client"

import { useDictionary } from "@/i18n/Context";
import { Blog } from "../../_components/blog/blog";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER } from "../_lib/descriptors";
import { emptyVisual } from "../_lib/helper";
import { renderList } from "@components/list/helper";
import { BLOG_HEADLINE_STYLE } from "../../_components/blog/constants";

export default function EmotionalMapper() {

	const dico = useDictionary();
	const p = dico.projects.pulse;
	const pName = "pulse";

	return (<Template project={PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER}>


		<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />

		<Blog.Section>
			<Blog.Anchor role="H3" style={BLOG_HEADLINE_STYLE}>
				{dico.projects.common.headline.overview}
			</Blog.Anchor>
		</Blog.Section>

		{/* --- Challenge --- */}
		<Blog.Layout
			variant="TEXT_RIGHT_GALLERY_LEFT"
			anchor={p.challenge.anchor}
			headline={p.challenge.genz.headline}
			body={p.challenge.genz.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.challenge.personas.headline}
			body={p.challenge.personas.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.challenge.industry.headline}
			body={p.challenge.industry.body}
			visual={emptyVisual}
		/>

		{/* --- Strategy --- */}
		<Blog.Layout
			variant="TEXT_TOP_STAT_BOTTOM"
			anchor={p.strategy.anchor}
			headline={p.strategy.cultures.headline}
			body={p.strategy.cultures.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.strategy.gamification.headline}
			body={p.strategy.gamification.body}
			visual={emptyVisual}
			extra={emptyVisual} // Extra Section Below: Stats
		/>

		{/* --- Rewards System --- */}
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			anchor={p.rewards.anchor}
			headline={p.rewards.pillars.headline}
			body={[...p.rewards.pillars.body, renderList(p.rewards.pillars.list), ...p.rewards.pillars.body2]}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_RIGHT_GALLERY_LEFT"
			headline={p.rewards.balance.headline}
			body={p.rewards.balance.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.rewards.tenure.headline}
			body={p.rewards.tenure.body}
			visual={emptyVisual}
		/>

		{/* --- Resolution --- */}
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			anchor={p.resolution.anchor}
			headline={p.resolution.reframe.headline}
			body={p.resolution.reframe.body}
			visual={emptyVisual}
		/>

		<Blog.Layout
			variant="TEXT_RIGHT_GALLERY_LEFT"
			headline={p.resolution.demo.headline}
			body={p.resolution.demo.body}
			visual={emptyVisual}
		/>


		{/* --- Features --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.features.anchor}
			headline={p.features.restructure.headline}
			body={p.features.restructure.body}
			visual={emptyVisual}
		/>
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.features.engines.headline}
			body={[...p.features.engines.body, renderList(p.features.engines.list), ...p.features.engines.body2]}
			visual={emptyVisual}
		/>


		{/* --- Design System --- */}
		<Blog.Layout
			variant="TEXT_LEFT_STAT_RIGHT"
			anchor={p.design.anchor}
			headline={p.design.extend.headline}
			body={p.design.extend.body}
			visual={emptyVisual}
			extra={emptyVisual} // Extra Section Below: Gallery
		/>

		{/* --- Results --- */}
		<Blog.Layout
			variant="TEXT_ONLY"
			anchor={p.results.anchor}
			headline={p.results.deals.headline}
			body={p.results.deals.body}
		/>

		{/* --- Learning --- */}
		<Blog.Learning anchor={p.learning.anchor} items={p.learning.next.list as any} />


	</Template >);
}
