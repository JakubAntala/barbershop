export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-12 md:pt-[60px] pb-8 md:pb-10 border-t border-line">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-10 mb-8 md:mb-10">
          <div className="col-span-2 md:col-span-1">
            <img
              src="/foto/logo.jpg"
              alt="Barber Shop Majky"
              className="w-[64px] md:w-[72px] mb-3 md:mb-4"
            />
            <p className="text-muted text-[13px] md:text-sm leading-[1.6]">
              Barber · Head Spa · Trichológia v srdci Hlohovca.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase text-gold mb-4 md:mb-[18px] font-sans font-medium">
              Stránka
            </h4>
            <ul className="list-none">
              {[
                ['#about', 'O nás'],
                ['#services', 'Služby'],
                ['#spa', 'Head Spa'],
                ['#gallery', 'Galéria'],
                ['#contact', 'Kontakt'],
              ].map(([h, l]) => (
                <li key={h} className="mb-2 md:mb-2.5">
                  <a
                    href={h}
                    className="text-muted text-[13px] md:text-sm transition-all md:hover:text-gold md:hover:pl-1 active:text-gold inline-block py-1"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase text-gold mb-4 md:mb-[18px] font-sans font-medium">
              Kontakt
            </h4>
            <ul className="list-none">
              <li className="mb-2 md:mb-2.5">
                <a
                  href="tel:0907852255"
                  className="text-muted text-[13px] md:text-sm md:hover:text-gold active:text-gold transition-colors inline-block py-1"
                >
                  0907 852 255
                </a>
              </li>
              <li className="mb-2 md:mb-2.5">
                <a
                  href="https://maps.google.com/?q=Pribinova+19+Hlohovec"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted text-[13px] md:text-sm md:hover:text-gold active:text-gold transition-colors inline-block py-1"
                >
                  Pribinova 19, Hlohovec
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase text-gold mb-4 md:mb-[18px] font-sans font-medium">
              Sleduj nás
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/barbershopmajky"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 md:w-10 md:h-10 border border-line text-muted flex items-center justify-center transition-all md:hover:border-gold md:hover:text-gold md:hover:-translate-y-0.5 active:border-gold active:text-gold"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100021212086936"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 md:w-10 md:h-10 border border-line text-muted flex items-center justify-center transition-all md:hover:border-gold md:hover:text-gold md:hover:-translate-y-0.5 active:border-gold active:text-gold"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M14 9h2.5V6H14c-2.21 0-3.5 1.4-3.5 3.6V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.7c0-.5.3-.7.8-.7Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-5 md:pt-6 text-center text-[#555] text-[10px] md:text-xs tracking-[0.15em]">
          © 2026 BARBER SHOP MAJKY · EST. 2019
        </div>
      </div>
    </footer>
  )
}
