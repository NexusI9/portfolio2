"use client"

import Image, { TGalleryImage, normalizeImage } from "./image";
import Row from "./row";
import Wrapper from "./wrapper";

interface IAutoLayout {
	rows: TGalleryImage[][];
	noWrapper?: boolean;
}

export default function AutoLayout({ rows, noWrapper }: IAutoLayout) {
	const content = (
		<div className="flex flex-col gap-(--size-space-large)">
			{rows.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map((img, imgIndex) => (
						<Image key={imgIndex} {...normalizeImage(img)} />
					))}
				</Row>
			))}
		</div>
	);

	if (noWrapper) return content;

	return <Wrapper>{content}</Wrapper>;
}
