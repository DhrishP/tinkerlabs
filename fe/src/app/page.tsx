import Image from "next/image";
import Link from "next/link";
import { tools } from "../data/tools";
import { ToolCard } from "../components/ToolCard";

export default function Home() {
  return (
    <div className="min-h-screen p-6 sm:p-10 playful-bg">
      <header className="mb-8 flex items-end justify-between gap-6">
        <div>
          <h1 className="headline-vibe text-4xl sm:text-5xl font-extrabold tracking-tight">TInkerLab</h1>
          <p className="text-base mt-3 max-w-xl text-black">
            A store of useful softwares made by a tinkerer
          </p>
        </div>
        <span className="neo-button" title="Share">★</span>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => (
          <div key={tool.slug} className={["palette-a","palette-b","palette-c","palette-d","palette-e"][idx % 5] + " p-2 rounded-2xl"}>
            <ToolCard tool={tool} />
          </div>
        ))}
      </main>
    </div>
  );
}
