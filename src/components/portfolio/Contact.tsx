import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Phone, Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "enigmasun326@gmail.com", href: "mailto:enigmasun326@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8667856836", href: "tel:+918667856836" },
  { icon: Linkedin, label: "LinkedIn", value: "meenatchi-sundaram", href: "https://linkedin.com/in/meenatchi-sundaram953457188" },
  { icon: Github, label: "GitHub", value: "Meenatchi7502", href: "https://github.com/Meenatchi7502" },
  { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu", href: "#" },
];

export default function Contact() {
  return (
    <Section id="contact">
      <div className="relative glass rounded-3xl p-10 md:p-16 overflow-hidden">
        <div aria-hidden className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#7C3AED]/30 blur-[100px]" />
        <div aria-hidden className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#3B82F6]/30 blur-[100px]" />
        <div className="relative">
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something intelligent"
            subtitle="Open to AI Engineer, LLM Engineer, and Applied ML roles."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="group glass glass-hover rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10">
                  <c.icon className="h-5 w-5 text-[#A78BFA]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}