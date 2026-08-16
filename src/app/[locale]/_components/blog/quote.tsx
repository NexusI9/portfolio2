import { Text } from "../text/text";
import Group from "./group";
import Paragraph from "./paragraph";

interface IBlogQuoteProps {
	quote: string;
	author: string;
	source?: string; // rendered as body2, right under the attribution
}

export default function Quote({ quote, author, source }: IBlogQuoteProps) {
	return (
		<Group>
			{ /* <Icon.Quote /> */}
			<Paragraph>{quote}</Paragraph>
			<Text.Body>— {author}</Text.Body>
			{source && <Text.Body2>{source}</Text.Body2>}
		</Group>
	);
}
