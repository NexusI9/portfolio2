"use client"

import Image from "./image";
import Row from "./row";
import Wrapper from "./wrapper";

interface IAutoLayout {
	rows: string[][];
	noWrapper?: boolean;
}

export default function AutoLayout({ rows, noWrapper }: IAutoLayout) {
	const content = (
		<div className="flex flex-col gap-(--size-space-large)">
			{rows.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map((src, imgIndex) => (
						<Image key={imgIndex} src={src} />
					))}
				</Row>
			))}
		</div>
	);

	if (noWrapper) return content;

	return <Wrapper>{content}</Wrapper>;
}
