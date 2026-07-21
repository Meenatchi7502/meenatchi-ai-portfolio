export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Meenatchi Sundaram K. Crafted with intelligence.</div>
        <div className="font-mono">AI · ML · GenAI · Agentic</div>
      </div>
    </footer>
  );
}