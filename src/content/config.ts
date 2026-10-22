import { defineCollection, z } from 'astro:content';

// El "molde" de un aviso: estos son los únicos campos válidos, y Astro
// rechaza la compilación si falta alguno o si "tipo" no es exactamente
// una de las tres opciones permitidas. Esto evita errores como escribir
// "Suspension" con mayúscula por accidente.
const avisos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    tipo: z.enum(['suspension', 'circular', 'evento']),
  }),
});

export const collections = { avisos };
