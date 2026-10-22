# PROYECTO: Sitio web del Colegio Jean Piaget

> Archivo de contexto y seguimiento. Se actualiza al cerrar cada etapa.
> Si abres una conversación nueva, pega este archivo completo para retomar donde nos quedamos.

**Versión:** 0.8 (Etapa 1 cerrada; arranca Etapa 2: base del proyecto en Astro)

---

## 1. Resumen del proyecto

- Sitio web multipágina para el **Colegio Jean Piaget** (escuela particular, proyecto real).
- Niveles: **preescolar y primaria (1° a 6°)**.
- Quien decide: **el director**.
- Ya tiene nombre e identidad. **No tiene lema.** Hoy solo tiene **Facebook**, sin sitio web.
- Colores del logo: azul **#26338b** sobre fondo amarillo **#fedd48**.
- Público principal: **padres de familia** y público general.
- Objetivo: dar a conocer la escuela y su oferta educativa para que la gente **contacte**.
- Sin fecha límite.
- Textos: **contenido de ejemplo** por ahora, para sustituir después por el real.
- Imágenes: se pedirán después; el diseño **reserva los espacios**.
- Dominio y hosting: **aún no existen**, hay que adquirirlos.
- Modelo de negocio: **plan de mantenimiento mensual**. El desarrollador publica avisos y eventos por código. **No habrá CMS.**

## 2. Reglas de trabajo

1. Se avanza **por etapas**; no se construye todo de golpe.
2. Cada pieza se explica antes de seguir, para entenderla bien.
3. Código limpio: sin redundancia, sin imports a mitad de función, sin complejidad innecesaria.
4. Ante decisiones importantes se presentan **varias opciones** con pros y contras.
5. Feedback directo y honesto, incluyendo objeciones a ideas que no convenzan.
6. El diseño debe verse **profesional y hecho a medida**, no como plantilla genérica de IA.
7. Este archivo se actualiza al final de cada etapa.
8. Todo texto de ejemplo se marca con `[EJEMPLO]` en el código para localizarlo y reemplazarlo fácilmente.

## 3. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Escuela | Colegio Jean Piaget, particular, preescolar y primaria |
| Público | Padres de familia y público general |
| Páginas | Inicio, ¿Quiénes somos?, Oferta educativa, Avisos, Contacto |
| Admisión | Sección "Cómo ingresar" dentro de Oferta educativa, con llamada a Contacto |
| Avisos | Una sola página: suspensiones de clases, circulares y eventos, con etiqueta por tipo |
| Framework | **Astro** |
| Colores | Azul #26338b en elementos principales, amarillo #fedd48 como acento, fondo blanco |
| Formulario | Solo de contacto (sin preinscripción) |
| CMS | **No**. Contenido editado por código |
| Mantenimiento | Plan mensual; el desarrollador publica los cambios |
| Contenido | De ejemplo, marcado con `[EJEMPLO]` |
| Estilo | Moderno y académico; mezcla de ilustraciones e imágenes reales |
| Dirección de diseño | Híbrido: estructura editorial académica (A), calidez con formas e ilustración (B) y patrones de conversión institucionales (C) |
| Logo | Aún no disponible. Se usará en azul sobre fondo blanco. Mientras tanto, marcador de posición con el nombre en texto |
| Interfaz (gustos del cliente) | Menús cuidados, secciones con fondo de otro color o sobre recuadros de color, animación de aparición hacia arriba al hacer scroll |
| Tipografía | Nunito (títulos) + Nunito Sans (cuerpo) |
| Ilustración | Iconografía simple y consistente (línea o relleno plano) + fotografía real; sin ilustraciones a medida |
| Hero de Inicio | Fotografía de la escuela con capa de color azul semitransparente encima; sin slider |
| Avisos en Inicio | No se mostrarán (ni lista ni banner de suspensiones); solo viven en la página Avisos. Riesgo aceptado por el cliente |
| Instalaciones (Inicio) | Mosaico de fotos de distinto tamaño (estilo bento), sustituye al bloque de avisos |

## 4. Decisiones pendientes

- [ ] Recibir el logo (SVG o PNG grande con fondo transparente, versión azul)
- [ ] ¿La escuela tiene WhatsApp para admisiones? (botón flotante opcional)
- [ ] Estilos: CSS propio o Tailwind (se decide en Etapa 2)
- [ ] Tiempo de respuesta comprometido en el plan de mantenimiento
- [ ] Dominio y hosting (elegir proveedor y comprar)
- [ ] Datos reales de la escuela (dirección, teléfono, horarios, actividades) — se usa `[EJEMPLO]` mientras tanto
- [ ] Wireframe de las páginas internas (se hace al llegar a cada una, en la Etapa 4)

