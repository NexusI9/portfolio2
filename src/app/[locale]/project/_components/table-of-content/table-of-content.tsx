"use client"

import { useState, useEffect, useRef } from "react";
import { slugify } from "@components/blog/helper";
import { extractHeadlines, flattenNodes, nodeContainsActive, nodeHasActiveDescendant } from "./helper";
import styles from "./table-of-content.module.scss";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";


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
	const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

	function toggle(headline: string) {
		setCollapsed((prev) => ({ ...prev, [headline]: !prev[headline] }));
	}

	const padding = nodes[0].level === 0 ? "--size-space-small" : "--size-space-extra-large-2";

	return (
		<ul className={`pl-(${padding}) flex flex-col gap-(--size-space-small)`}>
			{nodes.map((node, i) => {
				if (maxLevel && node.level > maxLevel) return null;

				const id = slugify(node.headline);
				const hasChildren = node.children?.length > 0;
				const isCollapsed = collapsible && !!collapsed[node.headline];

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
						<span className="flex items-center gap(--size-space-xl)">
							{/* Chevron toggle – collapsible mode only */}
							{collapsible && hasChildren ? (
								<button
									type="button"
									onClick={() => toggle(node.headline)}
									aria-expanded={!isCollapsed}
									aria-label={isCollapsed ? "Expand section" : "Collapse section"}
									className={styles["tree-chevron"]}
								>
									{isCollapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
								</button>
							) : collapsible ? (
								<span className="inline-block w-[16px] flex-no-shrink" />
							) : null}

							<a
								href={`#${id}`}
								className={styles["tree-label"]}
								aria-current={isSelf ? "location" : undefined}
								data-highlighted={isHighlighted}
							>
								{node.headline}
							</a>

							{/* Dot indicator: collapsed parent with an active child */}
							{hasHiddenActiveChild && <ActiveChildDot />}
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
