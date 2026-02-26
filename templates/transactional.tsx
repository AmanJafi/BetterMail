import React from 'react';

export const TransactionalTemplate = ({
  headline = 'Payment Confirmation',
  body = 'Your payment of $49.00 has been successfully processed. Thank you for your business. A receipt is attached below for your records.',
  buttonText = 'View Invoice',
  buttonLink = 'https://example.com/invoice'
}: any) => {
  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#ffffff', padding: '20px 0' }}>
        <tr>
          <td align="center">
            <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ maxWidth: '500px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>

              {/* Logo Area */}
              <tr>
                <td style={{ padding: '30px 30px 0 30px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#10b981', display: 'inline-block' }}></div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', verticalAlign: 'super', marginLeft: '10px' }}>Acme Corp</span>
                </td>
              </tr>

              {/* Main Content */}
              <tr>
                <td style={{ padding: '30px 30px 20px 30px' }}>
                  <h1 style={{ margin: '0 0 20px 0', fontSize: '24px', color: '#111827', fontWeight: 'bold' }}>
                    {headline}
                  </h1>
                  <p style={{ margin: '0 0 20px 0', fontSize: '16px', lineHeight: '1.5', color: '#374151' }}>
                    {body}
                  </p>

                  {/* Order Details Box */}
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#f9fafb', borderRadius: '6px', border: '1px solid #f3f4f6', marginBottom: '25px' }}>
                    <tr>
                      <td style={{ padding: '15px' }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                          <tr>
                            <td style={{ fontSize: '14px', color: '#6b7280', paddingBottom: '5px' }}>Invoice ID</td>
                            <td align="right" style={{ fontSize: '14px', color: '#111827', fontWeight: '500' }}>#INV-2024-001</td>
                          </tr>
                          <tr>
                            <td style={{ fontSize: '14px', color: '#6b7280', paddingBottom: '5px' }}>Date</td>
                            <td align="right" style={{ fontSize: '14px', color: '#111827', fontWeight: '500' }}>October 24, 2024</td>
                          </tr>
                          <tr>
                            <td style={{ fontSize: '14px', color: '#6b7280', paddingTop: '10px', borderTop: '1px solid #e5e7eb' }}>Total Amount</td>
                            <td align="right" style={{ fontSize: '18px', color: '#10b981', fontWeight: 'bold', paddingTop: '10px', borderTop: '1px solid #e5e7eb' }}>$49.00</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align="center">
                        <a href={buttonLink} style={{ display: 'block', width: '100%', boxSizing: 'border-box', textAlign: 'center', padding: '14px 20px', background: '#111827', color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '16px' }}>
                          {buttonText}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ padding: '0 30px 30px 30px', textAlign: 'center' }}>
                  <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
                    Need help? <a href="#" style={{ color: '#10b981', textDecoration: 'none' }}>Contact Support</a>
                  </p>
                </td>
              </tr>

            </table>

            {/* Can-Spam / Legal */}
            <p style={{ margin: '20px 0 0 0', fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
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
