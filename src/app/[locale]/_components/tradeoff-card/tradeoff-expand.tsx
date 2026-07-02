"use client"
import { useState } from "react";
import { Text } from "@components/text/text";
import List from "./_components/list";
import PlusCircle from "@assets/icons/solid/plus-circle.svg";
import MinusCircle from "@assets/icons/solid/minus-circle.svg";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface ITradeOffExpand {
	heading: string | React.ReactNode;
	benefits: string[];
	costs: string[];
	defaultExpanded?: boolean;
}

export default function TradeOffExpand({
	heading,
	benefits,
	costs,
	defaultExpanded = false,
}: ITradeOffExpand) {
	const [isExpanded, setIsExpanded] = useState(defaultExpanded);

	return (
		<li
			data-expanded={isExpanded}
			className="flex
flex-col
gap-(--size-space-extra-small)
py-(--size-space-large)
border-b-[1px]
border-(--color-border-subtlest-on-light)
transition-[gap]
duration-300
ease-in-out

data-[expanded='true']:gap-(--size-space-extra-large)
hover:gap-(--size-space-extra-large)
"
		>
			<button
				type="button"
				className="flex flex-row justify-between items-center"
				aria-expanded={isExpanded}
				onClick={() => setIsExpanded((prev) => !prev)}
			>
				<Text.H6>{heading}</Text.H6>
				<span className="transition-transform duration-300 ease-in-out">
					{isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
				</span>
			</button>

			<div
				className="grid transition-[grid-template-rows] duration-300 ease-in-out"
				style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
			>
				<div className="overflow-hidden min-h-0">
					<div className="flex flex-row gap-(--size-space-large)">
						<List
							className="flex-1"
							heading="Benefits"
							leadingIcon={<PlusCircle />}
							items={benefits}
							style="SUCCESS"
						/>
						<List
							className="flex-1"
							heading="Costs"
							leadingIcon={<MinusCircle />}
							items={costs}
							style="DANGER"
						/>
					</div>
				</div>
			</div>
		</li>
	);
}
