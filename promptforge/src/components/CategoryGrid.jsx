import React from "react";
import { Link } from "react-router-dom";
import { PenTool, Code, TrendingUp, Image, Briefcase, GraduationCap, Palette, Zap, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

const iconMap = {
  PenTool, Code, TrendingUp, Image, Briefcase, GraduationCap, Palette, Zap,
};

export default function CategoryGrid() {
  return (
    <section className="py-24 px-6 bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-mint/20 bg-mint/5 rounded-full">
            <span className="text-mint text-xs font-bold tracking-[0.15em] uppercase">20+ Categories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-mercury mb-4 tracking-tight">
            Explore by <span className="text-gradient-mint">Category</span>
          </h2>
          <p className="text-ash text-lg max-w-2xl mx-auto">
            From creative writing to code review, from cinematic art to business strategy —
            find the perfect prompt template for any task.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Zap;
            return (
              <Link
                key={cat.id}
                to="/prompts"
                className="group bg-carbon border border-white/5 rounded-2xl p-6 hover:border-mint/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,196,0.08)] animate-slide-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                >
                  <Icon size={22} style={{ color: cat.color }} />
                </div>
                <h3 className="text-mercury font-semibold text-lg mb-2 group-hover:text-mint transition-colors">
                  {cat.name}
                </h3>
                <p className="text-obsidian text-sm leading-relaxed mb-4 line-clamp-2">
                  {cat.description}
                </p>
                <div className="flex items-center gap-1 text-mint text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}