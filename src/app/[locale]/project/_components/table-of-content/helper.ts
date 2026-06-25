import { slugify } from "@/app/[locale]/_components/blog/helper";

type TocNode = {
	headline?: string;
	children?: TocNode[];
	[key: string]: any;
};


export function extractHeadlines(node: any, level = 1): any[] {
  if (!node) return [];

  let results: TocNode[] = [];

  if (typeof node === "object") {
    if (node.headline) {
      results.push({
        headline: node.headline,
        level,
        children: []
      });

      const last = results[results.length - 1];

      Object.values(node).forEach((value) => {
        const children = extractHeadlines(value, level + 1);
        last.children?.push(...children);
      });
    } else {
      Object.values(node).forEach((value) => {
        results.push(...extractHeadlines(value, level));
      });
    }
  }

  if (Array.isArray(node)) {
    node.forEach((v) => {
      results.push(...extractHeadlines(v, level));
    });
  }

  return results;
}



export function flattenNodes(nodes: any[]): { id: string; level: number }[] {
	const result: { id: string; level: number }[] = [];
	for (const node of nodes) {
		result.push({ id: slugify(node.headline), level: node.level });
		if (node.children?.length) result.push(...flattenNodes(node.children));
	}
	return result;
}

/**
	* Returns true if `activeId` matches this node itself OR any descendant.
	* Used in non-collapsible mode to highlight parent labels.
	*/
export function nodeContainsActive(node: any, activeId: string | null): boolean {
	if (!activeId) return false;
	if (slugify(node.headline) === activeId) return true;
	return (node.children ?? []).some((child: any) =>
		nodeContainsActive(child, activeId)
	);
}

/**
	* Returns true if `activeId` is inside a descendant of this node but NOT the
	* node itself. Used in collapsible mode to detect "hidden active child".
	*/
export function nodeHasActiveDescendant(node: any, activeId: string | null): boolean {
	if (!activeId) return false;
	return (node.children ?? []).some((child: any) =>
		nodeContainsActive(child, activeId)
	);
}
