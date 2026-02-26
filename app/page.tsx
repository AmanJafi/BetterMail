
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
      let defaultProps: any = {};
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
          primaryColor: '#06b6d4',
          theme: 'dark'
        };
      }
      setTemplateProps(defaultProps);
      handleRender(selectedTemplate, defaultProps);
    }
  }, [selectedTemplate, handleRender]);

  const handlePropsChange = (newProps: any) => {
    setTemplateProps(newProps);
    const timeoutId = setTimeout(() => {
      if (selectedTemplate) handleRender(selectedTemplate, newProps);
    }, 500);
    return () => clearTimeout(timeoutId);
  };

  return (
    <main className="flex h-screen overflow-hidden pattern-bg">
      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: '#1a1a24',
            border: '1px solid #27272f',
            color: '#e4e4e7',
          },
        }}
      />

      {/* Sidebar */}
      <Sidebar
        selectedTemplate={selectedTemplate}
        onSelect={setSelectedTemplate}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* Editor Panel */}
        <div className="w-full md:w-[340px] border-r border-border p-5 overflow-y-auto" style={{ background: 'rgba(13, 13, 20, 0.9)' }}>
          <Editor
            selectedTemplate={selectedTemplate}
            props={templateProps}
            onChange={handlePropsChange}
          />
        </div>

        {/* Preview Panel */}
        <div className="w-full md:flex-1 p-6 overflow-y-auto" style={{ background: '#08080d' }}>
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
