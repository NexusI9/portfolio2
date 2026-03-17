"use client"

import { ComponentPropsWithoutRef } from "react";
import TradeOffCard from "@components/tradeoff-card/tradeoff-card";
import { Slider } from "../slider/slider";
import Section from "./section";
import styles from "./tradeoffs.module.scss";
import { Blog } from "./blog";

interface ITradeoffs {
	headline: string;
	items: ComponentPropsWithoutRef<typeof TradeOffCard>[];
}


export default function TradeOffs({ headline, items }: ITradeoffs) {
	return (
		<Section type="FLUID">
			<Slider.Root>
				<hgroup className="flex flex-row justify-between items-center pr-(--size-margin-desktop) pl-(--size-margin-blog)">
					<Blog.Heading role="H3">{headline}</Blog.Heading>
					<div className="flex flex-row gap-(--size-space-large)">
						<Slider.ButtonLeft />
						<Slider.ButtonRight />
					</div>
				</hgroup>

				<div className={styles.wrapper}>
					<Slider.Content className={styles.tradeoffs}>
						{items.map((item, i) => <TradeOffCard key={`tradeoff${i}`} {...item} />)}
					</Slider.Content>
				</div>
			</Slider.Root>

		</Section >
	);
}
