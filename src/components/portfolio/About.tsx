import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Brain, Cpu, Sparkles } from "lucide-react";

const pills = [
  { icon: Brain, label: "LLMs & GenAI" },
  { icon: Cpu, label: "Agentic Systems" },
  { icon: Sparkles, label: "RAG Pipelines" },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About" title="Building intelligence at production scale" />
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            AI/ML Engineer with around <span className="text-foreground font-medium">3 years of experience</span> building intelligent systems using Large Language Models, Generative AI, LangChain, LangGraph, Agentic AI, Retrieval-Augmented Generation (RAG), NLP, and Machine Learning.
          </p>
          <p>
            Experienced in designing <span className="text-foreground font-medium">production-ready AI solutions</span>, semantic search, vector databases, REST APIs, prompt engineering, and scalable ML pipelines.
          </p>
          <p>Passionate about solving real-world business problems using AI.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 grid gap-3"
        >
          {pills.map((p, i) => (
            <motion.div
              key={p.label}
              whileHover={{ y: -3 }}
              className="glass glass-hover rounded-2xl p-5 flex items-center gap-4"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#7C3AED]/30 to-[#3B82F6]/30 border border-white/10">
                <p.icon className="h-5 w-5 text-[#A78BFA]" />
              </div>
              <div>
                <div className="font-medium">{p.label}</div>
                <div className="text-xs text-muted-foreground">Shipped in production</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}