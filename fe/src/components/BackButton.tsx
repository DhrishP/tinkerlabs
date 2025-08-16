import Link from "next/link";

export default function BackButton({ homeHref = "/" }: { homeHref?: string }) {
  return (
    <Link
      href={homeHref}
      aria-label="Go back"
      className="neo-button neo-fab"
      title="Back"
    >
      ←
    </Link>
  );
}


