import { useCallback, useSyncExternalStore } from 'react'

/**
 * `true` mientras la media query case.
 *
 * Con useSyncExternalStore el valor ya es correcto en el primer render: con
 * useState + useEffect el componente pintaría un frame con el valor por
 * defecto antes de corregirse.
 *
 * @param {string} query  p. ej. '(max-width: 640px)'
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}

export default useMediaQuery
