import React from "react";
import { MousePointer2, SlidersHorizontal, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: MousePointer2,
    number: "01",
    title: "Choose Your AI Model",
    description: "Select which AI model you want to generate a prompt for — ChatGPT, Midjourney, DALL-E, Claude, Stable Diffusion, or Gemini. Each model has unique optimization rules.",
  },
  {
    icon: SlidersHorizontal,
    number: "02",
    title: "Pick a Category & Customize",
    description: "Choose from 20+ categories like Marketing, Coding, Writing, Design, or Business. Add your specific topic and customize tone, format, and style parameters.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Copy & Use",
    description: "Click generate, then copy your optimized prompt with one click. Paste it directly into your AI tool of choice and watch the magic happen.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-mint/20 bg-mint/5 rounded-full">
            <span className="text-mint text-xs font-bold tracking-[0.15em] uppercase">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-mercury mb-4 tracking-tight">
            How It <span className="text-gradient-mint">Works</span>
          </h2>
          <p className="text-ash text-lg max-w-2xl mx-auto">
            Generate optimized AI prompts in three simple steps. No learning curve, no signup, no friction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-carbon border border-white/5 rounded-2xl p-8 hover:border-mint/20 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 -right-4 text-6xl font-bold text-white/5 select-none">
                  {step.number}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-mint/10 border border-mint/20 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-mint" />
                </div>
                <h3 className="text-mercury font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-ash text-sm leading-relaxed">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-mint/40 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}