import { useMemo } from 'react';
import { Type, PaintBucket, Sun, Moon, SunMoon, AlignLeft, AlignCenter, AlignRight, Layout, List } from 'lucide-react';

interface EditorProps {
  selectedTemplate: string | null;
  props: any;
  onChange: (props: any) => void;
}

interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'color' | 'select' | 'toggle' | 'alignment';
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
      { id: 'headingAlign', label: 'Headline Align', type: 'alignment', options: ['left', 'center', 'right'], halfWidth: true },
      { id: 'bodyAlign', label: 'Body Align', type: 'alignment', options: ['left', 'center', 'right'], halfWidth: true },
      { id: 'body', label: 'Body Text', type: 'textarea', placeholder: 'Main content...' },
      { id: 'buttonText', label: 'Button Text', type: 'text', placeholder: 'Click Me', halfWidth: true },
      { id: 'buttonLink', label: 'Button Link', type: 'text', placeholder: 'https://...', halfWidth: true },
      { id: 'primaryColor', label: 'Primary Color', type: 'color' },
      { id: 'theme', label: 'Email Theme', type: 'toggle', options: ['light', 'dark'] },
    ];

    const enigmaFields: FieldConfig[] = [
      { id: 'heading', label: 'Headline', type: 'text', placeholder: 'New Feature...' },
      { id: 'headingAlign', label: 'Headline Align', type: 'alignment', options: ['left', 'center', 'right'], halfWidth: true },
      { id: 'bodyAlign', label: 'Text Align', type: 'alignment', options: ['left', 'center', 'right'], halfWidth: true },
      { id: 'announcement', label: 'Announcement', type: 'textarea', placeholder: 'Exciting news...' },
      { id: 'details', label: 'Details', type: 'textarea', placeholder: 'More info...' },
      { id: 'ctaText', label: 'Button Text', type: 'text', placeholder: 'Learn More', halfWidth: true },
      { id: 'ctaUrl', label: 'Button Link', type: 'text', placeholder: 'https://...', halfWidth: true },
      { id: 'logoUrl', label: 'Logo URL', type: 'text', placeholder: '/logo.jpeg' },
      { id: 'theme', label: 'Email Theme', type: 'toggle', options: ['light', 'dark'] },
    ];

    const newsletterFields: FieldConfig[] = [
      { id: 'mainTitle', label: 'Header Title', type: 'text', placeholder: 'The Weekly Insider' },
      { id: 'issueInfo', label: 'Issue Label', type: 'text', placeholder: 'ISSUE #42', halfWidth: true },
      { id: 'primaryColor', label: 'Brand Color', type: 'color', halfWidth: true },
      { id: 'headingAlign', label: 'Heading Align', type: 'alignment', options: ['left', 'center', 'right'], halfWidth: true },
      { id: 'bodyAlign', label: 'Content Align', type: 'alignment', options: ['left', 'center', 'right'], halfWidth: true },
      { id: 'headline', label: 'Headline', type: 'text' },
      { id: 'body', label: 'Main Content', type: 'textarea' },
      { id: 'extraSectionTitle', label: 'Secondary Section Title', type: 'text', placeholder: 'In Case You Missed It' },
      { id: 'extraContent', label: 'Secondary Details (One per line)', type: 'textarea', placeholder: 'Add stories or notes here...' },
      { id: 'buttonText', label: 'Button Text', type: 'text', halfWidth: true },
      { id: 'buttonLink', label: 'Button Link', type: 'text', halfWidth: true },
      { id: 'theme', label: 'Email Theme', type: 'toggle', options: ['light', 'dark'] },
    ];

    const transactionalFields: FieldConfig[] = [
      { id: 'headline', label: 'Headline', type: 'text', placeholder: 'Payment Confirmation' },
      { id: 'headingAlign', label: 'Headline Align', type: 'alignment', options: ['left', 'center', 'right'], halfWidth: true },
      { id: 'bodyAlign', label: 'Body Align', type: 'alignment', options: ['left', 'center', 'right'], halfWidth: true },
      { id: 'body', label: 'Body Text', type: 'textarea', placeholder: 'Main content...' },
      { id: 'invoiceId', label: 'Invoice ID', type: 'text', placeholder: '#INV-2024-001', halfWidth: true },
      { id: 'invoiceDate', label: 'Invoice Date', type: 'text', placeholder: 'Oct 24, 2024', halfWidth: true },
      { id: 'totalAmount', label: 'Total Amount', type: 'text', placeholder: '$49.00' },
      { id: 'buttonText', label: 'Button Text', type: 'text', placeholder: 'View Invoice', halfWidth: true },
      { id: 'buttonLink', label: 'Button Link', type: 'text', placeholder: 'https://...', halfWidth: true },
      { id: 'primaryColor', label: 'Primary Color', type: 'color' },
      { id: 'theme', label: 'Email Theme', type: 'toggle', options: ['light', 'dark'] },
    ];

    if (selectedTemplate === 'enigma.tsx') return enigmaFields;
    if (selectedTemplate === 'newsletter.tsx') return newsletterFields;
    if (selectedTemplate === 'transactional.tsx') return transactionalFields;
    return defaultFields;
  }, [selectedTemplate]);

  if (!selectedTemplate) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-3 fade-in">
        <SunMoon className="h-8 w-8 text-zinc-700" />
        <div className="text-center">
          <p className="text-zinc-500 text-sm">No template selected</p>
          <p className="text-zinc-700 text-xs mt-1">Pick one from the sidebar</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in h-full pb-10">
      <div className="flex flex-col">
        <h2 className="text-sm font-semibold text-zinc-200 mb-0.5">Edit Content</h2>
        <p className="text-xs text-zinc-600">Customize your email template.</p>
      </div>

      <div className="space-y-5">
        {/* Content Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-[10px] font-medium text-zinc-600 uppercase tracking-widest">
            <Type className="h-3 w-3" />
            <span>Content</span>
          </div>

          <div className="grid grid-cols-2 gap-x-2.5 gap-y-4">
            {templateFields.filter(f => f.type === 'text' || f.type === 'textarea' || f.type === 'alignment').map((field) => (
              <div key={field.id} className={field.halfWidth ? 'col-span-1' : 'col-span-2'}>
                <label className="block text-[10px] font-medium text-zinc-600 uppercase mb-1.5 tracking-wide">{field.label}</label>

                {field.type === 'textarea' ? (
                  <textarea
                    value={props[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    rows={field.id === 'extraContent' ? 5 : (field.id === 'body' || field.id === 'announcement' ? 3 : 2)}
                    placeholder={field.placeholder}
                    className="w-full px-2.5 py-2 border border-border rounded-lg text-[13px] text-zinc-300 bg-white/[0.02] transition-smooth focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 placeholder:text-zinc-700 resize-none"
                  />
                ) : field.type === 'alignment' ? (
                  <div className="flex p-0.5 rounded-lg bg-white/[0.03] border border-border w-full">
                    {field.options?.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleChange(field.id, opt)}
                        className={`flex-1 flex items-center justify-center py-1.5 rounded-md transition-smooth ${(props[field.id] || (field.id === 'headingAlign' ? 'center' : 'left')) === opt
                            ? 'bg-white text-black'
                            : 'text-zinc-600 hover:text-zinc-400'
                          }`}
                      >
                        {opt === 'left' && <AlignLeft className="h-3.5 w-3.5" />}
                        {opt === 'center' && <AlignCenter className="h-3.5 w-3.5" />}
                        {opt === 'right' && <AlignRight className="h-3.5 w-3.5" />}
                      </button>
                    ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    value={props[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-2.5 py-2 border border-border rounded-lg text-[13px] text-zinc-300 bg-white/[0.02] transition-smooth focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 placeholder:text-zinc-700"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* Theme Toggle */}
        {templateFields.some(f => f.type === 'toggle') && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-[10px] font-medium text-zinc-600 uppercase tracking-widest">
              <SunMoon className="h-3 w-3" />
              <span>Theme</span>
            </div>

            {templateFields.filter(f => f.type === 'toggle').map((field) => (
              <div key={field.id}>
                <div className="flex p-0.5 rounded-lg bg-white/[0.03] border border-border w-fit">
                  {field.options?.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleChange(field.id, opt)}
                      className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs font-medium rounded-md transition-smooth ${(props[field.id] || 'dark') === opt
                          ? 'bg-white text-black'
                          : 'text-zinc-600 hover:text-zinc-400'
                        }`}
                    >
                      {opt === 'light' ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
                      <span>{opt.charAt(0).toUpperCase() + opt.slice(1)}</span>
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
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-[10px] font-medium text-zinc-600 uppercase tracking-widest">
                <PaintBucket className="h-3 w-3" />
                <span>Colors</span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {templateFields.filter(f => f.type === 'color').map((field) => (
                  <div key={field.id} className="space-y-1">
                    <label className="text-[10px] font-medium text-zinc-600 uppercase tracking-wide">{field.label}</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={props[field.id] || (field.id === 'primaryColor' ? '#4f46e5' : '#ffffff')}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        className="h-8 w-8 rounded-lg overflow-hidden border border-border cursor-pointer transition-smooth hover:border-zinc-500 p-0"
                      />
                      <input
                        type="text"
                        value={props[field.id] || ''}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        placeholder="#000000"
                        className="flex-1 px-2.5 py-1.5 border border-border rounded-lg text-xs font-mono bg-white/[0.02] text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-smooth uppercase placeholder:text-zinc-700"
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
