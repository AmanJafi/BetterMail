
import Link from 'next/link';
import { ArrowLeft, BookOpen, Check, Copy, Download, SunMoon, Sparkles, Mail } from 'lucide-react';

export default function HowToUse() {
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

        <p className="text-base text-zinc-400 mb-12 leading-relaxed">
          Create professional, Gmail-compatible HTML emails from React templates.
          Customize content, switch between light &amp; dark themes, and copy the rendered email directly to your clipboard.
        </p>

        <div className="space-y-10">

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
                <strong className="text-zinc-300">Developer Tip:</strong> Add new <code className="text-primary">.tsx</code> or <code className="text-primary">.jsx</code> files to the templates folder — they'll automatically appear in the sidebar.
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
                <li className="flex items-center text-zinc-300 text-sm">
                  <Check className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0" />
                  Headings and body text
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <Check className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0" />
                  Button labels and links
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <Check className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0" />
                  Accent and primary colors
                </li>
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

              {/* Option A */}
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

              {/* Highlight Box */}
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

              {/* Option B */}
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

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-zinc-600">React Email Maker &bull; Built with Next.js &bull; Gmail Compatible</p>
        </div>
      </div>
    </div>
  );
}
