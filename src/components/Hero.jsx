import React from 'react'
import heroImg from '../assets/hero_nobg.png'

const Hero = () => {
  return (
    <section id="top" className="relative pt-24 md:pt-28 pb-20 md:pb-28 overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-glow/10 blur-[160px] rounded-full" />

      <div className="reveal text-center relative z-10">
        <p className="text-cyan-glow text-sm font-semibold tracking-[0.35em] uppercase">
          AI / ML Engineer
        </p>
      </div>

      {/* giant scrolling name behind the photo */}
      <div className="relative mt-4 md:mt-6 h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] flex items-center">
        <div className="absolute inset-0 flex items-center overflow-hidden select-none pointer-events-none">
          <div className="flex w-max whitespace-nowrap animate-marquee-slow">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="text-[18vw] sm:text-[13vw] md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-none text-gradient px-6 md:px-10 drop-shadow-[0_0_50px_rgba(56,189,248,0.3)]"
              >
                Rishitha&nbsp;Chilaka
              </span>
            ))}
          </div>
        </div>

        <div className="reveal relative z-10 mx-auto">
          <div className="relative animate-float">
            <div className="absolute inset-x-0 bottom-0 h-2/3 rounded-full bg-cyan-glow/30 blur-[70px] opacity-60" />
            <img
              src={heroImg}
              alt="Rishitha Chilaka"
              className="relative w-48 h-52 sm:w-64 sm:h-72 md:w-80 md:h-[22rem] lg:w-96 lg:h-96 object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </div>

      <div className="reveal relative z-10 text-center max-w-2xl mx-auto mt-10 md:mt-14 px-6">
        <p className="text-slate-300 leading-relaxed">
          4+ years building production Machine Learning and Generative AI systems —
          retrieval-augmented generation, LLM evaluation, and NLP — turning AI prototypes
          into reliable, measurable systems.
        </p>
        <div className="mt-9 flex flex-wrap gap-4 justify-center">
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
    </section>
  )
}

export default Hero
