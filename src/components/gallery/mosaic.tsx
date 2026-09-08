"use client"

import styles from "./mosaic.module.scss";
import { Gallery } from "./gallery";
import { TGalleryImage, normalizeImage } from "./image";

interface IMosaic {
	images: TGalleryImage[];
}

export default function Mosaic({ images }: IMosaic) {

	return (<div className={styles.mosaic}>
		<Gallery.Image {...normalizeImage(images[0])} />
		<Gallery.Image {...normalizeImage(images[1])} />
		<Gallery.Image {...normalizeImage(images[2])} />
	</div>);
}
