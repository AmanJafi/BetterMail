'use client';

import { useState } from 'react';
import { Copy, Check, Code2, ChevronRight, AlertCircle } from 'lucide-react';
import { evalTemplate } from '@/lib/template-eval';

interface CustomTemplatePanelProps {
  onSelectVariation: (component: React.ComponentType<any>) => void;
}

const AI_PROMPT = `IMPORTANT: This template runs directly in the browser using JavaScript's Function() constructor. JSX (angle bracket tags like <div>) is NOT supported. You MUST use React.createElement() instead.

Generate a function named exactly: EmailTemplate

The function receives these props (with defaults):
  headline, body, buttonText, buttonLink, primaryColor, theme, headingAlign, bodyAlign

Rules — READ CAREFULLY:
1. NO JSX. Use React.createElement() for every element.
2. NO imports. React is already available as the variable React.
3. NO export keyword.
4. NO TypeScript types or annotations.
5. NO hooks (useState, useEffect, etc.).
6. Inline styles only — pass style as a plain JS object.
7. The function must be named exactly: EmailTemplate
8. Use "function EmailTemplate({...}) { ... }" declaration style.

Prop names to use in your output (these are EXACT — do not rename them):
  headline     — the main headline text
  body         — the body paragraph text
  buttonText   — the button/link label
  buttonLink   — the button/link URL
  primaryColor — accent color (default: '#4f46e5')
  theme        — 'dark' or 'light'
  headingAlign — text alignment for headline: 'left', 'center', or 'right'
  bodyAlign    — text alignment for body and button: 'left', 'center', or 'right'

EXACT TEMPLATE STRUCTURE — follow this pattern:

function EmailTemplate({ headline = 'Hello', body = 'Body text here.', buttonText = 'Click Here', buttonLink = '#', primaryColor = '#4f46e5', theme = 'dark', headingAlign = 'center', bodyAlign = 'center' }) {
  var isDark = theme === 'dark';
  var bg = isDark ? '#09090b' : '#f3f4f6';
  var cardBg = isDark ? '#111113' : '#ffffff';
  var textColor = isDark ? '#a1a1aa' : '#374151';
  var headingColor = isDark ? '#ffffff' : '#111827';

  return React.createElement('div', { style: { backgroundColor: bg, padding: '40px 20px', fontFamily: 'Arial, sans-serif' } },
    React.createElement('table', { width: '600', cellPadding: '0', cellSpacing: '0', style: { margin: '0 auto', backgroundColor: cardBg, borderRadius: '12px' } },
      React.createElement('tbody', null,
        React.createElement('tr', null,
          React.createElement('td', { style: { padding: '40px', textAlign: 'center' } },
            React.createElement('h1', { style: { color: headingColor, fontSize: '28px', marginBottom: '16px', textAlign: headingAlign } }, headline),
            React.createElement('p', { style: { color: textColor, fontSize: '16px', lineHeight: '1.6', marginBottom: '30px', textAlign: bodyAlign } }, body),
            React.createElement('div', { style: { textAlign: bodyAlign } },
              React.createElement('a', { href: buttonLink, style: { display: 'inline-block', padding: '14px 32px', backgroundColor: primaryColor, color: '#ffffff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' } }, buttonText)
            )
          )
        )
      )
    )
  );
}

You may design any layout, color scheme, or structure you like — but the output MUST:
- Use React.createElement() for every element (never angle brackets)
- Be a plain function named EmailTemplate
- Use EXACTLY these prop names: headline, body, buttonText, buttonLink, primaryColor, theme, headingAlign, bodyAlign
- Apply headingAlign to the headline element's textAlign style
- Apply bodyAlign to the body paragraph's textAlign style, and wrap the button in a div using bodyAlign for alignment
- Have no imports, no exports, no JSX, no TypeScript

FIELD IDENTIFICATION RULES (CRITICAL — MUST MATCH EXACTLY):
The system detects editable elements using exact React.createElement patterns.
You MUST use these EXACT function call structures.
DO NOT change argument order. DO NOT add or remove arguments. DO NOT wrap these elements. DO NOT inline additional logic.

HEADING (REQUIRED — EXACT):
React.createElement('h1', { style: { color: headingColor, fontSize: '28px', marginBottom: '16px', textAlign: headingAlign } }, headline)

BODY (REQUIRED — EXACT):
React.createElement('p', { style: { color: textColor, fontSize: '16px', lineHeight: '1.6', marginBottom: '30px', textAlign: bodyAlign } }, body)

CTA BUTTON (REQUIRED — EXACT — wrapped in alignment div):
React.createElement('div', { style: { textAlign: bodyAlign } },
  React.createElement('a', { href: buttonLink, style: { display: 'inline-block', padding: '14px 32px', backgroundColor: primaryColor, color: '#ffffff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' } }, buttonText)
)

STRICT RULES:
- These elements must appear EXACTLY as above
- Same tag names, same prop names, same structure
- Same nesting level (inside the main content td)
- No wrappers around them, no additional elements inside them

FAILURE TO FOLLOW THIS EXACT STRUCTURE WILL BREAK EDITING.`;

