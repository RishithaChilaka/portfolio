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
  },
  {
    title: 'Claims Denial Risk Decision-Support',
    image: claimsImg,
    description:
      'Full-stack ML application using tuned XGBoost to predict insurance claim denial risk, with SHAP-based explanations and adjustable review thresholds. React/TypeScript dashboard, FastAPI backend, 27 passing tests, Railway deployment for explainable, human-reviewed decisions.',
    demo: 'https://claims-risk-frontend-production.up.railway.app',
    repo: 'https://github.com/RishithaChilaka/claims-denial-risk-predictor',
  },
  {
    title: 'Churn MLOps Platform',
    image: churnImg,
    description:
      'Production-grade end-to-end MLOps pipeline for customer churn prediction using XGBoost, MLflow, and FastAPI. Automated CI/CD, drift monitoring with Evidently, weekly retraining, LLM-powered prediction explanations, Docker containerization, AWS deployment via Terraform.',
    demo: 'https://churn-mlops-production-2c49.up.railway.app/',
    repo: 'https://github.com/RishithaChilaka/churn-mlops',
  },
  {
    title: 'Real-Time Fraud Detection & MLOps',
    image: fraudImg,
    description:
      'Production-style fraud detection platform using Kafka, Spark Structured Streaming, and XGBoost/LightGBM for real-time transaction scoring. SHAP explainability, Streamlit analyst dashboard, MLflow model governance, Airflow retraining, Prometheus/Grafana monitoring, automated AWS deployment with Terraform and GitHub Actions.',
    demo: null,
    repo: 'https://github.com/RishithaChilaka/Realtime-fraud-detection-platform',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="reveal text-3xl md:text-5xl font-black uppercase tracking-tight text-cyan-glow drop-shadow-[0_0_24px_rgba(56,189,248,0.35)] mb-14">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal glass-panel glow-border rounded-[22px] overflow-hidden flex flex-col hover:shadow-[0_0_35px_rgba(56,189,248,0.2)] transition-shadow"
            >
              <img src={p.image} alt={p.title} className="w-full h-44 md:h-48 object-cover" />
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed flex-1">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-cyan-glow to-sky-500 text-[#04121f]"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-4 py-2 rounded-full border border-cyan-glow/40 text-slate-200 hover:bg-cyan-glow/10"
                  >
                    GitHub
                  </a>
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
