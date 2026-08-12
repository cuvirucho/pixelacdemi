import { useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import CourseCard from "./CourseCard";
import CourseModal from "./CourseModal";
import Button from "./Button";
import { courses } from "../data/courses";
import { ENROLL_HREF } from "../data/navigation";
import "./Courses.css";

/**
 * @param {(courseId: string) => void} onEnroll pide preseleccionar ese curso
 *   en el formulario de inscripción.
 */
function Courses({ onEnroll }) {
  // Una sola instancia de modal para toda la sección: un único bloqueo de
  // scroll y un único listener de Escape, en lugar de uno por tarjeta.
  const [activeCourse, setActiveCourse] = useState(null);

  // Referencia estable: el efecto del modal depende de `onClose` y al re-engancharse
  // devolvería el foco a la tarjeta, sacándolo del diálogo abierto.
  const closeModal = useCallback(() => setActiveCourse(null), []);

  const handleEnroll = (courseId) => {
    setActiveCourse(null);
    onEnroll?.(courseId);
    // El salto al ancla espera al siguiente fotograma, con el modal ya
    // desmontado y el scroll del body devuelto.
    requestAnimationFrame(() => {
      window.location.hash = ENROLL_HREF;
    });
  };

  return (
    <section id="cursos" className="courses section">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestros cursos"
          title={
            <>
              Aprende. Aplica.{" "}
              <span className="section-heading__mark">Crece.</span>
            </>
          }
          subtitle="Cursos prácticos, actuales y 100% aplicables a proyectos reales."
        />

        <ul className="courses__grid">
          {courses.map((course, index) => (
            <li key={course.id}>
              <CourseCard
                course={course}
                index={index}
                onOpen={setActiveCourse}
              />
            </li>
          ))}
        </ul>
      </div>

      {activeCourse && (
        <CourseModal
          course={activeCourse}
          onClose={closeModal}
          onEnroll={handleEnroll}
        />
      )}
    </section>
  );
}

export default Courses;
