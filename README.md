# Barber Shop Majky — Still In Progress !
Landing Page

> One-page web for **Barber Shop Majky** in Hlohovec — a real-world client project. Built as a modern, animation-rich React + Vite landing page with online booking through Bookio.

🔗 **Live booking:** [services.bookio.com/barbershop-majky](https://services.bookio.com/barbershop-majky/widget?lang=sk)
📷 **Instagram:** [@barbershopmajky](https://instagram.com/barbershopmajky)

<!-- Once deployed, replace this comment with a screenshot or short demo GIF.
![Barber Shop Majky screenshot](docs/screenshot.png)
-->

## Highlights

-  **Custom dark theme** with gold/rust accents and three-font typography (Bebas Neue · Playfair Display · Inter)
-  **Scroll-driven animations** with Framer Motion + parallax hero & feature sections
-  **Bookio integration** — every CTA links to the real reservation widget
-  **Full barbershop landing flow** — Hero, About, Services (6 cards), Featured Head Spa, Gallery, CTA, Contact, Footer
-  **Responsive** — mobile-first, touch-aware (parallax disabled on mobile to save battery)

## Tech stack

| Layer | Technology |
|-------|------------|
| Build tool | Vite 5 |
| Framework | React 18 |
| Styling | Tailwind CSS 3 + custom design tokens |
| Animations | Framer Motion 11 + custom Tailwind keyframes |
| Booking | Bookio (external widget) |

## Repository layout

```
├── frontend/                    # Vite + React app (the actual product)
│   ├── index.html
│   ├── tailwind.config.js       # Design tokens (colors, fonts, animations)
│   ├── vite.config.js
│   ├── public/foto/             # Photos served by Vite
│   └── src/
│       ├── main.jsx
│       ├── index.css            # Tailwind layers + custom utilities
│       ├── App.jsx
│       └── components/
│           ├── Loader.jsx       # Initial logo loader
│           ├── Nav.jsx          # Sticky nav with scroll effect
│           ├── Hero.jsx         # Parallax hero
│           ├── About.jsx        # About + animated counters
│           ├── Services.jsx     # 6 service cards (Bookio prices)
│           ├── FeaturedSpa.jsx  # Japanese Head Spa highlight
│           ├── Gallery.jsx      # 4-column photo grid
│           ├── CtaBanner.jsx    # CTA with floating glow blobs
│           ├── Contact.jsx      # Address, phone, hours, map
│           ├── Footer.jsx
│           └── ScrollTop.jsx    # Floating back-to-top button
├── content/
│   └── pricing.md               # Source of truth for service prices
├── foto/                        # Original asset library
├── mockup.html                  # Static HTML mockup (initial design draft)
└── README.md
```

## Getting started

### Prerequisites
- Node.js 18+
- npm

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/JakubAntala/barbershop.git
cd barbershop/frontend

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Build for production

```bash
cd frontend
npm run build       # output → dist/
npm run preview     # serve the production build locally
```

The `dist/` output is a static site — deployable on Vercel, Netlify, GitHub Pages, or behind any web server.

## Design system (excerpt)

Color tokens are defined in `tailwind.config.js` and used as Tailwind utilities throughout the app:

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#0a0a0a` | Main background |
| `bg-2` | `#121212` | Section background |
| `gold` | `#c9a35a` | Accent (buttons, headings) |
| `rust` | `#8b3a1f` | Secondary accent |
| `muted` | `#9a9a9a` | Secondary text |
| `line` | `#2a2a2a` | Dividers |

Typography:
- `font-display` — **Bebas Neue** (display titles)
- `font-serif` — **Playfair Display** *italic* (poetic accents)
- `font-sans` — **Inter** (body text)

## Services & pricing

The catalogue mirrors the live Bookio menu (see [`content/pricing.md`](content/pricing.md) for the full source):

- **Beard** · 19 € · 30 min
- **Combo** · 32 € · 1 h
- **Classic cut** · 22 € · 40 min
- **Japanese Head Spa** · from 120 €
- **Vlasová Mezoterapia** · from 80 €
- **Masáž hlavy** add-on · +10 €

## Roadmap

- [ ] Deploy to Vercel / Netlify under a custom domain
- [ ] Lighthouse 95+ pass on all metrics
- [ ] Image optimisation (responsive `srcset`)
- [ ] CMS-driven gallery (so the barber can swap photos without a deploy)

## Author

**Jakub Antala** — Applied Informatics, UKF Nitra
📧 jakub.antala10@gmail.com

---

<sub>🇸🇰 <em>Webová stránka pre Barber Shop Majky v Hlohovci — moderná one-page React/Vite aplikácia s animáciami v Framer Motion, custom Tailwind dizajn systémom (čierna + zlatá + rust paleta) a online rezerváciou cez Bookio. Reálny klientský projekt postavený od mockupu po hotový frontend.</em></sub>
