import { motion } from "framer-motion";
import { Code, Database, Library, GitBranch, TestTube2 } from "lucide-react";
import Reveal, { StaggerGroup, staggerItem } from "./Reveal";
import SkillsMarquee from "./SkillsMarquee";

const categories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "React Native", "HTML5", "CSS3", "SASS", "SCSS"],
  },
  {
    icon: Database,
    title: "State Management & Forms",
    skills: ["Redux Toolkit", "React Hook Form", "Yup", "Context API"],
  },
  {
    icon: Library,
    title: "Libraries & Tools",
    skills: ["Material UI", "Ant Design", "Bootstrap", "AG Grid", "Apache ECharts", "TanStack Query"],
  },
  {
    icon: GitBranch,
    title: "Version Control & PM",
    skills: ["Git", "GitHub", "Bitbucket", "JIRA"],
  },
  {
    icon: TestTube2,
    title: "Testing & Documentation",
    skills: ["Jest", "Vitest", "Confluence", "Storybook"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-pad relative">
      <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-radial pointer-events-none" />
      <div className="container relative">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">tech</span> stack.
          </h2>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerChildren={0.08}>
          {categories.map(({ icon: Icon, title, skills }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative glass-strong rounded-2xl p-7 hover:shadow-glow overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary mb-5 shadow-glow group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-muted/70 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
          <Reveal delay={0.1}>
          <SkillsMarquee />
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
