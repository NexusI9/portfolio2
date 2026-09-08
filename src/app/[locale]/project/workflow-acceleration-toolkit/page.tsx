"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "@/components/project/template/template"
import { PROJECT_DESCRIPTOR_STYLE_STUDIO } from "@/lib/project-descriptors";
import { Blog } from "@/components/blog/blog";
import { BLOG_HEADLINE_STYLE } from "@/components/blog/constants";
import { Gallery } from "@/components/gallery/gallery";
import { RATIO_HALF, RATIO_SQUARE } from "@/lib/constants";
import { renderList } from "@/components/list/helper";
import { emptyVisual, imPath } from "@/lib/utils";


export default function Workflow() {
	const dico = useDictionary();
	const p = dico.projects.workflow;
	const pName = "workflow";

	return (
		<Template project={PROJECT_DESCRIPTOR_STYLE_STUDIO}>

			<Blog.Impact headline={p.impact.anchor} items={p.impact.items as any} />

			<Blog.Section>
				<Blog.Anchor role="H3" style={BLOG_HEADLINE_STYLE}>
					{p.overview.anchor}
				</Blog.Anchor>

				<Gallery.AutoLayout rows={[
					[{
						src: imPath(pName, "overview-1"),
						legend: p.overview.legend.style,
					}],
					[{
						src: imPath(pName, "overview-2"),
						legend: p.overview.legend.sitemap
					}],
					[{
						src: imPath(pName, "overview-3"),
						legend: p.overview.legend.text
					}],
				]} />
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
				visual={{
					kind: "gallery", rows: [[{
						src: imPath(pName, "figma-core"),
						ratio: RATIO_HALF,
						static: true,
					}]]
				}}
			/>

			{/* --- Solution --- */}
			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				anchor={p.solution.anchor}
				headline={p.solution.split.headline}
				body={[...p.solution.split.body, renderList(p.solution.split.list)]}
				visual={{ kind: "gallery", rows: [[imPath(pName, "plugin-functions")]] }}
			/>
			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				headline={p.solution.tokens.headline}
				body={p.solution.tokens.body}
				visual={{
					kind: "gallery", rows: [[{
						src: imPath(pName, "benchmark"),
						legend: p.solution.tokens.legend,
					}]]
				}}
			/>
			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				headline={p.solution.prototype.headline}
				body={p.solution.prototype.body}
				visual={
					{
						kind: "gallery",
						rows: [[
							{
								src: imPath(pName, "flow-before"),
								ratio: RATIO_HALF,
								legend: p.solution.prototype.legend.before
							},
							{
								src: imPath(pName, "flow-after"),
								ratio: RATIO_HALF,
								legend: p.solution.prototype.legend.after
							}
						]]
					}
				}
			/>
			<Blog.Layout
				variant="TEXT_RIGHT_GALLERY_LEFT"
				headline={p.solution.copy.headline}
				body={p.solution.copy.body}
				visual={{
					kind: "gallery", rows: [[{
						src: imPath(pName, "structure"),
						static: true,
						ratio: RATIO_SQUARE
					}]]
				}}
			/>

			{/* --- Resolution --- */}
			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				anchor={p.resolution.anchor}
				headline={p.resolution.layout.headline}
				body={p.resolution.layout.body}
				visual={{
					kind: "gallery", rows: [
						[{
							src: imPath(pName, "layout-before"),
							legend: p.resolution.layout.legend.before
						}],
						[{
							src: imPath(pName, "layout-after"),
							legend: p.resolution.layout.legend.after
						}]
					]
				}}
			/>


			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				headline={p.resolution.tab.headline}
				body={p.resolution.tab.body}
				visual={{
					kind: "gallery", rows: [
						[{
							src: imPath(pName, "tab-before"),
							legend: p.resolution.tab.legend.before,
							ratio: RATIO_HALF
						},
						{
							src: imPath(pName, "tab-after"),
							legend: p.resolution.tab.legend.after,
							ratio: RATIO_HALF
						}
						],
					]
				}}
			/>

			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				headline={p.resolution.tagging.headline}
				body={p.resolution.tagging.body}
				visual={{
					kind: "gallery", rows: [
						[{
							src: imPath(pName, "tag-before"),
							legend: p.resolution.tagging.legend.before
						}],
						[{
							src: imPath(pName, "tag-after"),
							legend: p.resolution.tagging.legend.after
						}]
					]
				}}
			/>
			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				headline={p.resolution.latency.headline}
				body={p.resolution.latency.body}
				visual={{
					kind: "gallery", rows: [
						[{
							src: imPath(pName, "load-benchmark"),
							ratio: "144 / 58"
						}],
					]
				}}
			/>


			{/* --- Rollout --- */}
			<Blog.Layout
				variant="TEXT_RIGHT_GALLERY_LEFT"
				anchor={p.rollout.anchor}
				headline={p.rollout.phasing.headline}
				body={p.rollout.phasing.body}
				visual={{
					kind: "gallery", rows: [
						[{
							src: imPath(pName, "phases"),
							static: true,
							ratio: RATIO_HALF
						}],
					]
				}}
			/>

			<Blog.Layout
				variant="TEXT_TOP_GALLERY_BOTTOM"
				headline={p.rollout.ai.headline}
				body={p.rollout.ai.body}
				visual={{
					kind: "gallery", rows: [
						[{ src: imPath(pName, "ai"), ratio: "144 / 69" }],
					]
				}}
			/>

			<Blog.Layout
				variant="TEXT_LEFT_GALLERY_RIGHT"
				headline={p.rollout.adoption.headline}
				body={p.rollout.adoption.body}
				visual={{
					kind: "gallery", rows: [
						[{ src: imPath(pName, "docu"), static: true, ratio: RATIO_HALF }],
					]
				}}
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
