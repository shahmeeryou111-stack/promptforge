export const categories = [
  {
    id: "writing",
    name: "Creative Writing",
    icon: "PenTool",
    description: "Craft compelling stories, blogs, scripts, and creative content with AI.",
    color: "#00ffc4",
  },
  {
    id: "coding",
    name: "Development",
    icon: "Code",
    description: "Generate code, debug, review, and architect software solutions.",
    color: "#3b82f6",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: "TrendingUp",
    description: "Create ad copy, social media campaigns, email sequences, and more.",
    color: "#f59e0b",
  },
  {
    id: "art",
    name: "Image Generation",
    icon: "Image",
    description: "Produce stunning AI art with Midjourney, DALL-E, and Stable Diffusion.",
    color: "#ec4899",
  },
  {
    id: "business",
    name: "Business Strategy",
    icon: "Briefcase",
    description: "Build business plans, pitch decks, market analysis, and growth strategies.",
    color: "#8b5cf6",
  },
  {
    id: "education",
    name: "Education",
    icon: "GraduationCap",
    description: "Create lessons, study guides, quizzes, and interactive learning content.",
    color: "#10b981",
  },
  {
    id: "design",
    name: "Design & UX",
    icon: "Palette",
    description: "Design UI/UX, wireframes, brand identities, and design systems.",
    color: "#f97316",
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: "Zap",
    description: "Automate workflows, manage projects, and optimize your daily routine.",
    color: "#06b6d4",
  },
];

export const aiModels = [
  { id: "chatgpt", name: "ChatGPT", fullName: "ChatGPT (GPT-4o)", type: "text" },
  { id: "claude", name: "Claude", fullName: "Claude 3.5 Sonnet", type: "text" },
  { id: "midjourney", name: "Midjourney", fullName: "Midjourney v6", type: "image" },
  { id: "dalle", name: "DALL-E 3", fullName: "DALL-E 3", type: "image" },
  { id: "sd", name: "Stable Diffusion", fullName: "Stable Diffusion XL", type: "image" },
  { id: "gemini", name: "Gemini", fullName: "Google Gemini", type: "text" },
  { id: "llama", name: "Llama 3", fullName: "Llama 3 (Meta)", type: "text" },
];

export const tones = [
  "Professional", "Casual", "Creative", "Technical", "Persuasive",
  "Humorous", "Academic", "Inspirational", "Authoritative", "Empathetic",
];

export const formats = [
  "Paragraph", "Bullet Points", "Numbered List", "Table", "Step-by-Step Guide",
  "Q&A Format", "Markdown", "JSON", "Code Block",
];

export const imageStyles = [
  "Photorealistic", "Cinematic", "Anime", "Oil Painting", "3D Render",
  "Watercolor", "Cyberpunk", "Minimalist", "Surreal", "Vintage Film",
];

export const aspectRatios = [
  { label: "1:1 Square", value: "1:1" },
  { label: "16:9 Widescreen", value: "16:9" },
  { label: "9:16 Portrait", value: "9:16" },
  { label: "4:3 Classic", value: "4:3" },
  { label: "3:2 Landscape", value: "3:2" },
  { label: "21:9 Ultrawide", value: "21:9" },
];