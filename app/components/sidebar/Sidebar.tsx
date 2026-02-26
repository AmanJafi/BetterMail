
'use client';

import { useState } from 'react';
import { Mail, FileText, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { templateNames } from '@/app/lib/templates-registry';

interface Template {
  id: string;
  name: string;
  icon: string;
}

const templateIcons: Record<string, string> = {
  announcement: '📢',
  enigma: '🔮',
  newsletter: '📰',
  transactional: '💳',
  welcome: '👋',
};

export default function Sidebar({
  selectedTemplate,
  onSelect
}: {
  selectedTemplate: string | null,
  onSelect: (id: string) => void
}) {
  const [templates] = useState<Template[]>(
    templateNames.map(name => {
      const baseName = name.replace(/\.(tsx|jsx)$/, '');
      return {
        id: name,
        name: baseName.charAt(0).toUpperCase() + baseName.slice(1),
        icon: templateIcons[baseName] || '📄',
      };
    })
  );

  return (
    <div className="w-72 flex flex-col h-full border-r border-border" style={{ background: 'linear-gradient(180deg, #0d0d14 0%, #0a0a0f 100%)' }}>
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center glow-purple" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}>
            <Mail className="h-4 w-4 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-base text-white tracking-tight">Email Maker</h1>
            <p className="text-[11px] text-muted-foreground">React → Gmail HTML</p>
          </div>
        </div>
      </div>

      {/* Templates */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <h2 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">Templates</h2>
        </div>

        <div className="space-y-1">
          {templates.map(t => (
            <button
              key={t.id}
              onClick={() => onSelect(t.id)}
              className={cn(
                "w-full text-left px-3 py-2.5 rounded-xl text-sm transition-smooth flex items-center space-x-3 group",
                selectedTemplate === t.id
                  ? "bg-primary/15 text-white glow-purple border border-primary/20"
                  : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200 border border-transparent"
              )}
            >
              <span className="text-base">{t.icon}</span>
              <span className="font-medium">{t.name}</span>
              {selectedTemplate === t.id && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border space-y-3">
        <Link href="/how-to-use" className="flex items-center space-x-2 text-zinc-500 hover:text-zinc-300 transition-smooth text-sm px-3 py-2 rounded-lg hover:bg-white/[0.03]">
          <BookOpen className="h-4 w-4" />
          <span>How to Use</span>
        </Link>
        <p className="text-[11px] text-zinc-600 px-3">
          Templates from <code className="bg-white/[0.04] px-1.5 py-0.5 rounded text-zinc-500 text-[10px]">./templates</code>
        </p>
      </div>
    </div>
  );
}
