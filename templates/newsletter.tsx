import React from 'react';

export const NewsletterTemplate = ({
  headline = 'Insights & Trends for Q1 2025',
  body = 'In this edition we cover the shift toward AI-augmented workflows, key product metrics to track this quarter, and practical advice from operators who\'ve scaled past 100 employees.',
  buttonText = 'Read Full Issue',
  buttonLink = 'https://example.com/newsletter',
  theme = 'dark',
  primaryColor = '#4f46e5',
  mainTitle = 'The Brief',
  issueInfo = 'ISSUE #42 · MARCH 2025',
  headerBadge = 'Newsletter',
  headingAlign = 'center',
  bodyAlign = 'center',
  extraSectionTitle = 'Also In This Issue',
  extraContent = 'How to measure team productivity without micromanaging\nThe rise of vertical SaaS: opportunities and risks\nQ1 benchmarks: what good looks like for growth-stage startups',
  footerNote = 'You are receiving this because you subscribed.',
}: any) => {
  const isDark = theme === 'dark';
  const td = (align: string) => align === 'right' ? 'right' : align === 'center' ? 'center' : 'left';

  const c = {
    outerBg:    isDark ? '#09090b' : '#f1f5f9',
    cardBg:     isDark ? '#111113' : '#ffffff',
    border:     isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
    headerBg:   isDark ? '#18181b' : '#0f172a',
    headerText: '#ffffff',
    issuePill:  isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.15)',
    issueText:  isDark ? '#94a3b8' : '#cbd5e1',
    heading:    isDark ? '#f8fafc' : '#0f172a',
    bodyText:   isDark ? '#94a3b8' : '#475569',
    itemColor:  isDark ? '#cbd5e1' : '#374151',
    divider:    isDark ? 'rgba(255,255,255,0.06)' : '#e2e8f0',
    footerBg:   isDark ? '#09090b' : '#f1f5f9',
    footerText: isDark ? '#3f3f46' : '#94a3b8',
    footerLink: isDark ? '#52525b' : '#9ca3af',
  };

  const items = extraContent
    ? extraContent.split('\n').filter((s: string) => s.trim() !== '')
    : [];

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
                  <td style={{ backgroundColor: c.headerBg, padding: '32px 40px', borderRadius: '8px 8px 0 0' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                      <tbody>
                        <tr>
                          <td>
                            <p style={{ margin: '0 0 4px 0', fontSize: '26px', fontWeight: '800', color: c.headerText, letterSpacing: '-0.5px' }}>
                              {mainTitle}
                            </p>
                            <p style={{ margin: '0', fontSize: '11px', color: c.issueText, letterSpacing: '1.5px', textTransform: 'uppercase' as const }}>
                              {issueInfo}
                            </p>
                          </td>
                          <td align="right" valign="bottom">
                            <span style={{ display: 'inline-block', padding: '5px 12px', backgroundColor: c.issuePill, borderRadius: '20px', fontSize: '11px', fontWeight: '600', color: '#ffffff', letterSpacing: '0.5px' }}>
                              {headerBadge}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Feature label */}
                <tr>
                  <td style={{ padding: '32px 40px 0 40px', textAlign: td(headingAlign) as any }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: primaryColor, letterSpacing: '1.5px', textTransform: 'uppercase' as const }}>
                      Feature Story
                    </span>
                  </td>
                </tr>

                {/* Headline */}
                <tr>
                  <td style={{ padding: '10px 40px 0 40px' }}>
                    <h1 style={{ margin: '0', fontSize: '23px', fontWeight: '700', color: c.heading, lineHeight: '1.35', letterSpacing: '-0.2px', textAlign: td(headingAlign) as any }}>
                      {headline}
                    </h1>
                  </td>
                </tr>

                {/* Body */}
                <tr>
                  <td style={{ padding: '16px 40px 0 40px' }}>
                    <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.75', color: c.bodyText, textAlign: td(bodyAlign) as any }}>
                      {body}
                    </p>
                  </td>
                </tr>

                {/* CTA */}
                <tr>
                  <td style={{ padding: '24px 40px 36px 40px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                      <tbody>
                        <tr>
                          <td align={td(bodyAlign)}>
                            <a href={buttonLink} style={{ display: 'inline-block', padding: '12px 22px', backgroundColor: primaryColor, color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '14px' }}>
                              {buttonText} →
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Secondary section */}
                {items.length > 0 && (
                  <>
                    <tr>
                      <td style={{ height: '1px', backgroundColor: c.divider }} />
                    </tr>
                    <tr>
                      <td style={{ padding: '28px 40px 36px 40px' }}>
                        <p style={{ margin: '0 0 16px 0', fontSize: '11px', fontWeight: '700', color: primaryColor, letterSpacing: '1.5px', textTransform: 'uppercase' as const, textAlign: td(headingAlign) as any }}>
                          {extraSectionTitle}
                        </p>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tbody>
                            {items.map((item: string, i: number) => (
                              <tr key={i}>
                                <td valign="top" width="28" style={{ fontSize: '13px', fontWeight: '700', color: primaryColor, paddingBottom: '14px', paddingTop: '1px' }}>
                                  {String(i + 1).padStart(2, '0')}.
                                </td>
                                <td style={{ fontSize: '14px', lineHeight: '1.6', color: c.itemColor, paddingBottom: '14px' }}>
                                  {item}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </>
                )}

                {/* Footer */}
                <tr>
                  <td style={{ backgroundColor: c.footerBg, padding: '22px 40px', textAlign: 'center' as const, borderTop: `1px solid ${c.divider}`, borderRadius: '0 0 8px 8px' }}>
                    <p style={{ margin: '0 0 6px 0', fontSize: '12px', color: c.footerText }}>
                      {footerNote}
                    </p>
                    <p style={{ margin: '0', fontSize: '12px', color: c.footerText }}>
                      <a href="#" style={{ color: c.footerLink, textDecoration: 'underline' }}>Unsubscribe</a>
                      {' · '}
                      <a href="#" style={{ color: c.footerLink, textDecoration: 'underline' }}>View in Browser</a>
                      {' · '}
                      <a href="#" style={{ color: c.footerLink, textDecoration: 'underline' }}>Manage Preferences</a>
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
};

export default NewsletterTemplate;
