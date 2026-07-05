import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Strategist",
    company: "TechFlow Media",
    avatar: "SC",
    rating: 5,
    text: "PromptForge completely transformed my content workflow. What used to take 30 minutes of prompt tweaking now takes 30 seconds. The quality of my ChatGPT outputs has skyrocketed.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior Developer",
    company: "DevStudio",
    avatar: "MR",
    rating: 5,
    text: "The code review prompts are genuinely better than anything I was writing myself. It's like having a senior engineer review my architecture decisions. Indispensable tool.",
  },
  {
    name: "Aisha Patel",
    role: "Digital Artist",
    company: "Freelance",
    avatar: "AP",
    rating: 5,
    text: "My Midjourney results went from 'meh' to magazine-cover quality. The cinematic prompt templates are absolute gold. I've bookmarked this site permanently.",
  },
  {
    name: "James O'Brien",
    role: "Marketing Director",
    company: "GrowthLabs",
    avatar: "JO",
    rating: 5,
    text: "We use PromptForge across our entire marketing team. The ad copy variations alone have saved us hundreds of hours. The structured prompts just work better.",
  },
  {
    name: "Yuki Tanaka",
    role: "Startup Founder",
    company: "Nexus AI",
    avatar: "YT",
    rating: 5,
    text: "The business strategy prompts helped me build a pitch deck that secured $2M in seed funding. The structured approach to prompting is a game-changer for founders.",
  },
  {
    name: "Elena Volkov",
    role: "UX Designer",
    company: "PixelCraft",
    avatar: "EV",
    rating: 5,
    text: "The design system generator prompt is brilliant. It produces comprehensive, usable specs that my whole team can follow. This tool pays for itself in time saved — and it's free!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#080808] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-mint/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-mint/20 bg-mint/5 rounded-full">
            <Star size={14} className="text-mint" fill="#00ffc4" />
            <span className="text-mint text-xs font-bold tracking-[0.15em] uppercase">Loved by 12,000+ Creators</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-mercury mb-4 tracking-tight">
            What Our <span className="text-gradient-mint">Users Say</span>
          </h2>
          <p className="text-ash text-lg max-w-2xl mx-auto">
            Join thousands of creators, developers, and marketers who forge better prompts every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="bg-carbon border border-white/5 rounded-2xl p-6 hover:border-mint/20 transition-all duration-300 animate-slide-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Quote className="w-8 h-8 text-mint/30 mb-4" />
              <p className="text-ash text-sm leading-relaxed mb-6 flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-mint/10 border border-mint/20 flex items-center justify-center text-mint font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-mercury font-semibold text-sm">{t.name}</p>
                  <p className="text-obsidian text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}