
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
      // Copy as rich text (text/html) so pasting into Gmail/Docs renders the email visually
      const htmlBlob = new Blob([html], { type: 'text/html' });
      const textBlob = new Blob([html], { type: 'text/plain' });
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
      // Fallback for browsers that don't support ClipboardItem
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
    toast.success("HTML file downloaded", {
      description: "email-template.html saved.",
    });
  };

  // Keyboard shortcut: Ctrl+C / Cmd+C copies rendered HTML when preview is focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'c') {
        // Only copy if no text is actively selected
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
      <div className="glass rounded-xl p-3 mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* View Mode Toggle */}
          <div className="flex p-1 rounded-lg bg-muted/70 border border-border">
            <button
              onClick={() => setViewMode('preview')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-smooth ${viewMode === 'preview'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-zinc-500 hover:text-zinc-300'
                }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Preview</span>
            </button>
            <button
              onClick={() => setViewMode('html')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-smooth ${viewMode === 'html'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-zinc-500 hover:text-zinc-300'
                }`}
            >
              <Code className="h-3.5 w-3.5" />
              <span>HTML</span>
            </button>
          </div>

          {/* Keyboard shortcut hint */}
          {html && (
            <div className="hidden md:flex items-center space-x-1.5 text-[10px] text-zinc-600">
              <Keyboard className="h-3 w-3" />
              <span>⌘C to copy</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={downloadHtml}
            disabled={!html || loading}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 rounded-lg border border-border hover:border-zinc-600 transition-smooth disabled:opacity-30 disabled:cursor-not-allowed bg-muted/30"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download</span>
          </button>
          <button
            onClick={copyRenderedHtml}
            disabled={!html || loading}
            className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg transition-smooth disabled:opacity-30 disabled:cursor-not-allowed ${copied
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 glow-purple'
              }`}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Warnings */}
      {warnings.length > 0 && (
        <div className="mb-4 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 fade-in">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <p className="font-bold text-amber-400 text-xs uppercase tracking-wider">Gmail Compatibility Warnings</p>
          </div>
          <ul className="space-y-1">
            {warnings.map((w, i) => (
              <li key={i} className="text-amber-300/80 text-xs flex items-start space-x-1.5">
                <span className="text-amber-500 mt-0.5">•</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Viewing Area */}
      <div className="flex-1 rounded-xl overflow-hidden relative border border-border glass">
        {loading && (
          <div className="absolute inset-0 z-10 bg-background/70 backdrop-blur-md flex flex-col items-center justify-center space-y-3">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <span className="text-xs text-zinc-500">Rendering...</span>
          </div>
        )}

        {!html && !loading && (
          <div className="flex flex-col items-center justify-center h-full space-y-3 pattern-bg">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center">
              <Eye className="h-6 w-6 text-zinc-600" />
            </div>
            <p className="text-zinc-500 text-sm">Select a template to preview</p>
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
          <pre className="w-full h-full overflow-auto p-5 text-xs font-mono text-emerald-400/80 leading-relaxed" style={{ background: '#0a0a0f' }}>
            {html}
          </pre>
        )}
      </div>
    </div>
  );
}
