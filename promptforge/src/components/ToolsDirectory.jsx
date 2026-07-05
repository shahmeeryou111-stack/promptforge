import React, { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { aiTools, toolCategories } from "@/data/tools";

const iconMap = {
  MessageSquare: "💬",
  Brain: "🧠",
  Image: "🎨",
  ImagePlus: "🖼️",
  Aperture: "📷",
  Sparkles: "✨",
  Cpu: "⚙️",
  Search: "🔍",
  Wand2: "🪄",
  Video: "🎬",
  Music: "🎵",
  Mic: "🎤",
};

export default function ToolsDirectory() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? aiTools : aiTools.filter((t) => t.category === filter);

  return (
    <section id="tools" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-mint/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-mint/20 bg-mint/5 rounded-full">
            <span className="text-mint text-xs font-bold tracking-[0.15em] uppercase">AI Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-mercury mb-4 tracking-tight">
            AI Tools <span className="text-gradient-mint">Directory</span>
          </h2>
          <p className="text-ash text-lg max-w-2xl mx-auto">
            The definitive guide to the AI tools we generate prompts for. Compare features, pricing, and best use cases.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {toolCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-mint text-void border border-mint"
                  : "bg-white/5 border border-white/10 text-ash hover:bg-white/10 hover:text-mercury"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tool, index) => (
            <div
              key={tool.id}
              className="group bg-carbon border border-white/5 rounded-2xl p-6 hover:border-mint/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,196,0.08)] animate-slide-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${tool.color}15`, border: `1px solid ${tool.color}30` }}
                >
                  {iconMap[tool.icon] || "🤖"}
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-mint" fill="#00ffc4" />
                  <span className="text-mercury text-sm font-semibold">{tool.rating}</span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-mercury font-bold text-lg group-hover:text-mint transition-colors">
                  {tool.name}
                </h3>
                <p className="text-obsidian text-xs">{tool.company} · {tool.category}</p>
              </div>

              <p className="text-ash text-sm leading-relaxed mb-5">
                {tool.description}
              </p>

              <div className="mb-5">
                <p className="text-obsidian text-xs uppercase tracking-wider mb-2">Best for</p>
                <div className="flex flex-wrap gap-1.5">
                  {tool.best.map((b) => (
                    <span key={b} className="px-2 py-0.5 rounded-md bg-white/5 text-ash text-xs">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <p className="text-obsidian text-xs">Pricing</p>
                  <p className="text-mercury text-sm font-medium">{tool.pricing}</p>
                </div>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-mint text-sm font-medium hover:gap-2 transition-all"
                >
                  Visit <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}