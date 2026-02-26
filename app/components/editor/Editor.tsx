import { useState, useMemo } from 'react';
import { Type, PaintBucket, Layout, AlignLeft, Bold, Image as ImageIcon, SunMoon } from 'lucide-react';

interface EditorProps {
  selectedTemplate: string | null;
  props: any;
  onChange: (props: any) => void;
}

interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'color' | 'select' | 'toggle';
  options?: string[];
  placeholder?: string;
  halfWidth?: boolean;
}

export default function Editor({ selectedTemplate, props, onChange }: EditorProps) {
  const handleChange = (key: string, value: any) => {
    onChange({ ...props, [key]: value });
  };

  const templateFields = useMemo(() => {
    if (!selectedTemplate) return [];

    const defaultFields: FieldConfig[] = [
      { id: 'headline', label: 'Headline', type: 'text', placeholder: 'Welcome...' },
      { id: 'body', label: 'Body Text', type: 'textarea', placeholder: 'Main content...' },
      { id: 'buttonText', label: 'Button Text', type: 'text', placeholder: 'Click Me', halfWidth: true },
      { id: 'buttonLink', label: 'Button Link', type: 'text', placeholder: 'https://...', halfWidth: true },
      { id: 'primaryColor', label: 'Primary Color', type: 'color' },
      { id: 'backgroundColor', label: 'Background', type: 'color' },
      { id: 'textColor', label: 'Text Color', type: 'color' },
    ];

    const enigmaFields: FieldConfig[] = [
      { id: 'heading', label: 'Headline', type: 'text', placeholder: 'New Feature...' },
      { id: 'announcement', label: 'Announcement', type: 'textarea', placeholder: 'Exciting news...' },
      { id: 'details', label: 'Details', type: 'textarea', placeholder: 'More info...' },
      { id: 'ctaText', label: 'Button Text', type: 'text', placeholder: 'Learn More', halfWidth: true },
      { id: 'ctaUrl', label: 'Button Link', type: 'text', placeholder: 'https://...', halfWidth: true },
      { id: 'logoUrl', label: 'Logo URL', type: 'text', placeholder: '/logo.jpeg' },
      { id: 'theme', label: 'Template Theme', type: 'toggle', options: ['light', 'dark'] },
    ];

    if (selectedTemplate === 'enigma.tsx') return enigmaFields;
    return defaultFields;
  }, [selectedTemplate]);

  if (!selectedTemplate) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
        <Layout className="h-12 w-12 opacity-20" />
        <p>Select a template to start editing</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-1">Edit Content</h2>
        <p className="text-sm text-slate-500">Customize the text and links of your email.</p>
      </div>

      <div className="space-y-6">
        {/* Typography Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
            <Type className="h-4 w-4" />
            <span>Content & Text</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {templateFields.filter(f => f.type === 'text' || f.type === 'textarea' || f.type === 'toggle').map((field) => (
              <div key={field.id} className={field.halfWidth ? 'col-span-1' : 'col-span-2'}>
                <label className="block text-xs font-medium text-slate-500 uppercase mb-1.5">{field.label}</label>

                {field.type === 'textarea' ? (
                  <textarea
                    value={props[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    rows={field.id === 'body' || field.id === 'announcement' ? 4 : 2}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-800 bg-slate-50 transition-all focus:bg-white"
                  />
                ) : field.type === 'toggle' ? (
                  <div className="flex bg-slate-100 p-1 rounded-lg w-fit">
                    {field.options?.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleChange(field.id, opt)}
                        className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${(props[field.id] || (field.id === 'theme' ? 'dark' : '')) === opt
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                          }`}
                      >
                        {opt.toUpperCase()}
                      </button>
                    ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    value={props[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50 transition-all focus:bg-white"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Style Section */}
        {templateFields.some(f => f.type === 'color') && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
              <PaintBucket className="h-4 w-4" />
              <span>Design & Colors</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {templateFields.filter(f => f.type === 'color').map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-500 uppercase">{field.label}</label>
                  <div className="flex items-center space-x-3">
                    <div className="relative group">
                      <input
                        type="color"
                        value={props[field.id] || (field.id === 'primaryColor' ? '#06b6d4' : field.id === 'backgroundColor' ? '#ffffff' : '#111827')}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        className="h-10 w-10 rounded-lg overflow-hidden border-0 cursor-pointer shadow-sm group-hover:shadow-md transition-shadow p-0"
                      />
                    </div>
                    <input
                      type="text"
                      value={props[field.id] || ''}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      placeholder="#000000"
                      className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all uppercase"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
