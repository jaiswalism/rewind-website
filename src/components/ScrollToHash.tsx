"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Handles hash scrolling after client-side navigation.
// Fires after the page mounts so elements are in the DOM.
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash) return;

    // Small delay to let the page fully render
    const t = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // Remove hash from URL so it stays clean
        history.replaceState(null, "", window.location.pathname);
      }
    }, 100);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
