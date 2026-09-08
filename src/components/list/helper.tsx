// Builds a List.Root node out of plain strings, for use as a Blog.Layout body entry.

import { Text } from "../text/text";
import { List, ListType } from "./list";

// Kept as a small shared helper since several sections mix paragraphs and a list.
export function renderList(items: string[], type: ListType = "BULLET") {
	return (
		<List.Root key="list">
			{items.map(item => (
				<List.Item key={item} type={type}>
					<Text.Body>{item}</Text.Body>
				</List.Item>
			))}
		</List.Root>
	);
}

