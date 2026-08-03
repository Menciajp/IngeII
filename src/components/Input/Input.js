import React from 'react';

export default function Input({ label, ...props }) {
  return (
    <label style={{ display: 'block', marginBottom: 'var(--spacing-md)' }}>
      {label && <span>{label}</span>}
      <input className="input" {...props} />
    </label>
  );
}
