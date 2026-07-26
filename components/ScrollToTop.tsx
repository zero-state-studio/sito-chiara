"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reset scroll to the top on route change. Next's automatic scroll-to-top
 * is unreliable alongside app/template.tsx page transitions.
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
