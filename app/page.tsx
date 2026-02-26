
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Editor from './components/editor/Editor';
import Preview from './components/preview/Preview';
import { Toaster } from 'sonner';
import { templatesRegistry } from './lib/templates-registry';
import { renderOnClient } from '@/lib/client-renderer';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [templateProps, setTemplateProps] = useState<any>({});
  const [htmlOutput, setHtmlOutput] = useState<string>('');
  const [warnings, setWarnings] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
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
    if (selectedTemplate) {
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
      } else if (selectedTemplate === 'newsletter.tsx') {
        defaultProps = {
          ...commonDefaults,
          mainTitle: 'The Weekly Insider',
          issueInfo: 'ISSUE #42',
          headline: 'Weekly Digest',
          body: 'Here are the top stories this week.',
          buttonText: 'Read Full Issue',
          buttonLink: 'https://example.com/newsletter',
          extraSectionTitle: 'In Case You Missed It',
          extraContent: 'Five Tips for Better Productivity\nThe Future of Remote Work\nDesign Systems for Beginners'
        };
      } else if (selectedTemplate === 'transactional.tsx') {
        defaultProps = {
          ...commonDefaults,
          headline: 'Payment Confirmation',
          body: 'Your payment has been successfully processed.',
          invoiceId: '#INV-2024-001',
          invoiceDate: 'Oct 24, 2024',
          totalAmount: '$49.00',
          buttonText: 'View Invoice',
          buttonLink: 'https://example.com/invoice',
          primaryColor: '#10b981'
        };
      } else {
        defaultProps = {
          ...commonDefaults,
          headline: 'Welcome!',
          body: 'Check out our latest updates.',
          buttonText: 'Get Started',
          buttonLink: 'https://example.com',
          primaryColor: '#06b6d4'
        };
      }
      setTemplateProps(defaultProps);
      handleRender(selectedTemplate, defaultProps);
    }
  }, [selectedTemplate, handleRender]);

  const handlePropsChange = (newProps: any) => {
    setTemplateProps(newProps);

    // Clear existing timeout to debounce
    if (renderTimeoutRef.current) {
      clearTimeout(renderTimeoutRef.current);
    }

    // Set a new timeout (300ms is standard for responsive feel)
    renderTimeoutRef.current = setTimeout(() => {
      if (selectedTemplate) handleRender(selectedTemplate, newProps);
      renderTimeoutRef.current = null;
    }, 300);
  };

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
        {/* Editor */}
        <div className="w-full md:w-[320px] border-r border-border p-4 overflow-y-auto bg-[#0c0c0e]">
          <Editor
            selectedTemplate={selectedTemplate}
            props={templateProps}
            onChange={handlePropsChange}
          />
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
