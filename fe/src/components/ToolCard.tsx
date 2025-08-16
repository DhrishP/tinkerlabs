import Image from "next/image";
import Link from "next/link";
import type { Tool } from "../data/tools";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="neo-card overflow-hidden">
      <Link href={`/${tool.slug}`} className="block">
        <div className="relative aspect-[16/10]">
          <Image
            src={tool.thumbnail}
            alt={tool.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
      </Link>
      <div className="tile-label">
        <Link href={`/${tool.slug}`}>{tool.title}</Link>
      </div>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${tool.title}`}
        className="neo-button corner-cta"
        title="Open in new tab"
      >
        ↗
      </a>
    </div>
  );
}


