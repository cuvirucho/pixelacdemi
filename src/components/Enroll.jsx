import { useState } from "react";
import { CircleCheck, Send, ShieldCheck, Clock, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { WhatsAppIcon } from "./BrandIcons";
import { courses, COURSE_PRICE } from "../data/courses";
import { WHATSAPP_GROUP_URL } from "../data/navigation";
import "./Enroll.css";

const TRUST_SIGNALS = [
  {
    id: "grupo",
    text: "Acompañamiento diario en el grupo privado de WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    id: "cupos",
    text: "Cupos limitados por grupo para asegurar acompañamiento real",
    icon: Clock,
  },
  {
    id: "pago",
    // El precio sale del catálogo para que no se desincronice con el del modal
    text: `Pago único de ${COURSE_PRICE}, sin mensualidades ni cargos ocultos`,
    icon: ShieldCheck,
  },
  {
    id: "cert",
    text: "Certificado avalado al completar tu proyecto final",
    icon: Award,
  },
];

const EMPTY_FORM = { name: "", email: "", phone: "", terms: false };

/** Devuelve un objeto de errores; vacío significa que el formulario es válido. */
function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Escribe tu nombre completo.";
  else if (values.name.trim().length < 3)
    errors.name = "El nombre es demasiado corto.";

  if (!values.email.trim())
    errors.email = "Necesitamos tu correo para contactarte.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Revisa el formato del correo.";

  if (!values.phone.trim()) errors.phone = "Escribe un teléfono de contacto.";
  else if (values.phone.replace(/\D/g, "").length < 7)
    errors.phone = "El teléfono no parece completo.";

  if (!values.terms)
    errors.terms = "Debes aceptar los términos para continuar.";

  return errors;
}

/** Campo de formulario con etiqueta y mensaje de error asociados. */
function Field({ id, label, error, children }) {
  return (
    <p className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && (
        <span className="field__error" id={`${id}-error`} role="alert">
          {error}
        </span>
      )}
    </p>
  );
}

/**
 * @param {{ id: string, request: number }} enrollCourse curso que el modal pide
 *   dejar preseleccionado. `request` se incrementa en cada petición, de modo que
 *   volver a pedir el mismo curso también reaplica la selección.
 */