export default function CustomTemplatePanel({ onSelectVariation }: CustomTemplatePanelProps) {
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(AI_PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that block clipboard
      const el = document.createElement('textarea');
      el.value = AI_PROMPT;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleApply = () => {
    setError(null);
    setApplied(false);

    const trimmed = code.trim();
    if (!trimmed) {
      setError('Please paste your React code first.');
      return;
    }
    if (!trimmed.includes('function EmailTemplate')) {
      setError('The code must contain a function named exactly "EmailTemplate". Copy the full output from your AI.');
      return;
    }
    if (trimmed.includes('</') || trimmed.includes('/>')) {
      setError('The code contains JSX (angle bracket tags like <div>). This does not work here. Use the prompt above — it tells the AI to use React.createElement() instead.');
      return;
    }

    const Component = evalTemplate(trimmed);
    if (!Component) {
      setError('Could not run the code. Make sure your AI followed the format exactly: React.createElement() only, no JSX, no imports, function named EmailTemplate.');
      return;
    }

    setApplied(true);
    onSelectVariation(Component);
  };

  return (
    <div className="flex flex-col space-y-6 fade-in pb-10">
      {/* Header */}
      <div>
        <h2 className="text-sm font-semibold text-zinc-200 mb-0.5">Custom Template</h2>
        <p className="text-xs text-zinc-600">Use any AI to generate a template, then paste the code here.</p>
      </div>

      {/* Step 1 — Copy the prompt */}
      <div className="space-y-2.5">
        <div className="flex items-center space-x-1.5">
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/[0.08] text-[9px] font-bold text-zinc-400">1</span>
          <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Copy this prompt</p>
        </div>

        <div className="relative rounded-lg border border-border bg-white/[0.02] overflow-hidden">
          {/* Prompt text – read only */}
          <pre className="p-3 text-[11px] leading-relaxed text-zinc-500 whitespace-pre-wrap font-mono select-all overflow-auto max-h-48">
            {AI_PROMPT}
          </pre>

          {/* Copy button */}
          <div className="border-t border-border px-3 py-2 flex items-center justify-between bg-white/[0.01]">
            <p className="text-[10px] text-zinc-700">Paste into ChatGPT, Claude, Gemini, or any AI</p>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-smooth"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Step 2 — Instructions */}
      <div className="space-y-2.5">
        <div className="flex items-center space-x-1.5">
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/[0.08] text-[9px] font-bold text-zinc-400">2</span>
          <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Ask an AI &amp; paste the result</p>
        </div>

        <ol className="space-y-1.5 pl-1">
          {[
            'Copy the prompt above',
            'Open ChatGPT, Claude, Gemini, or any AI chat',
            'Paste the prompt and send it',
            'Copy the code the AI returns',
            'Paste it in the box below',
          ].map((step, i) => (
            <li key={i} className="flex items-start space-x-2 text-[11px] text-zinc-600">
              <ChevronRight className="h-3 w-3 mt-0.5 text-zinc-700 shrink-0" />
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Step 3 — Paste code */}
      <div className="space-y-2.5">
        <div className="flex items-center space-x-1.5">
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/[0.08] text-[9px] font-bold text-zinc-400">3</span>
          <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Paste your code</p>
        </div>

        <textarea
          value={code}
          onChange={e => { setCode(e.target.value); setError(null); setApplied(false); }}
          placeholder={`Paste your AI-generated React email template here.\n\nExample:\nfunction EmailTemplate({ headline, body, buttonText, buttonLink, primaryColor, theme, headingAlign, bodyAlign }) {\n  var isDark = theme === 'dark';\n  return React.createElement('div', { style: { padding: '40px' } },\n    React.createElement('h1', { style: { textAlign: headingAlign } }, headline),\n    React.createElement('p',  { style: { textAlign: bodyAlign } }, body),\n    React.createElement('a',  { href: buttonLink }, buttonText)\n  );\n}`}
          rows={10}
          className="w-full px-3 py-2.5 border border-border rounded-lg text-[12px] font-mono text-zinc-300 bg-white/[0.02] focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 placeholder:text-zinc-700 resize-none leading-relaxed"
        />

        {/* Error message */}
        {error && (
          <div className="flex items-start space-x-2 p-3 rounded-lg border border-red-500/20 bg-red-500/5">
            <AlertCircle className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
            <p className="text-xs text-red-400">{error}</p>
          </div>
        )}

        {/* Apply button */}
        <button
          onClick={handleApply}
          disabled={!code.trim()}
          className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed transition-smooth"
        >
          {applied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Template Applied</span>
            </>
          ) : (
            <>
              <Code2 className="h-4 w-4" />
              <span>Apply Template</span>
            </>
          )}
        </button>

        {applied && (
          <p className="text-[10px] text-emerald-500 text-center">
            ✓ Your template is live in the preview. Use the editor below to customize content.
          </p>
        )}
      </div>
    </div>
  );
}
