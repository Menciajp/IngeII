# Pantallas (Screens)

Cada pantalla del sistema vive en su propia carpeta acá adentro.

## Cómo crear una pantalla nueva

1. Crear una carpeta con el nombre de la pantalla en `PascalCase`, ej: `src/screens/Login/`
2. Adentro, crear al menos:
   - `NombrePantalla.js` → el componente de React
   - `NombrePantalla.css` → estilos específicos de esa pantalla (reutilizando las variables de `src/styles/theme.css`)
3. Reutilizar los componentes base de `src/components/` (Button, Card, Input) en vez de crear estilos nuevos desde cero.

Tomar `EjemploPantalla/` como modelo de referencia.
