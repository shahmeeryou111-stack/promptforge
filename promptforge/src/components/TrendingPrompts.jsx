import React from "react";
import { TrendingUp, Flame } from "lucide-react";
import PromptCard from "@/components/PromptCard";
import { trendingPrompts } from "@/data/prompts";

export default function TrendingPrompts() {
  return (
    <section id="trending" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-mint/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-mint/20 bg-mint/5 rounded-full">
              <Flame size={14} className="text-mint" />
              <span className="text-mint text-xs font-bold tracking-[0.15em] uppercase">Trending Now</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-mercury mb-4 tracking-tight">
              Most Used <span className="text-gradient-mint">Prompts</span>
            </h2>
            <p className="text-ash text-lg max-w-xl">
              The prompts our community uses most. Battle-tested and optimized for results.
            </p>
          </div>
          <div className="flex items-center gap-2 text-obsidian text-sm">
            <TrendingUp size={16} className="text-mint" />
            Updated daily
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trendingPrompts.map((prompt, index) => (
            <div key={prompt.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <PromptCard prompt={prompt} showUses />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}