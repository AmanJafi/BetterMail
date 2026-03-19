import React from 'react';

export default function AnnouncementEmail({
  headline = 'Introducing Our Latest Platform Update',
  body = 'We\'ve shipped a significant update to our platform. This release includes performance improvements, new integrations, and an overhauled reporting dashboard designed around your feedback.',
  buttonText = 'Read the Release Notes',
  buttonLink = '#',
  primaryColor = '#6366f1',
  theme = 'dark',
  headingAlign = 'center',
  bodyAlign = 'center',
  companyName = 'Acme',
  headerTag = 'Product Update',
  calloutText = 'This update is available to all users effective immediately. No action is required on your end.',
  footerCompany = 'Acme Corp, Inc.',
  footerAddress = '100 Market Street, San Francisco, CA 94105',
}: any) {
  const isDark = theme === 'dark';
  const td = (align: string) => align === 'right' ? 'right' : align === 'center' ? 'center' : 'left';

  const c = {
    outerBg:    isDark ? '#09090b' : '#f1f5f9',
    cardBg:     isDark ? '#111113' : '#ffffff',
    border:     isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
    headerBg:   isDark ? '#18181b' : '#0f172a',
    heading:    isDark ? '#f8fafc' : '#0f172a',
    bodyText:   isDark ? '#94a3b8' : '#475569',
    divider:    isDark ? 'rgba(255,255,255,0.06)' : '#e2e8f0',
    highlight:  isDark ? 'rgba(99,102,241,0.08)' : '#eef2ff',
    hlBorder:   isDark ? 'rgba(99,102,241,0.2)' : '#c7d2fe',
    hlText:     isDark ? '#a5b4fc' : '#4338ca',
    footerBg:   isDark ? '#09090b' : '#f1f5f9',
    footerText: isDark ? '#3f3f46' : '#94a3b8',
  };

  return (
    <table width="100%" cellPadding="0" cellSpacing="0" border={0}
      style={{ backgroundColor: c.outerBg, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: '48px 20px' }}>
      <tbody>
        <tr>
          <td align="center">
            <table width="600" cellPadding="0" cellSpacing="0" border={0}
              style={{ backgroundColor: c.cardBg, borderRadius: '8px', border: `1px solid ${c.border}` }}>
              <tbody>

                {/* Header */}
                <tr>
                  <td style={{ backgroundColor: c.headerBg, padding: '24px 40px', borderRadius: '8px 8px 0 0' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                      <tbody>
                        <tr>
                          <td>
                            <span style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.3px' }}>
                              {companyName}<span style={{ color: primaryColor }}>.</span>
                            </span>
                          </td>
                          <td align="right">
                            <span style={{ fontSize: '11px', fontWeight: '600', color: primaryColor, letterSpacing: '1.5px', textTransform: 'uppercase' as const }}>
                              {headerTag}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Headline label */}
                <tr>
                  <td style={{ padding: '36px 48px 0 48px', textAlign: td(headingAlign) as any }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: primaryColor, letterSpacing: '1.5px', textTransform: 'uppercase' as const }}>
                      Announcement
                    </span>
                  </td>
                </tr>

                {/* Headline */}
                <tr>
                  <td style={{ padding: '10px 48px 0 48px' }}>
                    <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '700', color: c.heading, lineHeight: '1.35', letterSpacing: '-0.3px', textAlign: td(headingAlign) as any }}>
                      {headline}
                    </h1>
                  </td>
                </tr>

                {/* Body */}
                <tr>
                  <td style={{ padding: '20px 48px 0 48px' }}>
                    <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.75', color: c.bodyText, textAlign: td(bodyAlign) as any }}>
                      {body}
                    </p>
                  </td>
                </tr>

                {/* Callout box — table-based, no div */}
                <tr>
                  <td style={{ padding: '24px 48px 0 48px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border={0}
                      style={{ backgroundColor: c.highlight, border: `1px solid ${c.hlBorder}`, borderRadius: '6px' }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: '14px 18px' }}>
                            <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.6', color: c.hlText, fontWeight: '500', textAlign: td(bodyAlign) as any }}>
                              {calloutText}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* CTA */}
                <tr>
                  <td style={{ padding: '28px 48px 40px 48px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                      <tbody>
                        <tr>
                          <td align={td(bodyAlign)}>
                            <a href={buttonLink} style={{ display: 'inline-block', padding: '13px 26px', backgroundColor: primaryColor, color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '14px' }}>
                              {buttonText}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Divider row */}
                <tr>
                  <td style={{ height: '1px', backgroundColor: c.divider }} />
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{ backgroundColor: c.footerBg, padding: '22px 48px', textAlign: 'center' as const, borderRadius: '0 0 8px 8px' }}>
                    <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: c.footerText }}>
                      © {new Date().getFullYear()} {footerCompany} · All rights reserved.
                    </p>
                    <p style={{ margin: '0', fontSize: '12px', color: c.footerText }}>
                      {footerAddress} ·{' '}
                      <a href="#" style={{ color: c.footerText, textDecoration: 'underline' }}>Unsubscribe</a>
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
