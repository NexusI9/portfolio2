"use client"

import { catClass } from "@lib/utils"
import { createElement } from "react";

type TTextRole = "H1"
	| "H2"
	| "H3"
	| "H4"
	| "H5"
	| "H6"
	| "BODY";

type TTextStyle = "DISPLAY"
	| "H1"
	| "H2"
	| "H3"
	| "H4"
	| "H5"
	| "H6"
	| "SUBTITLE_1"
	| "SUBTITLE_2"
	| "BODY"
	| "BODY_2"
	| "CAPTION"
	| "FOOTNOTE"
	| "OVERLINE"
	| "LABEL_LARGE"
	| "LABEL_MEDIUM"
	| "LABEL_SMALL";

type TTextBase = Readonly<{
	className?: string;
	id?: string;
	children?: React.ReactNode;
	role: TTextRole;
	style: TTextStyle;
}>;

type TText = Omit<TTextBase, "role" | "style">;



// Default preset
export function TextBase({ id, className, children, role, style }: TTextBase) {


	const ROLE_TAG: Record<TTextRole, string> = {
		H1: "h1",
		H2: "h2",
		H3: "h3",
		H4: "h4",
		H5: "h5",
		H6: "h6",
		BODY: "p",
	};


	const STYLE_CLASS: Partial<Record<TTextStyle, string>> = {
		DISPLAY: "display",
		SUBTITLE_1: "subtitle-1",
		SUBTITLE_2: "subtitle-2",
		BODY_2: "body-2",
		OVERLINE: "overline",
		CAPTION: "caption",
		FOOTNOTE: "footnote",
		LABEL_LARGE: "label-large",
		LABEL_MEDIUM: "label-medium",
		LABEL_SMALL: "label-small",
	};

	const props: any = {
		children,
		className: catClass([className, STYLE_CLASS[style]]),
		id,
	};

	if (typeof children === "string" && children.includes("<")) {
		props.dangerouslySetInnerHTML = { __html: children };
		props.children = null;
	} else {
		props.children = children;
	}


	return createElement(ROLE_TAG[role], props);


}

export const Text: Record<string, (props: TText) => React.ReactNode> = {

	Display: (props) => <TextBase {...props} role="H1" style="DISPLAY" />,

	H1: (props) => <TextBase {...props} role="H1" style="H1" />,
	H2: (props) => <TextBase {...props} role="H2" style="H2" />,
	H3: (props) => <TextBase {...props} role="H3" style="H3" />,
	H4: (props) => <TextBase {...props} role="H4" style="H4" />,
	H5: (props) => <TextBase {...props} role="H5" style="H5" />,
	H6: (props) => <TextBase {...props} role="H6" style="H6" />,

	Subtitle1: (props) => <TextBase {...props} role="BODY" style="SUBTITLE_1" />,
	Subtitle2: (props) => <TextBase {...props} role="BODY" style="SUBTITLE_2" />,

	Body: (props) => <TextBase {...props} role="BODY" style="BODY" />,
	Body2: (props) => <TextBase {...props} role="BODY" style="BODY_2" />,

	Caption: (props) => <TextBase {...props} role="BODY" style="CAPTION" />,
	Footnote: (props) => <TextBase {...props} role="BODY" style="FOOTNOTE" />,
	Overline: (props) => <TextBase {...props} role="BODY" style="OVERLINE" />,

	LabelLarge: (props) => <TextBase {...props} role="BODY" style="LABEL_LARGE" />,
	LabelMedium: (props) => <TextBase {...props} role="BODY" style="LABEL_MEDIUM" />,
	LabelSmall: (props) => <TextBase {...props} role="BODY" style="LABEL_SMALL" />,
}
