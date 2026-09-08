"use client"

import { Gallery } from "./gallery";
import { TGalleryImage, normalizeImage } from "./image";

interface IDefault {
	images: TGalleryImage[];
}

/**
   Generate a Simple Gallery Row
 */
export default function Default({ images }: IDefault) {

	return (
		<Gallery.Wrapper>
			<Gallery.Row>
				{images.map((img, i) => {
					const normalized = normalizeImage(img);
					return <Gallery.Image key={`${normalized.src}-${i}`} {...normalized} />;
				})}
			</Gallery.Row>
		</Gallery.Wrapper>
	);

}
