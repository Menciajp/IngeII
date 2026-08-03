# Sistema de Gimnasios — Bocetos de Pantallas

Repositorio para el desarrollo colaborativo de los bocetos (mockups navegables) de las pantallas del sistema de gestión de gimnasios. El objetivo es que cada integrante del equipo pueda construir sus pantallas en React reutilizando un mismo lenguaje visual, definido en un archivo CSS compartido.

## Stack

- **React** (Create React App)
- **CSS plano con variables** (custom properties), sin frameworks de estilos ni CSS-in-JS

## Estructura del proyecto

```
├── public/
├── src/
│   ├── styles/
│   │   └── theme.css        # Variables y estilos base compartidos (colores, tipografía, componentes)
│   ├── components/          # Componentes reutilizables
│   ├── screens/             # Una carpeta por pantalla/boceto
│   │   ├── Login/
│   │   ├── Dashboard/
│   │   └── ...
│   ├── App.js
│   └── index.js
├── .gitignore
└── README.md
```

## Cómo levantar el proyecto

```bash
npm install
npm start
```

La app queda disponible en `http://localhost:3000`.

## Uso del CSS compartido (`theme.css`)

Todas las pantallas deben construirse usando las variables y clases definidas en `src/styles/theme.css`. Esto asegura consistencia visual entre los bocetos de todo el equipo.

Para usarlo, importar una sola vez en `index.js` o `App.js`:

```js
import './styles/theme.css';
```

Luego, en el CSS propio de cada pantalla, reutilizar las variables en vez de "hardcodear" valores:

```css
.mi-pantalla {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-family-base);
}
```

**Importante:** no modificar `theme.css` sin avisar al equipo, ya que afecta a todas las pantallas.

## Convenciones del equipo

- Cada pantalla se desarrolla en su propia carpeta dentro de `src/screens/`.
- Nombres de componentes y carpetas en `PascalCase`.
- Nombres de clases CSS en `kebab-case`.
- Commits descriptivos (ej: `feat: boceto pantalla de login`).
- Crear una rama por pantalla/feature, evitar trabajar directo sobre `main`.

## Flujo de trabajo sugerido

1. Crear rama desde `main`: `git checkout -b screen/nombre-pantalla`
2. Desarrollar la pantalla reutilizando `theme.css`
3. Abrir Pull Request para revisión
4. Merge a `main` una vez aprobado
