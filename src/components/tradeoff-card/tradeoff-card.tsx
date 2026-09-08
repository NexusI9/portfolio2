"use client"

import { Text } from "@/components/text/text";
import styles from "./tradeoff-card.module.scss";
import List from "./_components/list";
import PlusCircle from "@assets/icons/solid/plus-circle.svg";
import MinusCircle from "@assets/icons/solid/minus-circle.svg";

interface ITradeOffCard {
	heading: string | React.ReactNode;
	benefits: string[];
	costs: string[];
}

export default function TradeOffCard({ heading, benefits, costs }: ITradeOffCard) {

	return (
		<li className={styles["tradeoff-card"]}>
			<Text.H6>{heading}</Text.H6>
			<List
				heading="Benefits"
				leadingIcon={<PlusCircle />}
				items={benefits}
				style="SUCCESS" />
			<hr />
			<List
				heading="Costs"
				leadingIcon={<MinusCircle />}
				items={costs}
				style="DANGER"
			/>
		</li>
	);

}
