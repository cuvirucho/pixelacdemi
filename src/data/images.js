/**
 * Manifiesto de imágenes.
 *
 * Mientras un slot valga `null`, el componente <Figure /> pinta un placeholder
 * ilustrado (SVG + gradiente morado) que forma parte del diseño y no lo rompe.
 *
 * Para usar fotos reales:
 *   1. Copia el archivo en `src/assets/images/` (ver el README de esa carpeta).
 *   2. Impórtalo aquí arriba y asígnalo al slot. Nada más cambia.
 *
 *   import heroPerson from '../assets/images/hero-person.png'
 *   export const images = { heroPerson, ... }
 */
export const images = {
  /** Hero: persona trabajando con laptop. Vertical, ~4:5. Fondo recortado. */
  heroPerson:
    "https://res.cloudinary.com/db8e98ggo/image/upload/v1786622521/Dise%C3%B1o_sin_t%C3%ADtulo_7_tkdaxo.png",
  /** CTA: estudiante señalando. Vertical, ~3:4. Fondo recortado. */
  ctaStudent:
    "https://res.cloudinary.com/db8e98ggo/image/upload/v1787342690/valencia_9_nrermp.png",
};

export default images;
