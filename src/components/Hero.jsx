import { ArrowRight, ArrowDown, TrendingUp } from "lucide-react";
import Button from "./Button";
import Figure from "./Figure";
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  MetaIcon,
} from "./BrandIcons";
import { heroPerks } from "../data/benefits";
import { images } from "../data/images";
import { ENROLL_HREF } from "../data/navigation";
import "./Hero.css";

/** Chips de marca que flotan alrededor de la composición. */
const brands = [
  { id: "instagram", Icon: InstagramIcon, className: "hero__brand--ig" },
  { id: "facebook", Icon: FacebookIcon, className: "hero__brand--fb" },
  { id: "tiktok", Icon: TikTokIcon, className: "hero__brand--tt" },
  { id: "meta", Icon: MetaIcon, className: "hero__brand--meta" },
];

function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Fondo decorativo: glows radiales, retícula de puntos y blobs */}
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--1" />
        <span className="hero__glow hero__glow--2" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__inner">
        {/* ------------------------------ Columna izquierda ------------------------------ */}
        <div className="hero__content">
          {/* Cada frase en su propia línea: evita que la "y" quede huérfana al final */}
          <h1 className="hero__title animate-in" style={{ "--delay": "160ms" }}>
            <span className="hero__title-line">Aprende Marketing Digital</span>
            <span className="hero__title-line">
              y <span className="text-gradient">transforma tu futuro</span>
            </span>
          </h1>

          <p className="hero__lead animate-in" style={{ "--delay": "240ms" }}>
            Domina las estrategias que utilizan las marcas exitosas y
            conviértete en un profesional altamente competitivo.
          </p>

          <ul className="hero__perks animate-in" style={{ "--delay": "320ms" }}>
            {heroPerks.map(({ id, title, description, icon: Icon }) => (
              <li key={id} className="hero__perk">
                <span className="hero__perk-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="hero__perk-title">{title}</span>
                <span className="hero__perk-text">{description}</span>
              </li>
            ))}
          </ul>

          <div
            className="hero__actions animate-in"
            style={{ "--delay": "400ms" }}
          >
            <Button href={ENROLL_HREF} size="lg" icon={ArrowRight}>
              Quiero inscribirme
            </Button>
            <Button href="#cursos" size="lg" variant="outline" icon={ArrowDown}>
              Ver cursos
            </Button>
          </div>
        </div>

        {/* ------------------------------ Columna derecha ------------------------------ */}
        <div className="hero__visual animate-in" style={{ "--delay": "300ms" }}>
          <span className="hero__ring" aria-hidden="true" />
          <span className="hero__ring hero__ring--inner" aria-hidden="true" />

          <Figure
            src={images.heroPerson}
            alt="Estudiante de Pixel Academy trabajando con su portátil"
            variant="person"
            className="hero__figure"
          />

          {brands.map(({ id, Icon, className }) => (
            <span
              key={id}
              className={`hero__brand ${className}`}
              aria-hidden="true"
            >
              <Icon size={22} />
            </span>
          ))}

          {/* Tarjeta flotante: crecimiento con sparkline */}
          <div className="hero__card hero__card--growth">
            <span className="hero__card-label">Crecimiento</span>
            <strong className="hero__card-value">+250%</strong>
            <svg
              className="hero__spark"
              viewBox="0 0 96 32"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroSparkLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#9B4DFF" />
                  <stop offset="100%" stopColor="#6D20FF" />
                </linearGradient>
                <linearGradient id="heroSparkArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C2CFF" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#7C2CFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M2 28 20 22 38 24 56 13 74 15 94 3v29H2Z"
                fill="url(#heroSparkArea)"
              />
              <path
                d="M2 28 20 22 38 24 56 13 74 15 94 3"
                stroke="url(#heroSparkLine)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="94" cy="3" r="3.5" fill="#7C2CFF" />
            </svg>
          </div>

          {/* Tarjeta flotante: conversión con donut */}
          <div className="hero__card hero__card--conversion">
            <span className="hero__donut" aria-hidden="true">
              <span className="hero__donut-hole" />
            </span>
            <span className="hero__card-stack">
              <span className="hero__card-label">Conversión</span>
              <strong className="hero__card-value">75%</strong>
            </span>
          </div>

          {/* Tarjeta flotante: ventas con mini barras */}
          <div className="hero__card hero__card--sales">
            <span className="hero__card-head">
              <TrendingUp size={15} aria-hidden="true" />
              <span className="hero__card-label">Ventas</span>
            </span>
            <strong className="hero__card-value">+180%</strong>
            <span className="hero__bars" aria-hidden="true">
              <i style={{ "--h": "38%" }} />
              <i style={{ "--h": "58%" }} />
              <i style={{ "--h": "46%" }} />
              <i style={{ "--h": "78%" }} />
              <i style={{ "--h": "100%" }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
