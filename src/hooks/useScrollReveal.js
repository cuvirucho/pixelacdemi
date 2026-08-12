import { useEffect, useRef } from 'react'

/**
 * Revela los elementos `.reveal` que haya dentro del contenedor (y el propio
 * contenedor si lleva la clase) cuando entran en el viewport.
 *
 * Se observa una sola vez por elemento: al revelarlo se deja de observar, para
 * que la animación no se repita al volver a hacer scroll.
 *
 * @returns {import('react').RefObject<HTMLElement>} ref para el contenedor
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = [...root.querySelectorAll('.reveal')]
    if (root.classList.contains('reveal')) targets.push(root)
    if (targets.length === 0) return

    // Sin IntersectionObserver (o con movimiento reducido) se muestra todo ya.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (typeof IntersectionObserver === 'undefined' || prefersReduced) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold, rootMargin },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}

export default useScrollReveal
