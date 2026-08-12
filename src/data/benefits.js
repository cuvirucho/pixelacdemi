import {
  MonitorPlay,
  BadgeCheck,
  Headset,
  Briefcase,
  Video,
  FileText,
  MessagesSquare,
  Award,
  Layers,
  Users,
  Rocket,
} from 'lucide-react'

/** Micro-beneficios de la columna izquierda del Hero. */
export const heroPerks = [
  {
    id: 'online',
    title: '100% Online',
    description: 'Clases en vivo y grabadas',
    icon: MonitorPlay,
  },
  {
    id: 'certificacion',
    title: 'Certificación',
    description: 'Avalada por Pixel Academy',
    icon: BadgeCheck,
  },
  {
    id: 'asesoria',
    title: 'Asesoría',
    description: 'Acompañamiento personalizado',
    icon: Headset,
  },
  {
    id: 'resultados',
    title: 'Resultados',
    description: 'Enfocado en proyectos reales',
    icon: Briefcase,
  },
]

/** Sección "¿Qué incluye?". */
export const inclusions = [
  {
    id: 'clases',
    title: 'Clases en vivo',
    description: 'y grabadas',
    icon: Video,
  },
  {
    id: 'material',
    title: 'Material exclusivo',
    description: 'y plantillas',
    icon: FileText,
  },
  {
    id: 'comunidad',
    title: 'Grupo privado',
    description: 'de alumnos',
    icon: MessagesSquare,
  },
  {
    id: 'certificado',
    title: 'Certificado',
    description: 'avalado',
    icon: Award,
  },
]

/** Pilares de la sección "Sobre nosotros". */
export const pillars = [
  {
    id: 'metodologia',
    title: 'Metodología 70% práctica',
    description:
      'Cada módulo termina con un entregable real que suma a tu portafolio, no con un examen teórico.',
    icon: Layers,
  },
  {
    id: 'mentores',
    title: 'Mentores en activo',
    description:
      'Aprendes de especialistas que gestionan campañas y presupuestos publicitarios todos los días.',
    icon: Users,
  },
  {
    id: 'proyectos',
    title: 'Proyectos con marcas reales',
    description:
      'Trabajas sobre casos de negocios reales y presentas tus resultados ante el equipo docente.',
    icon: Rocket,
  },
]
