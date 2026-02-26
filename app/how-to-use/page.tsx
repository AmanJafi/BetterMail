
import Link from 'next/link';
import { ArrowLeft, BookOpen, Check, Copy, Code, AlertTriangle } from 'lucide-react';

export default function HowToUse() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Editor
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-100 p-2 rounded-lg">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">How to Use React Email Maker</h1>
        </div>

        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
          Create professional, Gmail-compatible HTML emails directly from React templates.
          This guide covers how to select templates, customize content, and export primarily for Gmail.
        </p>

        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-slate-100 text-slate-600 h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
              Select a Template
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 mb-4">
                Templates are loaded from the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-slate-800">./templates</code> directory in your project root.
                Click on any template name in the sidebar to load it into the editor.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
                <strong>Developer Tip:</strong> Add new <code className="text-blue-600">.tsx</code> or <code className="text-blue-600">.jsx</code> files to the templates folder to automatically see them here.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-slate-100 text-slate-600 h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
              Customize Content & Colors
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 mb-4">
                Use the middle panel to edit the email content. You can change:
              </p>
              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-center text-slate-700">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Headings and Body Text
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Button Labels and Links
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Theme Colors (Primary, Background, Text)
                </li>
              </ul>
              <p className="text-slate-600">The preview panel on the right updates automatically as you type.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-slate-100 text-slate-600 h-8 w-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
              Export to Gmail
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 mb-6">
                Gmail is notoriously strict with HTML. Our app automatically <strong>inlines CSS</strong> and removes unsupported tags.
              </p>

              <h3 className="font-semibold text-lg mb-2">Option A: Copy & Paste (Quickest)</h3>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-600 ml-2">
                <li>Click the <strong className="text-blue-600"><Copy className="inline h-3 w-3 mx-1" /> Copy HTML</strong> button in the top right.</li>
                <li>Open <a href="https://gmail.com" target="_blank" className="text-blue-600 hover:underline">Gmail</a> and strictly start a <strong>Compose</strong> window.</li>
                <li>Paste the content. Note: Direct pasting usually pastes the <em>code</em>. To paste the <em>rendered</em> email, you need to use the Chrome DevTools method or an external tool.</li>
              </ol>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-3" />
                  <div>
                    <h4 className="font-bold text-amber-800 text-sm uppercase">Critical: How to Paste into Gmail</h4>
                    <p className="text-amber-700 text-sm mt-1">
                      You cannot simply paste HTML code into the body of the email.
                    </p>
                    <p className="text-amber-700 text-sm mt-2">
                      <strong>The Right Way:</strong>
                      <br />1. Type a placeholder text like "XXX" in your Gmail compose window.
                      <br />2. Right-click "XXX" &rarr; <strong>Inspect</strong>.
                      <br />3. In the Elements panel, find the <code className="bg-amber-100 px-1 rounded">div</code> or <code className="bg-amber-100 px-1 rounded">span</code> containing "XXX".
                      <br />4. Right-click the element &rarr; <strong>Edit as HTML</strong>.
                      <br />5. Delete the content and paste your copied HTML code.
                      <br />6. Click outside the edit box to apply.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2">Option B: Download HTML</h3>
              <p className="text-slate-600 text-sm">
                Use the <strong>Download</strong> button to save a <code className="bg-slate-100 px-1 rounded">.html</code> file. You can open this in Chrome to preview or send via email marketing tools like Mailchimp or Copy HTML from there.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
