import { Phone, Mail, MapPin } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
} from "../components/BrandIcons";
import { courses } from "./courses";

/**
 * Fuente única de navegación: la comparten Navbar (scrollspy incluido) y Footer,
 * así nunca se desincronizan los enlaces ni los ids de las secciones.
 * El orden coincide con el orden real de las secciones en el DOM.
 */
export const navLinks = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "cursos", label: "Cursos", href: "#cursos" },
  { id: "nosotros", label: "Sobre nosotros", href: "#nosotros" },
  { id: "beneficios", label: "Beneficios", href: "#beneficios" },

  { id: "contacto", label: "Contacto", href: "#contacto" },
];

/** Ancla a la que apuntan todos los CTA de inscripción. */
export const ENROLL_HREF = "#inscripcion";

export const resourceLinks = [
  { id: "blog", label: "Blog", href: "#inscripcion" },
  { id: "guias", label: "Guías gratuitas", href: "#inscripcion" },
  { id: "faq", label: "Preguntas frecuentes", href: "#inscripcion" },
];

/** Columnas de enlaces del footer. Los cursos se derivan del catálogo. */
export const footerColumns = [
  { id: "navegacion", title: "Navegación", links: navLinks },
  {
    id: "cursos",
    title: "Cursos",
    links: courses.map((course) => ({
      id: course.id,
      label: course.title,
      href: "#cursos",
    })),
  },
  { id: "recursos", title: "Recursos", links: resourceLinks },
];

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com",
    icon: TikTokIcon,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com",
    icon: YouTubeIcon,
  },
];

/** Datos de contacto — reemplazables por los reales de la academia. */
export const contactInfo = [
  { id: "tel", label: "098 123 4567", href: "tel:+593981234567", icon: Phone },
  {
    id: "mail",
    label: "info@pixelacademy.com",
    href: "mailto:info@pixelacademy.com",
    icon: Mail,
  },
  { id: "loc", label: "Cuenca, Ecuador", href: null, icon: MapPin },
];
