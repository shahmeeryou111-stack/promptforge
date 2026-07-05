import React, { useState, useMemo } from "react";
import { Copy, Check, Zap, Settings2, ChevronDown } from "lucide-react";
import { generatePrompt, countWords, getPromptQuality } from "@/utils/generator";
import { aiModels, categories, tones, formats, imageStyles, aspectRatios } from "@/data/categories";

export default function PromptGenerator() {
  const [model, setModel] = useState("ChatGPT");
  const [category, setCategory] = useState("writing");
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Professional");
  const [format, setFormat] = useState("Paragraph");
  const [style, setStyle] = useState("Photorealistic");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [copied, setCopied] = useState(false);

  const modelData = aiModels.find((m) => m.name === model);
  const isImageModel = modelData?.type === "image";

  const generatedPrompt = useMemo(() => {
    return generatePrompt({ model, topic, tone, format, style, aspectRatio, category });
  }, [model, topic, tone, format, style, aspectRatio, category]);

  const wordCount = countWords(generatedPrompt);
  const quality = getPromptQuality(generatedPrompt);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = generatedPrompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClear = () => {
    setTopic("");
  };

  return (
    <section id="generator" className="w-full py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-mint/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-mint/20 bg-mint/5 rounded-full">
            <Zap size={14} className="text-mint" fill="#00ffc4" />
            <span className="text-mint text-xs font-bold tracking-[0.15em] uppercase">The Forge Engine</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-mercury mb-4 tracking-tight">
            Build Your <span className="text-gradient-mint">Perfect Prompt</span>
          </h2>
          <p className="text-ash text-lg max-w-2xl mx-auto">
            Select your AI model, define your objective, and let the engine optimize the
            structural syntax for maximum coherence.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Controls — left */}
          <div className="lg:col-span-2 space-y-6">
            {/* Model selector */}
            <div className="bg-carbon border border-white/10 rounded-2xl p-6">
              <label className="block text-xs uppercase tracking-widest text-mint mb-4 font-bold">
                01 · Choose AI Model
              </label>
              <div className="grid grid-cols-2 gap-2">
                {aiModels.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setModel(m.name)}
                    className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all text-center ${
                      model === m.name
                        ? "bg-mint text-void border-mint"
                        : "bg-white/5 border-white/10 text-ash hover:bg-white/10 hover:text-mercury"
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic input */}
            <div className="bg-carbon border border-white/10 rounded-2xl p-6">
              <label className="block text-xs uppercase tracking-widest text-mint mb-4 font-bold">
                02 · Your Objective
              </label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-[#050505] border border-white/5 rounded-xl p-4 text-mercury text-sm focus:border-mint/50 outline-none transition-all min-h-[120px] resize-none placeholder:text-obsidian"
                placeholder="Describe what you want to create... e.g., a blog post about sustainable living tips"
              />
              {topic && (
                <button
                  onClick={handleClear}
                  className="text-obsidian hover:text-mint text-xs mt-2 transition-colors"
                >
                  Clear input
                </button>
              )}
            </div>

            {/* Advanced settings */}
            <div className="bg-carbon border border-white/10 rounded-2xl p-6">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center justify-between w-full text-xs uppercase tracking-widest text-mint font-bold mb-0"
              >
                <span className="flex items-center gap-2">
                  <Settings2 size={14} />
                  03 · Advanced Settings
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showAdvanced ? "rotate-180" : ""}`}
                />
              </button>

              {showAdvanced && (
                <div className="mt-6 space-y-4 animate-fade-in">
                  {!isImageModel ? (
                    <>
                      <div>
                        <label className="block text-obsidian text-xs mb-2 uppercase tracking-wider">Category</label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-2.5 text-mercury text-sm focus:border-mint/50 outline-none"
                        >
                          {categories.map((c) => (
                            <option key={c.id} value={c.id} className="bg-carbon">{c.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-obsidian text-xs mb-2 uppercase tracking-wider">Tone</label>
                        <select
                          value={tone}
                          onChange={(e) => setTone(e.target.value)}
                          className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-2.5 text-mercury text-sm focus:border-mint/50 outline-none"
                        >
                          {tones.map((t) => (
                            <option key={t} value={t} className="bg-carbon">{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-obsidian text-xs mb-2 uppercase tracking-wider">Output Format</label>
                        <select
                          value={format}
                          onChange={(e) => setFormat(e.target.value)}
                          className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-2.5 text-mercury text-sm focus:border-mint/50 outline-none"
                        >
                          {formats.map((f) => (
                            <option key={f} value={f} className="bg-carbon">{f}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-obsidian text-xs mb-2 uppercase tracking-wider">Image Style</label>
                        <select
                          value={style}
                          onChange={(e) => setStyle(e.target.value)}
                          className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-2.5 text-mercury text-sm focus:border-mint/50 outline-none"
                        >
                          {imageStyles.map((s) => (
                            <option key={s} value={s} className="bg-carbon">{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-obsidian text-xs mb-2 uppercase tracking-wider">Mood / Tone</label>
                        <select
                          value={tone}
                          onChange={(e) => setTone(e.target.value)}
                          className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-2.5 text-mercury text-sm focus:border-mint/50 outline-none"
                        >
                          {tones.map((t) => (
                            <option key={t} value={t} className="bg-carbon">{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-obsidian text-xs mb-2 uppercase tracking-wider">Aspect Ratio</label>
                        <select
                          value={aspectRatio}
                          onChange={(e) => setAspectRatio(e.target.value)}
                          className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-2.5 text-mercury text-sm focus:border-mint/50 outline-none"
                        >
                          {aspectRatios.map((a) => (
                            <option key={a.value} value={a.value} className="bg-carbon">{a.label}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Output — right */}
          <div className="lg:col-span-3">
            <div className="bg-carbon border border-white/10 rounded-2xl p-8 shadow-2xl glow-mint sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-obsidian mb-1">Generated Prompt</p>
                  <p className="text-mint font-bold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-mint animate-pulse-glow" />
                    {model} · {wordCount} words · {quality.score}% optimized
                  </p>
                </div>
              </div>

              {/* Quality bar */}
              <div className="mb-6">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-mint to-mint-hover transition-all duration-500"
                    style={{ width: `${quality.score}%` }}
                  />
                </div>
              </div>

              {/* Prompt output */}
              <div className="bg-[#050505]/50 border border-white/5 rounded-xl p-6 mb-6 min-h-[220px] max-h-[400px] overflow-y-auto">
                <p className="text-mercury font-mono text-sm leading-relaxed whitespace-pre-wrap">
                  {generatedPrompt}
                </p>
              </div>

              {/* Quality checks */}
              {topic && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {quality.checks.filter((c) => c.test).map((c) => (
                    <span key={c.label} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-mint/10 border border-mint/20 text-mint text-xs font-medium">
                      <Check size={12} />
                      {c.label}
                    </span>
                  ))}
                </div>
              )}

              <button
                onClick={handleCopy}
                disabled={!topic}
                className="w-full bg-mint hover:bg-mint-hover disabled:bg-white/5 disabled:text-obsidian disabled:cursor-not-allowed text-void font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group"
              >
                {copied ? (
                  <>
                    <Check size={20} />
                    Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy size={20} className="group-hover:fill-void transition-all" />
                    Forge & Copy Prompt
                  </>
                )}
              </button>

              <p className="text-obsidian text-xs text-center mt-4">
                Paste directly into {modelData?.fullName || "your AI tool of choice"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}