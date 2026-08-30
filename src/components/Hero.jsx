import React from 'react'
import heroImg from '../assets/hero_nobg.png'

// Name is revealed letter by letter, once, on load — no looping.
const NAME_WORDS = [
  { text: 'RISHITHA', className: 'text-white' },
  { text: 'CHILAKA', className: 'text-cyan-glow' },
]

const RevealedName = () => {
  let i = -1
  return (
    <h1 className="reveal select-none text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none drop-shadow-[0_0_50px_rgba(56,189,248,0.3)]">
      {NAME_WORDS.map((word, wi) => (
        <React.Fragment key={word.text}>
          {Array.from(word.text).map((ch) => {
            i += 1
            return (
              <span key={i} className="word-reveal" style={{ animationDelay: `${i * 0.14}s` }}>
                <span className={word.className}>{ch}</span>
              </span>
            )
          })}
          {wi < NAME_WORDS.length - 1 && <span className="inline-block w-3 md:w-5" />}
        </React.Fragment>
      ))}
    </h1>
  )
}

const Hero = () => {
  return (
    <section id="top" className="relative pt-16 md:pt-20 pb-10 md:pb-14 overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-glow/10 blur-[160px] rounded-full animate-blob" />

      <div className="reveal text-center relative z-10">
        <p className="text-cyan-glow text-sm font-semibold tracking-[0.35em] uppercase mb-3">
          AI / ML Engineer
        </p>
        <RevealedName />
      </div>

      {/* photo: rises up from the bottom of the frame and settles at the bottom line */}
      <div className="relative mt-2 md:mt-3 h-[190px] sm:h-[250px] md:h-[300px] lg:h-[340px]">
        <div className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto w-56 sm:w-64 h-32 sm:h-40 rounded-full bg-cyan-glow/30 blur-[70px] opacity-60 z-[5]" />

        <div className="reveal absolute inset-0 z-10 flex items-end justify-center overflow-hidden">
          <img
            src={heroImg}
            alt="Rishitha Chilaka"
            className="animate-rise-in w-48 h-52 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-[21rem] object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 md:h-16 bg-gradient-to-t from-ink to-transparent z-20" />
      </div>

      <div className="reveal relative z-10 text-center max-w-2xl mx-auto mt-4 md:mt-6 px-6">
        <p className="text-slate-300 leading-relaxed">
          4+ years building production Machine Learning and Generative AI systems —
          retrieval-augmented generation, LLM evaluation, and NLP — turning AI prototypes
          into reliable, measurable systems.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="px-7 py-3 rounded-full font-semibold text-sm text-[#04121f] bg-gradient-to-r from-cyan-glow to-sky-500 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.55)] hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-7 py-3 rounded-full font-semibold text-sm border border-cyan-glow/40 text-slate-200 hover:bg-cyan-glow/10 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
