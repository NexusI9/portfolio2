"use client"

import { useEffect, RefObject } from "react";

interface IViewCatcher {
  children: React.ReactNode;
  targetRef: RefObject<HTMLElement>;
  onEnter?: () => void;
  onLeave?: () => void;
}

export default function ViewCatcher({
  children,
  targetRef,
  onEnter,
  onLeave,
}: IViewCatcher) {
  
  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    let isInView = false;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();

      const inView =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

      if (inView && !isInView) {
        isInView = true;
        onEnter?.();
      }

      if (!inView && isInView) {
        isInView = false;
        onLeave?.();
      }
    };

    handleScroll(); // initial check

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [targetRef, onEnter, onLeave]);

  return <>{children}</>;
}
