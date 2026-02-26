
'use client';

import { useState } from 'react';
import { Mail, FileText, BookOpen, Megaphone, Gem, Newspaper, CreditCard, HandMetal } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { templateNames } from '@/app/lib/templates-registry';

interface Template {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const templateIconMap: Record<string, React.ReactNode> = {
  announcement: <Megaphone className="h-4 w-4" />,
  enigma: <Gem className="h-4 w-4" />,
  newsletter: <Newspaper className="h-4 w-4" />,
  transactional: <CreditCard className="h-4 w-4" />,
  welcome: <HandMetal className="h-4 w-4" />,
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
        icon: templateIconMap[baseName] || <FileText className="h-4 w-4" />,
      };
    })
  );

  return (
    <div className="w-64 flex flex-col h-full border-r border-border bg-[#0c0c0e]">
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white">
            <Mail className="h-4 w-4 text-black" />
          </div>
          <div>
            <h1 className="font-semibold text-sm text-white tracking-tight">Email Maker</h1>
            <p className="text-[10px] text-zinc-600">React → Gmail</p>
          </div>
        </div>
      </div>

      {/* Templates */}
      <div className="flex-1 overflow-y-auto p-3">
        <h2 className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest mb-3 px-2">Templates</h2>

        <div className="space-y-0.5">
          {templates.map(t => (
            <button
              key={t.id}
              onClick={() => onSelect(t.id)}
              className={cn(
                "w-full text-left px-2.5 py-2 rounded-lg text-sm transition-smooth flex items-center space-x-2.5",
                selectedTemplate === t.id
                  ? "bg-white/[0.08] text-white"
                  : "text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-300"
              )}
            >
              <span className={cn(
                "opacity-50",
                selectedTemplate === t.id && "opacity-100"
              )}>{t.icon}</span>
              <span className="font-medium text-[13px]">{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border">
        <Link href="/how-to-use" className="flex items-center space-x-2 text-zinc-600 hover:text-zinc-400 transition-smooth text-xs px-2.5 py-2 rounded-lg hover:bg-white/[0.03]">
          <BookOpen className="h-3.5 w-3.5" />
          <span>How to Use</span>
        </Link>
      </div>
    </div>
  );
}
