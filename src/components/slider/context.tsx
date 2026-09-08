"use client"

import { createContext, PointerEvent, useContext } from "react";


type SliderContextType = {
  containerRef: React.RefObject<HTMLDivElement>;
  scrollLeft: () => void;
  scrollRight: () => void;
  onPointerDown: (e: PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (e: PointerEvent<HTMLDivElement>) => void;
  onPointerUp: () => void;
};

export const SliderContext = createContext<SliderContextType | null>(null);

export function useSlider() {
  const ctx = useContext(SliderContext);
  if (!ctx) {
    throw new Error("Slider components must be used inside Slider.Root");
  }
  return ctx;
}

