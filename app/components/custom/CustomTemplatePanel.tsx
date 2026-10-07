'use client';

import { useState } from 'react';
import { Clipboard, Check, Eraser, FileCode2 } from 'lucide-react';

interface CustomTemplatePanelProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CustomTemplatePanel({ value, onChange }: CustomTemplatePanelProps) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    const prompt = 'Create a complete email as standalone HTML. Use table-based layout, inline CSS, a responsive max-width 600px container, and include all styles needed for Gmail. Return only the HTML.';
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const pasteHtml = async () => {
    try { onChange(await navigator.clipboard.readText()); } catch { /* clipboard permissions can block reads */ }
  };

  return (
    <div className="flex flex-col gap-5 fade-in pb-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-zinc-200 mb-0.5">Custom Template</h2>
          <p className="text-xs text-zinc-600">Paste any HTML email and see it live.</p>
        </div>
        <FileCode2 className="h-4 w-4 text-zinc-600" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button onClick={copyPrompt} className="flex items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-[11px] text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-smooth">
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Clipboard className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy prompt'}
        </button>
        <button onClick={pasteHtml} className="flex items-center justify-center gap-1.5 rounded-lg bg-white py-2 text-[11px] font-medium text-black hover:bg-zinc-200 transition-smooth">
          <Clipboard className="h-3.5 w-3.5" /> Paste
        </button>
      </div>

      <div className="rounded-lg border border-border overflow-hidden bg-[#0a0a0c]">
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] font-semibold tracking-widest text-zinc-500">HTML SOURCE</span>
            <span className="text-[10px] text-zinc-700">{value ? `${value.split('\n').length} lines` : 'empty'}</span>
          </div>
          <span className="text-[10px] text-emerald-500/70">live</span>
        </div>
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          spellCheck={false}
          placeholder={'<!doctype html>\n<html>\n  <body>\n    <!-- paste your email HTML here -->\n  </body>\n</html>'}
          className="min-h-[420px] w-full resize-y bg-transparent px-3 py-3 font-mono text-[11px] leading-relaxed text-zinc-300 outline-none placeholder:text-zinc-700"
          aria-label="HTML source"
        />
      </div>

      <button onClick={() => onChange('')} disabled={!value} className="flex items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-[11px] text-zinc-500 hover:border-red-500/40 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-30 transition-smooth">
        <Eraser className="h-3.5 w-3.5" /> Clear
      </button>

      <p className="text-center text-[10px] leading-relaxed text-zinc-700">The exported email gets a centered, email-safe outer wrapper so it stays centered when sent.</p>
    </div>
  );
}
