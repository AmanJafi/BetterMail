/**
 * Evaluates an AI-generated email template function string into a live React component.
 * Uses Function() constructor — client-side only, sandboxed to the browser's JS engine.
 */

import React from 'react';

export function evalTemplate(code: string): React.ComponentType<any> | null {
  try {
    // The AI outputs a named function declaration like:
    // function EmailTemplate({ headline, body, ... }) { return (<div>...</div>); }
    // We wrap it to capture and return the component.
    const wrappedCode = `
      ${code}
      return EmailTemplate;
    `;

    // eslint-disable-next-line no-new-func
    const factory = new Function('React', wrappedCode);
    const Component = factory(React);

    if (typeof Component !== 'function') {
      console.error('[evalTemplate] Result is not a function:', typeof Component);
      return null;
    }

    return Component;
  } catch (err) {
    console.error('[evalTemplate] Failed to eval template code:', err);
    return null;
  }
}
