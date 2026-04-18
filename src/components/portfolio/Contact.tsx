import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Copy, Check, Calendar, MessageCircle, ArrowUpRight, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Reveal, { StaggerGroup, staggerItem } from "./Reveal";

const PHONE = "+91 8179637403";
const PHONE_DIGITS = "918179637403";
const EMAIL = "saranreddy343@gmail.com";
const LINKEDIN_HANDLE = "Linkedin";
const LINKEDIN_URL = "https://www.linkedin.com/in/saran-kumar-reddy-p-5185681ab/";
const GITHUB_HANDLE = "Github";
const GITHUB_URL = "https://github.com/saranreddy343";
const CALENDLY_URL = "https://calendly.com/"; // update with your real link

type Action = {
  label: string;
  href: string;
  external?: boolean;
  icon?: typeof ArrowUpRight;
  accent?: boolean;
};

type Row = {
  id: string;
  icon: typeof Mail;
  value: string;
  copyValue: string;
  actions: Action[];
};

const rows: Row[] = [
  {
    id: "phone",
    icon: Phone,
    value: PHONE,
    copyValue: PHONE.replace(/\s/g, ""),
    actions: [
      { label: "Call Me", href: `tel:${PHONE.replace(/\s/g, "")}` },
      { label: "WhatsApp", href: `https://wa.me/${PHONE_DIGITS}`, external: true, icon: MessageCircle, accent: true },
    ],
  },
  {
    id: "email",
    icon: Mail,
    value: EMAIL,
    copyValue: EMAIL,
    actions: [{ label: "Send a mail", href: `mailto:${EMAIL}` }],
  },
  {
    id: "linkedin",
    icon: Linkedin,
    value: LINKEDIN_HANDLE,
    copyValue: LINKEDIN_URL,
    actions: [{ label: "Let's Connect", href: LINKEDIN_URL, external: true, icon: ArrowUpRight }],
  },
  {
    id: "github",
    icon: Github,
    value: GITHUB_HANDLE,
    copyValue: GITHUB_URL,
    actions: [{ label: "View Profile", href: GITHUB_URL, external: true, icon: ArrowUpRight }],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      toast({ title: "Copied to clipboard", description: value });
      setTimeout(() => setCopied((c) => (c === id ? null : c)), 1800);
    } catch {
      toast({ title: "Couldn't copy", description: "Please copy manually.", variant: "destructive" });
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-radial pointer-events-none" />

      <div className="container relative">
        <div className="glass-strong rounded-3xl p-6 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center">
            {/* Left: headline + CTA */}
            <Reveal>
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary shadow-glow mb-6">
                <Handshake size={26} className="text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Contact</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Let's build something <span className="text-gradient">meaningful</span> together.
              </h2>
              <p className="text-muted-foreground text-lg mt-5 max-w-md">
                Have a project, role, or idea in mind? Reach out through any channel below — I usually reply within a day.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-8">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                  <Calendar size={18} /> Book a call
                </a>
              </Button>
            </Reveal>

            {/* Right: contact rows */}
            <StaggerGroup className="space-y-4">
              {rows.map(({ id, icon: Icon, value, copyValue, actions }) => (
                <motion.div
                  key={id}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/15 text-primary shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex items-center gap-2">
                      <span className="font-medium truncate">{value}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(id, copyValue)}
                        aria-label={`Copy ${value}`}
                        className="grid place-items-center w-7 h-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
                      >
                        {copied === id ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {actions.map((a) => {
                      const ActionIcon = a.icon;
                      return (
                        <Button
                          key={a.label}
                          asChild
                          variant={a.accent ? "hero" : "glass"}
                          size="sm"
                          className="rounded-full"
                        >
                          <a
                            href={a.href}
                            {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}
                          >
                            {a.label}
                            {ActionIcon && <ActionIcon size={14} />}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
