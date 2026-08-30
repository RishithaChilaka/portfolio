import React from 'react'
import aboutImg from '../assets/about_nobg.png'

const skillGroups = [
  {
    title: 'Languages & Data',
    items: ['Python', 'SQL', 'Bash', 'Git', 'Pandas', 'NumPy'],
  },
  {
    title: 'GenAI & LLMs',
    items: [
      'RAG', 'LLMs', 'Azure OpenAI', 'Hugging Face', 'Vector Embeddings',
      'Semantic Search', 'Re-ranking', 'Prompt Engineering', 'Hallucination Mitigation',
    ],
  },
  {
    title: 'ML & Evaluation',
    items: [
      'PyTorch', 'Scikit-learn', 'NLP', 'Document Classification', 'Feature Engineering',
      'Golden Datasets', 'Recall@K', 'Groundedness Evaluation', 'Error Analysis',
    ],
  },
  {
    title: 'MLOps & Cloud',
    items: [
      'MLflow', 'GitHub Actions', 'Docker', 'Model Monitoring', 'Model Versioning',
      'CI/CD', 'pgvector', 'Vector Databases', 'OCR', 'Microsoft Azure',
    ],
  },
]

const allSkills = skillGroups.flatMap((g) => g.items)
const third = Math.ceil(allSkills.length / 3)
const marqueeRows = [
  allSkills.slice(0, third),
  allSkills.slice(third, third * 2),
  allSkills.slice(third * 2),
]

const MarqueeRow = ({ items, direction }) => (
  <div className="overflow-hidden">
    <div
      className={`flex w-max whitespace-nowrap ${
        direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee'
      }`}
    >
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="text-slate-400 font-medium tracking-widest px-6 text-sm md:text-base">
            {item}
          </span>
          <span className="text-cyan-glow/60 font-bold">·</span>
        </span>
      ))}
    </div>
  </div>
)

const introText =
  "Hey, I'm Rishitha, an AI/ML Engineer with 4+ years of experience building production machine learning and Generative AI systems. I specialize in RAG, LLM evaluation, retrieval pipelines, and NLP, with hands-on experience turning AI prototypes into reliable, measurable production systems. I enjoy solving challenging problems at the intersection of ML, data, and software engineering."

const IntroParagraph = () => (
  <p className="text-slate-200 leading-relaxed text-base md:text-lg">
    {introText.split(' ').map((word, i) => (
      <React.Fragment key={i}>
        <span className="word-reveal" style={{ animationDelay: `${i * 0.11}s` }}>
          <span className={word.replace(/,$/, '') === 'Rishitha' ? 'text-white font-semibold' : ''}>
            {word}
          </span>
        </span>
        {' '}
      </React.Fragment>
    ))}
  </p>
)

const About = () => {
  return (
    <section id="about" className="relative py-14 md:py-20 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] bg-cyan-glow/10 blur-[140px] rounded-full animate-blob" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-14 items-stretch">
          <div className="reveal flex justify-center md:justify-start">
            <div className="relative w-full max-w-[260px] h-[420px] md:h-[480px] flex items-end justify-center md:justify-start">
              <div className="absolute inset-x-0 bottom-0 h-2/3 rounded-full bg-cyan-glow/25 blur-[60px] opacity-60" />
              <img
                src={aboutImg}
                alt="Rishitha Chilaka"
                className="relative h-full w-auto object-cover object-top drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          <div className="reveal glass-panel glow-border rounded-[22px] p-6 md:p-8 flex flex-col justify-center gap-3">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-cyan-glow drop-shadow-[0_0_24px_rgba(56,189,248,0.35)]">
              Intro
            </h2>
            <IntroParagraph />
          </div>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-cyan-glow font-semibold mb-3">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full border border-cyan-glow/25 bg-cyan-glow/10 text-sky-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* scrolling skills marquee — three rows, alternating direction */}
      <div className="mt-10 border-y border-cyan-glow/10 bg-panel/60 py-5 space-y-3">
        <MarqueeRow items={marqueeRows[0]} direction="forward" />
        <MarqueeRow items={marqueeRows[1]} direction="reverse" />
        <MarqueeRow items={marqueeRows[2]} direction="forward" />
      </div>
    </section>
  )
}

export default About