function Enroll({ enrollCourse = { id: "", request: 0 } }) {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  // El navegador puede bloquear la pestaña del grupo: solo cambia el texto de
  // la confirmación, porque el botón de respaldo se muestra en ambos casos.
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [appliedRequest, setAppliedRequest] = useState(enrollCourse.request);

  // Ajuste de estado durante el render, no en un efecto: es el patrón que
  // recomienda React para sincronizarse con un prop sin renders en cascada.
  if (enrollCourse.request !== appliedRequest) {
    setAppliedRequest(enrollCourse.request);

    if (enrollCourse.id) {
      setValues((prev) => ({ ...prev, course: enrollCourse.id }));
      setErrors((prev) =>
        prev.course ? { ...prev, course: undefined } : prev,
      );
      // Si ya se había enviado una solicitud, vuelve a mostrar el formulario
      setIsSent(false);
    }
  }

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Limpia el error del campo en cuanto el usuario lo corrige
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }

    // La pestaña del grupo se abre de forma SÍNCRONA, dentro del mismo gesto de
    // clic: si se difiere (por ejemplo tras un `await`), el navegador la trata
    // como pop-up y la bloquea.
    // Ojo: no se pasa "noopener" como tercer argumento porque entonces
    // window.open devuelve null aunque la pestaña sí se haya abierto, y la
    // detección de bloqueo daría siempre un falso positivo. Anular `opener`
    // a mano es equivalente.
    const groupTab = window.open(WHATSAPP_GROUP_URL, "_blank");
    if (groupTab) groupTab.opener = null;
    setPopupBlocked(!groupTab);

    // ─── Punto de conexión con el backend ────────────────────────────────
    // Aquí es donde se envían los datos al CRM, a un email o a una API:
    //   await fetch('/api/inscripciones', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(values),
    //   })
    // Debe ir DESPUÉS del window.open de arriba, nunca antes: esperar la
    // respuesta rompe el gesto del usuario y el navegador bloquea la pestaña.
    // Sin backend conectado, se muestra directamente la confirmación.
    // ─────────────────────────────────────────────────────────────────────
    setIsSent(true);
  };

  const resetForm = () => {
    setValues(EMPTY_FORM);
    setErrors({});
    setIsSent(false);
    setPopupBlocked(false);
  };

  /** Props comunes de accesibilidad para cada control. */
  const fieldProps = (name) => ({
    id: name,
    name,
    onChange: handleChange,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <section id="inscripcion" className="enroll section">
      <div className="enroll__bg" aria-hidden="true">
        <span className="enroll__glow" />
      </div>

      <div className="container enroll__inner">
        {/* Argumentario */}
        <div className="enroll__pitch">
          <SectionHeading
            align="left"
            theme="dark"
            eyebrow="Inscripción"
            title="Reserva tu cupo en el próximo grupo"
            subtitle="Déjanos tus datos y un asesor te contacta en menos de 24 horas para resolver tus dudas y confirmar tu inscripción."
          />

          <ul className="enroll__signals">
            {TRUST_SIGNALS.map(({ id, text, icon: Icon }) => (
              <li key={id} className="enroll__signal reveal">
                <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Formulario */}
        <div className="enroll__card reveal">
          {isSent ? (
            <div className="enroll__success" role="status">
              <span className="enroll__success-icon" aria-hidden="true">
                <CircleCheck size={38} strokeWidth={1.7} />
              </span>
              <h3 className="enroll__success-title">
                ¡Listo, {values.name.split(" ")[0]}!
              </h3>
              <p className="enroll__success-text">
                {popupBlocked ? (
                  <>
                    Tu navegador bloqueó la pestaña del grupo. Entra desde aquí
                    para recibir el horario y confirmar tu cupo.
                  </>
                ) : (
                  <>
                    Abrimos el grupo de WhatsApp en otra pestaña. Si no la ves,
                    entra desde aquí.
                  </>
                )}{" "}
              </p>

              <div className="enroll__success-actions">
                <Button
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="whatsapp"
                  size="lg"
                  icon={WhatsAppIcon}
                  className="enroll__whatsapp"
                >
                  Entrar al grupo de WhatsApp
                </Button>
                <Button variant="ghost" onClick={resetForm}>
                  Enviar otra solicitud
                </Button>
              </div>
            </div>
          ) : (
            <form className="enroll__form" onSubmit={handleSubmit} noValidate>
              <h3 className="enroll__form-title">Solicita tu cupo</h3>

              <Field id="name" label="Nombre completo" error={errors.name}>
                <input
                  className="field__control"
                  type="text"
                  autoComplete="name"
                  placeholder="Ana Pérez"
                  value={values.name}
                  {...fieldProps("name")}
                />
              </Field>

              <Field id="email" label="Correo electrónico" error={errors.email}>
                <input
                  className="field__control"
                  type="email"
                  autoComplete="email"
                  placeholder="ana@correo.com"
                  value={values.email}
                  {...fieldProps("email")}
                />
              </Field>

              <Field
                id="phone"
                label="Teléfono / WhatsApp"
                error={errors.phone}
              >
                <input
                  className="field__control"
                  type="tel"
                  autoComplete="tel"
                  placeholder="098 123 4567"
                  value={values.phone}
                  {...fieldProps("phone")}
                />
              </Field>

              <p className="field field--check">
                <label className="field__check" htmlFor="terms">
                  <input
                    type="checkbox"
                    checked={values.terms}
                    {...fieldProps("terms")}
                  />
                  <span>
                    Acepto los términos y la política de privacidad de Pixel
                    Academy.
                  </span>
                </label>
                {errors.terms && (
                  <span className="field__error" id="terms-error" role="alert">
                    {errors.terms}
                  </span>
                )}
              </p>

              <Button
                type="submit"
                size="lg"
                icon={Send}
                className="enroll__submit"
              >
                Reservar mi cupo
              </Button>

              <p className="enroll__note">
                Al reservar te abrimos el grupo de WhatsApp del próximo curso.
                Sin compromiso y no compartimos tus datos con terceros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Enroll;
