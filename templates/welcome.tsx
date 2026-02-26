import React from 'react';

export const WelcomeTemplate = ({
  headline = 'Welcome!',
  body = 'Check out our latest updates. We are thrilled to have you as part of our community. Explore your dashboard to get started with our amazing features.',
  buttonText = 'Get Started',
  buttonLink = 'https://example.com',
  theme = 'dark',
  primaryColor = '#06b6d4',
  headingAlign = 'center',
  bodyAlign = 'center'
}: any) => {
  const isDark = theme === 'dark';

  const styles = {
    container: {
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      backgroundColor: isDark ? "#09090b" : "#f5f5f5",
      padding: "40px 20px",
      textAlign: "center" as const,
    },
    card: {
      backgroundColor: isDark ? "#111113" : "#ffffff",
      padding: "40px",
      borderRadius: "12px",
      maxWidth: "600px",
      margin: "0 auto",
      boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.5)" : "0 4px 6px rgba(0,0,0,0.05)",
    },
    heading: {
      color: isDark ? "#ffffff" : "#333333",
      fontSize: "32px",
      marginBottom: "20px",
      textAlign: headingAlign as any,
    },
    text: {
      color: isDark ? "#a1a1aa" : "#666666",
      fontSize: "18px",
      lineHeight: "1.6",
      marginBottom: "30px",
      textAlign: bodyAlign as any,
    },
    button: {
      backgroundColor: primaryColor,
      color: "#ffffff",
      padding: "15px 30px",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "bold",
      display: "inline-block",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>{headline}</h1>
        <p style={styles.text}>{body}</p>
        <div style={{ textAlign: bodyAlign as any }}>
          <a href={buttonLink} style={styles.button}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTemplate;
