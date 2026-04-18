import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile-second.png";
import resume from "@/assets/P_SARAN_KUMAR_REDDY_Resume.pdf";
import Typewriter from "./TypeWriter";

const ROLES = [
  "Frontend Engineer.",
  "React.js Specialist.",
];

const Hero = () => {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28">
      {/* Decorative blobs */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl animate-blob [animation-delay:6s]" />

      <div className="container relative grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-muted-foreground">Available for new opportunities</span>
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </motion.div>

          <div className="space-y-4">
            <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Saran Kumar</span>
              <br />
              <Typewriter words={ROLES} className="text-gradient" />
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-muted-foreground font-medium">
              React.js Specialist · Building Scalable & High-Performance Web Applications
            </motion.p>
          </div>

          <motion.p
            {...fadeUp(0.3)}
            className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Frontend Developer with <span className="text-foreground font-semibold">4.5+ years</span> of
            experience crafting scalable, high-performance web apps with React.js, TypeScript & Redux Toolkit.
            I focus on reusable components, performance optimization, and clean architecture in Agile teams.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                View Projects <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#contact">
                <Mail size={18} /> Contact Me
              </a>
            </Button>
            <Button asChild variant="ghost" size="xl">
              <a href={resume} download="P_SARAN_KUMAR_REDDY_Resume.pdf">
                <Download size={18} /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="flex items-center gap-4 pt-2">
            <span className="text-sm text-muted-foreground">Find me on</span>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/saranreddy343" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/saran-kumar-reddy-p-5185681ab/" },
                { icon: Mail, href: "mailto:saranreddy343@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="grid place-items-center w-10 h-10 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 bg-gradient-primary rounded-full opacity-30 blur-3xl animate-glow-pulse" />
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img
                  src={profile}
                  alt="P Saran Kumar Reddy - Frontend Developer"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: reduce ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease }}
              className="absolute -top-2 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-glow animate-float [animation-delay:1s]"
            >
              <div className="text-xs text-muted-foreground">Experience</div>
              <div className="font-display font-bold text-gradient">4.5+ Years</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: reduce ? 0 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease }}
              className="absolute -bottom-2 -left-6 glass-strong rounded-2xl px-4 py-3 shadow-glow-secondary animate-float [animation-delay:2s]"
            >
              <div className="text-xs text-muted-foreground">Specialty</div>
              <div className="font-display font-bold text-gradient">React.js</div>
            </motion.div>
  
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
