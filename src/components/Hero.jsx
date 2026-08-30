import React from 'react'
import heroImg from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section id="top" className="relative pt-16 md:pt-24 pb-20 md:pb-28">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-glow/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        <div className="reveal">
          <p className="text-cyan-glow text-sm font-semibold tracking-[0.3em] uppercase mb-5">
            AI / ML Engineer
          </p>
          <h1 className="text-[13vw] md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight uppercase text-gradient drop-shadow-[0_0_40px_rgba(56,189,248,0.25)]">
            Rishitha
            <br />
            Chilaka
          </h1>
          <p className="mt-7 text-slate-300 max-w-xl leading-relaxed">
            4+ years building production Machine Learning and Generative AI systems —
            retrieval-augmented generation, LLM evaluation, and NLP — turning AI prototypes
            into reliable, measurable systems.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-7 py-3 rounded-full font-semibold text-sm text-[#04121f] bg-gradient-to-r from-cyan-glow to-sky-500 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.55)] transition-shadow"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-7 py-3 rounded-full font-semibold text-sm border border-cyan-glow/40 text-slate-200 hover:bg-cyan-glow/10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="reveal flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-cyan-glow/40 to-gold/20 blur-2xl opacity-40" />
            <img
              src={heroImg}
              alt="Rishitha Chilaka"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-[22px] glow-border shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
