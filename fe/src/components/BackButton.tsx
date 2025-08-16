import Link from "next/link";

export default function BackButton({ homeHref = "/" }: { homeHref?: string }) {
  return (
    <Link
      href={homeHref}
      aria-label="Go back"
      className="neo-button neo-fab text-2xl font-bold"
      title="Back"
    >
      ←
    </Link>
  );
}


