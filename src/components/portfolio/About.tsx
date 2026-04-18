import { motion } from "framer-motion";
import { GraduationCap, Code2, Layers, Users } from "lucide-react";
import Reveal, { StaggerGroup, staggerItem } from "./Reveal";

const points = [
  { icon: Code2, title: "React Ecosystem Expert", desc: "Deep proficiency in React, Redux Toolkit, React Native, TypeScript and modern tooling." },
  { icon: Layers, title: "Performance Optimization", desc: "Lazy loading, memoization, code-splitting & efficient rendering for large datasets." },
  { icon: Users, title: "Agile Mindset", desc: "Comfortable in cross-functional Agile teams, mentoring juniors and reviewing PRs." },
];

const About = () => {
  return (
    <section id="about" className="section-pad relative">
      <div className="container">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Crafting <span className="text-gradient">scalable</span> frontend experiences.
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm a frontend engineer obsessed with clean architecture, performance, and pixel-perfect UI.
            I turn complex problems into delightful, accessible, and fast user experiences.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* Education card */}
          <Reveal className="relative">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-strong rounded-3xl p-8 hover:shadow-elegant sticky top-28"
            >
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary mb-6 shadow-glow">
                <GraduationCap className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Education</h3>
              <div className="space-y-1 mb-6">
                <p className="font-semibold">B.Tech in Computer Science Engineering</p>
                <p className="text-sm text-muted-foreground">AP IIIT-RK Valley, Idupulapaya</p>
              </div>
              <div className="border-t border-border/50 pt-6">
                <p className="text-sm text-muted-foreground mb-3">Currently building at</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary grid place-items-center font-bold text-primary-foreground">V</div>
                  <div>
                    <p className="font-semibold">Veltris</p>
                    <p className="text-xs text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <StaggerGroup className="space-y-5">
            {points.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group glass rounded-2xl p-6 hover:bg-card/80 hover:border-primary/40"
              >
                <div className="flex gap-5">
                  <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-muted group-hover:bg-gradient-primary transition-colors">
                    <Icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
};

export default About;
