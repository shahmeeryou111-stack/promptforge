import { aiModels } from "@/data/categories";

/**
 * Generates an optimized AI prompt based on model type and user inputs.
 * @param {Object} params - Generation parameters
 * @param {string} params.model - Target AI model name
 * @param {string} params.topic - Main user input / objective
 * @param {string} params.tone - Desired tone
 * @param {string} params.format - Output format
 * @param {string} params.style - Image style (for image models)
 * @param {string} params.aspectRatio - Aspect ratio (for image models)
 * @param {string} params.category - Prompt category
 * @returns {string} - The generated prompt
 */
export function generatePrompt(params) {
  const { model, topic, tone, format, style, aspectRatio, category } = params;

  const modelData = aiModels.find((m) => m.name === model);
  const modelType = modelData?.type || "text";

  if (!topic || topic.trim().length === 0) {
    return "Enter your topic or objective above to generate an optimized prompt.";
  }

  if (modelType === "image") {
    return generateImagePrompt(params);
  }

  return generateTextPrompt(params);
}

function generateTextPrompt({ model, topic, tone, format, category }) {
  const roleMap = {
    writing: "an expert writer and storytelling specialist",
    coding: "a Senior Software Engineer with 15+ years of experience",
    marketing: "a senior marketing strategist and copywriter",
    business: "a business consultant and strategy expert",
    education: "an expert educator and curriculum designer",
    design: "a senior UX/UI designer and design systems lead",
    productivity: "a productivity coach and workflow optimization expert",
    art: "a creative director",
  };

  const role = roleMap[category] || "an expert in your field";
  const toneStr = tone ? ` Use a ${tone.toLowerCase()} tone.` : "";
  const formatStr = format ? ` Format the output as: ${format.toLowerCase()}.` : "";

  return `Act as ${role}. ${topic.trim()}

Constraints & Guidelines:
- Provide detailed, actionable, and well-structured output.
- Use specific examples and evidence where applicable.
- If the request involves code, ensure it is production-ready with proper error handling and comments.
- If the request involves creative content, ensure originality and engagement.
- Break complex ideas into clear, digestible sections.${toneStr}${formatStr}

Before responding, think step-by-step about the best approach to fulfill this request comprehensively.`;
}

function generateImagePrompt({ model, topic, style, tone, aspectRatio, category }) {
  const styleMap = {
    Photorealistic: "hyper-realistic, photorealistic, ultra-detailed textures, 8K resolution",
    Cinematic: "cinematic, dramatic lighting, film still, color graded, anamorphic",
    Anime: "anime style, cel-shaded, vibrant colors, Studio Ghibli inspired",
    "Oil Painting": "oil painting, visible brush strokes, rich textures, classical art style",
    "3D Render": "3D render, octane render, ray tracing, subsurface scattering, ultra-detailed",
    Watercolor: "watercolor painting, soft edges, flowing colors, paper texture",
    Cyberpunk: "cyberpunk aesthetic, neon lights, futuristic, dystopian, holographic",
    Minimalist: "minimalist, clean lines, negative space, simple color palette",
    Surreal: "surreal, dreamlike, impossible geometry, Salvador Dalí inspired",
    "Vintage Film": "vintage film photography, grain, faded colors, 35mm, nostalgic",
  };

  const styleStr = style ? styleMap[style] || style.toLowerCase() : "highly detailed, professional quality";
  const moodStr = tone ? `mood: ${tone.toLowerCase()}, ` : "";
  const ar = aspectRatio || "16:9";

  if (model === "Midjourney") {
    return `${topic.trim()}, ${styleStr}, ${moodStr}professional composition, 8K, ultra-detailed --ar ${ar} --style raw --v 6.0`;
  }

  if (model === "Stable Diffusion") {
    return `(masterpiece, best quality, ultra-detailed:1.2), ${topic.trim()}, ${styleStr}, ${moodStr}professional composition, 8K, sharp focus, intricate details`;
  }

  // DALL-E 3 — natural language
  return `A ${styleStr} image of ${topic.trim()}. ${moodStr}Professional composition with careful attention to lighting, texture, and detail. Ultra-high quality, 8K resolution, centered framing. The image should be visually striking with a cohesive color palette and strong visual hierarchy.`;
}

/**
 * Counts the number of words in a prompt.
 */
export function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Returns a quality score for the prompt based on structure completeness.
 */
export function getPromptQuality(prompt) {
  let score = 0;
  const checks = [
    { test: prompt.length > 50, points: 20, label: "Sufficient detail" },
    { test: /act as|you are/i.test(prompt), points: 20, label: "Role defined" },
    { test: /format|output|structure/i.test(prompt), points: 20, label: "Format specified" },
    { test: /step|first|then|finally/i.test(prompt), points: 20, label: "Clear instructions" },
    { test: /example|instance|such as/i.test(prompt), points: 10, label: "Examples referenced" },
    { test: prompt.length > 200, points: 10, label: "Comprehensive" },
  ];
  checks.forEach((c) => {
    if (c.test) score += c.points;
  });
  return { score, checks };
}