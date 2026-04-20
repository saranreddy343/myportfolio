import { motion } from "framer-motion";
import { Award, Code2, Building2, Zap } from "lucide-react";
import Reveal, { StaggerGroup, staggerItem } from "./Reveal";
import SkillsMarquee from "./SkillsMarquee";

const stats = [
  { icon: Award, value: "4.5+", label: "Years Experience" },
  { icon: Code2, value: "8+", label: "projects" },
  { icon: Building2, value: "100+", label: "Organizations Supported" },
  { icon: Zap, value: "40%", label: "Performance Boost" },
];

const Highlights = () => {
  return (
    <section className="container relative z-10">
      <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" staggerChildren={0.1}>
        {stats.map(({ icon: Icon, value, label }) => (
          <motion.div
            key={label}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-strong rounded-2xl p-6 group hover:shadow-glow"
          >
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary mb-4 group-hover:scale-110 transition-transform">
              <Icon size={20} className="text-primary-foreground" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{value}</div>
            <div className="text-sm text-muted-foreground mt-1">{label}</div>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
};

export default Highlights;
