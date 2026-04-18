import { lazy, Suspense, useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Highlights from "@/components/portfolio/Highlights";

const About = lazy(() => import("@/components/portfolio/About"));
const Experience = lazy(() => import("@/components/portfolio/Experience"));
const Skills = lazy(() => import("@/components/portfolio/Skills"));
const Projects = lazy(() => import("@/components/portfolio/Projects"));
const Contact = lazy(() => import("@/components/portfolio/Contact"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));

const Index = () => {
  useEffect(() => {
    document.title = "P Saran Kumar Reddy | Frontend Developer & React.js Specialist";
    const desc = "Frontend Developer with 4.5+ years of experience building scalable, high-performance React.js web applications. Hire me for your next project.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Highlights />
      <Suspense fallback={<div className="h-96" />}>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
