
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, BookOpen, Check, Copy, Download, SunMoon,
  Sparkles, Mail, Code2, ChevronRight, Wand2
} from 'lucide-react';

const tabs = ['Built-in Templates', 'Custom Templates'] as const;
type Tab = typeof tabs[number];

export default function HowToUse() {
  const [activeTab, setActiveTab] = useState<Tab>('Built-in Templates');

  return (
    <div className="min-h-screen text-zinc-200 font-sans pattern-bg" style={{ background: '#0a0a0f' }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-10 transition-smooth text-sm font-medium">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Editor
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2.5 rounded-xl glow-purple" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}>
            <BookOpen className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">How to Use Email Maker</h1>
        </div>

        <p className="text-base text-zinc-400 mb-8 leading-relaxed">
          Create professional, Gmail-compatible HTML emails from React templates.
          Customize content, switch between light &amp; dark themes, and copy the rendered email directly to your clipboard.
        </p>

        {/* Tab Bar */}
        <div className="flex p-1 rounded-xl bg-white/[0.04] border border-border mb-10 w-fit gap-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg text-sm font-medium transition-smooth ${
                activeTab === tab
                  ? 'bg-white text-black'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab === 'Built-in Templates' ? <SunMoon className="h-4 w-4" /> : <Code2 className="h-4 w-4" />}
              <span>{tab}</span>
            </button>
          ))}
        </div>

        {/* ─── Built-in Templates tab ─── */}
        {activeTab === 'Built-in Templates' && (
          <div className="space-y-8">

            {/* Step 1 */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}>1</span>
                Select a Template
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Templates are loaded from the <code className="bg-white/[0.06] px-1.5 py-0.5 rounded text-xs text-zinc-300">./templates</code> directory.
                  Click any template in the sidebar to load it into the editor and preview.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['📢 Announcement', '🔮 Enigma', '📰 Newsletter', '💳 Transactional', '👋 Welcome'].map(t => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-border text-zinc-400">{t}</span>
                  ))}
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 text-xs text-zinc-400">
                  <Sparkles className="inline h-3 w-3 text-primary mr-1" />
                  <strong className="text-zinc-300">Developer Tip:</strong> Add new <code className="text-primary">.tsx</code> or <code className="text-primary">.jsx</code> files to the templates folder — they&apos;ll automatically appear in the sidebar.
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}>2</span>
                Customize Content &amp; Theme
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Use the editor panel to customize your email. Changes update the preview in real-time.
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center text-zinc-300 text-sm"><Check className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0" />Headings and body text</li>
                  <li className="flex items-center text-zinc-300 text-sm"><Check className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0" />Button labels and links</li>
                  <li className="flex items-center text-zinc-300 text-sm"><Check className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0" />Accent and primary colors</li>
                  <li className="flex items-center text-zinc-300 text-sm">
                    <SunMoon className="h-4 w-4 text-primary mr-2.5 shrink-0" />
                    <strong className="text-white mr-1">Light / Dark mode</strong> for every template
                  </li>
                </ul>
              </div>
            </section>

            {/* Step 3 */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}>3</span>
                Copy &amp; Use in Gmail
              </h2>
              <div className="pl-11 space-y-5">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The app automatically <strong className="text-zinc-200">inlines CSS</strong> and removes unsupported tags for full Gmail compatibility.
                </p>

                <div className="space-y-2">
                  <h3 className="font-semibold text-base text-white flex items-center">
                    <Copy className="h-4 w-4 text-primary mr-2" />
                    Option A: Copy Email (Recommended)
                  </h3>
                  <ol className="list-decimal list-inside space-y-1.5 text-zinc-400 text-sm ml-2">
                    <li>Click the <strong className="text-primary">Copy Email</strong> button (or press <kbd className="bg-white/[0.06] px-1.5 py-0.5 rounded text-[10px] text-zinc-300 font-mono border border-border">⌘C</kbd>).</li>
                    <li>The <strong className="text-zinc-200">rendered email is copied as rich text</strong> — not raw HTML code.</li>
                    <li>Open Gmail, start a <strong className="text-zinc-200">Compose</strong> window.</li>
                    <li>Paste (<kbd className="bg-white/[0.06] px-1.5 py-0.5 rounded text-[10px] text-zinc-300 font-mono border border-border">⌘V</kbd>) — the formatted email appears instantly.</li>
                  </ol>
                </div>

                <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-emerald-400 text-sm">No DevTools Needed!</h4>
                      <p className="text-zinc-400 text-sm mt-1">
                        Unlike before, you no longer need to open Chrome DevTools or &quot;Edit as HTML&quot; in Gmail.
                        The copy function now sends the <strong className="text-zinc-200">rendered visual email</strong> to your clipboard,
                        so a simple paste is all you need.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-base text-white flex items-center">
                    <Download className="h-4 w-4 text-primary mr-2" />
                    Option B: Download HTML File
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Click <strong className="text-zinc-200">Download</strong> to save a <code className="bg-white/[0.06] px-1.5 py-0.5 rounded text-xs text-zinc-300">.html</code> file.
                    Open it in a browser to preview, or upload to email marketing tools like Mailchimp or SendGrid.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 4 */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}>4</span>
                Adding New Templates
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Create a new <code className="bg-white/[0.06] px-1.5 py-0.5 rounded text-xs text-zinc-300">.tsx</code> file in the <code className="bg-white/[0.06] px-1.5 py-0.5 rounded text-xs text-zinc-300">./templates</code> directory.
                  Export a default React component that accepts props and renders an email-safe HTML structure using inline styles and tables.
                </p>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 text-xs text-zinc-400">
                  <strong className="text-zinc-300">Remember:</strong> Register your template in <code className="text-primary">app/lib/templates-registry.ts</code> for it to appear in the sidebar.
                  Add a <code className="text-primary">theme</code> prop with <code className="text-primary">&apos;light&apos; | &apos;dark&apos;</code> support so users can toggle the email theme.
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ─── Custom Templates tab ─── */}
        {activeTab === 'Custom Templates' && (
          <div className="space-y-8">

            {/* Intro */}
            <section className="glass rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl shrink-0" style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}>
                  <Wand2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">What is a Custom Template?</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The <strong className="text-zinc-200">Custom Template</strong> option lets you generate a completely unique email design using any AI
                    (ChatGPT, Claude, Gemini, etc.) and paste it directly into the app — no coding required.
                    Once applied, it works exactly like any built-in template and is fully editable.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 1 */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold" style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}>1</span>
                Open Custom Template
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  In the sidebar, click <strong className="text-zinc-200">Custom Template</strong> (the <Code2 className="inline h-3.5 w-3.5 text-zinc-300 mx-0.5" /> icon).
                  The editor panel will switch to the custom template workflow.
                </p>
                <div className="bg-sky-500/5 border border-sky-500/15 rounded-xl p-3 text-xs text-zinc-400 flex items-start space-x-2">
                  <Sparkles className="h-3 w-3 text-sky-400 mt-0.5 shrink-0" />
                  <span>You don&apos;t need an API key or any account. This flow works with any AI chat tool you already use.</span>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold" style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}>2</span>
                Copy the Prompt
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  In the panel, you&apos;ll see a pre-written prompt. Click <strong className="text-zinc-200">Copy Prompt</strong> to copy it to your clipboard.
                  This prompt contains precise instructions so the AI generates code your app can run directly.
                </p>
                <div className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-3 text-xs text-zinc-400 flex items-start space-x-2">
                  <span className="text-amber-400 font-bold shrink-0">⚠</span>
                  <span>
                    <strong className="text-zinc-300">Use this exact prompt.</strong> The AI must output <code className="text-amber-300">React.createElement()</code> calls —
                    not JSX. If you change the prompt, the generated code might not work in this app.
                  </span>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold" style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}>3</span>
                Ask Your AI
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Open any AI chat, paste the prompt, and optionally describe the kind of email you want:
                </p>
                <ul className="list-none space-y-1.5">
                  {[
                    'A dark SaaS product launch email with a bold hero section',
                    'A minimal order confirmation email with a receipt table',
                    'A bright welcome email for a fitness app',
                    'A professional newsletter with cyan accents',
                  ].map((ex, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-zinc-400">
                      <ChevronRight className="h-3.5 w-3.5 mt-0.5 text-sky-500 shrink-0" />
                      <span className="italic">&quot;{ex}&quot;</span>
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 text-xs">
                  Works with <strong className="text-zinc-400">ChatGPT</strong>, <strong className="text-zinc-400">Claude</strong>, <strong className="text-zinc-400">Gemini</strong>, and any other AI chat tool.
                </p>
              </div>
            </section>

            {/* Step 4 */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold" style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}>4</span>
                Paste &amp; Apply
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Copy the code the AI returns. Back in the app, paste it into the large code box and click <strong className="text-zinc-200">Apply Template</strong>.
                  The preview will update instantly.
                </p>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p className="font-medium text-zinc-300">What happens next:</p>
                  <ul className="space-y-1.5">
                    {[
                      'The code is evaluated and rendered client-side',
                      'An editor panel appears below — edit headline, body, button, colors, and alignment',
                      'Use Copy Email or Download to export it, just like any built-in template',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold bg-red-500/20 text-red-400">!</span>
                Troubleshooting
              </h2>
              <div className="pl-11 space-y-3">
                <div className="space-y-4 text-sm">
                  {[
                    {
                      error: '"Could not parse the code"',
                      fix: 'The AI output JSX (angle brackets like <div>) instead of React.createElement(). Re-send the exact prompt without modifications.',
                    },
                    {
                      error: '"function EmailTemplate" not found',
                      fix: 'The AI may have renamed the function. Ask it to output the function named exactly EmailTemplate.',
                    },
                    {
                      error: 'Fields don\'t update when I type',
                      fix: 'The AI used wrong prop names. Re-generate with the built-in prompt — it specifies exact prop names the editor expects.',
                    },
                    {
                      error: 'Preview is blank or broken',
                      fix: 'The generated code may have a runtime error. Try regenerating — sometimes the AI produces slightly different output on a second attempt.',
                    },
                  ].map(({ error, fix }, i) => (
                    <div key={i} className="rounded-xl border border-border bg-white/[0.02] p-3 space-y-1">
                      <p className="text-red-400 font-mono text-xs">{error}</p>
                      <p className="text-zinc-400 text-xs leading-relaxed">{fix}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        )}

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-zinc-600">React Email Maker &bull; Built with Next.js &bull; Gmail Compatible</p>
        </div>
      </div>
    </div>
  );
}
