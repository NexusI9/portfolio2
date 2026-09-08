"use client"

import { ReactNode } from "react";
import { useSlider } from "./context";

type ContentProps = {
  children: ReactNode;
  className?: string;
};

export default function Content({ children, className }: ContentProps) {
  const {
    containerRef,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  } = useSlider();

  return (
    <div
      ref={containerRef}
      className={`flex gap-4 overflow-hidden cursor-grab active:cursor-grabbing select-none ${className ?? ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {children}
    </div>
  );
}
