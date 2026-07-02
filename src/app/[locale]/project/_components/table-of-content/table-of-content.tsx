"use client"

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { slugify } from "@components/blog/helper";
import { extractHeadlines, flattenNodes, nodeContainsActive, nodeHasActiveDescendant } from "./helper";
import styles from "./table-of-content.module.scss";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { SIZE_ICON_SM } from "@/app/[locale]/_lib/constants";


// ─── Types ────────────────────────────────────────────────────────────────────

export type TocCollapsedMap = Map<string, boolean>;

type TocAction = "COLLAPSE_ALL" | "EXPAND_ALL" | "COLLAPSE_NODE" | "EXPAND_NODE";

interface TocContextValue {
	tree: any[];
	activeId: string | null;
	collapsed: TocCollapsedMap;
	setCollapsed: React.Dispatch<React.SetStateAction<TocCollapsedMap>>;
	maxLevel: number;
	collapsible: boolean;
	onCollapseChange?: (collapsed: TocCollapsedMap) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const TocContext = createContext<TocContextValue | null>(null);

function useTocContext() {
	const ctx = useContext(TocContext);
	if (!ctx) throw new Error("TableOfContents: must be used inside <TableOfContents.Root>");
	return ctx;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ActiveChildDot() {
	return (
		<span
			aria-label="A child section is active"
			title="A child section is active"
			className={styles["active-dot"]}
		/>
	);
}

// ─── TocList (internal) ───────────────────────────────────────────────────────

function TocList({ nodes }: { nodes: any[] }) {
	const { maxLevel, collapsible, activeId, collapsed, setCollapsed, onCollapseChange } = useTocContext();

	function toggle(headline: string) {
		const current = collapsed.has(headline) ? collapsed.get(headline)! : true;
		const updated = new Map(collapsed).set(headline, !current);

		setCollapsed(updated);
		onCollapseChange?.(updated);
	}

	return (
		<ul className={styles["tree-container"]} data-level={nodes[0].level}>
			{nodes.map((node, i) => {
				if (maxLevel && node.level > maxLevel) return null;


				const id = slugify(node.headline);
				const hasChildren = node.children?.length > 0 && node.level < maxLevel;
				const isCollapsed = collapsible && (collapsed.has(node.headline) ? collapsed.get(node.headline)! : true);

				const isSelf = activeId === id;
				const isActiveOrParentOfActive = !collapsible && nodeContainsActive(node, activeId);
				const hasHiddenActiveChild = hasChildren
					&& collapsible
					&& isCollapsed
					&& nodeHasActiveDescendant(node, activeId);

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
								{hasHiddenActiveChild && <ActiveChildDot />}
							</a>

							{collapsible && hasChildren && (maxLevel && node.level < maxLevel) ? (
								<button
									type="button"
									onClick={() => toggle(node.headline)}
									aria-expanded={!isCollapsed}
									aria-label={isCollapsed ? "Expand section" : "Collapse section"}
									className={styles["tree-chevron"]}
								>
									{isCollapsed
										? <ChevronDownIcon size={SIZE_ICON_SM} />
										: <ChevronUpIcon size={SIZE_ICON_SM} />}
								</button>
							) : collapsible ? (
								<span className="inline-block w-[16px] flex-no-shrink" />
							) : null}
						</span>

						{hasChildren && !isCollapsed && (
							<TocList nodes={node.children} />
						)}
					</li>
				);
			})}
		</ul>
	);
}

// ─── Root ─────────────────────────────────────────────────────────────────────

interface RootProps {
	data: any;
	maxLevel?: number;
	collapsible?: boolean;
	onCollapseChange?: (collapsed: TocCollapsedMap) => void;
	children: React.ReactNode;
}

function Root({ data, maxLevel = 2, collapsible = false, onCollapseChange, children }: RootProps) {
	const tree = extractHeadlines(data);
	const [activeId, setActiveId] = useState<string | null>(null);
	const [collapsed, setCollapsed] = useState<TocCollapsedMap>(new Map());
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
			{ rootMargin: "0px 0px -33.333% 0px", threshold: 0 }
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
		<TocContext.Provider value={{ tree, activeId, collapsed, setCollapsed, maxLevel, collapsible, onCollapseChange }}>
			{children}
		</TocContext.Provider>
	);
}

// ─── Content ──────────────────────────────────────────────────────────────────

function Content() {
	const { tree } = useTocContext();
	return <TocList nodes={tree} />;
}

// ─── Trigger ──────────────────────────────────────────────────────────────────

interface TriggerProps {
	action: TocAction;
	/** For node-level actions, the exact headline string to target. */
	headline?: string;
	children: React.ReactNode;
	className?: string;
}

function Trigger({ action, headline, children, className }: TriggerProps) {
	const { tree, setCollapsed, onCollapseChange } = useTocContext();

	function dispatch() {
		setCollapsed((prev) => {
			let updated: TocCollapsedMap;

			switch (action) {
				case "COLLAPSE_ALL": {
					const flat = flattenNodes(tree);
					updated = new Map(flat.map(({ id }) => [id, true]));
					break;
				}
				case "EXPAND_ALL": {
					const flat = flattenNodes(tree);
					updated = new Map(flat.map(({ id }) => [id, false]));
					break;
				}
				case "COLLAPSE_NODE": {
					if (!headline) throw new Error("TableOfContents.Trigger: COLLAPSE_NODE requires a `headline` prop");
					updated = new Map(prev).set(headline, true);
					break;
				}
				case "EXPAND_NODE": {
					if (!headline) throw new Error("TableOfContents.Trigger: EXPAND_NODE requires a `headline` prop");
					updated = new Map(prev).set(headline, false);
					break;
				}
			}

			onCollapseChange?.(updated);
			return updated;
		});
	}

	return (
		<button type="button" onClick={dispatch} className={className}>
			{children}
		</button>
	);
}

// ─── Compound export ──────────────────────────────────────────────────────────

const TableOfContents = { Root, Content, Trigger };
export default TableOfContents;
