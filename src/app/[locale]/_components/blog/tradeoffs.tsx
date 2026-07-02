"use client"

import { ComponentPropsWithoutRef } from "react";
import TradeOffCard from "@components/tradeoff-card/tradeoff-card";
import Section from "./section";
import { Blog } from "./blog";
import TradeOffExpand from "../tradeoff-card/tradeoff-expand";

interface ITradeoffs {
	headline: string;
	items: ComponentPropsWithoutRef<typeof TradeOffCard>[];
}


export default function TradeOffs({ headline, items }: ITradeoffs) {
	return (
		<Section>

			<Blog.Heading role="H3" className="text-left">{headline}</Blog.Heading>
			<div>
				{items.map((item, i) => <TradeOffExpand key={`tradeoff${i}`} {...item} />)}
			</div>

		</Section>
	);
}
