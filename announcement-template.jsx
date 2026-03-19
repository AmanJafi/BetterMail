import React, { useState } from 'react';

const AnnouncementTemplate = () => {
  const [subject, setSubject] = useState('Important Announcement');
  const [heading, setHeading] = useState('New Feature Launch');
  const [announcement, setAnnouncement] = useState('We are excited to announce the launch of our latest innovation. This new feature will revolutionize the way you interact with our platform.');
  const [details, setDetails] = useState('Starting today, all users will have access to advanced analytics, real-time monitoring, and enhanced security protocols. Log in to your account to explore these new capabilities.');
  const [ctaText, setCtaText] = useState('Learn More');
  const [ctaUrl, setCtaUrl] = useState('https://example.com');

  // Logo from user upload
  const logoSrc;
  const copyHTML = () => {
    const html = generateHTML();
    navigator.clipboard.writeText(html);
    alert('HTML copied to clipboard!');
  };

  const generateHTML = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0f172a; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #000000; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 1px solid rgba(6, 182, 212, 0.3);">
          
          <!-- Header with Logo -->
          <tr>
            <td style="background-color: #000000; padding: 40px 20px; text-align: center; position: relative;">
              <img src="YOUR_LOGO_URL_HERE" alt="Enigma Logo" style="max-width: 200px; height: auto; display: block; margin: 0 auto;" />
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 30px;">
                <tr>
                  <td width="25%" style="background: linear-gradient(to right, transparent, #facc15, transparent); height: 2px;"></td>
                  <td width="50%" style="background: linear-gradient(to right, transparent, #06b6d4, transparent); height: 2px;"></td>
                  <td width="25%" style="background: linear-gradient(to right, transparent, #facc15, transparent); height: 2px;"></td>
                </tr>
but            </td>
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
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="${ctaUrl}" style="display: inline-block; padding: 16px 40px; background: #06b6d4; color: #000000; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 10px 25px rgba(6, 182, 212, 0.5); border: 1px solid rgba(250, 204, 21, 0.3);">
                      ${ctaText}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #000000; padding: 30px 40px; border-top: 1px solid rgba(6, 182, 212, 0.3);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 10px 0; font-size: 16px; color: #06b6d4; font-weight: bold;">ENIGMA</p>
                    <p style="margin: 0 0 20px 0; font-size: 14px; color: #9ca3af;">Decoding the future of technology</p>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 20px 0;">
                      <tr>
                        <td width="25%" style="background: linear-gradient(to right, transparent, rgba(250, 204, 21, 0.5), transparent); height: 1px;"></td>
                        <td width="50%" style="background: linear-gradient(to right, transparent, #06b6d4, transparent); height: 1px;"></td>
                        <td width="25%" style="background: linear-gradient(to right, transparent, rgba(250, 204, 21, 0.5), transparent); height: 1px;"></td>
                      </tr>
                    </table>
                    
                    <p style="margin: 0; font-size: 12px; color: #6b7280; text-align: center;">
                      © 2024 Enigma. All rights reserved.<br/>
                      <a href="#" style="color: #06b6d4; text-decoration: none;">Unsubscribe</a> | 
                      <a href="#" style="color: #06b6d4; text-decoration: none;">Privacy Policy</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-cyan-950 p-8">
      {/* Editor Panel */}
      <div className="max-w-4xl mx-auto mb-8 bg-gray-800 rounded-lg p-6 border border-cyan-500/30">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Edit Announcement</h2>
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-cyan-300 mb-2">Email Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-cyan-500/50 rounded text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-300 mb-2">Main Heading</label>
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
              rows="3"
              className="w-full px-4 py-2 bg-gray-900 border border-cyan-500/50 rounded text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-300 mb-2">Details (Second Paragraph)</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows="3"
              className="w-full px-4 py-2 bg-gray-900 border border-cyan-500/50 rounded text-white focus:outline-none focus:border-cyan-400"
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
              <label className="block text-sm font-medium text-cyan-300 mb-2">Button Link</label>
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
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Copy HTML Code
            </button>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl border border-cyan-500/30">

          {/* Header with Logo */}
          <div className="bg-black py-12 px-6 relative overflow-hidden">
            <div className="relative flex justify-center">
              <img
                src={logoSrc}
                alt="Enigma Logo"
                className="h-32 w-auto"
                style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))' }}
              />
            </div>
            <div className="flex gap-1 mt-8 justify-center">
              <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-10 py-12 bg-black">
            <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
              {heading}
            </h1>

            <p className="text-slate-300 text-base leading-relaxed mb-5">
              {announcement}
            </p>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              {details}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center my-8">
              <a
                href={ctaUrl}
                className="px-10 py-4 bg-cyan-500 text-black font-bold rounded-lg shadow-lg shadow-cyan-500/50 hover:bg-cyan-400 hover:shadow-yellow-400/40 transition-all duration-300 inline-block border border-yellow-400/30"
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-black px-10 py-8 border-t border-cyan-500/30">
            <div className="text-center mb-5">
              <p className="text-cyan-400 font-bold text-lg mb-2">ENIGMA</p>
              <p className="text-gray-400 text-sm">
                Decoding the future of technology
              </p>
            </div>

            <div className="flex gap-1 mb-5">
              <div className="h-px w-1/4 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
              <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <div className="h-px w-1/4 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
            </div>

            <div className="text-center text-xs text-gray-500">
              <p className="mb-1">© 2024 Enigma. All rights reserved.</p>
              <p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300">Unsubscribe</a>
                {' | '}
                <a href="#" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-2xl mx-auto mt-8 bg-gray-800 rounded-lg p-6 border border-cyan-500/30">
        <h3 className="text-lg font-semibold text-cyan-400 mb-3">How to Use</h3>
        <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
          <li>Edit the fields above to customize your announcement</li>
          <li>Click "Copy HTML Code" to get the email-ready HTML</li>
          <li>Upload your logo image to a hosting service and replace "YOUR_LOGO_URL_HERE" in the HTML</li>
          <li>Paste the HTML into your email platform (Mailchimp, SendGrid, etc.)</li>
        </ol>
      </div>
    </div>
  );
};

export default AnnouncementTemplate;
