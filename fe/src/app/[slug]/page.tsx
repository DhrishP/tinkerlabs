import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "../../data/tools";
import BackButton from "../../components/BackButton";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  return {
    title: tool ? `${tool.title} – TInkerLab` : "TInkerLab",
    description: tool?.description,
  };
}

export default function ToolPage({ params }: PageProps) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return notFound();

  return (
    <div className="min-h-screen playful-bg">
      <BackButton />
      <div className="max-w-4xl mx-auto p-6 sm:p-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/" className="text-sm hover:underline">← Back to TInkerLab</Link>
          <a href={tool.url} target="_blank" rel="noopener noreferrer" className="neo-cta">Open tool ↗</a>
        </div>

        <section className="space-y-6">
          <div className="palette-b p-3 rounded-2xl">
            <div className="neo-card overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image src={tool.thumbnail} alt={tool.title} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="tile-label">{tool.title}</div>
            </div>
          </div>

          <div className="palette-d p-3 rounded-2xl">
            <div className="neo-card p-6">
              <h1 className="headline-vibe text-2xl sm:text-3xl mb-4">About this tool</h1>
              <p className="text-lg leading-relaxed">
                {tool.description}
              </p>
              <div className="mt-6">
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="neo-cta">Visit {tool.title} ↗</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


