import React from "react";
import SEOHead from "@/components/SEOHead";
import ToolsDirectory from "@/components/ToolsDirectory";

export default function Tools() {
  return (
    <>
      <SEOHead
        title="AI Tools Directory — ChatGPT, Midjourney, Claude & More | PromptForge"
        description="Compare the best AI tools including ChatGPT, Claude, Midjourney, DALL-E 3, Stable Diffusion, Gemini, Llama 3 and more. Features, pricing, and best use cases."
        canonical="https://promptforge.dev/#/tools"
      />
      <div className="pt-20">
        <ToolsDirectory />
      </div>
    </>
  );
}