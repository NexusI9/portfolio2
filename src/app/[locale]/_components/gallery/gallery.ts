"use client"

import Image from "./image";
import Row from "./row";
import Wrapper from "./wrapper";
import Default from "./default";
import Mosaic from "./mosaic";
import AutoLayout from "./autolayout";

export const Gallery = {
	Wrapper,
	Row,
	Image,
	Default,
	Mosaic,
	AutoLayout,
};

export type { TGalleryImage, IImage } from "./image";
