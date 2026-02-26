
'use client';

import { useState } from 'react';
import { Loader2, Copy, Check, Download } from 'lucide-react';
import { toast } from 'sonner';

interface PreviewProps {
  html: string;
  loading: boolean;
  warnings: string[];
}

export default function Preview({ html, loading, warnings }: PreviewProps) {
  const [viewMode, setViewMode] = useState<'preview' | 'html'>('preview');

  const copyToClipboard = () => {
    if (!html) return;
    navigator.clipboard.writeText(html);
    toast.success("HTML copied to clipboard!");
  };

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

  return (
    <div className="w-full max-w-4xl flex flex-col h-full">
      {/* Toolbar */}
      <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 mb-4 flex justify-between items-center">
        <div className="flex space-x-2 bg-slate-100 p-1 rounded-md">
          <button
            onClick={() => setViewMode('preview')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${viewMode === 'preview' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Preview
          </button>
          <button
            onClick={() => setViewMode('html')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${viewMode === 'html' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Raw HTML
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={downloadHtml}
            disabled={!html || loading}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-md border border-slate-200 transition-colors disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
          <button
            onClick={copyToClipboard}
            disabled={!html || loading}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors disabled:opacity-50"
          >
            <Copy className="h-4 w-4" />
            <span>Copy HTML</span>
          </button>
        </div>
      </div>

      {/* Warnings */}
      {warnings.length > 0 && (
        <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
          <p className="font-bold mb-1">Gmail Compatibility Warnings:</p>
          <ul className="list-disc list-inside space-y-0.5">
            {warnings.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </div>
      )}

      {/* Viewing Area */}
      <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden relative">
        {loading && (
          <div className="absolute inset-0 z-10 bg-white/50 backdrop-blur-sm flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        )}

        {!html && !loading && (
          <div className="flex items-center justify-center h-full text-slate-400">
            <p>Select a template to verify rendering</p>
          </div>
        )}

        {html && viewMode === 'preview' && (
          <iframe
            srcDoc={html}
            className="w-full h-full border-0"
            sandbox="allow-same-origin" // safer, no scripts
            title="Email Preview"
          />
        )}

        {html && viewMode === 'html' && (
          <pre className="w-full h-full overflow-auto p-4 text-xs font-mono bg-slate-50 text-slate-800">
            {html}
          </pre>
        )}
      </div>
    </div>
  );
}
