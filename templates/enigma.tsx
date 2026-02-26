import React from 'react';

interface EnigmaTemplateProps {
  heading?: string;
  announcement?: string;
  details?: string;
  ctaText?: string;
  ctaUrl?: string;
  logoUrl?: string;
  theme?: 'light' | 'dark';
  primaryColor?: string;
  headingAlign?: 'left' | 'center' | 'right';
  bodyAlign?: 'left' | 'center' | 'right';
}

export const EnigmaTemplate = ({
  heading = 'New Feature Launch',
  announcement = 'We are excited to announce the launch of our latest innovation. This new feature will revolutionize the way you interact with our platform.',
  details = 'Starting today, all users will have access to advanced analytics, real-time monitoring, and enhanced security protocols. Log in to your account to explore these new capabilities.',
  ctaText = 'Learn More',
  ctaUrl = 'https://example.com',
  logoUrl = '/logo.jpeg',
  theme = 'dark',
  primaryColor,
  headingAlign = 'center',
  bodyAlign = 'left',
}: EnigmaTemplateProps) => {
  const isDark = theme === 'dark';

  // Use primaryColor prop if provided, otherwise fallback to theme defaults
  const accent = primaryColor || (isDark ? '#ffffff' : '#000000');

  const themeStyles = {
    bodyBg: isDark ? '#09090b' : '#f8fafc',
    containerBg: isDark ? '#111113' : '#ffffff',
    borderColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
    headingColor: accent,
    textColor: isDark ? '#a1a1aa' : '#475569',
    dividerColor: isDark ? '#27272a' : '#e2e8f0',
    footerBg: isDark ? '#0c0c0e' : '#f1f5f9',
    footerText: isDark ? '#52525b' : '#94a3b8',
    buttonText: isDark ? '#000000' : '#ffffff',
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{
        margin: '0',
        padding: '0',
        backgroundColor: themeStyles.bodyBg,
        fontFamily: "'Inter', Arial, sans-serif",
      }}>
        <table width="100%" cellPadding="0" cellSpacing="0" style={{
          backgroundColor: themeStyles.bodyBg,
          padding: '20px 0',
        }}>
          <tbody>
            <tr>
              <td align="center">
                <table width="600" cellPadding="0" cellSpacing="0" style={{
                  backgroundColor: themeStyles.containerBg,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: `1px solid ${themeStyles.borderColor}`,
                }}>
                  <tbody>
                    {/* Header with Logo */}
                    <tr>
                      <td style={{
                        padding: '40px 20px',
                        textAlign: 'center',
                      }}>
                        <img
                          src={logoUrl}
                          alt="Enigma Logo"
                          style={{
                            maxWidth: '180px',
                            height: 'auto',
                            display: 'block',
                            margin: '0 auto',
                          }}
                        />
                        <div style={{
                          height: '2px',
                          background: `linear-gradient(to right, transparent, ${themeStyles.dividerColor}, transparent)`,
                          marginTop: '30px',
                        }}></div>
                      </td>
                    </tr>

                    {/* Main Content */}
                    <tr>
                      <td style={{
                        padding: '20px 48px 40px 48px',
                      }}>
                        <h1 style={{
                          margin: '0 0 24px 0',
                          fontSize: '32px',
                          color: themeStyles.headingColor,
                          textAlign: headingAlign,
                          fontWeight: '800',
                          letterSpacing: '-0.025em',
                        }}>
                          {heading}
                        </h1>

                        <p style={{
                          margin: '0 0 20px 0',
                          fontSize: '18px',
                          lineHeight: '1.6',
                          color: themeStyles.textColor,
                          textAlign: bodyAlign,
                        }}>
                          {announcement}
                        </p>

                        <p style={{
                          margin: '0 0 32px 0',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: themeStyles.textColor,
                          textAlign: bodyAlign,
                        }}>
                          {details}
                        </p>

                        {/* CTA Button */}
                        <table width="100%" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td align={bodyAlign === 'center' ? 'center' : bodyAlign === 'right' ? 'right' : 'left'}>
                                <a href={ctaUrl} style={{
                                  display: 'inline-block',
                                  padding: '16px 48px',
                                  background: themeStyles.headingColor,
                                  color: themeStyles.buttonText,
                                  textDecoration: 'none',
                                  borderRadius: '10px',
                                  fontWeight: '700',
                                  fontSize: '16px',
                                }}>
                                  {ctaText}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td style={{
                        backgroundColor: themeStyles.footerBg,
                        padding: '40px 48px',
                        borderTop: `1px solid ${themeStyles.borderColor}`,
                      }}>
                        <table width="100%" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td align="center">
                                <p style={{
                                  margin: '0 0 8px 0',
                                  fontSize: '14px',
                                  color: themeStyles.headingColor,
                                  fontWeight: '700',
                                  letterSpacing: '0.1em',
                                  textTransform: 'uppercase',
                                }}>Enigma</p>
                                <p style={{
                                  margin: '0 0 24px 0',
                                  fontSize: '13px',
                                  color: themeStyles.footerText,
                                }}>Decoding the future of technology</p>

                                <div style={{
                                  height: '1px',
                                  background: `linear-gradient(to right, transparent, ${themeStyles.borderColor}, transparent)`,
                                  margin: '0 0 24px 0',
                                }}></div>

                                <p style={{
                                  margin: '0',
                                  fontSize: '11px',
                                  color: themeStyles.footerText,
                                  textAlign: 'center',
                                  lineHeight: '1.8',
                                }}>
                                  © 2024 Enigma. All rights reserved.<br />
                                  <a href="#" style={{ color: themeStyles.headingColor, textDecoration: 'none' }}>Unsubscribe</a> |{' '}
                                  <a href="#" style={{ color: themeStyles.headingColor, textDecoration: 'none' }}>Privacy Policy</a>
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
    </html>
  );
};

export default EnigmaTemplate;
