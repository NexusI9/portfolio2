"use client"

import { useEffect, useState } from "react";

/**
 * Returns true once the page has been scrolled past `offset` pixels.
 * Uses a passive scroll listener + rAF throttling to stay cheap on scroll.
 */
export function useScrolled(offset = 24) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		let ticking = false;

		function evaluate() {
			setScrolled(window.scrollY > offset);
			ticking = false;
		}

		function onScroll() {
			if (!ticking) {
				window.requestAnimationFrame(evaluate);
				ticking = true;
			}
		}

		// Set initial state (e.g. on refresh mid-page)
		evaluate();

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [offset]);

	return scrolled;
}
