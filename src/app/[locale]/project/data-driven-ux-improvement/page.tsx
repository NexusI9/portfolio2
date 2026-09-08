"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "@/components/project/template/template"
import { PROJECT_DESCRIPTOR_USABILITY } from "@/lib/project-descriptors";
import { Blog } from "@/components/blog/blog";
import { BLOG_HEADLINE_STYLE } from "@/components/blog/constants";
import { Gallery } from "@/components/gallery/gallery";
import { RATIO_HALF, RATIO_SQUARE } from "@/lib/constants";
import { renderList } from "@/components/list/helper";
import { imPath, statsVisual } from "@/lib/utils";

export default function Usability() {

	const dico = useDictionary();
	const p = dico.projects.usability;
	const pName = "usability";

	return (<Template project={PROJECT_DESCRIPTOR_USABILITY}>

		<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />


		<Blog.Section>
			<Blog.Anchor role="H3" style={BLOG_HEADLINE_STYLE}>
				{p.overview.anchor}
			</Blog.Anchor>


			<Gallery.AutoLayout rows={[
				[{
					src: imPath(pName, "overview-1"),
					legend: p.overview.legend.website,
				}],
				[{
					src: imPath(pName, "overview-2"),
					legend: p.overview.legend.test
				}],
			]} />

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
			body={[...p.brief.priorities.body, renderList(p.brief.priorities.list, "FAIL")]}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "survey"),
						ratio: RATIO_HALF,
						static: true,
					}]]
			}}
			extra={statsVisual(p.brief.priorities.stat as any)}
		/>

		{/* --- Testing --- */}
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			anchor={p.testing.anchor}
			headline={p.testing.setup.headline}
			body={p.testing.setup.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "test-strategy"),
						ratio: RATIO_HALF,
						static: true,
					}]]
			}}
			extra={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "dashboard"),
						legend: p.testing.setup.legend.dashboard,
					}],
				[
					{
						src: imPath(pName, "sus"),
						legend: p.testing.setup.legend.sus,
					}]]
			}}
		/>
		<Blog.Layout
			variant="TEXT_TOP_STAT_BOTTOM"
			headline={p.testing.findings.headline}
			body={p.testing.findings.body}
			visual={statsVisual(p.testing.findings.stat as any)}
		/>

		{/* --- Analysis --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.analysis.anchor}
			headline={p.analysis.categories.headline}
			body={p.analysis.categories.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "categories"),
						legend: p.analysis.categories.legend,
					}]]
			}}
		/>
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.analysis.fixes.headline}
			body={p.analysis.fixes.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "visual-outcome"),
						ratio: RATIO_SQUARE,
						static: true,
					}]]
			}}
		/>

		{/* --- Resolution --- */}
		<Blog.Layout
			variant="TEXT_RIGHT_GALLERY_LEFT"
			anchor={p.resolution.anchor}
			headline={p.resolution.trust.headline}
			body={p.resolution.trust.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "psi"),
						ratio: RATIO_SQUARE,
						static: true,
					}]]
			}}
		/>
		<Blog.Layout
			variant="TEXT_LEFT_GALLERY_RIGHT"
			headline={p.resolution.feedback.headline}
			body={p.resolution.feedback.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "feedback"),
						ratio: RATIO_HALF,
						static: true,
					}]]
			}}
		/>
		<Blog.Layout
			variant="TEXT_RIGHT_GALLERY_LEFT"
			headline={p.resolution.direction.headline}
			body={p.resolution.direction.body}
			visual={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "demo"),
						ratio: RATIO_HALF,
						static: true,
					}]]
			}}
			extra={{
				kind: "gallery", rows: [[
					{
						src: imPath(pName, "index-a"),
						legend: p.resolution.direction.legend.classic,
						ratio: RATIO_HALF,
					},
					{
						src: imPath(pName, "index-b"),
						legend: p.resolution.direction.legend.modern,
						ratio: RATIO_HALF,
					}
				]]
			}}
		/>

		{/* --- Results --- */}
		<Blog.Layout
			variant="TEXT_TOP_GALLERY_BOTTOM"
			anchor={p.results.anchor}
			headline={p.results.impact.headline}
			body={p.results.impact.body}
			visual={{
				kind: "gallery", rows: [
					[
						{
							src: imPath(pName, "product-before"),
							ratio: RATIO_HALF,
							legend: p.results.impact.legend.product.before,
						},
						{
							src: imPath(pName, "product-after"),
							ratio: RATIO_HALF,
							legend: p.results.impact.legend.product.after,
						}
					],
					[
						{
							src: imPath(pName, "lead-before"),
							ratio: RATIO_HALF,
							legend: p.results.impact.legend.lead.before,
						},
						{
							src: imPath(pName, "lead-after"),
							ratio: RATIO_HALF,
							legend: p.results.impact.legend.lead.after,
						}
					],
					[
						{
							src: imPath(pName, "resources-before"),
							ratio: RATIO_HALF,
							legend: p.results.impact.legend.resources.before,
						},
						{
							src: imPath(pName, "resources-after"),
							ratio: RATIO_HALF,
							legend: p.results.impact.legend.resources.after,
						}
					],
					[
						{
							src: imPath(pName, "inquiry-before"),
							ratio: RATIO_HALF,
							legend: p.results.impact.legend.inquiry.before,
						},
						{
							src: imPath(pName, "inquiry-after"),
							ratio: RATIO_HALF,
							legend: p.results.impact.legend.inquiry.after,
						}
					]
				]
			}}
		/>

		{/* --- Learning --- */}
		<Blog.Learning anchor={p.learning.anchor} items={p.learning.next.list as any} />

	</Template>);
}
