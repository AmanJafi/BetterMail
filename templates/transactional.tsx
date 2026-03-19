import React from 'react';

export const TransactionalTemplate = ({
  headline = 'Payment Confirmed',
  body = 'Thank you for your purchase. Your payment has been processed successfully and a receipt is attached below for your records.',
  buttonText = 'View Invoice',
  buttonLink = 'https://example.com/invoice',
  theme = 'dark',
  primaryColor = '#10b981',
  headingAlign = 'center',
  bodyAlign = 'center',
  companyName = 'Acme',
  statusBadge = '✓ Payment Successful',
  invoiceId = '#INV-2024-001',
  invoiceDate = 'October 24, 2024',
  totalAmount = '$49.00',
  footerCompany = 'Acme Corp, Inc.',
  footerAddress = '100 Market Street, San Francisco, CA 94105',
}: any) => {
  const isDark = theme === 'dark';
  const td = (align: string) => align === 'right' ? 'right' : align === 'center' ? 'center' : 'left';

  const c = {
    outerBg:     isDark ? '#09090b' : '#f1f5f9',
    cardBg:      isDark ? '#111113' : '#ffffff',
    border:      isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
    headerBg:    isDark ? '#18181b' : '#0f172a',
    heading:     isDark ? '#f8fafc' : '#0f172a',
    bodyText:    isDark ? '#94a3b8' : '#475569',
    tableBg:     isDark ? '#0d0d0f' : '#f8fafc',
    tableBorder: isDark ? 'rgba(255,255,255,0.06)' : '#e2e8f0',
    label:       isDark ? '#52525b' : '#9ca3af',
    value:       isDark ? '#e4e4e7' : '#111827',
    totalBorder: isDark ? 'rgba(255,255,255,0.1)' : '#d1d5db',
    divider:     isDark ? 'rgba(255,255,255,0.06)' : '#e2e8f0',
    footerBg:    isDark ? '#09090b' : '#f1f5f9',
    footerText:  isDark ? '#3f3f46' : '#94a3b8',
    statusBg:    `${primaryColor}22`,
  };

  return (
    <table width="100%" cellPadding="0" cellSpacing="0" border={0}
      style={{ backgroundColor: c.outerBg, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: '48px 20px' }}>
      <tbody>
        <tr>
          <td align="center">
            <table width="580" cellPadding="0" cellSpacing="0" border={0}
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
                            <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: c.statusBg, borderRadius: '20px', fontSize: '11px', fontWeight: '600', color: primaryColor, letterSpacing: '0.5px' }}>
                              {statusBadge}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Headline */}
                <tr>
                  <td style={{ padding: '40px 40px 16px 40px' }}>
                    <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '700', color: c.heading, letterSpacing: '-0.3px', textAlign: td(headingAlign) as any }}>
                      {headline}
                    </h1>
                  </td>
                </tr>

                {/* Body */}
                <tr>
                  <td style={{ padding: '0 40px 28px 40px' }}>
                    <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.7', color: c.bodyText, textAlign: td(bodyAlign) as any }}>
                      {body}
                    </p>
                  </td>
                </tr>

                {/* Receipt table */}
                <tr>
                  <td style={{ padding: '0 40px 28px 40px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border={0}
                      style={{ backgroundColor: c.tableBg, borderRadius: '6px', border: `1px solid ${c.tableBorder}` }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: '20px 20px 0 20px' }}>
                            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                              <tbody>
                                <tr>
                                  <td style={{ fontSize: '13px', color: c.label, paddingBottom: '14px' }}>Invoice ID</td>
                                  <td align="right" style={{ fontSize: '13px', fontWeight: '600', color: c.value, paddingBottom: '14px' }}>{invoiceId}</td>
                                </tr>
                                <tr>
                                  <td style={{ fontSize: '13px', color: c.label, paddingBottom: '14px' }}>Date</td>
                                  <td align="right" style={{ fontSize: '13px', fontWeight: '600', color: c.value, paddingBottom: '14px' }}>{invoiceDate}</td>
                                </tr>
                                <tr>
                                  <td colSpan={2} style={{ height: '1px', backgroundColor: c.totalBorder }} />
                                </tr>
                                <tr>
                                  <td style={{ fontSize: '14px', fontWeight: '700', color: c.heading, paddingTop: '14px', paddingBottom: '20px' }}>Total Charged</td>
                                  <td align="right" style={{ fontSize: '22px', fontWeight: '700', color: primaryColor, paddingTop: '14px', paddingBottom: '20px' }}>{totalAmount}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* CTA */}
                <tr>
                  <td style={{ padding: '0 40px 40px 40px' }}>
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

                {/* Divider */}
                <tr>
                  <td style={{ height: '1px', backgroundColor: c.divider }} />
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{ backgroundColor: c.footerBg, padding: '22px 40px', textAlign: 'center' as const, borderRadius: '0 0 8px 8px' }}>
                    <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: c.footerText }}>
                      Questions? <a href="#" style={{ color: c.footerText, textDecoration: 'underline' }}>Contact support</a>
                    </p>
                    <p style={{ margin: '0', fontSize: '12px', color: c.footerText }}>
                      © {new Date().getFullYear()} {footerCompany} · {footerAddress}
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

export default TransactionalTemplate;
