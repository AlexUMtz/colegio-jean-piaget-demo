# Colegio Jean Piaget — sitio web

Ver `PROYECTO.md` para el contexto completo, decisiones y plan de trabajo.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:4321 — deberías ver un mensaje confirmando que la
base del proyecto (colores, tipografías, Tailwind) está funcionando.

## Estructura

```
src/
├── components/   → piezas reutilizables (Header, Footer, tarjetas...)
├── layouts/      → Layout.astro, el molde que envuelve cada página
├── pages/        → cada archivo = una URL del sitio
└── styles/       → global.css con fuentes y estilos base
```

Los colores y tipografías están definidos en `tailwind.config.mjs`, no
repartidos en cada archivo. Para usarlos: `bg-azul-marca`, `text-tinta`,
`font-titulo`, etc.
