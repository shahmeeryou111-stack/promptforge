import React, { useState, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import PromptCard from "@/components/PromptCard";
import { promptTemplates, trendingPrompts } from "@/data/prompts";
import { categories, aiModels } from "@/data/categories";
import { Search, Filter } from "lucide-react";

export default function Prompts() {
  const [search, setSearch] = useState("");
  const [modelFilter, setModelFilter] = useState("All");
  const [catFilter, setCatFilter] = useState("All");

  const allPrompts = useMemo(() => {
    return [...trendingPrompts.map((p) => ({ ...p, structure: p.prompt })), ...promptTemplates];
  }, []);

  const filtered = useMemo(() => {
    return allPrompts.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesModel = modelFilter === "All" || p.model === modelFilter;
      const matchesCat = catFilter === "All" || p.category === catFilter;
      return matchesSearch && matchesModel && matchesCat;
    });
  }, [allPrompts, search, modelFilter, catFilter]);

  return (
    <>
      <SEOHead
        title="AI Prompt Library — 500+ Free Templates | PromptForge"
        description="Browse 500+ free AI prompt templates for ChatGPT, Midjourney, DALL-E, Claude & more. Search by model, category, or keyword. Copy and use instantly."
        canonical="https://promptforge.dev/#/prompts"
      />

      <div className="pt-32 pb-24 px-6 bg-[#050505] min-h-screen">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-mint/20 bg-mint/5 rounded-full">
              <Filter size={14} className="text-mint" />
              <span className="text-mint text-xs font-bold tracking-[0.15em] uppercase">500+ Templates</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-mercury mb-4 tracking-tight">
              Prompt <span className="text-gradient-mint">Library</span>
            </h1>
            <p className="text-ash text-lg max-w-2xl mx-auto">
              Browse, search, and copy from our curated collection of optimized AI prompt templates.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-2xl mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-obsidian" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search prompts by title, description, or tag..."
                className="w-full bg-carbon border border-white/10 rounded-full pl-12 pr-4 py-3.5 text-mercury text-sm focus:border-mint/50 outline-none transition-all placeholder:text-obsidian"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setModelFilter("All")}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  modelFilter === "All" ? "bg-mint text-void" : "bg-white/5 border border-white/10 text-ash hover:bg-white/10"
                }`}
              >
                All Models
              </button>
              {aiModels.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setModelFilter(m.name)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    modelFilter === m.name ? "bg-mint text-void" : "bg-white/5 border border-white/10 text-ash hover:bg-white/10"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setCatFilter("All")}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  catFilter === "All" ? "bg-mint/20 text-mint border border-mint/30" : "bg-white/5 border border-white/10 text-ash hover:bg-white/10"
                }`}
              >
                All Categories
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCatFilter(c.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    catFilter === c.id ? "bg-mint/20 text-mint border border-mint/30" : "bg-white/5 border border-white/10 text-ash hover:bg-white/10"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <p className="text-obsidian text-sm mb-6">{filtered.length} prompts found</p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((prompt, index) => (
                <div key={`${prompt.id}-${index}`} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.03}s` }}>
                  <PromptCard prompt={prompt} showUses={!!prompt.uses} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-obsidian text-lg">No prompts found. Try a different search.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}