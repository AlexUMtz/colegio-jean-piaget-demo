import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// IMPORTANTE: reemplaza "site" con el dominio real en cuanto lo compres
// (Etapa 7). Mientras tanto, este valor de ejemplo permite que el sitio
// compile sin errores (algunas funciones, como la URL canónica y el
// sitemap, lo necesitan para construir URLs completas).
export default defineConfig({
  site: 'https://colegio-jean-piaget-demo-alex-mtz.vercel.app', // [EJEMPLO]
  integrations: [
    tailwind({
      // Usamos nuestro propio archivo de estilos globales en vez del
      // que Tailwind aplica por defecto, para tener control total
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
