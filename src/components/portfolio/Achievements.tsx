import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section, SectionHeader } from "./Section";
import { TrendingUp, ShieldCheck, Cpu, Sparkles, Zap } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const val = useMotionValue(0);
  const rounded = useTransform(val, (v) => Math.round(v).toString() + suffix);
  useEffect(() => {
    if (inView) {
      const c = animate(val, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
      return c.stop;
    }
  }, [inView, to]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { icon: TrendingUp, value: 35, suffix: "%", label: "ML inference performance improved" },
  { icon: Zap, value: 40, suffix: "%", label: "Workflow errors reduced" },
  { icon: Cpu, value: 3, suffix: "+", label: "Production RAG pipelines shipped" },
];

const badges = [
  { icon: ShieldCheck, label: "High NLP accuracy across production systems" },
  { icon: Sparkles, label: "Business automation via agentic workflows" },
];

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader eyebrow="Impact" title="Measurable outcomes" />
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-8 relative overflow-hidden"
          >
            <s.icon className="h-6 w-6 text-[#A78BFA] mb-4" />
            <div className="text-5xl md:text-6xl font-black tracking-tighter text-gradient">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-5 flex items-center gap-4"
          >
            <b.icon className="h-5 w-5 text-[#3B82F6]" />
            <span className="text-sm">{b.label}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}