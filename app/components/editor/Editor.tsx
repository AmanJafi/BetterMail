import { useMemo } from 'react';
import { Type, PaintBucket, Sun, Moon, SunMoon, AlignLeft, AlignCenter, AlignRight, Building2, Link, FileText, Sparkles } from 'lucide-react';

interface EditorProps {
  selectedTemplate: string | null;
  props: any;
  onChange: (props: any) => void;
}

interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'color' | 'toggle' | 'alignment';
  options?: string[];
  placeholder?: string;
  halfWidth?: boolean;
  section: 'branding' | 'content' | 'action' | 'style';
}

const SectionHeader = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center space-x-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-3">
    {icon}
    <span>{label}</span>
  </div>
);

export default function Editor({ selectedTemplate, props, onChange }: EditorProps) {
  const handleChange = (key: string, value: any) => {
    onChange({ ...props, [key]: value });
  };

  const templateFields = useMemo((): FieldConfig[] => {
    if (!selectedTemplate) return [];

    const welcomeFields: FieldConfig[] = [
      // Branding
      { id: 'companyName',    label: 'Company Name',  type: 'text',      placeholder: 'Acme',         section: 'branding', halfWidth: true },
      { id: 'tagline',        label: 'Header Tag',    type: 'text',      placeholder: 'Welcome',      section: 'branding', halfWidth: true },
      { id: 'primaryColor',   label: 'Brand Color',   type: 'color',                                  section: 'branding' },
      // Content
      { id: 'headline',       label: 'Headline',      type: 'text',      placeholder: 'Welcome to...',section: 'content' },
      { id: 'headingAlign',   label: 'Headline Align',type: 'alignment', options: ['left','center','right'], section: 'content', halfWidth: true },
      { id: 'bodyAlign',      label: 'Body Align',    type: 'alignment', options: ['left','center','right'], section: 'content', halfWidth: true },
      { id: 'body',           label: 'Body Text',     type: 'textarea',  placeholder: 'Main content...',section: 'content' },
      // Action
      { id: 'buttonText',     label: 'Button Label',  type: 'text',      placeholder: 'Get Started',  section: 'action', halfWidth: true },
      { id: 'buttonLink',     label: 'Button URL',    type: 'text',      placeholder: 'https://...',  section: 'action', halfWidth: true },
      // Footer
      { id: 'footerCompany',  label: 'Footer Company',type: 'text',      placeholder: 'Acme Corp, Inc.', section: 'branding' },
      { id: 'footerAddress',  label: 'Footer Address', type: 'text',     placeholder: '123 Main St...', section: 'branding' },
      // Style
      { id: 'theme',          label: 'Email Theme',   type: 'toggle',    options: ['light','dark'],   section: 'style' },
    ];

    const defaultFields: FieldConfig[] = [
      { id: 'headline',     label: 'Headline',       type: 'text',     placeholder: 'Subject line...',  section: 'content' },
      { id: 'headingAlign', label: 'Headline Align', type: 'alignment',options: ['left','center','right'], section: 'content', halfWidth: true },
      { id: 'bodyAlign',    label: 'Body Align',     type: 'alignment',options: ['left','center','right'], section: 'content', halfWidth: true },
      { id: 'body',         label: 'Body Text',      type: 'textarea', placeholder: 'Main content...',  section: 'content' },
      { id: 'buttonText',   label: 'Button Label',   type: 'text',     placeholder: 'Click Me',         section: 'action', halfWidth: true },
      { id: 'buttonLink',   label: 'Button URL',     type: 'text',     placeholder: 'https://...',      section: 'action', halfWidth: true },
      { id: 'primaryColor', label: 'Brand Color',    type: 'color',                                     section: 'style' },
      { id: 'theme',        label: 'Email Theme',    type: 'toggle',   options: ['light','dark'],        section: 'style' },
    ];

    const enigmaFields: FieldConfig[] = [
      { id: 'heading',      label: 'Headline',       type: 'text',     placeholder: 'New Feature...',   section: 'content' },
      { id: 'headingAlign', label: 'Headline Align', type: 'alignment',options: ['left','center','right'], section: 'content', halfWidth: true },
      { id: 'bodyAlign',    label: 'Text Align',     type: 'alignment',options: ['left','center','right'], section: 'content', halfWidth: true },
      { id: 'announcement', label: 'Announcement',   type: 'textarea', placeholder: 'Exciting news...',  section: 'content' },
      { id: 'details',      label: 'Details',        type: 'textarea', placeholder: 'More info...',       section: 'content' },
      { id: 'ctaText',      label: 'Button Label',   type: 'text',     placeholder: 'Learn More',         section: 'action', halfWidth: true },
      { id: 'ctaUrl',       label: 'Button URL',     type: 'text',     placeholder: 'https://...',        section: 'action', halfWidth: true },
      { id: 'logoUrl',      label: 'Logo URL',       type: 'text',     placeholder: '/logo.jpeg',         section: 'branding' },
      { id: 'theme',        label: 'Email Theme',    type: 'toggle',   options: ['light','dark'],         section: 'style' },
    ];

    const announcementFields: FieldConfig[] = [
      // Branding
      { id: 'companyName',    label: 'Company Name',   type: 'text',      placeholder: 'Acme',                section: 'branding', halfWidth: true },
      { id: 'headerTag',      label: 'Header Tag',     type: 'text',      placeholder: 'Product Update',      section: 'branding', halfWidth: true },
      { id: 'primaryColor',   label: 'Brand Color',    type: 'color',                                         section: 'branding' },
      { id: 'footerCompany',  label: 'Footer Company', type: 'text',      placeholder: 'Acme Corp, Inc.',     section: 'branding' },
      { id: 'footerAddress',  label: 'Footer Address', type: 'text',      placeholder: '123 Main St...',      section: 'branding' },
      // Content
      { id: 'headline',       label: 'Headline',       type: 'text',      placeholder: 'Platform Update...',  section: 'content' },
      { id: 'headingAlign',   label: 'Headline Align', type: 'alignment', options: ['left','center','right'], section: 'content', halfWidth: true },
      { id: 'bodyAlign',      label: 'Body Align',     type: 'alignment', options: ['left','center','right'], section: 'content', halfWidth: true },
      { id: 'body',           label: 'Body Text',      type: 'textarea',  placeholder: 'Main content...',     section: 'content' },
      { id: 'calloutText',    label: 'Callout Box',    type: 'textarea',  placeholder: 'Important note...',   section: 'content' },
      // Action
      { id: 'buttonText',     label: 'Button Label',   type: 'text',      placeholder: 'Read Release Notes',  section: 'action', halfWidth: true },
      { id: 'buttonLink',     label: 'Button URL',     type: 'text',      placeholder: 'https://...',         section: 'action', halfWidth: true },
      // Style
      { id: 'theme',          label: 'Email Theme',    type: 'toggle',    options: ['light','dark'],          section: 'style' },
    ];

    const newsletterFields: FieldConfig[] = [
      // Branding
      { id: 'mainTitle',         label: 'Publication Name', type: 'text',      placeholder: 'The Brief',            section: 'branding' },
      { id: 'issueInfo',         label: 'Issue Label',      type: 'text',      placeholder: 'ISSUE #42 · MARCH 2025', section: 'branding', halfWidth: true },
      { id: 'headerBadge',       label: 'Header Badge',     type: 'text',      placeholder: 'Newsletter',           section: 'branding', halfWidth: true },
      { id: 'primaryColor',      label: 'Brand Color',      type: 'color',                                          section: 'branding' },
      { id: 'footerNote',        label: 'Footer Note',      type: 'text',      placeholder: 'You subscribed to...', section: 'branding' },
      // Content
      { id: 'headline',          label: 'Feature Headline', type: 'text',      placeholder: 'Story title...',       section: 'content' },
      { id: 'headingAlign',      label: 'Heading Align',    type: 'alignment', options: ['left','center','right'],  section: 'content', halfWidth: true },
      { id: 'bodyAlign',         label: 'Content Align',    type: 'alignment', options: ['left','center','right'],  section: 'content', halfWidth: true },
      { id: 'body',              label: 'Feature Body',     type: 'textarea',                                       section: 'content' },
      { id: 'extraSectionTitle', label: 'Secondary Title',  type: 'text',      placeholder: 'Also In This Issue',  section: 'content' },
      { id: 'extraContent',      label: 'Secondary Items (one per line)', type: 'textarea', placeholder: 'Story 1\nStory 2', section: 'content' },
      // Action
      { id: 'buttonText',        label: 'Button Label',     type: 'text',                                           section: 'action', halfWidth: true },
      { id: 'buttonLink',        label: 'Button URL',       type: 'text',                                           section: 'action', halfWidth: true },
      // Style
      { id: 'theme',             label: 'Email Theme',      type: 'toggle',    options: ['light','dark'],          section: 'style' },
    ];

    const transactionalFields: FieldConfig[] = [
      // Branding
      { id: 'companyName',   label: 'Company Name',   type: 'text',      placeholder: 'Acme',              section: 'branding', halfWidth: true },
      { id: 'statusBadge',   label: 'Status Badge',   type: 'text',      placeholder: '✓ Payment Successful', section: 'branding', halfWidth: true },
      { id: 'primaryColor',  label: 'Brand Color',    type: 'color',                                       section: 'branding' },
      { id: 'footerCompany', label: 'Footer Company', type: 'text',      placeholder: 'Acme Corp, Inc.',   section: 'branding', halfWidth: true },
      { id: 'footerAddress', label: 'Footer Address', type: 'text',      placeholder: '123 Main St...',    section: 'branding', halfWidth: true },
      // Content
      { id: 'headline',     label: 'Headline',       type: 'text',      placeholder: 'Payment Confirmed',  section: 'content' },
      { id: 'headingAlign', label: 'Headline Align', type: 'alignment', options: ['left','center','right'],section: 'content', halfWidth: true },
      { id: 'bodyAlign',    label: 'Body Align',     type: 'alignment', options: ['left','center','right'],section: 'content', halfWidth: true },
      { id: 'body',         label: 'Body Text',      type: 'textarea',  placeholder: 'Main content...',    section: 'content' },
      { id: 'invoiceId',    label: 'Invoice ID',     type: 'text',      placeholder: '#INV-2024-001',      section: 'content', halfWidth: true },
      { id: 'invoiceDate',  label: 'Invoice Date',   type: 'text',      placeholder: 'Oct 24, 2024',       section: 'content', halfWidth: true },
      { id: 'totalAmount',  label: 'Total Amount',   type: 'text',      placeholder: '$49.00',             section: 'content' },
      // Action
      { id: 'buttonText',   label: 'Button Label',   type: 'text',      placeholder: 'View Invoice',       section: 'action', halfWidth: true },
      { id: 'buttonLink',   label: 'Button URL',     type: 'text',      placeholder: 'https://...',        section: 'action', halfWidth: true },
      // Style
      { id: 'theme',        label: 'Email Theme',    type: 'toggle',    options: ['light','dark'],         section: 'style' },
    ];

    if (selectedTemplate === 'welcome.tsx') return welcomeFields;
    if (selectedTemplate === 'enigma.tsx') return enigmaFields;
    if (selectedTemplate === 'announcement.tsx') return announcementFields;
    if (selectedTemplate === 'newsletter.tsx') return newsletterFields;
    if (selectedTemplate === 'transactional.tsx') return transactionalFields;
    return defaultFields;
  }, [selectedTemplate]);

  const renderField = (field: FieldConfig) => {
    if (field.type === 'textarea') {
      return (
        <textarea
          value={props[field.id] || ''}
          onChange={(e) => handleChange(field.id, e.target.value)}
          rows={field.id === 'extraContent' ? 5 : (field.id === 'body' || field.id === 'announcement' ? 3 : 2)}
          placeholder={field.placeholder}
          className="w-full px-2.5 py-2 border border-border rounded-lg text-[13px] text-zinc-300 bg-white/[0.02] transition-smooth focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 placeholder:text-zinc-700 resize-none"
        />
      );
    }
    if (field.type === 'alignment') {
      return (
        <div className="flex p-0.5 rounded-lg bg-white/[0.03] border border-border w-full">
          {field.options?.map((opt) => (
            <button
              key={opt}
              onClick={() => handleChange(field.id, opt)}
              className={`flex-1 flex items-center justify-center py-1.5 rounded-md transition-smooth ${
                (props[field.id] || 'center') === opt ? 'bg-white text-black' : 'text-zinc-600 hover:text-zinc-400'
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
    return (
      <input
        type="text"
        value={props[field.id] || ''}
        onChange={(e) => handleChange(field.id, e.target.value)}
        placeholder={field.placeholder}
        className="w-full px-2.5 py-2 border border-border rounded-lg text-[13px] text-zinc-300 bg-white/[0.02] transition-smooth focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 placeholder:text-zinc-700"
      />
    );
  };

  const renderSection = (fields: FieldConfig[]) => (
    <div className="grid grid-cols-2 gap-x-2.5 gap-y-3">
      {fields.map((field) => (
        <div key={field.id} className={field.halfWidth ? 'col-span-1' : 'col-span-2'}>
          <label className="block text-[10px] font-medium text-zinc-600 uppercase mb-1.5 tracking-wide">
            {field.label}
          </label>
          {renderField(field)}
        </div>
      ))}
    </div>
  );

  const brandingFields = templateFields.filter(f => f.section === 'branding' && f.type !== 'color' && f.type !== 'toggle');
  const contentFields  = templateFields.filter(f => f.section === 'content');
  const actionFields   = templateFields.filter(f => f.section === 'action');
  const colorFields    = templateFields.filter(f => f.type === 'color');
  const toggleFields   = templateFields.filter(f => f.type === 'toggle');

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
    <div className="space-y-5 fade-in h-full pb-10">

      <div>
        <h2 className="text-sm font-semibold text-zinc-200 mb-0.5">Edit Content</h2>
        <p className="text-xs text-zinc-600">Customize your email template.</p>
      </div>

      {/* Branding */}
      {brandingFields.length > 0 && (
        <div className="space-y-3">
          <SectionHeader icon={<Building2 className="h-3 w-3" />} label="Branding" />
          {renderSection(brandingFields)}
        </div>
      )}

      {/* Content */}
      {contentFields.length > 0 && (
        <>
          <div className="h-px bg-border" />
          <div className="space-y-3">
            <SectionHeader icon={<FileText className="h-3 w-3" />} label="Content" />
            {renderSection(contentFields)}
          </div>
        </>
      )}

      {/* Action / CTA */}
      {actionFields.length > 0 && (
        <>
          <div className="h-px bg-border" />
          <div className="space-y-3">
            <SectionHeader icon={<Link className="h-3 w-3" />} label="Call to Action" />
            {renderSection(actionFields)}
          </div>
        </>
      )}

      {/* Colors */}
      {colorFields.length > 0 && (
        <>
          <div className="h-px bg-border" />
          <div className="space-y-3">
            <SectionHeader icon={<PaintBucket className="h-3 w-3" />} label="Colors" />
            <div className="grid grid-cols-1 gap-3">
              {colorFields.map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label className="text-[10px] font-medium text-zinc-600 uppercase tracking-wide">{field.label}</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={props[field.id] || '#4f46e5'}
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

      {/* Theme */}
      {toggleFields.length > 0 && (
        <>
          <div className="h-px bg-border" />
          <div className="space-y-3">
            <SectionHeader icon={<SunMoon className="h-3 w-3" />} label="Appearance" />
            {toggleFields.map((field) => (
              <div key={field.id}>
                <div className="flex p-0.5 rounded-lg bg-white/[0.03] border border-border w-fit">
                  {field.options?.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleChange(field.id, opt)}
                      className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs font-medium rounded-md transition-smooth ${
                        (props[field.id] || 'dark') === opt ? 'bg-white text-black' : 'text-zinc-600 hover:text-zinc-400'
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
        </>
      )}

    </div>
  );
}
