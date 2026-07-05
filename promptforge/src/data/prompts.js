export const promptTemplates = [
  // ── WRITING ──
  {
    id: 1, model: "ChatGPT", category: "writing", title: "Expert Story Writer",
    description: "Generate immersive short stories with rich character development.",
    tags: ["fiction", "storytelling", "narrative"],
    structure: "Act as a master storyteller with 20 years of experience in literary fiction. Write a {length} short story about: {topic}. Develop a compelling protagonist with distinct motivations, create vivid sensory descriptions, and build tension toward a meaningful resolution. Use a {tone} tone. The story should explore the theme of human connection and include at least one unexpected plot twist.",
  },
  {
    id: 2, model: "Claude", category: "writing", title: "Long-Form Blog Article",
    description: "Create SEO-optimized, deeply researched blog posts.",
    tags: ["blog", "seo", "content"],
    structure: "Act as an expert content writer and SEO specialist. Write a comprehensive, well-structured blog article about: {topic}. Include: 1) An engaging hook in the intro, 2) Clear H2 and H3 headings, 3) Data-backed arguments with examples, 4) Bullet points for readability, 5) A strong CTA at the end. Target 1500-2000 words. Tone: {tone}. Format: {format}.",
  },
  {
    id: 3, model: "Gemini", category: "writing", title: "Screenplay Scene Generator",
    description: "Craft professional screenplay scenes with proper formatting.",
    tags: ["screenplay", "film", "script"],
    structure: "Act as a professional screenwriter. Write a {tone} screenplay scene about: {topic}. Use standard screenplay formatting (scene headings, action lines, character names centered, dialogue, parentheticals). The scene should be 2-3 pages, include subtext in dialogue, and end with a dramatic turn or reveal that propels the story forward.",
  },

  // ── CODING ──
  {
    id: 4, model: "ChatGPT", category: "coding", title: "Senior Code Reviewer",
    description: "Get expert-level code reviews with actionable feedback.",
    tags: ["review", "best-practices", "security"],
    structure: "Act as a Senior Software Engineer with expertise in clean code, security, and performance. Review the following code for: 1) Performance bottlenecks, 2) Security vulnerabilities (OWASP Top 10), 3) Clean code violations (naming, DRY, SOLID), 4) Potential bugs or edge cases. Provide specific line-by-line feedback with suggested improvements and code examples. Code: {topic}",
  },
  {
    id: 5, model: "Claude", category: "coding", title: "Full-Stack App Architect",
    description: "Architect complete web applications from scratch.",
    tags: ["architecture", "fullstack", "design"],
    structure: "Act as a Principal Software Architect. Design a complete technical architecture for: {topic}. Include: 1) Technology stack recommendations with justifications, 2) System architecture diagram (describe components and data flow), 3) Database schema design, 4) API endpoint specifications, 5) Authentication and authorization strategy, 6) Deployment and scaling plan. Format as {format}.",
  },
  {
    id: 6, model: "ChatGPT", category: "coding", title: "Debug Detective",
    description: "Systematically diagnose and fix any bug.",
    tags: ["debugging", "troubleshooting", "fix"],
    structure: "Act as an expert debugging specialist. I'm encountering the following issue: {topic}. Provide a systematic debugging approach: 1) Identify the most likely root causes (ranked by probability), 2) Step-by-step diagnostic strategy to narrow it down, 3) The most probable fix with code, 4) How to prevent this class of bug in the future. Tone: {tone}.",
  },
  {
    id: 7, model: "Gemini", category: "coding", title: "Test Suite Generator",
    description: "Generate comprehensive test suites for any function.",
    tags: ["testing", "unit-tests", "quality"],
    structure: "Act as a QA Engineer. Generate a comprehensive test suite for: {topic}. Cover: 1) Happy path scenarios, 2) Edge cases and boundary conditions, 3) Error handling, 4) Performance considerations, 5) Mocking strategies for external dependencies. Write tests using Jest and React Testing Library with clear describe/it blocks. Format: {format}.",
  },

  // ── MARKETING ──
  {
    id: 8, model: "ChatGPT", category: "marketing", title: "Viral Social Media Campaign",
    description: "Create shareable social media campaigns that convert.",
    tags: ["social", "campaign", "viral"],
    structure: "Act as a viral marketing strategist. Create a 7-day social media campaign for: {topic}. For each day, provide: 1) Platform (Instagram/TikTok/LinkedIn/Twitter), 2) Hook/headline, 3) Full post copy with hashtags, 4) Visual direction, 5) CTA. The campaign should build narrative momentum, encourage user-generated content, and have a clear conversion goal. Tone: {tone}.",
  },
  {
    id: 9, model: "Claude", category: "marketing", title: "Email Sequence Master",
    description: "Build high-converting email automation sequences.",
    tags: ["email", "automation", "conversion"],
    structure: "Act as an expert email marketing copywriter. Create a 5-email nurture sequence for: {topic}. Include for each email: 1) Subject line (with A/B variant), 2) Preview text, 3) Full email body (150-250 words), 4) CTA, 5) Send timing logic. The sequence should move prospects from awareness to decision. Tone: {tone}. Format: {format}.",
  },
  {
    id: 10, model: "Gemini", category: "marketing", title: "Brand Voice Developer",
    description: "Define a distinctive brand voice and messaging framework.",
    tags: ["branding", "voice", "identity"],
    structure: "Act as a brand strategist. Develop a complete brand voice and messaging framework for: {topic}. Include: 1) Brand personality (5 traits with descriptions), 2) Voice guidelines (do's and don'ts), 3) Tagline options (5 variations), 4) Core messaging pillars, 5) Sample copy demonstrating the voice in different contexts. Tone: {tone}.",
  },

  // ── ART / IMAGE GENERATION ──
  {
    id: 11, model: "Midjourney", category: "art", title: "Cinematic Hyper-Realism",
    description: "Generate breathtaking cinematic visuals with depth.",
    tags: ["cinematic", "realistic", "8k"],
    structure: "A hyper-realistic cinematic shot of {topic}, dramatic {tone} lighting, volumetric god rays, shot on ARRI Alexa 65, 35mm lens, f/1.8, shallow depth of field, 8K resolution, ultra-detailed textures, color graded teal and orange, film grain, anamorphic lens flare --ar 16:9 --style raw --v 6.0",
  },
  {
    id: 12, model: "DALL-E 3", category: "art", title: "Surreal Dreamscape",
    description: "Create mind-bending surreal art with vivid imagination.",
    tags: ["surreal", "dreamlike", "creative"],
    structure: "A surreal dreamscape depicting {topic}. The scene blends impossible geometry with organic forms. Floating elements defy gravity. Color palette of electric mint green and deep obsidian. Ethereal mist, crystalline refractions, and prismatic light. Influenced by Salvador Dalí and MC Escher. Ultra-detailed, 8K, masterpiece quality.",
  },
  {
    id: 13, model: "Midjourney", category: "art", title: "Minimalist Product Shot",
    description: "Clean, professional product photography for any item.",
    tags: ["product", "minimal", "clean"],
    structure: "Professional product photography of {topic}, centered composition on a matte black surface, soft diffused studio lighting, subtle reflection, minimalist aesthetic, shot on Phase One, 80mm macro lens, f/11, ultra-sharp focus, commercial quality, clean background --ar 1:1 --style raw --v 6.0",
  },
  {
    id: 14, model: "Stable Diffusion", category: "art", title: "Cyberpunk Character",
    description: "Design detailed cyberpunk characters with neon aesthetics.",
    tags: ["cyberpunk", "character", "neon"],
    structure: "(masterpiece, best quality, ultra-detailed:1.2), cyberpunk character, {topic}, neon city background, rain-soaked streets, holographic reflections, glowing cybernetic implants, leather techwear outfit, dramatic rim lighting, electric mint and magenta color palette, cinematic composition, 8K, sharp focus",
  },
  {
    id: 15, model: "Midjourney", category: "art", title: "Fantasy Landscape",
    description: "Epic fantasy worlds with sweeping vistas.",
    tags: ["fantasy", "landscape", "epic"],
    structure: "An epic fantasy landscape of {topic}, sweeping vista, golden hour lighting, volumetric mist, intricate rock formations, distant waterfalls, lush vegetation, atmospheric depth, matte painting style, inspired by Studio Ghibli and Frank Frazetta, ultra-detailed, 8K --ar 21:9 --v 6.0",
  },

  // ── BUSINESS ──
  {
    id: 16, model: "ChatGPT", category: "business", title: "Business Plan Architect",
    description: "Create investor-ready business plans with financials.",
    tags: ["business-plan", "strategy", "investor"],
    structure: "Act as a business consultant and financial analyst. Create a comprehensive business plan for: {topic}. Include: 1) Executive summary, 2) Market analysis (TAM/SAM/SOM), 3) Competitive landscape, 4) Business model and revenue streams, 5) Go-to-market strategy, 6) Financial projections (3-year P&L), 7) Risk assessment. Format: {format}. Tone: {tone}.",
  },
  {
    id: 17, model: "Claude", category: "business", title: "Pitch Deck Builder",
    description: "Craft compelling investor pitch decks that secure funding.",
    tags: ["pitch", "investor", "startup"],
    structure: "Act as a pitch deck expert who has helped startups raise $500M+. Create a 10-slide pitch deck for: {topic}. For each slide provide: 1) Slide title, 2) Key headline, 3) Bullet points, 4) Visual suggestion, 5) Speaker notes. Follow the Sequoia deck structure. Tone: {tone}. Format: {format}.",
  },
  {
    id: 18, model: "Gemini", category: "business", title: "Market Research Analyst",
    description: "Deep-dive market research with actionable insights.",
    tags: ["research", "market", "analysis"],
    structure: "Act as a senior market research analyst. Conduct a thorough market analysis for: {topic}. Provide: 1) Industry size and growth trends, 2) Key market segments, 3) Top 5 competitors with SWOT, 4) Customer personas (3), 5) Market gaps and opportunities, 6) Strategic recommendations. Format: {format}. Tone: {tone}.",
  },

  // ── EDUCATION ──
  {
    id: 19, model: "ChatGPT", category: "education", title: "Interactive Lesson Plan",
    description: "Design engaging lesson plans for any subject and grade.",
    tags: ["lesson", "teaching", "curriculum"],
    structure: "Act as an expert curriculum designer. Create a detailed lesson plan for: {topic}. Include: 1) Learning objectives (Bloom's taxonomy), 2) Hook/engagement activity, 3) Direct instruction, 4) Guided practice, 5) Independent practice, 6) Assessment, 7) Extension activities, 8) Materials needed. Format: {format}. Tone: {tone}.",
  },
  {
    id: 20, model: "Claude", category: "education", title: "Study Guide Creator",
    description: "Build comprehensive study guides that boost retention.",
    tags: ["study", "guide", "learning"],
    structure: "Act as an expert educator. Create a comprehensive study guide for: {topic}. Include: 1) Key concepts summary, 2) Detailed explanations with examples, 3) Memory techniques (mnemonics, analogies), 4) Practice questions (10 multiple choice + 5 short answer with answers), 5) Common misconceptions, 6) Further reading. Format: {format}.",
  },
  {
    id: 21, model: "Gemini", category: "education", title: "Quiz Generator",
    description: "Generate varied assessments with answer keys instantly.",
    tags: ["quiz", "assessment", "test"],
    structure: "Act as an assessment designer. Create a comprehensive quiz for: {topic}. Generate: 1) 10 multiple choice questions (4 options each), 2) 5 true/false questions, 3) 3 short answer questions, 4) 1 essay question with rubric. Include an answer key with explanations. Difficulty: mixed. Format: {format}.",
  },

  // ── DESIGN ──
  {
    id: 22, model: "ChatGPT", category: "design", title: "UI/UX Wireframe Brief",
    description: "Generate detailed wireframe specifications for any screen.",
    tags: ["ui", "ux", "wireframe"],
    structure: "Act as a senior UX designer. Create a detailed wireframe specification for: {topic}. Include: 1) User flow description, 2) Layout structure (grid, spacing, hierarchy), 3) Component inventory, 4) Interaction states, 5) Responsive breakpoints, 6) Accessibility considerations (WCAG 2.2 AA). Format: {format}. Tone: {tone}.",
  },
  {
    id: 23, model: "Claude", category: "design", title: "Design System Generator",
    description: "Build complete design systems with tokens and components.",
    tags: ["design-system", "tokens", "components"],
    structure: "Act as a design systems lead. Create a design system specification for: {topic}. Include: 1) Design tokens (colors, typography, spacing, shadows), 2) Component library (buttons, inputs, cards, navigation), 3) Usage guidelines, 4) Do's and don'ts, 5) Accessibility requirements. Provide values in CSS custom properties. Format: {format}.",
  },
  {
    id: 24, model: "DALL-E 3", category: "design", title: "Logo Concept Generator",
    description: "Generate professional logo concepts with explanations.",
    tags: ["logo", "branding", "identity"],
    structure: "A professional minimalist logo design for {topic}. The logo uses geometric precision with a modern, timeless aesthetic. Color palette: electric mint green (#00ffc4) on deep obsidian black. Clean vector style, scalable, suitable for both digital and print. The design conveys innovation and trustworthiness. White background, centered.",
  },

  // ── PRODUCTIVITY ──
  {
    id: 25, model: "ChatGPT", category: "productivity", title: "Workflow Automator",
    description: "Design automated workflows that save hours weekly.",
    tags: ["automation", "workflow", "efficiency"],
    structure: "Act as a productivity and automation expert. Design an automated workflow for: {topic}. Include: 1) Current process analysis, 2) Automation opportunities (ranked by impact/effort), 3) Tool recommendations (Zapier, Make, custom scripts), 4) Step-by-step automation setup, 5) Error handling and fallbacks, 6) Time savings estimate. Format: {format}.",
  },
  {
    id: 26, model: "Claude", category: "productivity", title: "Project Plan Builder",
    description: "Create detailed project plans with timelines and resources.",
    tags: ["project", "planning", "management"],
    structure: "Act as a senior project manager (PMP). Create a comprehensive project plan for: {topic}. Include: 1) Project scope and deliverables, 2) Work breakdown structure, 3) Timeline with milestones (Gantt-style), 4) Resource allocation, 5) Risk register, 6) Communication plan, 7) Success metrics. Format: {format}. Tone: {tone}.",
  },
  {
    id: 27, model: "Gemini", category: "productivity", title: "Daily Routine Optimizer",
    description: "Optimize your daily schedule for peak performance.",
    tags: ["routine", "schedule", "optimization"],
    structure: "Act as a productivity coach. Design an optimized daily routine for: {topic}. Include: 1) Time-blocked schedule (morning to evening), 2) Energy management strategy (peak/dip/recovery), 3) Habit stacking suggestions, 4) Buffer time and breaks, 5) Evening wind-down routine, 6) Weekly review template. Tone: {tone}. Format: {format}.",
  },
];

