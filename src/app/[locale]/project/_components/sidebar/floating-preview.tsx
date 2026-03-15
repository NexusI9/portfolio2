"use client"

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import Image from "next/image";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "@/app/[locale]/_lib/constants";

type PreviewProps = {
	src: string | null;
	alt: string | null;
	rect: DOMRect | null;
};

export function FloatingPreview({ src, alt, rect }: PreviewProps) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (src) setVisible(true);
		else setVisible(false);
	}, [src]);

	if (!rect) return null;

	return createPortal(
		<div
			className={styles["floating-picture"]}
			data-visible={visible}
			style={{ top: rect.top, left: rect.right + 16 }}
		>
			{src && (<Image src={src} width={THUMBNAIL_WIDTH} height={THUMBNAIL_HEIGHT} alt={String(alt)} />)}
		</div>,
		document.body
	);
}
