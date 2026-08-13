import { Target, Megaphone, PenTool, BarChart3 } from "lucide-react";

/**
 * Condiciones comunes a todos los cursos. Se escriben sin fechas concretas
 * para que no caduquen; el precio lo comparte también la sección Inscripción.
 */
export const COURSE_PRICE = "$199";
export const COURSE_SEATS = "20 cupos por grupo";
export const COURSE_START = "Inicio: primer lunes de cada mes";

/**
 * Catálogo de cursos. Fuente única: lo consumen Courses (tarjeta + modal),
 * Enroll (selector) y Footer (columna de cursos).
 *
 * Los campos `title`, `description`, `duration`, `level` e `icon` alimentan la
 * tarjeta; el resto es la ficha ampliada que se abre al pulsar "Ver curso".
 *
 * TODO: el temario, las herramientas y los entregables son un borrador
 * realista — sustituir por el programa real de la academia.
 */
export const courses = [
  {
    id: "estrategia",
    title: "Fundamentos del Marketing Digital y Construcción de Marca",
    description:
      "Construir una marca sólida y comprender el ecosistema digital.",
    duration: "5 dias",
    level: "Desde cero",
    icon: Target,

    tagline:
      "Deja de publicar por publicar: define a quién le hablas y por qué deberían elegirte.",
    summary:
      "El punto de partida de todo lo demás. Antes de invertir un dólar en publicidad necesitas saber qué vendes, a quién y con qué voz. En 5 dias pasas de la intuición a una estrategia escrita, con tu marca definida y un plan de contenidos que puedes ejecutar al día siguiente.",
    audience:
      "Emprendedores y profesionales que empiezan desde cero y necesitan ordenar su marca antes de escalar.",
    format: "Clases en vivo + grabadas",
    modules: [
      {
        id: "ecosistema",
        week: "Clase 1",
        title: "El ecosistema digital hoy",
        detail:
          "Cómo se conectan redes, web y publicidad, y qué papel juega cada canal dentro del embudo de venta.",
      },
      {
        id: "publico",
        week: "Clase 2",
        title: "Tu cliente ideal, con datos",
        detail:
          "Investigación de mercado, análisis de competencia y construcción de buyer personas que sí existen.",
      },
      {
        id: "marca",
        week: "Clase 3",
        title: "Identidad y propuesta de valor",
        detail:
          "Posicionamiento, tono de voz y coherencia visual: qué te hace distinto y cómo se ve eso en tu perfil.",
      },
      {
        id: "plan",
        week: "Clase 4",
        title: "Plan de marketing en una página",
        detail:
          "Objetivos medibles, calendario de contenidos y presupuesto realista para tus primeros 90 días.",
      },
    ],
    outcomes: [
      "Explicar en una frase qué vendes y por qué te deberían comprar a ti.",
      "Definir a tu cliente ideal con datos, no con suposiciones.",
      "Construir una identidad de marca coherente en todos tus canales.",
      "Salir con un plan de marketing de 90 días listo para ejecutar.",
    ],
    tools: [
      "Canva",
      "Notion",
      "Google Trends",
      "Meta Business Suite",
      "ChatGPT",
    ],
    project:
      "Un manual de marca y un plan de marketing de 90 días para tu negocio o el de tu primer cliente.",
  },
  {
    id: "publicidad",
    title: "Creación de Contenido, Diseño y Producción Audiovisual",
    description: "Crear contenido profesional que genere alcance y ventas.",
    duration: "5 dias",
    level: "Intermedio",
    icon: Megaphone,

    tagline:
      "Contenido que se ve profesional, grabado con el teléfono que ya tienes en el bolsillo.",
    summary:
      "Publicar todos los días no sirve de nada si el contenido no engancha en los primeros tres segundos. Aquí aprendes el oficio completo: idea, guion, grabación, edición y publicación. Sin equipo caro y sin depender de nadie para producir.",
    audience:
      "Community managers, creadores y dueños de negocio que ya publican pero no consiguen alcance ni ventas.",
    format: "Clases en vivo + grabadas",
    modules: [
      {
        id: "guion",
        week: "Clase 1",
        title: "Ideas que se detienen a mirar",
        detail:
          "Storytelling aplicado a redes, ganchos de tres segundos y formatos que funcionan en cada plataforma.",
      },
      {
        id: "produccion",
        week: "Clase 2",
        title: "Producción con el celular",
        detail:
          "Encuadre, iluminación natural, audio limpio y una rutina de grabación para producir por lotes.",
      },
      {
        id: "edicion",
        week: "Clase 3",
        title: "Edición de video vertical",
        detail:
          "Ritmo, subtítulos, música y transiciones en CapCut: de la toma en bruto al reel publicable.",
      },
      {
        id: "parrilla",
        week: "Clase 4",
        title: "Diseño y parrilla de contenidos",
        detail:
          "Plantillas reutilizables, coherencia visual del feed y calendario mensual con métricas.",
      },
    ],
    outcomes: [
      "Escribir guiones cortos con ganchos que retienen la atención.",
      "Grabar e iluminar contenido profesional solo con tu teléfono.",
      "Editar reels verticales con ritmo, subtítulos y marca propia.",
      "Sostener una parrilla mensual sin quedarte sin ideas.",
    ],
    tools: ["CapCut", "Canva", "Instagram", "TikTok", "Metricool"],
    project:
      "Una parrilla de 30 días publicada, con al menos seis piezas producidas y editadas por ti.",
  },
  {
    id: "diseno",
    title: "Inteligencia Artificial Aplicada al Marketing",
    description: "Dominar herramientas de IA para optimizar procesos.",
    duration: "5 dias",
    level: "Desde cero",
    icon: PenTool,

    tagline: "Haz en una tarde el trabajo que hoy te ocupa una semana entera.",
    summary:
      "La IA no reemplaza al marketero: multiplica al que sabe usarla. Este curso te enseña a construir tu propio sistema de trabajo con IA para investigar, escribir, diseñar y automatizar, manteniendo tu criterio y la voz de tu marca. No necesitas saber programar.",
    audience:
      "Cualquier persona que trabaje en marketing o comunicación y quiera producir más sin ampliar el equipo.",
    format: "Clases en vivo + grabadas",
    modules: [
      {
        id: "prompts",
        week: "Clase 1",
        title: "Hablar bien con la máquina",
        detail:
          "Anatomía de un buen prompt, contexto, rol y ejemplos. Tu primera biblioteca de prompts reutilizables.",
      },
      {
        id: "copy",
        week: "Clase 2",
        title: "Investigación y copy con IA",
        detail:
          "Ideación, análisis de competencia y redacción de anuncios y correos que no suenan a robot.",
      },
      {
        id: "visual",
        week: "Clase 3",
        title: "Imagen y video generativos",
        detail:
          "Generación y edición de piezas visuales, avatares y locuciones para producir campañas completas.",
      },
      {
        id: "automatizacion",
        week: "Clase 4",
        title: "Automatiza lo repetitivo",
        detail:
          "Flujos que conectan tus herramientas: respuestas, informes y publicación en piloto automático.",
      },
    ],
    outcomes: [
      "Escribir prompts que devuelven resultados usables a la primera.",
      "Producir un mes de contenido en una sola sesión de trabajo.",
      "Generar imagen y video con IA sin perder la identidad de tu marca.",
      "Automatizar las tareas repetitivas que hoy te consumen el día.",
    ],
    tools: ["ChatGPT", "Gemini", "Midjourney", "Canva IA", "HeyGen", "Make"],
    project:
      "Tu propio sistema de prompts y automatizaciones, capaz de producir un mes de contenido.",
  },
  {
    id: "datos",
    title: "Publicidad Digital, Meta Ads y Crecimiento Profesional",
    description:
      "Crear campañas rentables y desarrollar habilidades comerciales.",
    duration: "5 dias",
    level: "Avanzado",
    icon: BarChart3,

    tagline:
      "Invierte un dólar y aprende a saber exactamente cuánto te devolvió.",
    summary:
      "El módulo que convierte el conocimiento en ingresos. Montas campañas reales con presupuesto real, aprendes a leer las métricas que importan y a decidir cuándo escalar y cuándo apagar. Termina con la parte que nadie enseña: cómo cobrar por esto y conseguir clientes.",
    audience:
      "Perfiles que ya manejan marca y contenido y quieren vivir de gestionar publicidad para terceros.",
    format: "Clases en vivo + grabadas",
    modules: [
      {
        id: "setup",
        week: "Clase 1",
        title: "Cimientos técnicos",
        detail:
          "Administrador comercial, píxel, eventos y conversiones bien medidos desde el primer día.",
      },
      {
        id: "campanas",
        week: "Clase 2",
        title: "Estructura de campañas",
        detail:
          "Objetivos, públicos, presupuestos y la arquitectura que permite optimizar sin romper el aprendizaje.",
      },
      {
        id: "creativos",
        week: "Clase 3",
        title: "Creativos y pruebas A/B",
        detail:
          "Qué anuncio gana y por qué: hipótesis, variantes y lectura honesta de los resultados.",
      },
      {
        id: "negocio",
        week: "Clase 4",
        title: "Escalar y cobrar por ello",
        detail:
          "Métricas de rentabilidad, informes para clientes, propuestas y tarifas de un freelance de pauta.",
      },
    ],
    outcomes: [
      "Configurar eventos para medir ventas de verdad.",
      "Lanzar campañas de Meta Ads con estructura y presupuesto correctos.",
      "Leer el rendimiento y decidir cuándo escalar o apagar una campaña.",
      "Presentar resultados y cobrar por gestionar publicidad de terceros.",
    ],
    tools: [
      "Meta Ads Manager",
      "Meta Pixel",
      "Google Ads",
      "Looker Studio",
      "WhatsApp Business",
    ],
    project:
      "Una campaña real con presupuesto propio, optimizada y presentada en un informe de resultados.",
  },
];

export default courses;
