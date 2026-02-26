
'use client';

import { useState } from 'react';
import { Mail, Loader2, FileText, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { templateNames } from '@/app/lib/templates-registry';

interface Template {
  id: string;
  name: string;
}

export default function Sidebar({
  selectedTemplate,
  onSelect
}: {
  selectedTemplate: string | null,
  onSelect: (id: string) => void
}) {
  const [templates] = useState<Template[]>(
    templateNames.map(name => ({
      id: name,
      name: name.replace(/\.(tsx|jsx)$/, '').charAt(0).toUpperCase() + name.replace(/\.(tsx|jsx)$/, '').slice(1)
    }))
  );
  const [loading] = useState(false);

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col border-r border-slate-800 h-full">
      <div className="p-4 border-b border-slate-800 flex items-center space-x-2">
        <Mail className="h-6 w-6 text-blue-400" />
        <h1 className="font-bold text-lg">Email Maker</h1>
      </div>

      <div className="p-4">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Templates</h2>

        {loading ? (
          <div className="flex justify-center p-4">
            <Loader2 className="h-5 w-5 animate-spin text-slate-500" />
          </div>
        ) : (
          <div className="space-y-1">
            {templates.map(t => (
              <button
                key={t.id}
                onClick={() => onSelect(t.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center space-x-2",
                  selectedTemplate === t.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                )}
              >
                <FileText className="h-4 w-4 opacity-50" />
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-auto p-4 border-t border-slate-800 space-y-3">
        <Link href="/how-to-use" className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors text-sm">
          <BookOpen className="h-4 w-4" />
          <span>How to Use Guide</span>
        </Link>
        <p className="text-xs text-slate-500">
          Local templates from <br />
          <code className="bg-slate-800 px-1 py-0.5 rounded text-slate-400">./templates</code>
        </p>
      </div>
    </div>
  );
}
