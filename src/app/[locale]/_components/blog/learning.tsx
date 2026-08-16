import Anchor from "./anchor";
import Section from "./section";
import Headline from "./headline";
import Paragraph from "./paragraph";
import { BLOG_HEADLINE_STYLE } from "./constants";

interface ILearningCard {
	icon: React.ReactNode;
	headline: string;
	body: string;
}

interface IBlogLearningProps {
	anchor: string;
	items: ILearningCard[]; // 3 by design, rendered as a row of cards
}

export default function Learning({ anchor, items }: IBlogLearningProps) {
	return (
		<Section>
			<Anchor role="H3" style={BLOG_HEADLINE_STYLE}>{anchor}</Anchor>
			<div>
				{items.map(({ headline, body, icon: Icon }) => (
					<div key={headline}>
						{Icon}
						<Headline role="H5">{headline}</Headline>
						<Paragraph>{body}</Paragraph>
					</div>
				))}
			</div>
		</Section>
	);
}
