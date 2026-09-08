"use client"

import { ReactNode, useMemo, useState } from "react";
import { IRegisterableImage } from "./image";
import GalleryContext from "./context";
import Modal from "./modal";

export default function Wrapper({ children }: { children: ReactNode }) {
	const [images, setImages] = useState<IRegisterableImage[]>([]);
	const [activeId, setActiveId] = useState<string | null>(null);

	const registerImage = (img: IRegisterableImage) => {
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
