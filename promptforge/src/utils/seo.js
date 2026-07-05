/**
 * Generates JSON-LD structured data schemas for SEO.
 */

export function generateWebApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PromptForge",
    url: "https://promptforge.dev",
    description: "Free AI prompt generator for ChatGPT, Midjourney, DALL-E, Claude, Stable Diffusion and Gemini with 500+ templates.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "12480",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://promptforge.dev${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Injects a JSON-LD script tag into the document head.
 * Removes any existing script with the same id first.
 */
export function injectStructuredData(id, schema) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Updates document title and meta description dynamically per page.
 */
export function updatePageMeta({ title, description, canonical }) {
  if (title) document.title = title;
  if (description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }
  if (canonical) {
    const link = document.querySelector('link[rel="canonical"]');
    if (link) link.setAttribute("href", canonical);
  }
}