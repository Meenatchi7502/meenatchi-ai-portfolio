import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";

const roles = ["AI Engineer", "GenAI Developer", "LLM Engineer", "Agentic AI Engineer", "Python Developer"];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = roles[i];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setI((i + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, i]);
  return text;
}

export default function Hero() {
  const typed = useTyping();
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 grid-bg" />
      <div aria-hidden className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/25 blur-[120px] animate-float-blob" />
      <div aria-hidden className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/25 blur-[120px] animate-float-blob" style={{ animationDelay: "-10s" }} />
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#00E5FF]/10 blur-[100px] animate-pulse-glow" />

      {/* Floating AI nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute w-1 h-1 rounded-full bg-white/60"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            boxShadow: "0 0 10px rgba(167,139,250,0.8)",
          }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for AI / ML opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9]"
        >
          <span className="block">MEENATCHI</span>
          <span className="block text-gradient">SUNDARAM K</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-muted-foreground mt-4">
            AI / ML Engineer
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground"
        >
          {["AI / ML Engineer", "Generative AI", "Agentic AI", "LLMs", "RAG Systems", "Prompt Engineering"].map((t, idx) => (
            <span key={t} className="flex items-center gap-3">
              <span>{t}</span>
              {idx < 5 && <span className="h-1 w-1 rounded-full bg-white/30" />}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 h-8 flex items-center justify-center text-lg md:text-xl font-mono"
        >
          <span className="text-muted-foreground">&gt;&nbsp;</span>
          <span className="text-gradient font-semibold">{typed}</span>
          <span className="ml-1 w-[2px] h-6 bg-[#A78BFA] animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-medium glow-purple hover:scale-105 transition-transform"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={resumeAsset.url}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-foreground font-medium"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-foreground font-medium"
          >
            <Mail className="h-4 w-4" />
            Hire Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}