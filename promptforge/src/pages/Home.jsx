import React from "react";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/Hero";
import PromptGenerator from "@/components/PromptGenerator";
import HowItWorks from "@/components/HowItWorks";
import CategoryGrid from "@/components/CategoryGrid";
import TrendingPrompts from "@/components/TrendingPrompts";
import ToolsDirectory from "@/components/ToolsDirectory";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <SEOHead
        title="PromptForge — Free AI Prompt Generator for ChatGPT, Midjourney, Claude & DALL-E | 500+ Templates"
        description="Generate perfect AI prompts instantly for ChatGPT, Midjourney, DALL-E 3, Claude, Stable Diffusion & Gemini. 500+ free prompt templates for writing, coding, marketing, design & more. No signup required."
        canonical="https://promptforge.dev/"
      />
      <Hero />
      <PromptGenerator />
      <HowItWorks />
      <CategoryGrid />
      <TrendingPrompts />
      <ToolsDirectory />
      <Testimonials />
      <FAQ />
    </>
  );
}