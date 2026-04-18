const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} P Saran Kumar Reddy. All rights reserved.</p>
        <p>
          Built with <span className="text-primary">React</span> · <span className="text-primary">TypeScript</span> · <span className="text-primary">Tailwind</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
