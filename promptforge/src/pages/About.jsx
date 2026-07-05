import React from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Zap, Target, Eye, Heart, ArrowRight } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

const values = [
  {
    icon: Target,
    title: "Precision Over Volume",
    description: "We don't just give you 500+ prompts — we give you the structure to generate infinite variations, each optimized for your specific need.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description: "No black boxes. You see exactly how your prompt is constructed and why each element is included. Learn prompt engineering by using it.",
  },
  {
    icon: Heart,
    title: "Always Free",
    description: "PromptForge is and always will be free. No signup walls, no credit systems, no premium tiers hiding the best features. Just prompts.",
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About PromptForge — The AI Prompt Engineering Platform"
        description="PromptForge is the world's most advanced free AI prompt generator. Learn our mission, values, and the team behind the forge."
        canonical="https://promptforge.dev/#/about"
      />

      <div className="pt-32 pb-24 px-6 bg-[#050505] min-h-screen relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mint/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1000px] mx-auto relative z-10">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-mint/20 bg-mint/5 rounded-full">
              <Zap size={14} className="text-mint" fill="#00ffc4" />
              <span className="text-mint text-xs font-bold tracking-[0.15em] uppercase">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-mercury mb-6 tracking-tight">
              Words are the <br />
              <span className="text-gradient-mint">new code.</span>
            </h1>
            <p className="text-ash text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              PromptForge was born from a simple observation: the gap between what people want from AI
              and what they actually get is almost entirely a <span className="text-mint">prompting problem</span>.
              We're here to close that gap — for everyone, for free, forever.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-carbon border border-white/5 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-mercury mb-6">
              Our <span className="font-serif italic text-mint">Mission</span>
            </h2>
            <p className="text-ash text-base md:text-lg leading-relaxed mb-4">
              Prompt engineering shouldn't be a secret art reserved for AI researchers and power users.
              It should be accessible to the writer drafting their first blog post, the developer debugging
              code at 2 AM, the marketer launching a campaign, and the student exploring AI for the first time.
            </p>
            <p className="text-ash text-base md:text-lg leading-relaxed">
              PromptForge distills years of prompt engineering research into a tool that anyone can use.
              You describe what you want in plain English. We structure it into an optimized prompt that
              gets the best possible result from your chosen AI model. That's it. No magic, just good engineering.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-mercury mb-8 text-center">
              What We <span className="text-gradient-mint">Believe</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-carbon border border-white/5 rounded-2xl p-6">
                    <div className="w-12 h-12 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-mint" />
                    </div>
                    <h3 className="text-mercury font-semibold text-lg mb-3">{v.title}</h3>
                    <p className="text-ash text-sm leading-relaxed">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "500+", label: "Prompt Templates" },
              { value: "7", label: "AI Models Supported" },
              { value: "12K+", label: "Active Users" },
              { value: "100%", label: "Free Forever" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-carbon border border-white/5 rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-mint mb-2">{stat.value}</div>
                <div className="text-obsidian text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-carbon border border-mint/20 rounded-2xl p-8 md:p-12 glow-mint">
            <h2 className="text-2xl md:text-3xl font-bold text-mercury mb-4">
              Ready to forge better prompts?
            </h2>
            <p className="text-ash text-base mb-8 max-w-xl mx-auto">
              Start generating optimized AI prompts in seconds. No signup, no friction, just results.
            </p>
            <Link
              to="/generator"
              className="inline-flex items-center gap-2 px-10 py-4 bg-mint hover:bg-mint-hover text-void font-bold rounded-full transition-all hover:shadow-[0_0_40px_rgba(0,255,196,0.4)]"
            >
              Start Generating
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Share */}
          <div className="flex justify-center mt-12">
            <ShareButtons />
          </div>
        </div>
      </div>
    </>
  );
}