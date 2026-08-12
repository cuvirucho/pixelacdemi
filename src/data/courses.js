import { Target, Megaphone, PenTool, BarChart3 } from "lucide-react";

/**
 * Catálogo de cursos. Fuente única: lo consumen Courses, Enroll (selector)
 * y Footer (columna de cursos).
 */
export const courses = [
  {
    id: "estrategia",
    title: "Fundamentos del Marketing Digital y Construcción de Marca",
    description:
      "Construir una marca sólida y comprender el ecosistema digital.",
    duration: "4 semanas",
    level: "Desde cero",
    icon: Target,
  },
  {
    id: "publicidad",
    title: "Creación de Contenido, Diseño y Producción Audiovisual",
    description: "Crear contenido profesional que genere alcance y ventas.",
    duration: "4 semanas",
    level: "Intermedio",
    icon: Megaphone,
  },
  {
    id: "diseno",
    title: "Inteligencia Artificial Aplicada al Marketing",
    description: "Dominar herramientas de IA para optimizar procesos.",
    duration: "4 semanas",
    level: "Desde cero",
    icon: PenTool,
  },
  {
    id: "datos",
    title: "Publicidad Digital, Meta Ads y Crecimiento Profesional",
    description:
      "Crear campañas rentables y desarrollar habilidades comerciales.",
    duration: "4 semanas",
    level: "Avanzado",
    icon: BarChart3,
  },
];

export default courses;
