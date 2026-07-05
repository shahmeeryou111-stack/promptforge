import React, { useState } from "react";
import { Twitter, Linkedin, Facebook, Link2, Check } from "lucide-react";

export default function ShareButtons({ title = "PromptForge — Free AI Prompt Generator", url = "https://promptforge.dev" }) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      icon: Twitter,
      label: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-obsidian text-xs mr-2">Share:</span>
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.label}`}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ash hover:text-mint hover:border-mint/30 transition-all"
          >
            <Icon size={14} />
          </a>
        );
      })}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ash hover:text-mint hover:border-mint/30 transition-all"
      >
        {copied ? <Check size={14} className="text-mint" /> : <Link2 size={14} />}
      </button>
    </div>
  );
}