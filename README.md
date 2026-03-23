# Personal Portfolio con Astro + React + TypeScript

Este proyecto es una página web de portafolio personal creada con Astro como motor principal y React para componentes interactivos. Incluye navegación, animaciones y organización modular por componente, con énfasis en reutilización (DRY) y pruebas unitarias.

## 🧩 Tecnologías

- Astro 5.x
- React 18.x (componentes `.tsx`)
- TypeScript
- React Router DOM (`HashRouter`) para páginas internas como `projects-by-tech`
- CSS personalizado (por componente)
- Jest + ts-jest + Testing Library para tests unitarios

## 📁 Estructura importante

- `src/components/` - componentes React reutilizables
  - `AnimatedTitle/` - componente de título animado
  - `ProjectCard/` - tarjeta de proyecto reutilizable
  - `ProjectsByTech/` - página con grupos filtrados por lenguaje
  - `Projects/` - sección de proyectos principal
- `src/pages/` - rutas Astro
  - `index.astro`
  - `projects-by-tech.astro`
  - `contact-form.astro`
- `src/layouts/Layout.astro` - layout base
- `src/styles/index.css` - CSS global

## 🧰 Buenas prácticas utilizadas

- DRY con componentes (`AnimatedTitle`, `ProjectCard`, etc.)
- separación presentación/lógica:
  - UI dentro de componentes React
  - datos estáticos en arrays dentro de componente para iteración
- CSS modular para cada componente
- Accesibilidad básica con etiquetas semánticas (`<header>`, `<main>`, etc.) y atributos `aria` donde aplica
- Pruebas unitarias y de rendering (React Testing Library)
- Build verificable mediante `npm run build`

## ⚙️ Instalación y ejecución local

```bash
# Clona repositorio
git clone <tu-repo> personal_portfolio
cd personal_portfolio/portfolio

# Instala dependencias
npm install

# Levanta servidor dev
npm run dev

# Build para producción
npm run build

# Previsualizar build local
npm run preview

# Ejecutar tests
npm test
# Modo watch para desarrollo
npm run test:watch
```

### Notas de tests

- `jest.config.ts` está configurado para `ts-jest` + `jsdom`
- `src/setupTests.ts` importa `@testing-library/jest-dom`
- Comprobado:
  - `AnimatedTitle` renderiza título/subtítulo condicional
  - `ProjectCard` renderiza contenido y enlace correcto
  - `Projects` renderiza 3 cards esperadas

## 🔍 Extras útiles

- Puedes agregar más pruebas de integración para `ProjectsByTech` y navegación con `MemoryRouter`.
- Para producción, revisar `dist/` y usar optimización de imágenes si hay assets grandes.
- Si necesitas soporte de SEO, agrega meta tags y Open Graph en `Layout.astro`.

