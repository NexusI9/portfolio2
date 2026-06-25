"use client"

import { useState, useEffect, useRef } from "react";
import { slugify } from "@components/blog/helper";
import { extractHeadlines, flattenNodes, nodeContainsActive, nodeHasActiveDescendant } from "./helper";
import styles from "./table-of-content.module.scss";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { SIZE_ICON_SM } from "@/app/[locale]/_lib/constants";


interface TocProps {
	data: any;
	maxLevel?: number;
	collapsible?: boolean;
}


function ActiveChildDot() {
	return (
		<span
			aria-label="A child section is active"
			title="A child section is active"
			className={styles["active-dot"]}
		/>
	);
}

// ─── Recursive list ───────────────────────────────────────────────────────────

interface TocListProps {
	nodes: any[];
	maxLevel?: number;
	collapsible: boolean;
	activeId: string | null;
}

function TocList({ nodes, maxLevel, collapsible, activeId }: TocListProps) {
	const [collapsed, setCollapsed] = useState<Map<string, boolean>>(new Map());

	function toggle(headline: string) {
		setCollapsed((prev) => new Map(prev).set(headline, !(prev.has(headline) ? prev.get(headline)! : true)));
	}

	return (
		<ul className={styles["tree-container"]} data-level={nodes[0].level}>
			{nodes.map((node, i) => {
				if (maxLevel && node.level > maxLevel) return null;

				const id = slugify(node.headline);
				const hasChildren = node.children?.length > 0;
				const isCollapsed = collapsible && (collapsed.has(node.headline) ? collapsed.get(node.headline)! : true);


				// Is this node itself the active heading?
				const isSelf = activeId === id;

				// Non-collapsible: highlight parent when ANY descendant is active.
				const isActiveOrParentOfActive =
					!collapsible && nodeContainsActive(node, activeId);

				// Collapsible + collapsed: show dot when a child is active but hidden.
				const hasHiddenActiveChild =
					collapsible && isCollapsed && nodeHasActiveDescendant(node, activeId);

				const isHighlighted = isSelf || isActiveOrParentOfActive;

				return (
					<li key={i} className={styles.item}>
						<span className="flex items-center justify-between gap(--size-space-xl)">

							<a
								href={`#${id}`}
								className={styles["tree-label"]}
								aria-current={isSelf ? "location" : undefined}
								data-highlighted={isHighlighted}
							>
								<span className={styles["tree-label-content"]}>{node.headline}</span>

								{/* Dot indicator: collapsed parent with an active child */}
								{hasHiddenActiveChild && <ActiveChildDot />}
							</a>


							{/* Chevron toggle – collapsible mode only */}
							{collapsible && hasChildren && (maxLevel && node.level < maxLevel) ? (
								<button
									type="button"
									onClick={() => toggle(node.headline)}
									aria-expanded={!isCollapsed}
									aria-label={isCollapsed ? "Expand section" : "Collapse section"}
									className={styles["tree-chevron"]}
								>
									{isCollapsed ? <ChevronDownIcon size={SIZE_ICON_SM} /> : <ChevronUpIcon size={SIZE_ICON_SM} />}
								</button>
							) : collapsible ? (
								<span className="inline-block w-[16px] flex-no-shrink" />
							) : null}
						</span>

						{/* Children – hidden when collapsed */}
						{hasChildren && !isCollapsed && (
							<TocList
								nodes={node.children}
								maxLevel={maxLevel}
								collapsible={collapsible}
								activeId={activeId}
							/>
						)}
					</li>
				);
			})}
		</ul>
	);
}

// ─── Root component ───────────────────────────────────────────────────────────

export default function TableOfContents({
	data,
	maxLevel = 2,
	collapsible = false,
}: TocProps) {
	const tree = extractHeadlines(data);
	const [activeId, setActiveId] = useState<string | null>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const flat = flattenNodes(tree);
		if (!flat.length) return;

		observerRef.current?.disconnect();

		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveId(entry.target.id);
				});
			},
			{
				// Active zone = top 2/3 of the viewport
				rootMargin: "0px 0px -33.333% 0px",
				threshold: 0,
			}
		);

		const observer = observerRef.current;
		flat.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<TocList
			nodes={tree}
			maxLevel={maxLevel}
			collapsible={collapsible}
			activeId={activeId}
		/>
	);
}
