'use client';

import { useMemo } from 'react';
import { AlignLeft, AlignCenter, AlignRight, Sun, Moon, SunMoon, Type } from 'lucide-react';
import { detectTemplateProps, inferFieldType, PropField } from '@/lib/detect-template-props';

interface CustomEditorProps {
  component: React.ComponentType<any>;
  props: any;
  onChange: (props: any) => void;
}

export default function CustomEditor({ component, props, onChange }: CustomEditorProps) {
  const handleChange = (key: string, value: any) => onChange({ ...props, [key]: value });

  // Detect props by running the component through a Proxy
  const fields: PropField[] = useMemo(() => {
    try {
      const detected = detectTemplateProps(component as (p: any) => any);
      return detected.map(({ key }) => inferFieldType(key));
    } catch {
      return [];
    }
  }, [component]);

  if (fields.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 space-y-2">
        <SunMoon className="h-6 w-6 text-zinc-700" />
        <p className="text-zinc-600 text-xs text-center">No editable props detected in this template.</p>
      </div>
    );
  }

  const renderField = (field: PropField) => {
    const value = props[field.key] ?? '';

    if (field.type === 'alignment') {
      return (
        <div className="flex p-0.5 rounded-lg bg-white/[0.03] border border-border w-full">
          {['left', 'center', 'right'].map((opt) => (
            <button
              key={opt}
              onClick={() => handleChange(field.key, opt)}
              className={`flex-1 flex items-center justify-center py-1.5 rounded-md transition-smooth ${
                (value || 'center') === opt ? 'bg-white text-black' : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              {opt === 'left' && <AlignLeft className="h-3.5 w-3.5" />}
              {opt === 'center' && <AlignCenter className="h-3.5 w-3.5" />}
              {opt === 'right' && <AlignRight className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      );
    }

    if (field.type === 'toggle') {
      return (
        <div className="flex p-0.5 rounded-lg bg-white/[0.03] border border-border w-fit">
          {['light', 'dark'].map((opt) => (
            <button
              key={opt}
              onClick={() => handleChange(field.key, opt)}
              className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs font-medium rounded-md transition-smooth ${
                (value || 'dark') === opt ? 'bg-white text-black' : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              {opt === 'light' ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
              <span>{opt.charAt(0).toUpperCase() + opt.slice(1)}</span>
            </button>
          ))}
        </div>
      );
    }

    if (field.type === 'color') {
      return (
        <div className="flex items-center space-x-2">
          <input
            type="color"
            value={value || '#4f46e5'}
            onChange={(e) => handleChange(field.key, e.target.value)}
            className="h-8 w-8 rounded-lg overflow-hidden border border-border cursor-pointer p-0"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder="#000000"
            className="flex-1 px-2.5 py-1.5 border border-border rounded-lg text-xs font-mono bg-white/[0.02] text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-smooth uppercase placeholder:text-zinc-700"
          />
        </div>
      );
    }

    if (field.type === 'textarea') {
      const rows = field.key.toLowerCase().includes('extra') || field.key.toLowerCase().includes('content') ? 5
        : field.key === 'body' || field.key === 'details' || field.key === 'announcement' ? 3
        : 2;
      return (
        <textarea
          value={value}
          onChange={(e) => handleChange(field.key, e.target.value)}
          rows={rows}
          placeholder={field.placeholder || 'Enter text...'}
          className="w-full px-2.5 py-2 border border-border rounded-lg text-[13px] text-zinc-300 bg-white/[0.02] focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 placeholder:text-zinc-700 resize-none"
        />
      );
    }

    // text (default)
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(field.key, e.target.value)}
        placeholder={field.placeholder || ''}
        className="w-full px-2.5 py-2 border border-border rounded-lg text-[13px] text-zinc-300 bg-white/[0.02] focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 placeholder:text-zinc-700"
      />
    );
  };

  return (
    <div className="space-y-5 fade-in pb-10">
      <div>
        <h2 className="text-sm font-semibold text-zinc-200 mb-0.5">Customize Template</h2>
        <p className="text-xs text-zinc-600">{fields.length} editable fields detected.</p>
      </div>

      <div className="flex items-center space-x-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">
        <Type className="h-3 w-3" />
        <span>All Fields</span>
      </div>

      <div className="grid grid-cols-2 gap-x-2.5 gap-y-4">
        {fields.map((field) => (
          <div key={field.key} className={field.halfWidth ? 'col-span-1' : 'col-span-2'}>
            <label className="block text-[10px] font-medium text-zinc-600 uppercase mb-1.5 tracking-wide">
              {field.label}
            </label>
            {renderField(field)}
          </div>
        ))}
      </div>
    </div>
  );
}
