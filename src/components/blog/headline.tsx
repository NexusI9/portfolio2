"use client"
import { Text, TextBase } from "@/components/text/text";
import { ComponentPropsWithoutRef, createElement } from "react";

interface IHeadline {
	role?: ComponentPropsWithoutRef<typeof TextBase>["role"];
	children: string;
	className?: string;
}
export default function Headline({ role = "H3", children, className }: IHeadline) {
	//if (role == "H3")
	//  return (<div className="flex flex-row items-center gap-(--size-space-large)">
	//	    <Mosaic row={3} column={2} animation="BLINK"/>
	//		{createElement(Text[role], {
	//			children,
	//			id: slugify(children),
	//		})}
	//	</div>);
	return (<>
		{createElement(Text[role], {
			children,
			className,
		})}
	</>);
}