## 5. Estructura del sitio

| Página | Contenido previsto |
|---|---|
| Inicio | Ver wireframe aprobado abajo |
| ¿Quiénes somos? | Historia, misión, visión, valores, instalaciones, equipo |
| Oferta educativa | Preescolar y primaria 1° a 6°, método, actividades, cómo ingresar |
| Avisos | Listado por fecha con etiqueta (Suspensión, Circular, Evento) |
| Contacto | Formulario, mapa, teléfono, horarios, redes |
| Aviso de privacidad | Página secundaria enlazada en el footer (obligatoria por el formulario) |

Nota: como el sitio es público, ningún aviso debe incluir nombres de alumnos ni datos personales.

### Wireframe de Inicio (aprobado)

1. Barra superior — teléfono, horario, correo.
2. Encabezado fijo — logo, menú (Inicio, ¿Quiénes somos?, Oferta educativa, Avisos, Contacto), botón amarillo "Agenda una visita".
3. Hero — foto de la escuela con capa azul semitransparente (opacidad 55-70%), frase principal en blanco, línea de apoyo, dos botones. Estático, con animación de entrada hacia arriba.
4. Franja de confianza — 3 o 4 datos breves, contenido `[EJEMPLO]` hasta tener datos reales.
5. Bloque de pilares o valores — 3 o 4 tarjetas con icono, título corto y una línea.
6. Niveles educativos — tarjetas de Preescolar y Primaria, enlazan a Oferta educativa.
7. Instalaciones — mosaico de fotos de distinto tamaño (estilo bento) con texto breve.
8. Banda de llamada a la acción — fondo azul 900, texto blanco, botón amarillo.
9. Pie de página — datos de contacto, enlaces, redes sociales, aviso de privacidad.

No hay avisos ni suspensiones en Inicio: viven únicamente en la página Avisos (decisión y riesgo aceptados por el cliente).

## 6. Diseño

### Referencias del cliente
- institutoculturalazteca.com.mx
- cumbresmexico.com

Patrones útiles observados (estructura y contenido):
- Barra superior con teléfono, horario y correo (ICA).
- Bloque de pilares o valores con 3 o 4 puntos (ICA).
- Llamada clara a "Agendar visita" repetida a lo largo del sitio (ambas).
- Tarjetas por nivel educativo (Cumbres).
- Insignias de confianza: acreditaciones, años de experiencia (ambas).
- Pie de página con dirección, teléfonos y mapa (ICA).
- Contacto flotante con WhatsApp, llamar y cómo llegar (Cumbres).

A evitar: carrusel de portada (ICA), dependencia total de fotografía profesional (Cumbres).

### Dirección de diseño (confirmada)
Híbrido de A (editorial académico) y B (cálido y lúdico), con los patrones de conversión de C (institucional). Punto medio entre lo demasiado formal y lo demasiado infantil, adecuado para una escuela de preescolar a 6° de primaria.

### Tipografía (confirmada)
**Nunito** para títulos, **Nunito Sans** para cuerpo. Gratuitas (Google Fonts), alojadas en el propio sitio.

### Ilustración y fotografía (confirmado)
Iconografía simple y consistente (línea o relleno plano) + fotografía real. Sin ilustraciones a medida. Sin galería como sección independiente por ahora.

### Patrones de interfaz (confirmados)
- Encabezado fijo, blanco, con sombra sutil al hacer scroll. Indicador de página actual con subrayado amarillo. Botón amarillo "Agenda una visita". Sin menús desplegables. Menú móvil a pantalla completa.
- Barra superior con teléfono, horario y correo.
- Secciones alternadas: blanco, azul 50, banda azul 900 con texto blanco, banda amarilla de llamada a la acción.
- Tarjetas sobre fondo de color con esquinas redondeadas.
- Animación de aparición hacia arriba: desplazamiento corto (~24 px) con fade, 500-600 ms, escalonada, una sola vez, desactivada si el usuario prefiere menos movimiento.
- Sin carruseles en ninguna página.
- Hero con foto + overlay de color de marca cuando aplique (ver sección 5).

### Paleta (aprobada)
| Rol | Nombre | Hex | Uso |
|---|---|---|---|
| Azul | Azul 900 | #161e5a | Footer y bandas oscuras |
| Azul | Azul marca | #26338b | Títulos, botones, elementos principales |
| Azul | Azul 500 | #4a5bc4 | Hover e iconos |
| Azul | Azul 200 | #c9d0f2 | Formas e ilustración |
| Azul | Azul 50 | #f1f3fb | Secciones alternas |
| Amarillo | Amarillo marca | #fedd48 | Acento y botón principal |
| Amarillo | Amarillo hover | #f0c92a | Botón al pasar el cursor |
| Amarillo | Amarillo suave | #ffeb96 | Manchas y realces |
| Neutro | Tinta | #1a1d33 | Texto de párrafo |
| Neutro | Gris | #5a5f7a | Texto secundario |
| Neutro | Línea | #e3e6f2 | Bordes y divisores |
| Neutro | Blanco | #ffffff | Fondo principal |
| Alerta | Rojo suspensión | #b83a2a | Solo etiqueta de suspensiones |

