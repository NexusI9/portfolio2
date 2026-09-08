"use client"

import { CSSProperties, useMemo, useEffect } from "react";
import NextImage from "next/image";
import { useGallery } from "./context";
import styles from "./gallery.module.scss";
import { SearchIcon } from "lucide-react";

export interface IImage {
	src: string;
	alt?: string;
	legend?: string;
	background?: string;
	/**
		* Defaults to false. Set to true to render a plain, non-interactive
		* image: no lens icon on hover, no click-to-open lightbox, and it's
		* left out of the fullview thumbnail strip entirely (it's never
		* registered with the gallery context).
		*/
	static?: boolean;
	/**
		* CSS aspect-ratio for the image box, e.g. "16 / 9", "1 / 1", "4 / 3",
		* or "auto". Defaults to "16 / 9".
		*/
	ratio?: string;
};

export interface IRegisterableImage extends IImage {
	id: string;
};

// What every gallery entry point (Row, AutoLayout, Mosaic, Default) accepts:
// either a bare src string (shorthand — no legend/alt/background/static/ratio),
// or the full descriptor object.
export type TGalleryImage = string | IImage;

// Normalizes a TGalleryImage into the full IImage shape so callers can treat
// every image uniformly regardless of which form was passed in.
export function normalizeImage(input: TGalleryImage): IImage {
	return typeof input === "string" ? { src: input } : input;
}

const DEFAULT_RATIO = "16 / 9";

let idCounter = 0;

export default function Image({ src, alt, legend, background, static: isStatic = false, ratio = DEFAULT_RATIO }: IImage) {
	const { registerImage, open } = useGallery();
	const id = useMemo(() => `gallery-img-${idCounter++}`, []);

	useEffect(() => {
		// Non-static images opt out of the lightbox entirely — never register
		// them, so they can't show up in the fullview thumbnail strip.
		if (isStatic) return;
		registerImage({ id, src, alt, legend, background });
	}, [id, src, alt, legend, background, isStatic, registerImage]);

	// --image-ratio is a custom property (not a direct inline `aspectRatio`)
	// on purpose: layouts like Mosaic override aspect-ratio per-breakpoint in
	// their own stylesheet, and a direct inline style would always beat that.
	const containerStyle = {
		"--image-ratio": ratio,
		...(background ? { background } : {}),
	} as CSSProperties;

	return (
		<div className={styles["image-wrapper"]}>
			<div
				onClick={!isStatic ? () => open(id) : undefined}
				className={styles["image-container"]}
				data-static={isStatic}
				style={containerStyle}
			>
				<NextImage src={src} alt={alt || ""} fill className={styles.image} />

				{/* Hover square — interactive images only */}
				{!isStatic && <SearchIcon className={styles["image-lens"]} />}

			</div>

			{legend && <p className={styles["image-legend"]}>{legend}</p>}
		</div>
	);
}
