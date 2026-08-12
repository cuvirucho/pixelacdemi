# Pixel Academy — Landing Page

Landing comercial para una academia de marketing digital. React 19 + Vite, **CSS puro**
(sin Tailwind, Bootstrap ni ningún framework de UI) y `lucide-react` como única
dependencia añadida, para los iconos.

## Puesta en marcha

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # sirve el build
npm run lint
```

## Estructura

```
src/
├── pages/Home.jsx        Orden de las secciones + observador de scroll-reveal
├── components/           Un .jsx y un .css por componente
├── hooks/
│   ├── useScrollReveal   Revela los elementos .reveal al entrar en pantalla
│   └── useScrollSpy      Marca el enlace activo del navbar
├── data/                 Todo el contenido editable (ver abajo)
├── assets/images/        Fotos reales (ver su README)
└── index.css             Tokens de diseño, reset, tipografía y keyframes
```

Regla: `index.css` solo contiene lo global (variables, reset, utilidades,
animaciones). Todo lo específico de una sección vive en el CSS de su componente.

## Dónde editar el contenido

Ningún texto de catálogo está escrito dentro del JSX. Para cambiar la web se tocan
solo los archivos de `src/data/`:

| Archivo           | Qué controla                                                       |
| ----------------- | ------------------------------------------------------------------ |
| `courses.js`      | Los 4 cursos. Alimenta la sección Cursos, el footer y el formulario |
| `benefits.js`     | Ventajas del hero, "¿Qué incluye?" y los pilares de Sobre nosotros  |
| `stats.js`        | Las cifras de la tarjeta blanca                                    |
| `testimonials.js` | Testimonios (datos ficticios, listos para reemplazar)              |
| `navigation.js`   | Menú, columnas del footer, redes sociales y datos de contacto      |
| `images.js`       | Manifiesto de imágenes                                             |

Al añadir un curso en `courses.js` aparece automáticamente en la rejilla de cursos,
en la columna del footer y en el desplegable del formulario.

## Imágenes

No hay fotos en el repositorio. Mientras `src/data/images.js` tenga los slots en
`null`, el componente `Figure` dibuja una **ilustración SVG** con la paleta de la
marca, de modo que el diseño se ve completo. Para poner fotos reales basta con
copiarlas en `src/assets/images/` e importarlas en ese archivo: no hay que tocar
ningún CSS. Las instrucciones y los tamaños recomendados están en
[`src/assets/images/README.md`](src/assets/images/README.md).

En la sección CTA la figura solo se muestra cuando existe una foto real; sin ella
el panel se reequilibra a dos columnas.

## Formulario de inscripción

`Enroll.jsx` valida en el cliente (campos obligatorios, formato de correo, longitud
del teléfono), marca los campos con `aria-invalid`, lleva el foco al primer error y
muestra una confirmación al enviar. **No hay backend conectado**: el punto exacto
donde añadir la llamada a la API está marcado con un comentario dentro de
`handleSubmit`.

## Notas

- `scroll-margin-top` en las secciones evita que la navbar fija tape los anclajes.
- Las animaciones se desactivan por completo con `prefers-reduced-motion: reduce`.
- lucide-react v1 eliminó los iconos de marca; Instagram, Facebook, TikTok, YouTube
  y Meta se definen como SVG inline en `components/BrandIcons.jsx`.
