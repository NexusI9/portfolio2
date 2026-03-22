"use client"

import { Text, TextBase } from "@components/text/text";
import { ComponentPropsWithoutRef, createElement, Fragment } from "react";
import { slugify } from "./helper";
import Mosaic from "../mosaic/mosaic";

interface IHeading {
	role?: ComponentPropsWithoutRef<typeof TextBase>["role"];
	children: string;
}

export default function Heading({ role = "H3", children }: IHeading) {


	if (role == "H3")
	  return (<div className="flex flex-row items-center gap-(--size-space-large)">
		    <Mosaic row={3} column={2} animation="BLINK"/>
			{createElement(Text[role], {
				children,
				id: slugify(children),
			})}
		</div>);


	return (<>
		{createElement(Text[role], {
			children,
			id: slugify(children),
		})}
	</>);
}
