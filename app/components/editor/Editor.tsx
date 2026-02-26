import { useMemo } from 'react';
import { Type, PaintBucket, SunMoon } from 'lucide-react';

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
      { id: 'theme', label: 'Email Theme', type: 'toggle', options: ['light', 'dark'] },
    ];

    const enigmaFields: FieldConfig[] = [
      { id: 'heading', label: 'Headline', type: 'text', placeholder: 'New Feature...' },
      { id: 'announcement', label: 'Announcement', type: 'textarea', placeholder: 'Exciting news...' },
      { id: 'details', label: 'Details', type: 'textarea', placeholder: 'More info...' },
      { id: 'ctaText', label: 'Button Text', type: 'text', placeholder: 'Learn More', halfWidth: true },
      { id: 'ctaUrl', label: 'Button Link', type: 'text', placeholder: 'https://...', halfWidth: true },
      { id: 'logoUrl', label: 'Logo URL', type: 'text', placeholder: '/logo.jpeg' },
      { id: 'theme', label: 'Email Theme', type: 'toggle', options: ['light', 'dark'] },
    ];

    if (selectedTemplate === 'enigma.tsx') return enigmaFields;
    return defaultFields;
  }, [selectedTemplate]);

  if (!selectedTemplate) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 fade-in">
        <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
          <SunMoon className="h-7 w-7 text-zinc-600" />
        </div>
        <div className="text-center">
          <p className="text-zinc-400 text-sm font-medium">No template selected</p>
          <p className="text-zinc-600 text-xs mt-1">Pick one from the sidebar to start editing</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-7 fade-in">
      <div>
        <h2 className="text-base font-bold text-white mb-0.5 tracking-tight">Edit Content</h2>
        <p className="text-xs text-zinc-500">Customize your email template.</p>
      </div>

      <div className="space-y-6">
        {/* Content Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            <Type className="h-3.5 w-3.5 text-primary" />
            <span>Content & Text</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {templateFields.filter(f => f.type === 'text' || f.type === 'textarea').map((field) => (
              <div key={field.id} className={field.halfWidth ? 'col-span-1' : 'col-span-2'}>
                <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-1.5 tracking-wide">{field.label}</label>

                {field.type === 'textarea' ? (
                  <textarea
                    value={props[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    rows={field.id === 'body' || field.id === 'announcement' ? 4 : 2}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2.5 border border-border rounded-xl text-sm text-zinc-200 bg-muted/50 transition-smooth focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 focus:bg-muted placeholder:text-zinc-600 resize-none"
                  />
                ) : (
                  <input
                    type="text"
                    value={props[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2.5 border border-border rounded-xl text-sm text-zinc-200 bg-muted/50 transition-smooth focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 focus:bg-muted placeholder:text-zinc-600"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* Theme Toggle - for all templates */}
        {templateFields.some(f => f.type === 'toggle') && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              <SunMoon className="h-3.5 w-3.5 text-primary" />
              <span>Theme</span>
            </div>

            {templateFields.filter(f => f.type === 'toggle').map((field) => (
              <div key={field.id}>
                <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-2 tracking-wide">{field.label}</label>
                <div className="flex p-1 rounded-xl bg-muted/70 border border-border w-fit">
                  {field.options?.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleChange(field.id, opt)}
                      className={`px-5 py-2 text-xs font-bold rounded-lg transition-smooth ${(props[field.id] || 'dark') === opt
                          ? 'bg-primary text-white shadow-lg shadow-primary/25'
                          : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                    >
                      {opt === 'light' ? '☀️ ' : '🌙 '}{opt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Color Section */}
        {templateFields.some(f => f.type === 'color') && (
          <>
            <div className="h-px bg-border" />
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                <PaintBucket className="h-3.5 w-3.5 text-primary" />
                <span>Colors</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {templateFields.filter(f => f.type === 'color').map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wide">{field.label}</label>
                    <div className="flex items-center space-x-3">
                      <div className="relative group">
                        <input
                          type="color"
                          value={props[field.id] || (field.id === 'primaryColor' ? '#06b6d4' : field.id === 'backgroundColor' ? '#ffffff' : '#111827')}
                          onChange={(e) => handleChange(field.id, e.target.value)}
                          className="h-10 w-10 rounded-xl overflow-hidden border-2 border-border cursor-pointer transition-smooth group-hover:border-primary/40 p-0"
                        />
                      </div>
                      <input
                        type="text"
                        value={props[field.id] || ''}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        placeholder="#000000"
                        className="flex-1 px-3 py-2.5 border border-border rounded-xl text-sm font-mono bg-muted/50 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 transition-smooth uppercase placeholder:text-zinc-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
