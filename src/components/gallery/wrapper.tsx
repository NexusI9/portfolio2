"use client"

import { ReactNode, useMemo, ComponentPropsWithoutRef, useState } from "react";
import GalleryImage from "./image";
import GalleryContext from "./context";
import Modal from "./modal";

export default function Wrapper({ children }: { children: ReactNode }) {
	const [images, setImages] = useState<ComponentPropsWithoutRef<typeof GalleryImage>[]>([]);
	const [activeId, setActiveId] = useState<string | null>(null);

	const registerImage = (img: ComponentPropsWithoutRef<typeof GalleryImage>) => {
		setImages(prev => {
			if (prev.find(i => i.id === img.id)) return prev;
			return [...prev, img];
		});
	};

	const value = useMemo(
		() => ({
			registerImage,
			images,
			open: (id: string) => setActiveId(id),
		}),
		[images]
	);

	return (
		<GalleryContext.Provider value={value}>
			{children}
			{activeId && (
				<Modal
					images={images}
					activeId={activeId}
					onClose={() => setActiveId(null)}
					onSelect={setActiveId}
				/>
			)}
		</GalleryContext.Provider>
	);
}
