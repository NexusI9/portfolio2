"use client"

import { usePathname } from "next/navigation";

// matches /{locale}/project/{project-name}
const PROJECT_PAGE_REGEX = /^\/[^/]+\/project\/[^/]+/;

export function useIsProjectPage() {
	const pathname = usePathname();
	return PROJECT_PAGE_REGEX.test(pathname ?? "");
}
