import React, { useState } from 'react'

const experience = [
  {
    title: 'AI/ML Engineer',
    company: 'Optum',
    location: 'Houston, TX (Remote)',
    period: 'Jan 2025 — Present',
    points: [
      'Built production components of an enterprise RAG platform (Azure OpenAI, Hugging Face Transformers, vector embeddings) retrieving across 40,000+ documents.',
      'Improved retrieval Recall@10 from 0.58 to 0.79 via section-aware chunking and a re-ranking stage.',
      'Cut hallucination rate by 50% by routing out-of-corpus questions to analysts instead of generating unsupported answers.',
      'Raised document-classification F1 from 0.61 to 0.83 across 14 classes with a productionized PyTorch classifier.',
      'Integrated a golden-set evaluation framework into GitHub Actions CI/CD, catching 3 regressions before production.',
    ],
    skills: [
      'Azure OpenAI', 'RAG', 'Hugging Face', 'pgvector', 'PyTorch',
      'MLflow', 'GitHub Actions', 'Prompt Engineering', 'Re-ranking',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'IBM',
    location: 'Bangalore',
    period: 'Oct 2020 — Mar 2023',
    points: [
      'Built anomaly detection models processing 450K+ logs/hour, cutting false positives by 32%.',
      'Developed and evaluated NLP classification models with spaCy, improving accuracy by 26%.',
      'Optimized TensorFlow and CUDA-based inference pipelines to improve model response time.',
      'Implemented data drift monitoring to help maintain model stability in production.',
    ],
    skills: ['TensorFlow', 'CUDA', 'spaCy', 'NLP', 'Python', 'Docker'],
  },
]

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[420px] h-[420px] bg-cyan-glow/10 blur-[140px] rounded-full animate-blob" />
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative">
        <h2 className="reveal text-3xl md:text-5xl font-black uppercase tracking-tight text-cyan-glow drop-shadow-[0_0_24px_rgba(56,189,248,0.35)] mb-4">
          What I Can Do
        </h2>
        <p className="reveal text-slate-400 mb-12 max-w-2xl">
          4+ years across enterprise AI/ML and applied engineering roles. Click a role to see
          the highlights and the stack behind it.
        </p>

        <div className="reveal space-y-4">
          {experience.map((role, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={role.title + role.company}
                className="glass-panel glow-border rounded-[18px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {role.title}{' '}
                      <span className="text-cyan-glow font-semibold">· {role.company}</span>
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-slate-400 mt-1.5">
                      {role.location} — {role.period}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-cyan-glow/40 flex items-center justify-center text-cyan-glow text-lg leading-none transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0">
                      <ul className="space-y-2.5 text-sm md:text-base text-slate-300 leading-relaxed list-disc list-inside marker:text-cyan-glow">
                        {role.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-3 py-1.5 rounded-full border border-cyan-glow/25 bg-cyan-glow/10 text-sky-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
