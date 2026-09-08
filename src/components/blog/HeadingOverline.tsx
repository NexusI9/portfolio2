"use client"

import { Blog } from "./blog";

interface IHeadingOverline {
	overline: string;
	headline: string;
	className?: string;
}

export default function HeadingOverline({ overline, headline, className }: IHeadingOverline) {

	return (
		<Blog.Heading className={className}>
			<Blog.Anchor role="BODY" style="OVERLINE">{overline}</Blog.Anchor>
			<Blog.Headline role="H4">{headline}</Blog.Headline>
		</Blog.Heading>

	);

}
