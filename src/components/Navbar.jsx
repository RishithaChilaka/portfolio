import React, { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ink/70 border-b border-cyan-glow/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="font-extrabold tracking-widest text-sm md:text-base text-white">
          RISHITHA<span className="text-cyan-glow">.</span>CHILAKA
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm text-slate-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cyan-glow transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="/Rishitha_Chilaka_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-cyan-glow/40 text-cyan-glow hover:bg-cyan-glow/10 transition-colors"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden text-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-slate-300 bg-ink/95 border-b border-cyan-glow/10">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-cyan-glow">
              {l.label}
            </a>
          ))}
          <a
            href="/Rishitha_Chilaka_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-glow"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
