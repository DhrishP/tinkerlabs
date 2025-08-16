import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "../../data/tools";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-10 playful-bg">
      <Link href="/" className="text-sm opacity-80 hover:underline">← Back to TInkerLab</Link>
      <div className="mt-4 palette-b p-3 rounded-2xl">
        <div className="neo-card overflow-hidden">
          <div className="relative aspect-video">
            <Image src={tool.thumbnail} alt={tool.title} fill sizes="100vw" className="object-cover" />
          </div>
          <div className="tile-label">{tool.title}</div>
          <div className="p-5 text-black">
            <p className="text-base leading-relaxed">{tool.description}</p>
            <div className="mt-6">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button"
              >
                ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


