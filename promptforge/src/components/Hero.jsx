import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mint/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mint/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-mint/20 bg-mint/5 rounded-full animate-fade-in">
          <Sparkles size={14} className="text-mint" />
          <span className="text-mint text-xs font-bold tracking-[0.15em] uppercase">
            500+ Prompt Templates · No Signup Required
          </span>
        </div>

        <h1 className="text-[clamp(2.5rem,9vw,7rem)] leading-[0.95] font-bold text-mercury tracking-tighter mb-8 animate-slide-in-up">
          Generate Perfect
          <br />
          <span className="text-gradient-mint">AI Prompts</span> in{" "}
          <span className="font-serif italic text-mint">Seconds</span>
        </h1>

        <p className="max-w-2xl mx-auto text-ash text-lg md:text-xl mb-12 leading-relaxed animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          The ultimate prompt engineering tool for ChatGPT, Midjourney, DALL-E 3,
          Claude, Stable Diffusion & Gemini. Structure your ideas into optimized
          prompts that get results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          <Link
            to="/generator"
            className="group px-10 py-4 bg-mint hover:bg-mint-hover text-void font-bold rounded-full transition-all hover:shadow-[0_0_40px_rgba(0,255,196,0.4)] flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Zap size={18} fill="#050505" />
            Start Generating
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/prompts"
            className="px-10 py-4 border border-white/10 text-mercury font-bold rounded-full hover:bg-white/5 hover:border-white/20 transition-all w-full sm:w-auto text-center"
          >
            Browse Templates
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
          {[
            { value: "500+", label: "Templates" },
            { value: "7", label: "AI Models" },
            { value: "12K+", label: "Happy Users" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mercury mb-1">{stat.value}</div>
              <div className="text-obsidian text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}