import React from 'react';

export const TransactionalTemplate = ({
  headline = 'Payment Confirmation',
  body = 'Your payment has been successfully processed. Thank you for your business. A receipt is attached below for your records.',
  buttonText = 'View Invoice',
  buttonLink = 'https://example.com/invoice',
  theme = 'dark',
  primaryColor = '#10b981',
  headingAlign = 'center',
  bodyAlign = 'center',
  invoiceId = '#INV-2024-001',
  invoiceDate = 'October 24, 2024',
  totalAmount = '$49.00'
}: any) => {
  const isDark = theme === 'dark';

  const colors = {
    outerBg: isDark ? '#09090b' : '#ffffff',
    cardBg: isDark ? '#111113' : '#ffffff',
    cardBorder: isDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb',
    headingColor: isDark ? '#f1f5f9' : '#111827',
    textColor: isDark ? '#94a3b8' : '#374151',
    detailBg: isDark ? '#09090b' : '#f9fafb',
    detailBorder: isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6',
    labelColor: isDark ? '#64748b' : '#6b7280',
    valueColor: isDark ? '#e2e8f0' : '#111827',
    accentColor: primaryColor,
    buttonBg: isDark ? primaryColor : '#111827',
    buttonText: '#ffffff',
    footerText: isDark ? '#475569' : '#6b7280',
    legalText: isDark ? '#334155' : '#9ca3af',
    borderTop: isDark ? 'rgba(255,255,255,0.05)' : '#e5e7eb',
  };

  return (
    <div style={{ backgroundColor: colors.outerBg, fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ backgroundColor: colors.outerBg, padding: '20px 0' }}>
        <tr>
          <td align="center">
            <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ maxWidth: '500px', border: `1px solid ${colors.cardBorder}`, borderRadius: '8px', backgroundColor: colors.cardBg }}>

              {/* Logo Area */}
              <tr>
                <td style={{ padding: '30px 30px 0 30px', textAlign: headingAlign }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: colors.accentColor, display: 'inline-block' }}></div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: colors.headingColor, verticalAlign: 'super', marginLeft: '10px' }}>Acme Corp</span>
                </td>
              </tr>

              {/* Main Content */}
              <tr>
                <td style={{ padding: '30px 30px 20px 30px' }}>
                  <h1 style={{ margin: '0 0 20px 0', fontSize: '24px', color: colors.headingColor, fontWeight: 'bold', textAlign: headingAlign }}>
                    {headline}
                  </h1>
                  <p style={{ margin: '0 0 20px 0', fontSize: '16px', lineHeight: '1.5', color: colors.textColor, textAlign: bodyAlign }}>
                    {body}
                  </p>

                  {/* Order Details Box */}
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ backgroundColor: colors.detailBg, borderRadius: '6px', border: `1px solid ${colors.detailBorder}`, marginBottom: '25px' }}>
                    <tr>
                      <td style={{ padding: '15px' }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td style={{ fontSize: '14px', color: colors.labelColor, paddingBottom: '5px' }}>Invoice ID</td>
                            <td align="right" style={{ fontSize: '14px', color: colors.valueColor, fontWeight: '500' }}>{invoiceId}</td>
                          </tr>
                          <tr>
                            <td style={{ fontSize: '14px', color: colors.labelColor, paddingBottom: '5px' }}>Date</td>
                            <td align="right" style={{ fontSize: '14px', color: colors.valueColor, fontWeight: '500' }}>{invoiceDate}</td>
                          </tr>
                          <tr>
                            <td style={{ fontSize: '14px', color: colors.labelColor, paddingTop: '10px', borderTop: `1px solid ${colors.borderTop}` }}>Total Amount</td>
                            <td align="right" style={{ fontSize: '18px', color: colors.accentColor, fontWeight: 'bold', paddingTop: '10px', borderTop: `1px solid ${colors.borderTop}` }}>{totalAmount}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  {/* Button Section */}
                  <div style={{ textAlign: bodyAlign as any, width: '100%' }}>
                    <a href={buttonLink} style={{
                      display: 'inline-block',
                      padding: '14px 24px',
                      background: colors.buttonBg,
                      color: colors.buttonText,
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}>
                      {buttonText}
                    </a>
                  </div>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ padding: '0 30px 30px 30px', textAlign: 'center' }}>
                  <p style={{ margin: '0', fontSize: '14px', color: colors.footerText }}>
                    Need help? <a href="#" style={{ color: colors.accentColor, textDecoration: 'none' }}>Contact Support</a>
                  </p>
                </td>
              </tr>

            </table>

            {/* Can-Spam / Legal */}
            <p style={{ margin: '20px 0 0 0', fontSize: '12px', color: colors.legalText, textAlign: 'center' }}>
              123 Main Street, San Francisco, CA 94105<br />
              &copy; 2024 Acme Corp Inc.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TransactionalTemplate;
