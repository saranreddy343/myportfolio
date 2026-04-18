import { motion, useReducedMotion } from "framer-motion";
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiSass,
  SiRedux, SiReacthookform, SiMui, SiAntdesign, SiBootstrap,
  SiApacheecharts, SiReactquery, SiGit, SiGithub, SiBitbucket,
  SiJira, SiJest, SiVitest, SiStorybook, SiConfluence,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import type { IconType } from "react-icons";

type Item = { name: string; icon: IconType; color: string };

const rowA: Item[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "SASS", icon: SiSass, color: "#CC6699" },
];

const rowB: Item[] = [
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "Ant Design", icon: SiAntdesign, color: "#0170FE" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Apache ECharts", icon: SiApacheecharts, color: "#AA344D" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#172B4D" },
  { name: "Bitbucket", icon: SiBitbucket, color: "#2684FF" },
  { name: "JIRA", icon: SiJira, color: "#0052CC" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
  { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
  { name: "Confluence", icon: SiConfluence, color: "#172B4D" },
];

const Chip = ({ item }: { item: Item }) => {
  const Icon = item.icon;
  return (
    <div className="group flex items-center gap-2.5 px-5 py-3 mx-2 rounded-full glass-strong border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all whitespace-nowrap">
      <Icon className="text-lg shrink-0 transition-transform group-hover:scale-110" style={{ color: item.color }} />
      <span className="text-sm font-medium">{item.name}</span>
    </div>
  );
};

const MarqueeRow = ({ items, reverse = false, duration = 35 }: { items: Item[]; reverse?: boolean; duration?: number }) => {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max"
        animate={reduce ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <Chip key={`${item.name}-${i}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const SkillsMarquee = () => {
  return (
    <div className="mt-14 space-y-3">
      <MarqueeRow items={rowA} duration={40} />
      <MarqueeRow items={rowB} reverse duration={45} />
    </div>
  );
};

export default SkillsMarquee;
