import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Generator", path: "/generator" },
  { label: "Prompt Library", path: "/prompts" },
  { label: "AI Tools", path: "/tools" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-5"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-mint/10 border border-mint/20 flex items-center justify-center group-hover:bg-mint/20 transition-colors">
            <Zap className="w-5 h-5 text-mint" fill="#00ffc4" />
          </div>
          <span className="text-xl font-bold tracking-tight text-mercury">
            Prompt<span className="text-mint">Forge</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "text-mint bg-mint/10"
                    : "text-ash hover:text-mercury hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            to="/generator"
            className="px-6 py-2.5 bg-mint hover:bg-mint-hover text-void font-semibold text-sm rounded-full transition-all hover:shadow-[0_0_30px_rgba(0,255,196,0.3)]"
          >
            Start Forging
          </Link>
        </div>

        <button
          className="md:hidden text-mercury p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5 mt-3 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active ? "text-mint bg-mint/10" : "text-ash hover:text-mercury hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/generator"
              className="mt-2 px-6 py-3 bg-mint text-void font-semibold text-sm rounded-xl text-center"
            >
              Start Forging
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}