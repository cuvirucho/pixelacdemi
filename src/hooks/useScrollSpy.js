import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la sección visible actualmente, para marcar el enlace
 * activo del navbar. Los ids deben ir en el mismo orden que las secciones
 * aparecen en el DOM.
 *
 * @param {string[]} ids      ids de las secciones a vigilar
 * @param {number}   offset   px que ocupa la navbar fija
 */
export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    let frame = null

    const update = () => {
      frame = null

      // Al llegar al final de la página siempre gana la última sección: puede
      // ser más corta que el viewport y nunca cruzaría la línea de detección.
      const scrollBottom = window.scrollY + window.innerHeight
      if (scrollBottom >= document.documentElement.scrollHeight - 2) {
        setActiveId(ids[ids.length - 1])
        return
      }

      const line = window.scrollY + offset
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }

      setActiveId(current)
    }

    const onScroll = () => {
      // rAF: como mucho una medición por frame aunque el scroll dispare más.
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [ids, offset])

  return activeId
}

export default useScrollSpy
