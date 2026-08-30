import React, { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

function App() {
  const rootRef = useRef(null)
  useReveal(rootRef)

  const [scrollPct, setScrollPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setScrollPct(max > 0 ? (doc.scrollTop / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={rootRef} className="bg-ink bg-grid-pattern min-h-screen overflow-x-hidden">
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-glow to-sky-500 z-[60] transition-[width] duration-150 ease-out shadow-[0_0_10px_rgba(56,189,248,0.7)]"
        style={{ width: `${scrollPct}%` }}
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
