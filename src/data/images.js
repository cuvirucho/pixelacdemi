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
  heroPerson: "src/assets/images/Diseño sin título (7).png",
  /** CTA: estudiante señalando. Vertical, ~3:4. Fondo recortado. */
  ctaStudent: "src/assets/images/Diseño sin título (11).png",
  /** Sobre nosotros: equipo o aula. Horizontal, ~4:3. */
  aboutTeam: null,
};

export default images;
