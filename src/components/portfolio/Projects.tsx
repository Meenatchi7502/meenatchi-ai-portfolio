import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "LLM Powered FAQ & Document Intelligence Assistant",
    blurb: "Enterprise Q&A across unstructured document corpora, powered by an agentic RAG workflow.",
    stack: ["Python", "LangChain", "LangGraph", "GPT-4", "FAISS", "FastAPI", "Streamlit"],
    features: ["Semantic Search", "Document Q&A", "RAG", "Agentic Workflow"],
    gradient: "from-[#7C3AED] to-[#3B82F6]",
  },
  {
    title: "AI Powered Document Validation System",
    blurb: "Classifies, summarises and scores confidence over incoming business documents at scale.",
    stack: ["GPT-4", "LangChain", "ChromaDB", "Streamlit", "XGBoost", "Random Forest"],
    features: ["Document Classification", "Summarization", "Confidence Score", "Semantic Search"],
    gradient: "from-[#3B82F6] to-[#00E5FF]",
  },
  {
    title: "Fraud Detection & Anomaly Intelligence Engine",
    blurb: "Real-time hybrid detection combining classical ML, deep learning and LLM reasoning.",
    stack: ["PyTorch", "XGBoost", "Isolation Forest", "LLMs", "PostgreSQL", "AWS", "Docker"],
    features: ["Fraud Detection", "Anomaly Reports", "NER", "Real-time Intelligence"],
    gradient: "from-[#00E5FF] to-[#7C3AED]",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader eyebrow="Projects" title="Selected work" subtitle="Production-grade AI systems solving real business problems." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-3xl p-6 flex flex-col overflow-hidden hover:border-[#7C3AED]/40 transition-colors"
          >
            <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${p.gradient} opacity-70`} />
            <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br ${p.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />

            <div className="relative flex items-start justify-between mb-4">
              <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" />
            </div>

            <h3 className="relative text-lg font-semibold leading-snug mb-2">{p.title}</h3>
            <p className="relative text-sm text-muted-foreground mb-5">{p.blurb}</p>

            <div className="relative mb-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Features</div>
              <div className="flex flex-wrap gap-1.5">
                {p.features.map((f) => (
                  <span key={f} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mb-5">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-gradient-to-r from-[#7C3AED]/15 to-[#3B82F6]/15 border border-[#7C3AED]/25 text-foreground/90">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-auto flex items-center gap-2 pt-4 border-t border-white/5">
              <a href="https://github.com/Meenatchi7502" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full glass glass-hover">
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full glass glass-hover">
                <ExternalLink className="h-3.5 w-3.5" /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}