import { useEffect } from 'react'

// Adds a scroll-triggered fade/slide-up reveal to any element with
// className "reveal" inside the given container ref.
export default function useReveal(containerRef) {
  useEffect(() => {
    const root = containerRef?.current || document
    const els = root.querySelectorAll('.reveal')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [containerRef])
}
