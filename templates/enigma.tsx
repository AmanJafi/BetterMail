import React from 'react';

interface EnigmaTemplateProps {
  heading?: string;
  announcement?: string;
  details?: string;
  ctaText?: string;
  ctaUrl?: string;
  logoUrl?: string;
  theme?: 'light' | 'dark';
}

export const EnigmaTemplate = ({
  heading = 'New Feature Launch',
  announcement = 'We are excited to announce the launch of our latest innovation. This new feature will revolutionize the way you interact with our platform.',
  details = 'Starting today, all users will have access to advanced analytics, real-time monitoring, and enhanced security protocols. Log in to your account to explore these new capabilities.',
  ctaText = 'Learn More',
  ctaUrl = 'https://example.com',
  logoUrl = '/logo.jpeg',
  theme = 'dark',
}: EnigmaTemplateProps) => {
  const isDark = theme === 'dark';

  const themeStyles = {
    bodyBg: isDark ? '#0f172a' : '#f8fafc',
    containerBg: isDark ? '#000000' : '#ffffff',
    borderColor: isDark ? 'rgba(6, 182, 212, 0.3)' : 'rgba(6, 182, 212, 0.2)',
    headingColor: '#06b6d4',
    textColor: isDark ? '#cbd5e1' : '#475569',
    dividerColor: '#06b6d4',
    footerBg: isDark ? '#000000' : '#f1f5f9',
    footerText: isDark ? '#6b7280' : '#94a3b8',
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
                  boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.05)',
                  border: `1px solid ${themeStyles.borderColor}`,
                  transition: 'all 0.3s ease',
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
                          textAlign: 'center',
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
                        }}>
                          {announcement}
                        </p>

                        <p style={{
                          margin: '0 0 32px 0',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: themeStyles.textColor,
                          opacity: 0.8,
                        }}>
                          {details}
                        </p>

                        {/* CTA Button */}
                        <table width="100%" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td align="center">
                                <a href={ctaUrl} style={{
                                  display: 'inline-block',
                                  padding: '16px 48px',
                                  background: themeStyles.headingColor,
                                  color: themeStyles.buttonText,
                                  textDecoration: 'none',
                                  borderRadius: '10px',
                                  fontWeight: '700',
                                  fontSize: '16px',
                                  boxShadow: `0 10px 20px rgba(6, 182, 212, ${isDark ? '0.4' : '0.2'})`,
                                  transition: 'transform 0.2s ease',
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
