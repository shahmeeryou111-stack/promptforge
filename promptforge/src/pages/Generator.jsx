import React from "react";
import SEOHead from "@/components/SEOHead";
import PromptGenerator from "@/components/PromptGenerator";

export default function Generator() {
  return (
    <>
      <SEOHead
        title="AI Prompt Generator — ChatGPT, Midjourney, DALL-E & Claude | PromptForge"
        description="Generate optimized AI prompts for ChatGPT, Midjourney, DALL-E 3, Claude, Stable Diffusion & Gemini. Free, instant, no signup. Customize tone, format, style and copy with one click."
        canonical="https://promptforge.dev/#/generator"
      />
      <div className="pt-20">
        <PromptGenerator />
      </div>
    </>
  );
}