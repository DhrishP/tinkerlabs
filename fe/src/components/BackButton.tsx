"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ homeHref = "/" }: { homeHref?: string }) {
  const router = useRouter();

  function handleClick() {
    if (typeof window !== "undefined" && document.referrer) {
      try {
        const previous = new URL(document.referrer);
        if (previous.origin === window.location.origin) {
          router.back();
          return;
        }
      } catch {}
    }
    router.push(homeHref);
  }

  return (
    <button
      type="button"
      aria-label="Go back"
      className="neo-button neo-fab"
      onClick={handleClick}
      title="Back"
      style={{ zIndex: 60 }}
    >
      ←
    </button>
  );
}


