import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import Reveal, { staggerItem } from "./Reveal";

const projects = [
  {
    name: "HPE - Hewlett Packard Enterprise",
    period: "Jan 2026 – Present",
    tag: "Enterprise",
    summary: "Migrated a legacy React app to a modern architecture, building reusable components used across 20+ screens.",
    achievements: [
      "Improved rendering performance by 40% with optimized grids & charts",
      "Built reusable component library across 20+ screens",
      "Refactored legacy app to a clean, modular architecture",
    ],
    stack: ["React", "TypeScript", "AG Grid", "Apache ECharts", "Redux Toolkit"],
    gradient: "from-primary to-primary-glow",
  },
  {
    name: "AFP CRM",
    period: "Feb 2025 – Dec 2025",
    tag: "SaaS",
    summary: "Multi-tenant CRM serving 100+ organizations with advanced content authoring and high-performance data grids.",
    achievements: [
      "Multi-tenant architecture supporting 100+ organizations",
      "Integrated Lexical editor for rich content creation",
      "Optimized performance for 10,000+ records",
    ],
    stack: ["React", "TypeScript", "Lexical", "TanStack Query", "MUI"],
    gradient: "from-secondary to-primary",
  },
  {
    name: "OPS Portal - KSHEMA",
    period: "Nov 2023 – Dec 2024",
    tag: "Internal Tool",
    summary: "Internal operations portal for 200+ employees featuring RBAC, workflow automation and form-heavy flows.",
    achievements: [
      "Used by 200+ internal employees",
      "Built fine-grained RBAC system & workflow automation",
      "Reduced form errors by 45% with React Hook Form + Yup",
    ],
    stack: ["React", "Redux Toolkit", "React Hook Form", "Yup", "Ant Design"],
    gradient: "from-primary-glow to-secondary",
  },
];

const filters = ["All", "Enterprise", "SaaS", "Internal Tool"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Selected <span className="text-gradient">work</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass hover:bg-muted"
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.name}
                layout
                variants={staggerItem}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: i * 0.06 }}
                className={`group relative glass-strong rounded-3xl p-8 hover:shadow-elegant overflow-hidden ${
                  i === 0 && filter === "All" ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-br ${p.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} shadow-glow`}>
                        <Building2 size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                          {p.tag}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">{p.name}</h3>
                      </div>
                    </div>
                    {/* <button className="grid place-items-center w-10 h-10 rounded-full bg-muted group-hover:bg-gradient-primary group-hover:rotate-45 transition-all duration-500 shrink-0">
                      <ArrowUpRight size={18} className="group-hover:text-primary-foreground" />
                    </button> */}
                  </div>

                  <p className="text-xs font-medium text-muted-foreground mb-4">{p.period}</p>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{p.summary}</p>

                  <ul className="space-y-2 mb-6">
                    {p.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-sm">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-primary shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-5 border-t border-border/50">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted/70 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