export const trendingPrompts = [
  {
    id: 101, model: "ChatGPT", category: "coding", title: "Act as a Senior Developer",
    description: "Turn AI into a Lead Software Engineer for code reviews, architecture advice, and pair programming.",
    uses: 48230, tags: ["coding", "review", "architecture"],
    prompt: "Act as a Senior Software Engineer with 15+ years of experience. I need help with: [YOUR_TOPIC]. Provide expert-level guidance including best practices, potential pitfalls, and production-ready code examples. Explain your reasoning and offer alternatives where appropriate.",
  },
  {
    id: 102, model: "Midjourney", category: "art", title: "Cinematic Portrait",
    description: "Generate stunning cinematic portraits with professional lighting.",
    uses: 39870, tags: ["portrait", "cinematic"],
    prompt: "A cinematic portrait of [SUBJECT], dramatic Rembrandt lighting, shallow depth of field, shot on 85mm lens f/1.4, moody atmosphere, ultra-detailed skin texture, color graded for film, 8K --ar 2:3 --style raw --v 6.0",
  },
  {
    id: 103, model: "ChatGPT", category: "writing", title: "SEO Blog Outline",
    description: "Generate SEO-optimized blog outlines that rank on Google.",
    uses: 35120, tags: ["seo", "blog", "content"],
    prompt: "Act as an SEO content strategist. Create a detailed blog outline for: [YOUR_TOPIC]. Include: H1, H2, H3 headings, target keyword placement, meta description, internal linking suggestions, and a content brief for each section. Optimize for search intent and featured snippets.",
  },
  {
    id: 104, model: "Claude", category: "business", title: "Startup Pitch",
    description: "Craft a compelling startup pitch that investors can't ignore.",
    uses: 28940, tags: ["startup", "pitch", "investor"],
    prompt: "Act as a startup pitch expert. Help me craft a compelling 3-minute pitch for: [YOUR_STARTUP]. Structure it as: Hook → Problem → Solution → Market Size → Business Model → Traction → Team → Ask. Make it memorable, data-driven, and emotionally resonant.",
  },
  {
    id: 105, model: "DALL-E 3", category: "art", title: "Product Mockup",
    description: "Create professional product mockups for presentations.",
    uses: 24680, tags: ["product", "mockup", "design"],
    prompt: "A professional product mockup of [YOUR_PRODUCT] displayed on a minimalist podium, soft studio lighting, gradient background from deep charcoal to black, subtle reflections, commercial photography quality, 8K resolution, centered composition.",
  },
  {
    id: 106, model: "ChatGPT", category: "marketing", title: "Ad Copy Variations",
    description: "Generate 10 high-converting ad copy variations in seconds.",
    uses: 22340, tags: ["ads", "copywriting", "conversion"],
    prompt: "Act as a direct response copywriter. Write 10 ad copy variations for: [YOUR_PRODUCT]. Use different psychological triggers: scarcity, social proof, curiosity, fear of missing out, aspiration, urgency, reciprocity, authority, commitment, and novelty. Each variation: headline + body + CTA. Keep under 100 characters per line.",
  },
];