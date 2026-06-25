"use client"

import { useMemo, useEffect } from "react";
import NextImage from "next/image";
import { useGallery } from "./context";
import styles from "./gallery.module.scss";
import { SearchIcon } from "lucide-react";

interface IImage {
	src: string;
	alt?: string;
};

export interface IRegisterableImage extends IImage {
	id: string;
};


let idCounter = 0;

export default function Image({ src, alt }: IImage) {
	const { registerImage, open } = useGallery();
	const id = useMemo(() => `gallery-img-${idCounter++}`, []);

	useEffect(() => {
		registerImage({ id, src, alt });
	}, [id, src, alt, registerImage]);

	return (
		<div onClick={() => open(id)} className={styles["image-container"]}>
			<NextImage src={src} alt={alt || ""} fill className={styles.image} />

			{/* Hover square */}
			<SearchIcon className={styles["image-lens"]} />

		</div>
	);
}

