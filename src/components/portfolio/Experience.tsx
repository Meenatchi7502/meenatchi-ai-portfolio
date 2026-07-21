import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "AI / ML Engineer",
    company: "NielsenIQ",
    period: "Jul 2024 – May 2026",
    highlights: [
      "Built production ML models powering business intelligence",
      "Designed and shipped RAG pipelines over enterprise document corpora",
      "Built Agentic AI workflows using LangChain / LangGraph",
      "Implemented GPT-4 solutions for automation and analytics",
      "Built FastAPI services with observability and versioning",
      "Deep prompt engineering across chained agents",
      "Cross-functional AI automation across business teams",
    ],
  },
  {
    role: "Management Trainee",
    company: "Niwas Housing Finance",
    period: "Jun 2023 – Feb 2024",
    highlights: [
      "Automated recurring financial reporting workflows",
      "Financial data analysis for operations & strategy",
      "Workflow management across departments",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="Where I've shipped" />
      <div className="relative pl-6 md:pl-8">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#7C3AED] via-[#3B82F6] to-transparent" />
        <div className="space-y-10">
          {jobs.map((j, i) => (
            <motion.div
              key={j.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[30px] md:-left-[38px] top-2 h-4 w-4 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#3B82F6] shadow-[0_0_20px_rgba(124,58,237,0.7)]" />
              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <Briefcase className="h-3 w-3" /> {j.company}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">{j.role}</h3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{j.period}</span>
                </div>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  {j.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-[#A78BFA] flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}