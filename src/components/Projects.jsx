import React from 'react'
import ragImg from '../assets/proj-rag.jpg'
import claimsImg from '../assets/proj-claims.jpg'
import churnImg from '../assets/proj-churn.jpg'
import fraudImg from '../assets/proj-fraud.jpg'

const projects = [
  {
    title: 'Enterprise RAG AI Agent Platform',
    image: ragImg,
    description:
      'Enterprise-grade document Q&A platform with hybrid BM25 + FAISS retrieval, Reciprocal Rank Fusion, and a LangGraph multi-agent workflow. Source-grounded citations, hallucination detection, bounded self-correction, JWT-based RBAC, MLflow evaluation, and Kubernetes/AWS deployment.',
    demo: 'https://enterprise-rag-agent-platform-2ydd.onrender.com/docs',
    repo: 'https://github.com/RishithaChilaka/Enterprise-RAG-ai-agent-platform',
    tags: ['LangGraph', 'FAISS', 'BM25', 'RBAC', 'MLflow'],
  },
  {
    title: 'Claims Denial Risk Decision-Support',
    image: claimsImg,
    description:
      'Full-stack ML application using tuned XGBoost to predict insurance claim denial risk, with SHAP-based explanations and adjustable review thresholds. React/TypeScript dashboard, FastAPI backend, 27 passing tests, Railway deployment for explainable, human-reviewed decisions.',
    demo: 'https://claims-risk-frontend-production.up.railway.app',
    repo: 'https://github.com/RishithaChilaka/claims-denial-risk-predictor',
    tags: ['XGBoost', 'SHAP', 'FastAPI', 'React/TS'],
  },
  {
    title: 'Churn MLOps Platform',
    image: churnImg,
    description:
      'Production-grade end-to-end MLOps pipeline for customer churn prediction using XGBoost, MLflow, and FastAPI. Automated CI/CD, drift monitoring with Evidently, weekly retraining, LLM-powered prediction explanations, Docker containerization, AWS deployment via Terraform.',
    demo: 'https://churn-mlops-production-2c49.up.railway.app/',
    repo: 'https://github.com/RishithaChilaka/churn-mlops',
    tags: ['MLflow', 'Evidently', 'Docker', 'Terraform'],
  },
  {
    title: 'Real-Time Fraud Detection & MLOps',
    image: fraudImg,
    description:
      'Production-style fraud detection platform using Kafka, Spark Structured Streaming, and XGBoost/LightGBM for real-time transaction scoring. SHAP explainability, Streamlit analyst dashboard, MLflow model governance, Airflow retraining, Prometheus/Grafana monitoring, automated AWS deployment with Terraform and GitHub Actions.',
    demo: null,
    repo: 'https://github.com/RishithaChilaka/Realtime-fraud-detection-platform',
    tags: ['Kafka', 'Spark', 'XGBoost', 'Airflow', 'Grafana'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-0 w-[500px] h-[500px] bg-cyan-glow/10 blur-[160px] rounded-full animate-blob" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
        <h2 className="reveal text-3xl md:text-5xl font-black uppercase tracking-tight text-cyan-glow drop-shadow-[0_0_24px_rgba(56,189,248,0.35)] mb-4">
          Selected Work
        </h2>
        <p className="reveal text-slate-400 mb-16 max-w-2xl">
          A few production systems I've designed, built, and shipped end to end.
        </p>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group border-t border-cyan-glow/10 py-12 md:py-16 first:border-t-0 first:pt-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
                <div
                  className={`overflow-hidden rounded-[22px] glow-border transition-shadow duration-500 group-hover:shadow-[0_0_45px_rgba(56,189,248,0.25)] ${
                    i % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>

                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="text-cyan-glow font-mono text-sm tracking-widest">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4 group-hover:text-cyan-glow transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full border border-cyan-glow/25 bg-cyan-glow/10 text-sky-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-cyan-glow to-sky-500 text-[#04121f] hover:scale-105 transition-transform duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-4 py-2 rounded-full border border-cyan-glow/40 text-slate-200 hover:bg-cyan-glow/10 hover:scale-105 transition-transform duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
