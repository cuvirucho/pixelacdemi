import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import CourseCard from './CourseCard'
import Button from './Button'
import { courses } from '../data/courses'
import { ENROLL_HREF } from '../data/navigation'
import './Courses.css'

function Courses() {
  return (
    <section id="cursos" className="courses section">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestros cursos"
          title={
            <>
              Aprende. Aplica.{' '}
              <span className="section-heading__mark">Crece.</span>
            </>
          }
          subtitle="Cursos prácticos, actuales y 100% aplicables a proyectos reales."
        />

        <ul className="courses__grid">
          {courses.map((course, index) => (
            <li key={course.id}>
              <CourseCard course={course} index={index} />
            </li>
          ))}
        </ul>

        <div className="courses__cta reveal">
          <Button href={ENROLL_HREF} icon={ArrowRight}>
            Ver todos los cursos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Courses
