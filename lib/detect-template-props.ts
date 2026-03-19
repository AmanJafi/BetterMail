/**
 * Calls a React component function with a JS Proxy to detect which props
 * it accesses at render time, along with the default values provided.
 *
 * Returns an array of { key, defaultValue } in the order they were first accessed.
 */
export interface DetectedProp {
  key: string;
  defaultValue: string;
}

export function detectTemplateProps(
  component: (props: any) => any
): DetectedProp[] {
  const accessed: DetectedProp[] = [];
  const seen = new Set<string>();

  const proxy = new Proxy(
    {},
    {
      get(_target, prop: string) {
        if (typeof prop !== 'string' || prop === 'then') return undefined;
        if (!seen.has(prop)) {
          seen.add(prop);
          // Return a safe placeholder value for every prop type
          accessed.push({ key: prop, defaultValue: '' });
        }
        // Return a value that won't crash the render
        if (prop === 'theme') return 'dark';
        if (prop === 'extraContent') return 'Item 1\nItem 2';
        return prop.toLowerCase().includes('color') ? '#4f46e5' : 'placeholder';
      },
    }
  );

  try {
    component(proxy);
  } catch {
    // Ignore render errors — we only care about prop access
  }

  return accessed;
}

/**
 * Heuristically determines the field type and label for a prop key.
 */
export interface PropField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'color' | 'toggle' | 'alignment';
  placeholder: string;
  halfWidth: boolean;
}

export function inferFieldType(key: string): PropField {
  const k = key.toLowerCase();

  // Alignment
  if (k === 'headingalign' || k === 'bodyalign') {
    return {
      key,
      label: k === 'headingalign' ? 'Heading Align' : 'Body Align',
      type: 'alignment',
      placeholder: '',
      halfWidth: true,
    };
  }

  // Theme toggle
  if (k === 'theme') {
    return { key, label: 'Theme', type: 'toggle', placeholder: '', halfWidth: false };
  }

  // Color
  if (k.includes('color') || k.includes('colour')) {
    return {
      key,
      label: toLabel(key),
      type: 'color',
      placeholder: '#4f46e5',
      halfWidth: false,
    };
  }

  // URLs / links
  if (k.includes('link') || k.includes('url') || k.includes('href') || k.includes('src')) {
    return { key, label: toLabel(key), type: 'text', placeholder: 'https://...', halfWidth: true };
  }

  // Long text fields
  if (
    k === 'body' ||
    k.includes('content') ||
    k.includes('description') ||
    k.includes('details') ||
    k.includes('announcement') ||
    k.includes('text') && k.length > 8 // bodytext, footertext etc
  ) {
    return { key, label: toLabel(key), type: 'textarea', placeholder: 'Enter text...', halfWidth: false };
  }

  // Short paired fields (put side-by-side)
  if (
    k === 'buttontext' || k === 'ctatext' || k === 'ctabutton' ||
    k === 'invoiceid' || k === 'invoicedate' || k === 'totalamount' ||
    k === 'issuetitle' || k === 'companyname' || k === 'tagline' ||
    k === 'maintitle' || k === 'issueinfo' || k === 'statusbadge' ||
    k === 'headerbadge' || k === 'headertag'
  ) {
    return { key, label: toLabel(key), type: 'text', placeholder: '', halfWidth: true };
  }

  // Default: full-width text
  return { key, label: toLabel(key), type: 'text', placeholder: '', halfWidth: false };
}

/** Converts camelCase to Title Case label */
function toLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}
