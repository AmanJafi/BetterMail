
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import juice from 'juice/client';

interface SanitizationResult {
  html: string;
  warnings: string[];
}

/**
 * Browser-native version of the sanitization logic.
 * Uses DOMParser and native DOM traversal instead of cheerio.
 */
export function sanitizeOnClient(html: string, preserveEmailStyles = false): SanitizationResult {
  if (typeof window === 'undefined') return { html, warnings: [] };

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const warnings: string[] = [];

  // 1. Remove forbidden tags
  const forbiddenTags = preserveEmailStyles
    ? ['script', 'iframe', 'object', 'embed', 'form']
    : ['script', 'style', 'head', 'meta', 'link', 'iframe', 'object', 'embed', 'form'];
  forbiddenTags.forEach(tag => {
    const elements = doc.querySelectorAll(tag);
    elements.forEach(el => el.remove());
  });

  // 2. Remove forbidden attributes and check compatibility
  const allElements = doc.querySelectorAll('*');
  allElements.forEach(el => {
    // Event handlers (on*)
    const attribs = el.attributes;
    const toRemove: string[] = [];
    for (let i = 0; i < attribs.length; i++) {
      const attr = attribs[i].name;
      if (attr.startsWith('on')) {
        toRemove.push(attr);
        warnings.push(`Removed event handler '${attr}' from <${el.tagName.toLowerCase()}>`);
      }
    }
    toRemove.forEach(attr => el.removeAttribute(attr));

    // 3. CSS Compatibility Checks
    const style = el.getAttribute('style');
    if (style) {
      const tagStr = el.tagName.toLowerCase();
      if (style.includes('display: flex') || style.includes('display:flex')) {
        warnings.push(`Flexbox detected on <${tagStr}>. Gmail has limited support.`);
      }
      if (style.includes('display: grid') || style.includes('display:grid')) {
        warnings.push(`CSS Grid detected on <${tagStr}>. Gmail does not support Grid.`);
      }
      if (style.includes('position: absolute') || style.includes('position:absolute')) {
        warnings.push(`Absolute positioning detected on <${tagStr}>. Gmail does not support it.`);
      }
      if (style.includes('background-image')) {
        warnings.push(`Background image detected on <${tagStr}>. Test thoroughly.`);
      }
    }
  });

  return {
    html: doc.documentElement.innerHTML,
    warnings: Array.from(new Set(warnings)),
  };
}

/**
 * Renders a React component to sanitized, email-ready HTML on the client.
 */
export async function renderOnClient(Component: any, props: any): Promise<SanitizationResult> {
  // 1. React to Static Markup
  const rawHtml = renderToStaticMarkup(React.createElement(Component, props));
  const htmlWithDoctype = rawHtml.startsWith('<!DOCTYPE') ? rawHtml : `<!DOCTYPE html>${rawHtml}`;

  // 2. CSS Inlining (Client-side)
  // We use juice/client which works in the browser without 'fs' dependencies.
  const inlinedHtml = juice(htmlWithDoctype, {
    applyStyleTags: true,
    removeStyleTags: true,
    preserveMediaQueries: true
  });

  // 3. Sanitization
  const { html: sanitizedHtml, warnings } = sanitizeOnClient(inlinedHtml);

  return { html: sanitizedHtml, warnings };
}

/**
 * Renders pasted HTML using the same email-safe pipeline as React templates.
 * A centered table wrapper is added so the exported email stays centered in
 * Gmail and other clients even when the pasted document has no outer layout.
 */
export async function renderRawHtmlOnClient(source: string): Promise<SanitizationResult> {
  if (typeof window === 'undefined') return { html: source, warnings: [] };

  const parser = new DOMParser();
  const doc = parser.parseFromString(source, 'text/html');
  const body = doc.body;

  body.style.margin = '0';
  body.style.padding = '0';
  body.style.width = '100%';
  body.style.textAlign = 'center';
  body.setAttribute('align', 'center');

  const wrapper = doc.createElement('table');
  wrapper.setAttribute('role', 'presentation');
  wrapper.setAttribute('width', '100%');
  wrapper.setAttribute('cellpadding', '0');
  wrapper.setAttribute('cellspacing', '0');
  wrapper.setAttribute('border', '0');
  wrapper.setAttribute('align', 'center');
  wrapper.style.width = '100%';
  wrapper.style.margin = '0 auto';
  wrapper.style.padding = '0';
  wrapper.style.textAlign = 'center';

  const row = doc.createElement('tr');
  const cell = doc.createElement('td');
  cell.setAttribute('align', 'center');
  cell.style.padding = '0';
  cell.style.textAlign = 'center';
  while (body.firstChild) cell.appendChild(body.firstChild);
  row.appendChild(cell);
  wrapper.appendChild(row);
  body.appendChild(wrapper);

  // Fixed-width top-level tables need an explicit auto margin in email HTML.
  Array.from(cell.children).forEach((element) => {
    if (element.tagName.toLowerCase() === 'table') {
      const table = element as HTMLTableElement;
      table.setAttribute('align', 'center');
      table.style.marginLeft = 'auto';
      table.style.marginRight = 'auto';
    }
  });

  const doctype = '<!DOCTYPE html>';
  const inlinedHtml = juice(doctype + doc.documentElement.outerHTML, {
    applyStyleTags: true,
    removeStyleTags: true,
    preserveMediaQueries: true,
  });

  return sanitizeOnClient(inlinedHtml, true);
}
