
# React Email Maker

A production-ready tool to build, edit, and export React email templates for Gmail.

## Features

- **Local Template Loading**: Automatically loads `.tsx` and `.jsx` templates from the `./templates` directory.
- **Visual Editor**: Customize text, colors, and links in real-time.
- **Gmail Optimization**:
    - Automatic CSS inlining using `juice`.
    - Sanitization of `<script>`, `<style>`, and other forbidden tags.
    - Warnings for unsupported CSS (Flexbox, Grid, etc.).
- **One-Click Export**: Copy HTML directly to clipboard or download as a file.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open Browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## Adding New Templates

1.  Create a new React component file in the `templates/` directory (e.g., `templates/newsletter.tsx`).
2.  Export the component as `default`.
3.  Use standard React logic. Define props for content you want to make editable.
4.  **Important**: Use `style={{ ... }}` for ALL styling. Do not use CSS classes or Tailwind classes in the templates themselves, as Tailwind is not currently configured to inline into the templates automatically (inline styles are safest for Gmail).

Example:
```tsx
export default function MyEmail({ title = "Hello" }) {
  return (
    <div style={{ backgroundColor: "#fff", padding: "20px" }}>
      <h1 style={{ color: "#333" }}>{title}</h1>
    </div>
  );
}
```

## Gmail Compatibility Guide

- **Do not use**: Flexbox, CSS Grid, external stylesheets, `<style>` blocks (unless inlined), JavaScript.
- **Use**: Tables for layout (`<table>`, `<tr>`, `<td>`), inline styles, basic padding/margin.
- **Pasting**: When pasting into Gmail, use "Inspect Element" > "Edit as HTML" to ensure the rendered HTML is pasted, not the source code.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (for the Editor UI)
- **Juice** (for CSS inlining)
- **Cheerio** (for HTML sanitization)
