import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
    >
      <div className="h-full w-full bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#00E5FF]" />
    </motion.div>
  );
}