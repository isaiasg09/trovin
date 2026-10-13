import { useEffect, useRef, useState } from 'react'

/**
 * Hook para disparo de animação de scroll reveal com IntersectionObserver puro.
 * Disparo único (once: true por padrão) e respeito a prefers-reduced-motion.
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Se o usuário prefere movimento reduzido, revela imediatamente sem animação
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    // Se já estiver visível e once for true, não precisa observar novamente
    if (isVisible && once) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, once, isVisible])

  return [ref, isVisible]
}

export default useScrollReveal
