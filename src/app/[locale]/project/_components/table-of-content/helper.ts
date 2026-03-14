
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
