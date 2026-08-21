# Imágenes

Esta carpeta está vacía a propósito. Mientras no haya fotos, el componente
[`Figure.jsx`](../../components/Figure.jsx) dibuja un **placeholder ilustrado**
(SVG + gradiente morado) que forma parte del diseño: no se ve como un hueco roto.

## Cómo poner las fotos reales

1. Copia el archivo en esta carpeta con el nombre indicado en la tabla.
2. Abre [`src/data/images.js`](../../data/images.js), impórtalo y asígnalo al slot:

```js
import heroPerson from '../assets/images/hero-person.png'

export const images = {
  heroPerson,        // ← antes era null
  ctaStudent: null,
}
```

No hay que tocar ningún CSS ni ningún componente: el layout ya reserva el espacio
y recorta la imagen con `object-fit: cover`.

## Archivos esperados

| Slot         | Nombre sugerido    | Proporción | Tamaño recomendado | Notas                                    |
| ------------ | ------------------ | ---------- | ------------------ | ---------------------------------------- |
| `heroPerson` | `hero-person.png`  | ~4:5       | 900 × 1125 px      | PNG con fondo transparente (recortado)   |
| `ctaStudent` | `student.png`      | ~3:4       | 700 × 933 px       | PNG con fondo transparente (recortado)   |

Los logos de la sección «Sobre nosotros» no viven aquí: se listan como URLs en
[`src/data/marcas.js`](../../data/marcas.js) y los pinta `BrandMarquee.jsx`.

## Recomendaciones

- Comprime antes de subir (TinyPNG, Squoosh). Objetivo: **< 250 KB** por imagen.
- Formato `.webp` si puedes: mismo flujo, solo cambia la extensión del import.
- Las fotos con fondo morado o neutro encajan mejor con la paleta de la marca.
- Vite versiona y optimiza automáticamente todo lo que se importe desde `src/`.
