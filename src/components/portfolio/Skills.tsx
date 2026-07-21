import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const groups = [
  { title: "Programming", items: ["Python", "SQL", "PySpark"] },
  { title: "Machine Learning", items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Random Forest"] },
  { title: "NLP", items: ["SpaCy", "NLTK", "NER", "Text Classification"] },
  { title: "Generative AI", items: ["OpenAI GPT-4", "Llama", "LangChain", "LangGraph", "LlamaIndex", "Prompt Engineering", "Agentic AI", "RAG", "Embeddings"] },
  { title: "Vector Databases", items: ["FAISS", "Pinecone", "ChromaDB"] },
  { title: "Frameworks", items: ["FastAPI", "Streamlit", "Docker", "Git", "MLflow", "AWS", "Airflow"] },
  { title: "Databases", items: ["MySQL", "PostgreSQL"] },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Skills" title="The stack behind the intelligence" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass glass-hover rounded-2xl p-6 group relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-[#7C3AED]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md text-xs bg-white/[0.04] border border-white/10 text-foreground/90 hover:border-[#7C3AED]/60 hover:bg-[#7C3AED]/10 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}