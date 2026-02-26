
import React from 'react';

export default function WelcomeEmail({
  headline = "Welcome to Our Service!",
  body = "We are excited to have you on board. Explore our features and get started today.",
  buttonText = "Get Started",
  buttonLink = "#",
  primaryColor = "#0070f3",
  backgroundColor = "#ffffff",
  textColor = "#333333"
}) {
  const styles = {
    container: {
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      padding: "40px 20px",
      textAlign: "center" as const,
    },
    card: {
      backgroundColor: backgroundColor,
      padding: "40px",
      borderRadius: "8px",
      maxWidth: "600px",
      margin: "0 auto",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      color: textColor,
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#111111",
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "30px",
      color: textColor,
    },
    button: {
      display: "inline-block",
      backgroundColor: primaryColor,
      color: "#ffffff",
      padding: "12px 24px",
      borderRadius: "4px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "16px",
    },
    footer: {
      marginTop: "30px",
      fontSize: "12px",
      color: "#888888",
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
