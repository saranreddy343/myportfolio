import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";

const experiences = [
  {
    role: "Software Engineer",
    company: "Veltris",
    period: "Apr 2022 – Present",
    points: [
      "Built responsive web & mobile applications using React.js & React Native.",
      "Improved performance ~30% via lazy loading, code splitting & memoization.",
      "Wrote comprehensive unit tests with Jest & Vitest; conducted 50+ code audits.",
      "Mentored junior developers and reviewed 50+ pull requests.",
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "Veltris",
    period: "Oct 2021 – Mar 2022",
    points: [
      "Promoted to full Software Engineer within 6 months based on performance.",
      "Implemented pixel-perfect UI/UX from Figma designs.",
      "Fixed 30+ bugs and contributed to 10+ new features.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My professional <span className="text-gradient">journey</span>.
          </h2>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          {/* timeline line - animated draw */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"
          />

          {experiences.map((exp, i) => (
            <Reveal
              key={i}
              delay={i * 0.15}
              className={`relative mb-12 md:mb-16 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              } pl-16 md:pl-0`}
            >
              {/* node */}
              <div
                className={`absolute top-2 left-6 md:left-auto ${
                  i % 2 === 0 ? "md:-right-3" : "md:-left-3"
                } -translate-x-1/2 md:translate-x-0`}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-primary grid place-items-center shadow-glow animate-glow-pulse">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-strong rounded-2xl p-7 hover:shadow-elegant group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-muted group-hover:bg-gradient-primary transition-colors shrink-0">
                    <Briefcase size={18} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground mb-4">
                  {exp.period}
                </span>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
