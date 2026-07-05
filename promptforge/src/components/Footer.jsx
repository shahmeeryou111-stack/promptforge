import React from "react";
import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-mint/10 border border-mint/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-mint" fill="#00ffc4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-mercury">
                Prompt<span className="text-mint">Forge</span>
              </span>
            </Link>
            <p className="text-obsidian text-sm leading-relaxed max-w-xs">
              The world's most advanced AI prompt generator. Crafted for creators, engineers, and visionaries.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ash hover:text-mint hover:border-mint/30 transition-all" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ash hover:text-mint hover:border-mint/30 transition-all" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ash hover:text-mint hover:border-mint/30 transition-all" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-mercury font-semibold text-sm mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/generator" className="text-obsidian hover:text-mint text-sm transition-colors">Prompt Generator</Link></li>
              <li><Link to="/prompts" className="text-obsidian hover:text-mint text-sm transition-colors">Prompt Library</Link></li>
              <li><Link to="/tools" className="text-obsidian hover:text-mint text-sm transition-colors">AI Tools Directory</Link></li>
              <li><Link to="/about" className="text-obsidian hover:text-mint text-sm transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-mercury font-semibold text-sm mb-4 uppercase tracking-wider">Models</h4>
            <ul className="space-y-3">
              <li><Link to="/generator" className="text-obsidian hover:text-mint text-sm transition-colors">ChatGPT Prompts</Link></li>
              <li><Link to="/generator" className="text-obsidian hover:text-mint text-sm transition-colors">Midjourney Prompts</Link></li>
              <li><Link to="/generator" className="text-obsidian hover:text-mint text-sm transition-colors">DALL-E 3 Prompts</Link></li>
              <li><Link to="/generator" className="text-obsidian hover:text-mint text-sm transition-colors">Claude Prompts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-mercury font-semibold text-sm mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@promptforge.dev" className="text-obsidian hover:text-mint text-sm transition-colors">Contact</a></li>
              <li><Link to="/about" className="text-obsidian hover:text-mint text-sm transition-colors">FAQ</Link></li>
              <li><a href="https://promptforge.dev" className="text-obsidian hover:text-mint text-sm transition-colors">Blog</a></li>
              <li><a href="https://promptforge.dev" className="text-obsidian hover:text-mint text-sm transition-colors">API (Soon)</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-obsidian text-sm">
            © {new Date().getFullYear()} PromptForge. All rights reserved.
          </p>
          <p className="text-obsidian text-sm">
            Built with <span className="text-mint">precision</span> for the AI era.
          </p>
        </div>
      </div>
    </footer>
  );
}