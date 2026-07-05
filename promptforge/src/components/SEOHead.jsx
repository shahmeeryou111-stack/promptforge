import React, { useEffect } from "react";
import { generateWebApplicationSchema, injectStructuredData, updatePageMeta } from "@/utils/seo";

/**
 * SEOHead component for managing per-page meta tags and structured data.
 * On mount, it injects the WebApplication schema and updates document title/description.
 */
export default function SEOHead({ title, description, canonical }) {
  useEffect(() => {
    updatePageMeta({ title, description, canonical });
    injectStructuredData("schema-webapp", generateWebApplicationSchema());
  }, [title, description, canonical]);

  return null;
}