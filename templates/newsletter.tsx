import React from 'react';

export const NewsletterTemplate = ({
  headline = 'Weekly Digest',
  body = 'Here are the top stories this week. We have curated a list of our best articles just for you. Read on to stay informed about the latest industry trends and insights.',
  buttonText = 'Read Full Issue',
  buttonLink = 'https://example.com/newsletter',
  theme = 'dark'
}: any) => {
  const isDark = theme === 'dark';

  const colors = {
    outerBg: isDark ? '#0f172a' : '#f3f4f6',
    cardBg: isDark ? '#1e293b' : '#ffffff',
    headerBg: isDark ? '#312e81' : '#4f46e5',
    headerText: '#ffffff',
    headerSub: isDark ? '#a5b4fc' : '#e0e7ff',
    accentColor: isDark ? '#818cf8' : '#4f46e5',
    headingColor: isDark ? '#f1f5f9' : '#111827',
    textColor: isDark ? '#94a3b8' : '#4b5563',
    linkColor: isDark ? '#e2e8f0' : '#1f2937',
    linkSub: isDark ? '#64748b' : '#6b7280',
    dividerColor: isDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb',
    footerBg: isDark ? '#0f172a' : '#1f2937',
    footerText: isDark ? '#475569' : '#9ca3af',
    footerLink: isDark ? '#94a3b8' : '#d1d5db',
    shadow: isDark ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 6px rgba(0,0,0,0.05)',
  };

  return (
    <div style={{ backgroundColor: colors.outerBg, fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ backgroundColor: colors.outerBg, padding: '40px 0' }}>
        <tr>
          <td align="center">
            <table width="600" cellPadding="0" cellSpacing="0" border={0} style={{ backgroundColor: colors.cardBg, borderRadius: '12px', overflow: 'hidden', boxShadow: colors.shadow }}>

              {/* Header */}
              <tr>
                <td style={{ backgroundColor: colors.headerBg, padding: '40px 20px', textAlign: 'center' }}>
                  <h1 style={{ margin: '0', fontSize: '28px', color: colors.headerText, fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                    The Weekly Insider
                  </h1>
                  <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: colors.headerSub, textTransform: 'uppercase', letterSpacing: '2px' }}>
                    ISSUE #42
                  </p>
                </td>
              </tr>

              {/* Main Feature */}
              <tr>
                <td style={{ padding: '40px 40px 20px 40px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: colors.accentColor, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    FEATURED STORY
                  </span>
                  <h2 style={{ margin: '10px 0 15px 0', fontSize: '24px', color: colors.headingColor, fontWeight: 'bold', lineHeight: '1.3' }}>
                    {headline}
                  </h2>
                  <p style={{ margin: '0 0 25px 0', fontSize: '16px', lineHeight: '1.6', color: colors.textColor }}>
                    {body}
                  </p>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td align="left">
                        <a href={buttonLink} style={{ display: 'inline-block', padding: '12px 24px', background: colors.accentColor, color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '14px' }}>
                          {buttonText} →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Separator */}
              <tr>
                <td style={{ padding: '0 40px' }}>
                  <div style={{ height: '1px', backgroundColor: colors.dividerColor, margin: '20px 0' }}></div>
                </td>
              </tr>

              {/* Quick Links Section */}
              <tr>
                <td style={{ padding: '20px 40px 40px 40px' }}>
                  <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: colors.headingColor, fontWeight: 'bold' }}>
                    In Case You Missed It
                  </h3>

                  {/* Article 1 */}
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ marginBottom: '20px' }}>
                    <tr>
                      <td width="20" valign="top" style={{ color: colors.accentColor, fontSize: '18px', fontWeight: 'bold' }}>1.</td>
                      <td style={{ paddingLeft: '10px' }}>
                        <a href="#" style={{ fontSize: '16px', color: colors.linkColor, fontWeight: '600', textDecoration: 'none' }}>Five Tips for Better Productivity</a>
                        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: colors.linkSub }}>Boost your efficiency with these simple hacks.</p>
                      </td>
                    </tr>
                  </table>

                  {/* Article 2 */}
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ marginBottom: '20px' }}>
                    <tr>
                      <td width="20" valign="top" style={{ color: colors.accentColor, fontSize: '18px', fontWeight: 'bold' }}>2.</td>
                      <td style={{ paddingLeft: '10px' }}>
                        <a href="#" style={{ fontSize: '16px', color: colors.linkColor, fontWeight: '600', textDecoration: 'none' }}>The Future of Remote Work</a>
                        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: colors.linkSub }}>What does 2026 look like for digital nomads?</p>
                      </td>
                    </tr>
                  </table>

                  {/* Article 3 */}
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td width="20" valign="top" style={{ color: colors.accentColor, fontSize: '18px', fontWeight: 'bold' }}>3.</td>
                      <td style={{ paddingLeft: '10px' }}>
                        <a href="#" style={{ fontSize: '16px', color: colors.linkColor, fontWeight: '600', textDecoration: 'none' }}>Design Systems for Beginners</a>
                        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: colors.linkSub }}>A quick guide to scaling your UI consistently.</p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ backgroundColor: colors.footerBg, padding: '30px 40px', textAlign: 'center', color: colors.footerText, fontSize: '12px' }}>
                  <p style={{ margin: '0 0 10px 0' }}>You received this email because you signed up for our weekly newsletter.</p>
                  <p style={{ margin: '0' }}>
                    <a href="#" style={{ color: colors.footerLink, textDecoration: 'underline' }}>Unsubscribe</a> •
                    <a href="#" style={{ color: colors.footerLink, textDecoration: 'underline', marginLeft: '10px' }}>View in Browser</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default NewsletterTemplate;
