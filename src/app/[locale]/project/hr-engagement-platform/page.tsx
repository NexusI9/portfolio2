"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "@/components/project/template/template"
import { PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER } from "@/lib/project-descriptors";
import { Blog } from "@/components/blog/blog";
import { BLOG_HEADLINE_STYLE } from "@/components/blog/constants";
import { Gallery } from "@/components/gallery/gallery";
import { RATIO_HALF, RATIO_SQUARE } from "@/lib/constants";
import { renderList } from "@/components/list/helper";
import { imPath } from "@/lib/utils";

export default function EmotionalMapper() {

	const dico = useDictionary();
	const p = dico.projects.pulse;
	const pName = "pulse";

	return (<Template project={PROJECT_DESCRIPTOR_EMOTIONAL_MAPPER}>


		<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />

		<Blog.Section>
			<Blog.Anchor role="H3" style={BLOG_HEADLINE_STYLE}>
				{p.overview.anchor}
			</Blog.Anchor>

			<Gallery.AutoLayout rows={[
				[{
					src: imPath(pName, "overview-1"),
					legend: p.overview.legend.app,
				}],
				[{
					src: imPath(pName, "overview-2"),
					legend: p.overview.legend.system
				}],
				[{
					src: imPath(pName, "overview-3"),
					legend: p.overview.legend.flow
				}],
			]} />
		</Blog.Section>

		{/* --- Challenge --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.challenge.anchor}
			headline={p.challenge.attract.headline}
			body={p.challenge.attract.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "persona"),
						static: true,
						ratio: "1440 / 580"
					}]]
			}}
		/>

		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.challenge.cultures.headline}
			body={p.challenge.cultures.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "toxic"),
						static: true
					}]]
			}}
		/>


		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.challenge.industry.headline}
			body={p.challenge.industry.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "ocai"),
						static: true,
						ratio: RATIO_HALF,
					}]]
			}}
			extra={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "matrice"),
						legend: p.challenge.industry.legend,
					}]]
			}}
		/>


		{/* --- Rewards System --- */}
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			anchor={p.rewards.anchor}
			headline={p.rewards.gamification.headline}
			body={p.rewards.gamification.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "gami-articles"),
						static: true,
						ratio: RATIO_SQUARE,
					}]]
			}}
		/>

		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.rewards.tenure.headline}
			body={p.rewards.tenure.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "reward"),
						ratio: "1440 / 680"
					}]]
			}}
		/>



		{/* --- Design System --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.design.anchor}
			headline={p.design.extend.headline}
			body={p.design.extend.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "reuse-components"),
						ratio: RATIO_HALF,
						legend: p.design.extend.legend.system,
					},
					{
						src: imPath(pName, "reuse-strategy"),
						ratio: RATIO_HALF,
						legend: p.design.extend.legend.strategy,
					}]]
			}}
		/>

		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.design.engines.headline}
			body={[...p.design.engines.body, renderList(p.design.engines.list), ...p.design.engines.body2]}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "engines")
					}]]
			}}
		/>


		{/* --- Resolution --- */}
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			anchor={p.resolution.anchor}
			headline={p.resolution.reframe.headline}
			body={p.resolution.reframe.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "reward-driven"),
						static: true,
						ratio: RATIO_HALF,
					}]]
			}}
		/>

		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.resolution.demo.headline}
			body={p.resolution.demo.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "prototype-before"),
						ratio: RATIO_HALF,
						legend: p.resolution.demo.legend.before,
					},
					{
						src: imPath(pName, "prototype-after"),
						ratio: RATIO_HALF,
						legend: p.resolution.demo.legend.after,
					}]]
			}}
		/>



		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			headline={p.resolution.restructure.headline}
			body={p.resolution.restructure.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "feature-before"),
						ratio: RATIO_HALF,
						legend: p.resolution.restructure.legend.before,
					},
					{
						src: imPath(pName, "feature-after"),
						ratio: RATIO_HALF,
						legend: p.resolution.restructure.legend.after,
					}]]
			}}
		/>


		{/* TODO <Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.resolution.balance.headline}
			body={p.resolution.balance.body}
			visual={emptyVisual}
			/>*/}


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
