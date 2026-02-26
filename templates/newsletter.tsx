import React from 'react';

export const NewsletterTemplate = ({
  headline = 'Weekly Digest',
  body = 'Here are the top stories this week. We have curated a list of our best articles just for you. Read on to stay informed about the latest industry trends and insights.',
  buttonText = 'Read Full Issue',
  buttonLink = 'https://example.com/newsletter'
}: any) => {
  return (
    <div style={{ backgroundColor: '#f3f4f6', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#f3f4f6', padding: '40px 0' }}>
        <tr>
          <td align="center">
            <table width="600" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>

              {/* Header */}
              <tr>
                <td style={{ backgroundColor: '#4f46e5', padding: '40px 20px', textAlign: 'center' }}>
                  <h1 style={{ margin: '0', fontSize: '28px', color: '#ffffff', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                    The Weekly Insider
                  </h1>
                  <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#e0e7ff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    ISSUE #42
                  </p>
                </td>
              </tr>

              {/* Main Feature */}
              <tr>
                <td style={{ padding: '40px 40px 20px 40px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    FEATURED STORY
                  </span>
                  <h2 style={{ margin: '10px 0 15px 0', fontSize: '24px', color: '#111827', fontWeight: 'bold', lineHeight: '1.3' }}>
                    {headline}
                  </h2>
                  <p style={{ margin: '0 0 25px 0', fontSize: '16px', lineHeight: '1.6', color: '#4b5563' }}>
                    {body}
                  </p>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align="left">
                        <a href={buttonLink} style={{ display: 'inline-block', padding: '12px 24px', background: '#4f46e5', color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '14px' }}>
                          {buttonText} →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Secondary Stories / Separator */}
              <tr>
                <td style={{ padding: '0 40px' }}>
                  <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '20px 0' }}></div>
                </td>
              </tr>

              {/* Quick Links Section */}
              <tr>
                <td style={{ padding: '20px 40px 40px 40px' }}>
                  <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#111827', fontWeight: 'bold' }}>
                    In Case You Missed It
                  </h3>

                  {/* Article 1 */}
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ marginBottom: '20px' }}>
                    <tr>
                      <td width="20" valign="top" style={{ color: '#4f46e5', fontSize: '18px', fontWeight: 'bold' }}>1.</td>
                      <td style={{ paddingLeft: '10px' }}>
                        <a href="#" style={{ fontSize: '16px', color: '#1f2937', fontWeight: '600', textDecoration: 'none' }}>Five Tips for Better Productivity</a>
                        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#6b7280' }}>Boost your efficiency with these simple hacks.</p>
                      </td>
                    </tr>
                  </table>

                  {/* Article 2 */}
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ marginBottom: '20px' }}>
                    <tr>
                      <td width="20" valign="top" style={{ color: '#4f46e5', fontSize: '18px', fontWeight: 'bold' }}>2.</td>
                      <td style={{ paddingLeft: '10px' }}>
                        <a href="#" style={{ fontSize: '16px', color: '#1f2937', fontWeight: '600', textDecoration: 'none' }}>The Future of Remote Work</a>
                        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#6b7280' }}>What does 2026 look like for digital nomads?</p>
                      </td>
                    </tr>
                  </table>

                  {/* Article 3 */}
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td width="20" valign="top" style={{ color: '#4f46e5', fontSize: '18px', fontWeight: 'bold' }}>3.</td>
                      <td style={{ paddingLeft: '10px' }}>
                        <a href="#" style={{ fontSize: '16px', color: '#1f2937', fontWeight: '600', textDecoration: 'none' }}>Design Systems for Beginners</a>
                        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#6b7280' }}>A quick guide to scaling your UI consistently.</p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ backgroundColor: '#1f2937', padding: '30px 40px', textAlign: 'center', color: '#9ca3af', fontSize: '12px' }}>
                  <p style={{ margin: '0 0 10px 0' }}>You received this email because you signed up for our weekly newsletter.</p>
                  <p style={{ margin: '0' }}>
                    <a href="#" style={{ color: '#d1d5db', textDecoration: 'underline' }}>Unsubscribe</a> •
                    <a href="#" style={{ color: '#d1d5db', textDecoration: 'underline', marginLeft: '10px' }}>View in Browser</a>
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
