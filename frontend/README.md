# Barber Shop Majky – Frontend

React + Vite + Tailwind CSS + Framer Motion.

## Spustenie na tvojom počítači

Otvor terminál (PowerShell / CMD) v priečinku `C:\Users\PC\Barber\frontend` a spusti:

```bash
npm install
npm run dev
```

Dev server bude bežať na http://localhost:5173 a otvorí sa automaticky v prehliadači.

## Produkčná verzia

```bash
npm run build
npm run preview
```

Výstup sa vytvorí v `dist/` a dá sa nasadiť na Vercel, Netlify, alebo ako statické súbory za Spring Boot backend.

## Štruktúra projektu

```
frontend/
├── index.html              – HTML shell + Google Fonts
├── package.json
├── tailwind.config.js      – farebná paleta + animácie
├── vite.config.js
├── postcss.config.js
├── public/
│   └── foto/               – všetky fotky barbershopu + logo
└── src/
    ├── main.jsx
    ├── index.css           – Tailwind + custom animácie + btn-primary / btn-ghost
    ├── App.jsx             – hlavný komponent
    └── components/
        ├── Loader.jsx      – úvodný loader s logom
        ├── Nav.jsx         – sticky navigácia so scroll efektom
        ├── Hero.jsx        – hero sekcia s parallax efektom
        ├── About.jsx       – "O nás" + counter animácie
        ├── Services.jsx    – 6 kariet služieb z Bookia
        ├── FeaturedSpa.jsx – dedikovaná Head Spa sekcia s parallax
        ├── Gallery.jsx     – 4-stĺpcová mriežka s fotkami
        ├── CtaBanner.jsx   – CTA s plávajúcimi glow blobs
        ├── Contact.jsx     – adresa, telefón, otváracie hodiny, mapa
        ├── Footer.jsx      – 4-stĺpcová päta
        └── ScrollTop.jsx   – plávajúce tlačidlo návratu hore
```

## Dizajnový systém

Farby sú v `tailwind.config.js` ako Tailwind utility classes:

- `bg-bg` / `text-bg` – hlavná čierna `#0a0a0a`
- `bg-bg-2` – tmavo sivá `#121212`
- `text-gold` / `border-gold` / `bg-gold` – zlatý akcent `#c9a35a`
- `text-muted` – sivý text `#9a9a9a`
- `border-line` – rozdelovacia čiara `#2a2a2a`

Fonty:

- `font-display` – Bebas Neue (titulky)
- `font-serif` – Playfair Display (italic akcenty)
- `font-sans` – Inter (telo textu)

## Animácie

- **Framer Motion** – všetky scroll reveals (`whileInView`) a fade-in
- **Tailwind animations** – custom keyframes v configu (`animate-float-slow`, `animate-pin-bounce`)
- **Pure CSS** – hero shimmer, scroll indicator bounce (v `index.css`)
- **Parallax** – scroll listener v `Hero.jsx` a `FeaturedSpa.jsx`

## Odkazy

- **Rezervácia:** [Bookio](https://services.bookio.com/barbershop-majky/widget?lang=sk)
- **Instagram:** [@barbershopmajky](https://instagram.com/barbershopmajky)
