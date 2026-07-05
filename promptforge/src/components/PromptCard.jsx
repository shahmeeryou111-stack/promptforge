import React, { useState } from "react";
import { Copy, Check, TrendingUp } from "lucide-react";

export default function PromptCard({ prompt, showUses = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt || prompt.structure);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = prompt.prompt || prompt.structure;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group bg-carbon border border-white/5 rounded-2xl p-6 hover:border-mint/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,196,0.08)] h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-mint/10 border border-mint/20 text-mint text-xs font-bold">
          {prompt.model}
        </span>
        {showUses && prompt.uses && (
          <span className="flex items-center gap-1 text-obsidian text-xs">
            <TrendingUp size={12} className="text-mint" />
            {prompt.uses.toLocaleString()} uses
          </span>
        )}
      </div>

      <h3 className="text-mercury font-semibold text-lg mb-2 group-hover:text-mint transition-colors">
        {prompt.title}
      </h3>
      <p className="text-obsidian text-sm leading-relaxed mb-4 flex-grow">
        {prompt.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {prompt.tags?.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-ash text-xs">
            #{tag}
          </span>
        ))}
      </div>

      <button
        onClick={handleCopy}
        className={`w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
          copied
            ? "bg-mint text-void"
            : "bg-white/5 text-ash border border-white/10 hover:bg-mint hover:text-void hover:border-mint"
        }`}
      >
        {copied ? (
          <>
            <Check size={16} /> Copied!
          </>
        ) : (
          <>
            <Copy size={16} /> Copy Prompt
          </>
        )}
      </button>
    </div>
  );
}