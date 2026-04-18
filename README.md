# P Saran Kumar Reddy — Portfolio

A modern, responsive personal portfolio website showcasing 4.5+ years of frontend development experience, built with React, TypeScript, and Tailwind CSS.

🔗 **Live:** [saranreddy343.github.io/portfolio](https://saranreddy343.github.io/portfolio)

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 18+, TypeScript, Vite |
| Styling | Tailwind CSS, Glassmorphism design system |
| Animation | Framer Motion (scroll reveals, hover effects) |
| Icons | Lucide React, react-icons (Simple Icons) |
| Backend | Supabase |
| Testing | Vitest |

## Sections

- **Hero** — Animated intro with typewriter effect, social links, and resume download
- **Highlights** — Key stats (4.5+ years experience, 250+ screens, 100+ organizations)
- **About** — Education, current role, and core focus areas
- **Experience** — Animated timeline of professional roles
- **Skills** — Categorized skill grid with a marquee of tech icons
- **Projects** — Featured enterprise projects (HPE, AFP CRM, OPS Portal KSHEMA) with filter tabs
- **Contact** — Phone, email, LinkedIn, GitHub with copy-to-clipboard actions

## Features

- Dark / Light theme toggle with system preference detection
- Scroll-triggered reveal animations (respects `prefers-reduced-motion`)
- Code-split below-the-fold sections via `React.lazy` + `Suspense`
- Fully responsive — mobile hamburger menu with glassmorphism navbar
- Typewriter role cycling animation

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Run tests
bun run test
```

## Project Structure

```
src/
├── components/
│   ├── portfolio/   # All portfolio section components
│   └── ui/          # Reusable UI primitives (shadcn/ui)
├── hooks/           # Custom React hooks
├── integrations/    # Supabase client & types
├── lib/             # Utility functions
├── pages/           # Route-level page components
└── test/            # Test setup & specs
```

## Contact

- **Email:** saranreddy343@gmail.com
- **LinkedIn:** [saran-kumar-reddy-p](https://linkedin.com/in/saran-kumar-reddy-p)
- **GitHub:** [saranreddy343](https://github.com/saranreddy343)

---

© 2026 P Saran Kumar Reddy. Built with React · TypeScript · Tailwind.
