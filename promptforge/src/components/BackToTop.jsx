import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-mint text-void flex items-center justify-center shadow-[0_0_30px_rgba(0,255,196,0.3)] hover:bg-mint-hover transition-all animate-fade-in"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}