
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Editor from './components/editor/Editor';
import Preview from './components/preview/Preview';
import CustomTemplatePanel from './components/custom/CustomTemplatePanel';
import { Toaster } from 'sonner';
import { templatesRegistry } from './lib/templates-registry';
import { renderOnClient, renderRawHtmlOnClient } from '@/lib/client-renderer';
import { evalTemplate } from '@/lib/template-eval';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [templateProps, setTemplateProps] = useState<any>({});
  const [htmlOutput, setHtmlOutput] = useState<string>('');
  const [warnings, setWarnings] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [customHtml, setCustomHtml] = useState('');
  const renderTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleRender = useCallback(async (templateId: string, props: any) => {
    if (!templateId || !templatesRegistry[templateId]) return;

    setLoading(true);
    try {
      const Template = templatesRegistry[templateId];
      const { html, warnings } = await renderOnClient(Template, props);
      setHtmlOutput(html);
      setWarnings(warnings);
    } catch (error) {
      console.error("Client-side rendering failed", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedTemplate && selectedTemplate !== 'custom') {
      let defaultProps: any = {};

      const commonDefaults = {
        headingAlign: 'center',
        bodyAlign: 'center',
        theme: 'dark',
        primaryColor: '#4f46e5'
      };

      if (selectedTemplate === 'enigma.tsx') {
        defaultProps = {
          ...commonDefaults,
          heading: 'New Feature Launch',
          announcement: 'We are excited to announce the launch of our latest innovation.',
          details: 'Log in to your account to explore these new capabilities.',
          ctaText: 'Learn More',
          ctaUrl: 'https://example.com',
          logoUrl: '/logo.jpeg',
          primaryColor: '#ffffff'
        };
      } else if (selectedTemplate === 'announcement.tsx') {
        defaultProps = {
          ...commonDefaults,
          headline: 'Introducing Our Latest Platform Update',
          body: 'We\'ve shipped a significant update to our platform. Explore what\'s new.',
          buttonText: 'Read the Release Notes',
          buttonLink: '#',
          primaryColor: '#6366f1',
          companyName: 'Acme',
          headerTag: 'Product Update',
          calloutText: 'This update is available to all users effective immediately. No action is required on your end.',
          footerCompany: 'Acme Corp, Inc.',
          footerAddress: '100 Market Street, San Francisco, CA 94105',
        };
      } else if (selectedTemplate === 'newsletter.tsx') {
        defaultProps = {
          ...commonDefaults,
          mainTitle: 'The Brief',
          issueInfo: 'ISSUE #42 · MARCH 2025',
          headerBadge: 'Newsletter',
          headline: 'Insights & Trends for Q1 2025',
          body: 'In this edition we cover AI-augmented workflows, key metrics to track this quarter, and advice from operators who\'ve scaled past 100 employees.',
          buttonText: 'Read Full Issue',
          buttonLink: 'https://example.com/newsletter',
          extraSectionTitle: 'Also In This Issue',
          extraContent: 'How to measure team productivity without micromanaging\nThe rise of vertical SaaS: opportunities and risks\nQ1 benchmarks: what good looks like for growth-stage startups',
          footerNote: 'You are receiving this because you subscribed.',
          primaryColor: '#4f46e5',
        };
      } else if (selectedTemplate === 'transactional.tsx') {
        defaultProps = {
          ...commonDefaults,
          headline: 'Payment Confirmed',
          body: 'Thank you for your purchase. Your payment has been processed successfully.',
          invoiceId: '#INV-2024-001',
          invoiceDate: 'October 24, 2024',
          totalAmount: '$49.00',
          buttonText: 'View Invoice',
          buttonLink: 'https://example.com/invoice',
          primaryColor: '#10b981',
          companyName: 'Acme',
          statusBadge: '✓ Payment Successful',
          footerCompany: 'Acme Corp, Inc.',
          footerAddress: '100 Market Street, San Francisco, CA 94105',
        };
      } else {
        defaultProps = {
          ...commonDefaults,
          headline: 'Welcome to Acme Corp',
          body: 'Your account is ready. We\'re excited to have you on board. Explore your dashboard to discover tools built to help your team move faster.',
          buttonText: 'Get Started',
          buttonLink: 'https://example.com',
          primaryColor: '#06b6d4',
          companyName: 'Acme',
          tagline: 'Welcome',
          footerCompany: 'Acme Corp, Inc.',
          footerAddress: '100 Market Street, Suite 300, San Francisco, CA 94105',
        };
      }
      setTemplateProps(defaultProps);
      handleRender(selectedTemplate, defaultProps);
    }

    // Switching to 'custom' starts a fresh raw HTML template.
    if (selectedTemplate === 'custom') {
      setHtmlOutput('');
      setWarnings([]);
      setCustomHtml('');
    }
  }, [selectedTemplate, handleRender]);

  const handlePropsChange = (newProps: any) => {
    setTemplateProps(newProps);

    if (renderTimeoutRef.current) clearTimeout(renderTimeoutRef.current);

    renderTimeoutRef.current = setTimeout(() => {
      if (selectedTemplate && selectedTemplate !== 'custom') handleRender(selectedTemplate, newProps);
      renderTimeoutRef.current = null;
    }, 300);
  };

  const handleCustomHtmlChange = useCallback(async (source: string) => {
    setCustomHtml(source);
    if (!source.trim()) {
      setHtmlOutput('');
      setWarnings([]);
      return;
    }
    try {
      const code = source.trim().replace(/^```(?:javascript|js|jsx|tsx|typescript)?\s*/i, '').replace(/```\s*$/i, '');
      let html: string;
      let warnings: string[];

      // Custom mode accepts both standalone HTML and the React.createElement
      // template format used by the earlier custom-template workflow.
      if (/function\s+EmailTemplate\s*\(/.test(code) && code.includes('React.createElement')) {
        const Component = evalTemplate(code);
        if (!Component) throw new Error('Could not evaluate the React email template.');
        const rendered = await renderOnClient(Component, {});
        ({ html, warnings } = await renderRawHtmlOnClient(rendered.html));
        warnings = [...new Set([...rendered.warnings, ...warnings])];
      } else {
        ({ html, warnings } = await renderRawHtmlOnClient(source));
      }
      setHtmlOutput(html);
      setWarnings(warnings);
    } catch (error) {
      console.error('Pasted HTML rendering failed', error);
    }
  }, []);

  const isCustomMode = selectedTemplate === 'custom';
  return (
    <main className="flex h-screen overflow-hidden bg-[#09090b]">
      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: '#161618',
            border: '1px solid #232326',
            color: '#e4e4e7',
          },
        }}
      />

      <Sidebar
        selectedTemplate={selectedTemplate}
        onSelect={setSelectedTemplate}
      />

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Editor / Custom Panel */}
        <div className="w-full md:w-[320px] border-r border-border p-4 overflow-y-auto bg-[#0c0c0e]">
          {isCustomMode ? (
            <CustomTemplatePanel
              value={customHtml}
              onChange={handleCustomHtmlChange}
            />
          ) : (
            <Editor
              selectedTemplate={selectedTemplate}
              props={templateProps}
              onChange={handlePropsChange}
            />
          )}

        </div>

        {/* Preview */}
        <div className="w-full md:flex-1 p-4 overflow-y-auto bg-[#09090b]">
          <Preview
            html={htmlOutput}
            loading={loading}
            warnings={warnings}
          />
        </div>
      </div>
    </main>
  );
}
