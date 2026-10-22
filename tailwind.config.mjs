/** @type {import('tailwindcss').Config} */
export default {
  // Dónde busca Tailwind las clases usadas, para no incluir CSS de más
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      // Paleta del PROYECTO.md, sección 6. Cada color tiene un nombre
      // con sentido (no "blue-1", "blue-2") para que el código se lea solo.
      colors: {
        azul: {
          900: '#161e5a', // footer y bandas oscuras
          marca: '#26338b', // títulos, botones, elementos principales
          500: '#4a5bc4', // hover e iconos
          200: '#c9d0f2', // formas e ilustración
          50: '#f1f3fb', // secciones alternas
        },
        amarillo: {
          marca: '#fedd48', // acento y botón principal
          hover: '#f0c92a', // botón al pasar el cursor
          suave: '#ffeb96', // manchas y realces
        },
        tinta: '#1a1d33', // texto de párrafo
        grisTexto: '#5a5f7a', // texto secundario
        linea: '#e3e6f2', // bordes y divisores
        suspension: '#b83a2a', // solo la etiqueta de suspensiones en Avisos
      },
      // Nunito para títulos, Nunito Sans para cuerpo (PROYECTO.md, sección 6)
      fontFamily: {
        titulo: ['Nunito', 'sans-serif'],
        cuerpo: ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
