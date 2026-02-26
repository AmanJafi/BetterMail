import React from 'react';

export const NewsletterTemplate = ({
  headline = 'Weekly Digest',
  body = 'Here are the top stories this week. We have curated a list of our best articles just for you. Read on to stay informed about the latest industry trends and insights.',
  buttonText = 'Read Full Issue',
  buttonLink = 'https://example.com/newsletter',
  theme = 'dark',
  primaryColor = '#4f46e5',
  mainTitle = 'The Weekly Insider',
  issueInfo = 'ISSUE #42',
  headingAlign = 'center',
  bodyAlign = 'center',
  extraSectionTitle = 'In Case You Missed It',
  extraContent = 'Five Tips for Better Productivity\nBoost your efficiency with these simple hacks.\n\nThe Future of Remote Work\nWhat does 2026 look like for digital nomads?'
}: any) => {
  const isDark = theme === 'dark';

  const colors = {
    outerBg: isDark ? '#09090b' : '#f3f4f6',
    cardBg: isDark ? '#111113' : '#ffffff',
    headerBg: isDark ? '#1a1a1e' : primaryColor,
    headerText: '#ffffff',
    headerSub: isDark ? '#71717a' : '#e0e7ff',
    accentColor: primaryColor,
    headingColor: isDark ? '#f1f5f9' : '#111827',
    textColor: isDark ? '#94a3b8' : '#4b5563',
    linkColor: isDark ? '#e2e8f0' : '#1f2937',
    linkSub: isDark ? '#64748b' : '#6b7280',
    dividerColor: isDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb',
    footerBg: isDark ? '#09090b' : '#1f2937',
    footerText: isDark ? '#475569' : '#9ca3af',
    footerLink: isDark ? '#94a3b8' : '#d1d5db',
    shadow: isDark ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 6px rgba(0,0,0,0.05)',
  };

  // Split extraContent by newlines and filter out empty strings
  const contentItems = extraContent ? extraContent.split('\n').filter((item: string) => item.trim() !== '') : [];

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
                    {mainTitle}
                  </h1>
                  <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: colors.headerSub, textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {issueInfo}
                  </p>
                </td>
              </tr>

              {/* Main Feature */}
              <tr>
                <td style={{ padding: '40px 40px 20px 40px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: colors.accentColor, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', textAlign: headingAlign }}>
                    FEATURED STORY
                  </span>
                  <h2 style={{ margin: '10px 0 15px 0', fontSize: '24px', color: colors.headingColor, fontWeight: 'bold', lineHeight: '1.3', textAlign: headingAlign }}>
                    {headline}
                  </h2>
                  <div style={{ margin: '0 0 25px 0', fontSize: '16px', lineHeight: '1.6', color: colors.textColor, textAlign: bodyAlign }}>
                    {body}
                  </div>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td align={bodyAlign === 'center' ? 'center' : bodyAlign === 'right' ? 'right' : 'left'}>
                        <a href={buttonLink} style={{ display: 'inline-block', padding: '12px 24px', background: colors.accentColor, color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '14px' }}>
                          {buttonText} →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Extra Content Section */}
              {contentItems.length > 0 && (
                <>
                  <tr>
                    <td style={{ padding: '0 40px' }}>
                      <div style={{ height: '1px', backgroundColor: colors.dividerColor, margin: '10px 0' }}></div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '20px 40px 40px 40px' }}>
                      <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: colors.headingColor, fontWeight: 'bold', textAlign: bodyAlign }}>
                        {extraSectionTitle}
                      </h3>

                      <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                        {contentItems.map((item: string, index: number) => (
                          <tr key={index}>
                            <td style={{ paddingBottom: '15px' }}>
                              <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                                <tr>
                                  <td width="24" valign="top" style={{ color: colors.accentColor, fontSize: '16px', fontWeight: 'bold', textAlign: 'left' }}>
                                    {index + 1}.
                                  </td>
                                  <td style={{
                                    fontSize: '15px',
                                    lineHeight: '1.5',
                                    color: colors.textColor,
                                    textAlign: 'left'
                                  }}>
                                    {item}
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        ))}
                      </table>
                    </td>
                  </tr>
                </>
              )}

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
