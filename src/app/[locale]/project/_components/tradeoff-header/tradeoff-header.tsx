"use client"

import { Fragment } from "react/jsx-runtime";

export default function TradeOffHeader({ items }: { items: string[] }) {
	return (
		<>
			{items.map((item, i) =>
				<Fragment key={item + i}>
					<span className={i === items.length - 1 ? "text-(--color-text-subtle-on-light)" : undefined}>{item}</span>
					{
						i < items.length - 1 ? <i className="text-(--color-text-brand-strong)">&nbsp; vs &nbsp;</i> : ""}
				</Fragment>)}
		</>);
}
