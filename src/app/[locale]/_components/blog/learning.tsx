import Anchor from "./anchor";
import Section from "./section";
import { BLOG_HEADLINE_STYLE } from "./constants";
import styles from "./learning.module.scss";
import { Text } from "../text/text";
import { DynamicIcon } from 'lucide-react/dynamic';

interface ILearningCard {
	icon: React.ReactNode;
	headline: string;
	challenge: string;
	outcome: string;
}

interface IBlogLearningProps {
	anchor: string;
	items: ILearningCard[]; // 3 by design, rendered as a row of cards
}


export default function Learning({ anchor, items }: IBlogLearningProps) {

	return (
		<Section>
			<Anchor role="H3" style={BLOG_HEADLINE_STYLE}>{anchor}</Anchor>
			<div className={styles.container}>
				{items.map(({ headline, challenge, outcome, icon }) => (
					<div key={headline} className={styles.item}>
						{icon && <DynamicIcon name={icon as any} />}
						<Text.Body><b>{headline}</b></Text.Body>
						<Text.Body2>{challenge}</Text.Body2>
						<Text.Body2>{outcome}</Text.Body2>
					</div>
				))}
			</div>
		</Section>
	);
}
