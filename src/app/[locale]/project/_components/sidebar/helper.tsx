import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element's content overflows its own box (i.e. it is in
 * "scroll mode"). Re-checks on resize (ResizeObserver) and on content
 * mutations (MutationObserver), since the TOC tree can expand/collapse
 * without the container itself resizing.
 */
export function useOverflowDetection<T extends HTMLElement>(deps: React.DependencyList = []) {
	const ref = useRef<T | null>(null);
	const [isOverflowing, setIsOverflowing] = useState(false);
 
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
 
		function check() {
			if (!el) return;
			setIsOverflowing(el.scrollHeight > el.clientHeight);
		}
 
		check();
 
		const resizeObserver = new ResizeObserver(check);
		resizeObserver.observe(el);
 
		const mutationObserver = new MutationObserver(check);
		mutationObserver.observe(el, { childList: true, subtree: true });
 
		return () => {
			resizeObserver.disconnect();
			mutationObserver.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
 
	return { ref, isOverflowing };
}
 
