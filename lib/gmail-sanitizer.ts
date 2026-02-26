
import * as cheerio from 'cheerio';

interface SanitizationResult {
  html: string;
  warnings: string[];
}

export function sanitizeForGmail(html: string): SanitizationResult {
  const $ = cheerio.load(html);
  const warnings: string[] = [];

  // 1. Remove forbidden tags
  $('script').remove();
  $('style').remove();
  $('head').remove();
  $('meta').remove();
  $('link').remove();
  $('iframe').remove();
  $('object').remove();
  $('embed').remove();
  $('form').remove();

  // 2. Remove forbidden attributes
  $('*').each((_, element) => {
    const el = $(element);
    const attribs = el.attr();

    if (attribs) {
      Object.keys(attribs).forEach((attr) => {
        if (attr.startsWith('on')) { // Event handlers
          el.removeAttr(attr);
          const tagName = el.prop('tagName');
          warnings.push(`Removed event handler '${attr}' from <${tagName ? tagName.toLowerCase() : 'element'}>`);
        }
        if (attr === 'class') {
          // We can strip classes usually, but maybe keep for reference if juice hasn't run? 
          // Ideally juice runs BEFORE this. 
          // Gmail supports SOME classes but mostly for media queries. 
          // For now, let's keep clean output by stripping classes if irrelevant?
          // Actually, some email clients verify class names. 
          // Standard practice: inline everything, then remove classes.
          // We'll warn if we see classes but not remove them forcefully unless strictly needed.
        }
      });
    }

    // 3. CSS Compatibility Checks (Simulated)
    // Cheerio doesn't parse CSS in style attribute easily without a parser, 
    // but we can do basic regex checks on the style attribute string.
    const style = el.attr('style');
    if (style) {
      const tagName = el.prop('tagName');
      const tagStr = tagName ? tagName.toLowerCase() : 'element';

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
        // Gmail supports it on some elements but widely inconsistent.
        warnings.push(`Background image detected on <${tagStr}>. Test thoroughly.`);
      }
    }
  });

  // 4. Ensure we return only the body body's content if possible, or a clean wrapper.
  // Cheerio .html() returns the full document usually if we loaded it full.
  // If we just want the inner HTML of body, we can extract it.
  // But standard email usually wants a full <html><body> structure or at least a wrapper.
  // Let's return the full sanitized HTML.

  return {
    html: $.html(),
    warnings: Array.from(new Set(warnings)), // Dedupe
  };
}
