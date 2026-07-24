import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 lg:gap-8">
        <div className="text-center lg:text-left order-2 lg:order-1">
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
          className="text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9]"
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
          className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-sm text-muted-foreground"
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
          className="mt-8 h-8 flex items-center justify-center lg:justify-start text-lg md:text-xl font-mono"
        >
          <span className="text-muted-foreground">&gt;&nbsp;</span>
          <span className="text-gradient font-semibold">{typed}</span>
          <span className="ml-1 w-[2px] h-6 bg-[#A78BFA] animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-medium glow-purple hover:scale-105 transition-transform"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Meenatchi_Sundaram_Resume.pdf"
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
          <a
            href="https://github.com/Meenatchi7502"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center h-11 w-11 rounded-full glass glass-hover text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/meenatchi-sundaram953457188"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center h-11 w-11 rounded-full glass glass-hover text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group [perspective:1200px]">
            {/* Spotlight */}
            <div
              aria-hidden
              className="absolute inset-0 -m-16 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),rgba(59,130,246,0.18)_40%,transparent_70%)] blur-2xl"
            />
            {/* Orbiting particles */}
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => {
                const duration = 12 + i * 2;
                const size = 260 + (i % 3) * 30;
                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration, repeat: Infinity, ease: "linear" }}
                  >
                    <span
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{
                        background: i % 2 === 0 ? "#A78BFA" : "#3B82F6",
                        boxShadow: `0 0 12px 2px ${i % 2 === 0 ? "#A78BFA" : "#3B82F6"}`,
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Floating frame */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative transition-transform duration-500 ease-out will-change-transform group-hover:[transform:rotateY(-8deg)_rotateX(6deg)]"
            >
              {/* Glow ring */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,#7C3AED,#3B82F6,#00E5FF,#A78BFA,#7C3AED)] opacity-80 blur-[2px] animate-[spin_8s_linear_infinite]"
              />
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#7C3AED]/40 via-[#3B82F6]/30 to-[#00E5FF]/30 blur-2xl"
              />
              {/* Glass frame */}
              <div className="relative rounded-full p-[3px] glass">
                <div className="relative rounded-full overflow-hidden w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] ring-1 ring-white/10">
                  <img
                    src="/meenatchi-profile.jpg"
                    alt="Meenatchi Sundaram K — AI / ML Engineer"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-[50%_20%] scale-105"
                  />
                  {/* subtle inner sheen */}
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5" />
                </div>
              </div>
            </motion.div>
          </div>
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