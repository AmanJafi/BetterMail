
'use client';

import { useState, useEffect, useCallback } from 'react';
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

  // When template changes, reset props and fetch default render
  useEffect(() => {
    if (selectedTemplate) {
      let defaultProps = {};
      if (selectedTemplate === 'enigma.tsx') {
        defaultProps = {
          heading: 'New Feature Launch',
          announcement: 'We are excited to announce the launch of our latest innovation.',
          details: 'Log in to your account to explore these new capabilities.',
          ctaText: 'Learn More',
          ctaUrl: 'https://example.com',
          logoUrl: '/logo.jpeg',
          theme: 'dark'
        };
      } else {
        defaultProps = {
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
    // Debounce rendering here if needed, or render on blur/submit
    // For now, let's render on change with a small timeout or just direct?
    // Direct might be too heavy. Let's trigger render manually or debounce.
    // For simplicity, let's debounce in the Editor component or here.
    const timeoutId = setTimeout(() => {
      if (selectedTemplate) handleRender(selectedTemplate, newProps);
    }, 50);
    return () => clearTimeout(timeoutId);
  };

  return (
    <main className="flex h-screen bg-gray-50 text-gray-900">
      <Toaster position="top-right" />

      {/* Sidebar - Template List */}
      <Sidebar
        selectedTemplate={selectedTemplate}
        onSelect={setSelectedTemplate}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* Editor Panel - Center/Left input */}
        <div className="w-full md:w-1/3 border-r border-gray-200 bg-white p-6 overflow-y-auto">
          <Editor
            selectedTemplate={selectedTemplate}
            props={templateProps}
            onChange={handlePropsChange}
          />
        </div>

        {/* Preview Panel - Right output */}
        <div className="w-full md:w-2/3 bg-gray-100 p-8 overflow-y-auto flex flex-col items-center justify-center">
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
