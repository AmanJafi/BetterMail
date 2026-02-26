
import React from 'react';

export default function WelcomeEmail({
  headline = "Welcome to Our Service!",
  body = "We are excited to have you on board. Explore our features and get started today.",
  buttonText = "Get Started",
  buttonLink = "#",
  primaryColor = "#0070f3",
  theme = "dark"
}: any) {
  const isDark = theme === 'dark';

  const styles = {
    container: {
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      backgroundColor: isDark ? "#0f172a" : "#f5f5f5",
      padding: "40px 20px",
      textAlign: "center" as const,
    },
    card: {
      backgroundColor: isDark ? "#1e293b" : "#ffffff",
      padding: "40px",
      borderRadius: "12px",
      maxWidth: "600px",
      margin: "0 auto",
      boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.4)" : "0 2px 4px rgba(0,0,0,0.1)",
      color: isDark ? "#e2e8f0" : "#333333",
      border: isDark ? "1px solid rgba(255,255,255,0.05)" : "none",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold" as const,
      marginBottom: "20px",
      color: isDark ? "#f1f5f9" : "#111111",
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "30px",
      color: isDark ? "#94a3b8" : "#333333",
    },
    button: {
      display: "inline-block" as const,
      backgroundColor: primaryColor,
      color: "#ffffff",
      padding: "12px 24px",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: "bold" as const,
      fontSize: "16px",
    },
    footer: {
      marginTop: "30px",
      fontSize: "12px",
      color: isDark ? "#475569" : "#888888",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>{headline}</h1>
        <p style={styles.text}>{body}</p>
        <a href={buttonLink} style={styles.button}>{buttonText}</a>
        <div style={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
