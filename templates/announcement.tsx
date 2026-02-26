
import React from 'react';

export default function AnnouncementEmail({
  headline = "Big News Inside!",
  body = "We have just launched a major update. Check out what's new.",
  buttonText = "Read Announcement",
  buttonLink = "#",
  primaryColor = "#06b6d4",
  theme = "dark"
}: any) {
  const isDark = theme === 'dark';

  const styles = {
    container: {
      fontFamily: "'Courier New', Courier, monospace",
      backgroundColor: isDark ? "#000000" : "#f3f4f6",
      padding: "40px 20px",
      textAlign: "center" as const,
      color: isDark ? "#ffffff" : "#111827"
    },
    wrapper: {
      maxWidth: "600px",
      margin: "0 auto",
      border: `2px solid ${primaryColor}`,
      borderRadius: "0px",
      padding: "40px",
      backgroundColor: isDark ? "#111111" : "#ffffff",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold" as const,
      marginBottom: "20px",
      color: primaryColor,
      textTransform: "uppercase" as const,
      letterSpacing: "2px",
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "30px",
      color: isDark ? "#e5e7eb" : "#4b5563",
    },
    button: {
      display: "inline-block" as const,
      backgroundColor: primaryColor,
      color: isDark ? "#000000" : "#ffffff",
      padding: "16px 32px",
      textDecoration: "none",
      fontWeight: "bold" as const,
      fontSize: "14px",
      textTransform: "uppercase" as const,
      border: "none",
    },
    divider: {
      height: "1px",
      backgroundColor: isDark ? "#333333" : "#e5e7eb",
      margin: "30px 0",
    },
    footer: {
      fontSize: "10px",
      color: isDark ? "#666666" : "#9ca3af",
      marginTop: "20px",
      fontFamily: "Arial, sans-serif"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>{headline}</h1>
        <p style={styles.text}>{body}</p>
        <div style={styles.divider}></div>
        <a href={buttonLink} style={styles.button}>{buttonText}</a>
        <div style={styles.footer}>
          <p>SENT FROM HQ &bull; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