Etiquetas de Avisos: Suspensión (rojo, texto blanco), Circular (azul 50, texto azul marca), Evento (amarillo, texto azul 900).

Contrastes verificados (WCAG): azul marca/blanco 10.9, azul marca/amarillo 8.1, tinta/blanco 16.6, gris/blanco 6.3, blanco/azul 900 15.4, blanco/rojo 5.7 (todos AA). Amarillo/blanco 1.3 (prohibido para texto).

## 7. Plan de trabajo

Leyenda: ✅ terminado · 🔄 en curso · ⏳ pendiente

### Etapa 0. Descubrimiento ✅
- [x] Preguntas iniciales respondidas
- [x] Enfoque de mantenimiento definido (sin CMS, cambios por código)
- [x] Alcance del formulario definido (solo contacto)
- [x] Páginas definidas
- [x] Colores del logo definidos
- [x] Stack confirmado (Astro)
- [x] Contenido de ejemplo acordado

### Etapa 1. Identidad y diseño ✅
- [x] Referencias del cliente recibidas
- [x] Dirección de diseño elegida (híbrido)
- [x] Paleta aprobada
- [x] Tipografías confirmadas (Nunito + Nunito Sans)
- [x] Estilo de ilustración definido
- [x] Wireframe de Inicio aprobado
- [ ] Recibir e integrar el logo — pendiente, no bloquea el avance
- [ ] Wireframe de páginas internas — se hace al llegar a cada una

### Etapa 2. Base del proyecto 🔄
- [x] Estructura de carpetas y configuración de Astro (Tailwind confirmado)
- [x] Variables de diseño (paleta y tipografía) y estilos globales — verificado con `npm run build`
- [x] Header, footer y navegación responsive
- [x] Layout base conectado (Header y Footer en Layout.astro)

### Etapa 3. Página de Inicio ⏳
- [ ] Hero con foto y overlay
- [ ] Resto de secciones según wireframe aprobado

### Etapa 4. Páginas informativas ⏳
- [ ] ¿Quiénes somos?
- [ ] Oferta educativa (incluye cómo ingresar)

### Etapa 5. Avisos y Contacto ⏳
- [ ] Avisos (colección, etiquetas, listado)
- [ ] Contacto y formulario
- [ ] Aviso de privacidad

### Etapa 6. Calidad ⏳
- [ ] Responsive en todos los tamaños
- [ ] Accesibilidad y contraste
- [ ] SEO básico y rendimiento

### Etapa 7. Entrega ⏳
- [ ] Compra de dominio y hosting
- [ ] Despliegue y pruebas finales
- [ ] Sustituir contenido `[EJEMPLO]` por el real
- [ ] Guía interna de cómo publicar avisos y plan de mantenimiento

## 8. Registro de avances

| Fecha | Etapa | Avance |
|---|---|---|
| 2026-09-19 | 0 | Se definen alcance inicial, público, páginas y modelo de mantenimiento |
| 2026-09-21 | 0 | Se define: Colegio Jean Piaget, sin CMS, formulario solo de contacto |
| 2026-09-21 | 0 | Se definen colores del logo, 5 páginas y que suspensiones, circulares y eventos van juntos en Avisos |
| 2026-09-21 | 0 → 1 | Se confirma Astro y contenido de ejemplo; se cierra Etapa 0. Se reciben referencias de diseño |
| 2026-09-21 | 1 | Se elige el híbrido de diseño y se registran gustos de interfaz. Se propone paleta y tres opciones tipográficas |
| 2026-09-21 | 1 | Paleta aprobada. Tras revisar formalidad vs calidez, se confirma Nunito + Nunito Sans |
| 2026-09-21 | 1 | Se define estilo de ilustración: iconografía simple y fotografía real |
| 2026-09-21 | 1 → 2 | Se define hero con foto y overlay azul; se acepta quitar avisos del Inicio; Instalaciones en mosaico. Se cierra Etapa 1 y arranca Etapa 2 |
| 2026-09-22 | 2 | Base del proyecto (Astro + Tailwind) creada, probada con `npm run build` y confirmada por el cliente. Se agregan Header, Footer y páginas provisionales para las 5 secciones del menú |
