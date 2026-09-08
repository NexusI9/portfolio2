"use client"

import { useContext, createContext, ComponentPropsWithoutRef } from "react";
import GalleryImage, { IRegisterableImage } from "./image";

interface IContextType {
	registerImage: (img: IRegisterableImage) => void;
	images: ComponentPropsWithoutRef<typeof GalleryImage>[];
	open: (id: string) => void;
};

const GalleryContext = createContext<IContextType | null>(null);
export default GalleryContext;

export function useGallery() {
	const ctx = useContext(GalleryContext);
	if (!ctx) throw new Error("Gallery components must be inside Gallery.Wrapper");
	return ctx;
}
