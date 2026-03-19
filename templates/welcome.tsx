import React from 'react';

export default function WelcomeTemplate({
  headline = 'Welcome to Acme Corp',
  body = 'Your account is ready. We\'re excited to have you on board. Explore your dashboard to discover tools built to help your team move faster.',
  buttonText = 'Get Started',
  buttonLink = 'https://example.com',
  theme = 'dark',
  primaryColor = '#06b6d4',
  headingAlign = 'center',
  bodyAlign = 'center',
  companyName = 'Acme',
  tagline = 'Welcome',
  footerCompany = 'Acme Corp, Inc.',
  footerAddress = '100 Market Street, Suite 300, San Francisco, CA 94105',
}: any) {
  const isDark = theme === 'dark';

  const c = {
    outerBg:    isDark ? '#09090b' : '#f1f5f9',
    cardBg:     isDark ? '#111113' : '#ffffff',
    border:     isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
    logoBar:    isDark ? '#18181b' : '#f8fafc',
    logoBorder: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
    heading:    isDark ? '#f8fafc' : '#0f172a',
    bodyText:   isDark ? '#94a3b8' : '#475569',
    divider:    isDark ? 'rgba(255,255,255,0.06)' : '#e2e8f0',
    footerBg:   isDark ? '#09090b' : '#f1f5f9',
    footerText: isDark ? '#3f3f46' : '#94a3b8',
  };

  const td = (align: string) =>
    align === 'right' ? 'right' : align === 'center' ? 'center' : 'left';

  return (
    <table width="100%" cellPadding="0" cellSpacing="0" border={0}
      style={{ backgroundColor: c.outerBg, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: '48px 20px' }}>
      <tbody>
        <tr>
          <td align="center">
            <table width="600" cellPadding="0" cellSpacing="0" border={0}
              style={{ backgroundColor: c.cardBg, borderRadius: '8px', border: `1px solid ${c.border}` }}>
              <tbody>

                {/* Top accent bar */}
                <tr>
                  <td style={{ height: '4px', backgroundColor: primaryColor, borderRadius: '8px 8px 0 0' }} />
                </tr>

                {/* Logo / header row */}
                <tr>
                  <td style={{ backgroundColor: c.logoBar, padding: '22px 40px', borderBottom: `1px solid ${c.logoBorder}` }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                      <tbody>
                        <tr>
                          <td>
                            <span style={{ fontSize: '18px', fontWeight: 'bold', color: c.heading, letterSpacing: '-0.3px' }}>
                              {companyName}<span style={{ color: primaryColor }}>.</span>
                            </span>
                          </td>
                          <td align="right">
                            <span style={{ fontSize: '11px', color: c.bodyText, letterSpacing: '1.5px', textTransform: 'uppercase' as const }}>
                              {tagline}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Headline */}
                <tr>
                  <td style={{ padding: '44px 48px 0 48px' }}>
                    <h1 style={{ margin: '0', fontSize: '26px', fontWeight: '700', color: c.heading, lineHeight: '1.3', letterSpacing: '-0.3px', textAlign: headingAlign as any }}>
                      {headline}
                    </h1>
                  </td>
                </tr>

                {/* Body */}
                <tr>
                  <td style={{ padding: '20px 48px 0 48px' }}>
                    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.7', color: c.bodyText, textAlign: bodyAlign as any }}>
                      {body}
                    </p>
                  </td>
                </tr>

                {/* CTA button */}
                <tr>
                  <td style={{ padding: '32px 48px 44px 48px' }}>
                    <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                      <tbody>
                        <tr>
                          <td align={td(bodyAlign)}>
                            <a href={buttonLink} style={{ display: 'inline-block', padding: '14px 28px', backgroundColor: primaryColor, color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '15px' }}>
                              {buttonText}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Divider */}
                <tr>
                  <td style={{ height: '1px', backgroundColor: c.divider, padding: '0 48px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                      <tbody><tr><td style={{ height: '1px', backgroundColor: c.divider }} /></tr></tbody>
                    </table>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{ backgroundColor: c.footerBg, padding: '22px 48px', textAlign: 'center' as const, borderRadius: '0 0 8px 8px' }}>
                    <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: c.footerText }}>
                      © {new Date().getFullYear()} {footerCompany}. All rights reserved.
                    </p>
                    <p style={{ margin: '0', fontSize: '12px', color: c.footerText }}>
                      {footerAddress}
                    </p>
                  </td>
                </tr>

              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
