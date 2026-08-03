import React from 'react';

// Componente base reutilizable. Usa las clases definidas en theme.css
export default function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
