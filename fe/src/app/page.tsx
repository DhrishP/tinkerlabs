import Image from "next/image";
import Link from "next/link";
import { tools } from "../data/tools";
import { ToolCard } from "../components/ToolCard";

export default function Home() {
  return (
    <div className="min-h-screen p-6 sm:p-10 playful-bg">
      <div className="hero mb-8">
        <div className="relative aspect-[16/6]">
          <Image src="https://i.pinimg.com/736x/88/a9/cb/88a9cbea6431250948c9b8b3f8cf4b69.jpg" alt="Tinker hero" fill sizes="100vw" className="object-cover"/>
        </div>
        <h1 className="hero-title text-3xl sm:text-6xl text-center">Tinkering Is the Greatest Rebellion</h1>
      </div>
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
