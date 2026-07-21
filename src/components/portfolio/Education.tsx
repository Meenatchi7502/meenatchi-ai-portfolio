import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { GraduationCap } from "lucide-react";

const edu = [
  { degree: "MBA", school: "Bharathiar University", period: "2021 – 2023" },
  { degree: "BCA", school: "RVS College of Arts and Science", period: "2017 – 2020" },
];

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="Education" title="Academic foundation" />
      <div className="grid md:grid-cols-2 gap-5">
        {edu.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-6 flex items-center gap-5"
          >
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#7C3AED]/30 to-[#3B82F6]/30 border border-white/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-[#A78BFA]" />
            </div>
            <div>
              <div className="text-xl font-semibold">{e.degree}</div>
              <div className="text-sm text-muted-foreground">{e.school}</div>
              <div className="text-xs font-mono text-muted-foreground mt-1">{e.period}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}