"use client"

import { Fragment } from "react/jsx-runtime";

export default function TradeOffHeader({ items }: { items: string[] }) {
	return (
		<span className="flex flex-row gap-(--size-space-large)">
			{items.map((item, i) =>
				<Fragment key={item + i}>
					<span className={i === items.length - 1 ? "text-(--color-text-subtle-on-light)" : ""}>{item}</span>
					{
						i < items.length - 1 ? <i className="text-(--color-text-brand-strong)">vs</i> : ""}
				</Fragment>)}
		</span>);
}
