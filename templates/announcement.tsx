
import React from 'react';

export default function AnnouncementEmail({
  headline = "Big News Inside!",
  body = "We have just launched a major update. Check out what's new.",
  buttonText = "Read Announcement",
  buttonLink = "#",
  primaryColor = "#06b6d4", // Cyan 500
  backgroundColor = "#ffffff",
  textColor = "#111827"
}) {
  const styles = {
    container: {
      fontFamily: "'Courier New', Courier, monospace", // Tech feel
      backgroundColor: "#000000",
      padding: "40px 20px",
      textAlign: "center" as const,
      color: "#ffffff"
    },
    wrapper: {
      maxWidth: "600px",
      margin: "0 auto",
      border: `2px solid ${primaryColor}`,
      borderRadius: "0px", // Sharp edges
      padding: "40px",
      backgroundColor: "#111111",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: primaryColor,
      textTransform: "uppercase" as const,
      letterSpacing: "2px",
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "30px",
      color: "#e5e7eb",
    },
    button: {
      display: "inline-block",
      backgroundColor: primaryColor,
      color: "#000000",
      padding: "16px 32px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "14px",
      textTransform: "uppercase" as const,
      border: "none",
    },
    divider: {
      height: "1px",
      backgroundColor: "#333333",
      margin: "30px 0",
    },
    footer: {
      fontSize: "10px",
      color: "#666666",
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
