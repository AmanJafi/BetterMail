
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Loader2, Copy, Check, Download, Code, Eye, AlertTriangle, Keyboard } from 'lucide-react';
import { toast } from 'sonner';

interface PreviewProps {
  html: string;
  loading: boolean;
  warnings: string[];
}

export default function Preview({ html, loading, warnings }: PreviewProps) {
  const [viewMode, setViewMode] = useState<'preview' | 'html'>('preview');
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const copyRenderedHtml = useCallback(async () => {
    if (!html) return;

    try {
      // Transform relative URLs to absolute URLs for images so they show up in Gmail
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const images = doc.querySelectorAll('img');
      const origin = window.location.origin;

      images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.startsWith('/')) {
          img.setAttribute('src', origin + src);
        }
      });

      const processedHtml = doc.documentElement.innerHTML;
      const htmlBlob = new Blob([processedHtml], { type: 'text/html' });
      const textBlob = new Blob([processedHtml], { type: 'text/plain' });

      const clipboardItem = new ClipboardItem({
        'text/html': htmlBlob,
        'text/plain': textBlob,
      });

      await navigator.clipboard.write([clipboardItem]);
      setCopied(true);
      toast.success("Rendered email copied!", {
        description: "Paste into Gmail to get the formatted email.",
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      try {
        await navigator.clipboard.writeText(html);
        setCopied(true);
        toast.success("HTML copied to clipboard (as text)", {
          description: "Rich copy not supported in this browser.",
          duration: 3000,
        });
        setTimeout(() => setCopied(false), 2000);
      } catch {
        toast.error("Failed to copy to clipboard");
      }
    }
  }, [html]);

  const downloadHtml = () => {
    if (!html) return;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'email-template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("HTML file downloaded");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'c') {
        const selection = window.getSelection();
        if (!selection || selection.toString().length === 0) {
          e.preventDefault();
          copyRenderedHtml();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [copyRenderedHtml]);

  return (
    <div className="w-full max-w-5xl flex flex-col h-full fade-in">
      {/* Toolbar */}
      <div className="glass rounded-lg p-2.5 mb-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="flex p-0.5 rounded-md bg-white/[0.03] border border-border">
            <button
              onClick={() => setViewMode('preview')}
              className={`flex items-center space-x-1.5 px-2.5 py-1 text-xs font-medium rounded transition-smooth ${viewMode === 'preview'
                ? 'bg-white text-black'
                : 'text-zinc-600 hover:text-zinc-400'
                }`}
            >
              <Eye className="h-3 w-3" />
              <span>Preview</span>
            </button>
            <button
              onClick={() => setViewMode('html')}
              className={`flex items-center space-x-1.5 px-2.5 py-1 text-xs font-medium rounded transition-smooth ${viewMode === 'html'
                ? 'bg-white text-black'
                : 'text-zinc-600 hover:text-zinc-400'
                }`}
            >
              <Code className="h-3 w-3" />
              <span>HTML</span>
            </button>
          </div>

          {html && (
            <div className="hidden md:flex items-center space-x-1.5 text-[10px] text-zinc-700">
              <Keyboard className="h-3 w-3" />
              <span>⌘C to copy</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-1.5">
          <button
            onClick={downloadHtml}
            disabled={!html || loading}
            className="flex items-center space-x-1.5 px-2.5 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 rounded-md border border-border hover:border-zinc-600 transition-smooth disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <Download className="h-3 w-3" />
            <span>Download</span>
          </button>
          <button
            onClick={copyRenderedHtml}
            disabled={!html || loading}
            className={`flex items-center space-x-1.5 px-3 py-1 text-xs font-medium rounded-md transition-smooth disabled:opacity-20 disabled:cursor-not-allowed ${copied
              ? 'bg-zinc-800 text-emerald-400 border border-zinc-700'
              : 'bg-white text-black hover:bg-zinc-200'
              }`}
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Warnings */}
      {warnings.length > 0 && (
        <div className="mb-3 p-3 rounded-lg border border-amber-500/15 bg-amber-500/5 fade-in">
          <div className="flex items-center space-x-2 mb-1.5">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
            <p className="font-semibold text-amber-500 text-[10px] uppercase tracking-wider">Compatibility Warnings</p>
          </div>
          <ul className="space-y-0.5">
            {warnings.map((w, i) => (
              <li key={i} className="text-amber-400/70 text-xs flex items-start space-x-1.5">
                <span className="text-amber-600 mt-0.5">·</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Viewing Area */}
      <div className="flex-1 rounded-lg overflow-hidden relative border border-border bg-[#111113]">
        {/* We removed the loading overlay here to prevent "choppy" flashes during typing */}

        {!html && !loading && (
          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <Eye className="h-6 w-6 text-zinc-800" />
            <p className="text-zinc-600 text-xs">Select a template to preview</p>
          </div>
        )}

        {html && viewMode === 'preview' && (
          <iframe
            ref={iframeRef}
            srcDoc={html}
            className="w-full h-full border-0"
            sandbox="allow-same-origin"
            title="Email Preview"
          />
        )}

        {html && viewMode === 'html' && (
          <pre className="w-full h-full overflow-auto p-4 text-xs font-mono text-zinc-500 leading-relaxed bg-[#0c0c0e]">
            {html}
          </pre>
        )}
      </div>
    </div>
  );
}
