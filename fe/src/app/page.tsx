import { tools } from "../data/tools";
import { ToolCard } from "../components/ToolCard";

export default function Home() {
  return (
    <div className="min-h-screen p-6 sm:p-10 playful-bg text-black">
      <div className="mb-8 relative">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl sm:text-7xl font-black text-center text-black">TInkerLab</h1>
          <a
            href="https://github.com/DhrishP"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/85 backdrop-blur border border-black/10 hover:bg-white text-black"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.273.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.707.115 2.506.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.377.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.846-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd"/></svg>
          </a>
        </div>
        <p className="mt-2 text-center text-base sm:text-xl text-black">A store of useful softwares I guess</p>
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
