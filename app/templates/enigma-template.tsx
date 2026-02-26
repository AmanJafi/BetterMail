'use client';

import React, { useState, useMemo } from 'react';

export default function EnigmaTemplate() {
  const [heading, setHeading] = useState('New Feature Launch');
  const [announcement, setAnnouncement] = useState('We are excited to announce the launch of our latest innovation. This new feature will revolutionize the way you interact with our platform.');
  const [details, setDetails] = useState('Starting today, all users will have access to advanced analytics, real-time monitoring, and enhanced security protocols. Log in to your account to explore these new capabilities.');
  const [ctaText, setCtaText] = useState('Learn More');
  const [ctaUrl, setCtaUrl] = useState('https://example.com');

  const generateHTML = useMemo(() => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${heading}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; padding: 20px 0;">
    <tbody>
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #000000; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 1px solid rgba(6, 182, 212, 0.3);">
            <tbody>
              <!-- Header -->
              <tr>
                <td style="background-color: #000000; padding: 40px 20px; text-align: center; position: relative;">
                  <div style="height: 2px; background: linear-gradient(to right, transparent, #06b6d4, transparent); margin-top: 30px;"></div>
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td style="padding: 40px 40px 20px 40px; background-color: #000000;">
                  <h1 style="margin: 0 0 20px 0; font-size: 28px; color: #06b6d4; text-align: center; font-weight: bold;">
                    ${heading}
                  </h1>

                  <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                    ${announcement}
                  </p>

                  <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                    ${details}
                  </p>

                  <!-- CTA Button -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <td align="center" style="padding: 20px 0;">
                          <a href="${ctaUrl}" style="display: inline-block; padding: 16px 40px; background: #06b6d4; color: #000000; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 10px 25px rgba(6, 182, 212, 0.5);">
                            ${ctaText}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #000000; padding: 30px 40px; border-top: 1px solid rgba(6, 182, 212, 0.3);">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <td align="center">
                          <p style="margin: 0 0 10px 0; font-size: 16px; color: #06b6d4; font-weight: bold;">ENIGMA</p>
                          <p style="margin: 0 0 20px 0; font-size: 14px; color: #9ca3af;">Decoding the future of technology</p>

                          <div style="height: 1px; background: linear-gradient(to right, transparent, #06b6d4, transparent); margin: 20px 0;"></div>

                          <p style="margin: 0; font-size: 12px; color: #6b7280; text-align: center;">
                            © 2024 Enigma. All rights reserved.<br>
                            <a href="#" style="color: #06b6d4; text-decoration: none;">Unsubscribe</a> |
                            <a href="#" style="color: #06b6d4; text-decoration: none;">Privacy Policy</a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>`;
  }, [heading, announcement, details, ctaText, ctaUrl]);

  const copyHTML = () => {
    navigator.clipboard.writeText(generateHTML);
    alert('HTML copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-cyan-950 p-8">
      {/* Editor Panel */}
      <div className="max-w-2xl mx-auto mb-8 bg-slate-900 rounded-lg p-6 border border-cyan-500/30">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Edit Enigma Template</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-cyan-300 mb-2">Heading</label>
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-cyan-500/50 rounded text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-300 mb-2">Announcement (First Paragraph)</label>
            <textarea
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-cyan-500/50 rounded text-white focus:outline-none focus:border-cyan-400"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-300 mb-2">Details (Second Paragraph)</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-cyan-500/50 rounded text-white focus:outline-none focus:border-cyan-400"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-cyan-300 mb-2">Button Text</label>
              <input
                type="text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900 border border-cyan-500/50 rounded text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-cyan-300 mb-2">Button URL</label>
              <input
                type="text"
                value={ctaUrl}
                onChange={(e) => setCtaUrl(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900 border border-cyan-500/50 rounded text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={copyHTML}
              className="w-full px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg shadow-lg shadow-cyan-500/50 hover:bg-cyan-400 hover:shadow-yellow-400/40 transition-all duration-300"
            >
              Copy HTML
            </button>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl border border-cyan-500/30">
          {/* Preview iframe for better performance */}
          <iframe
            srcDoc={generateHTML}
            className="w-full h-[600px] border-0"
            title="Email Preview"
          />
        </div>
      </div>
    </div>
  );
}
