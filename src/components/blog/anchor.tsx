"use client"
import { Text, TextBase } from "@/components/text/text";
import { ComponentPropsWithoutRef, createElement } from "react";
import { slugify } from "./helper";
import Mosaic from "../mosaic/mosaic";

interface IAnchor {
 	role?: ComponentPropsWithoutRef<typeof TextBase>["role"];
	style?: ComponentPropsWithoutRef<typeof TextBase>["style"];
	children: string;
	className?: string;
}
export default function Anchor({ role = "BODY", style="BODY", children, className }: IAnchor) {
	//if (role == "H3")
	//  return (<div className="flex flex-row items-center gap-(--size-space-large)">
	//	    <Mosaic row={3} column={2} animation="BLINK"/>
	//		{createElement(Text[role], {
	//			children,
	//			id: slugify(children),
	//		})}
	//	</div>);
 return (
  <TextBase
  id={slugify(children)}
  role={role}
  style={style}
  className={className}>
   {children}
  </TextBase>
	);
}
