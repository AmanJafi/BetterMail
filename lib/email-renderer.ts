
import 'server-only';
import React from 'react';
import juice from 'juice';
import { sanitizeForGmail } from './gmail-sanitizer';

// Dynamically import to avoid build errors with some Next.js configurations
// complaining about react-dom/server in App Router 

interface RenderResult {
  html: string;
  warnings: string[];
}

export async function renderTemplate(Component: React.ComponentType<any>, props: any): Promise<RenderResult> {
  const { renderToStaticMarkup } = await import('react-dom/server');

  const rawHtml = renderToStaticMarkup(React.createElement(Component, props));

  const htmlWithDoctype = rawHtml.startsWith('<!DOCTYPE') ? rawHtml : `<!DOCTYPE html>${rawHtml}`;

  const inlinedHtml = juice(htmlWithDoctype, {
    applyStyleTags: true,
    removeStyleTags: true,
    preserveMediaQueries: true
  });

  const { html: sanitizedHtml, warnings } = sanitizeForGmail(inlinedHtml);

  return { html: sanitizedHtml, warnings };
}
