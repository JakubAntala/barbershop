import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'O nás' },
  { href: '#services', label: 'Služby' },
  { href: '#spa', label: 'Head Spa' },
  { href: '#gallery', label: 'Galéria' },
  { href: '#contact', label: 'Kontakt' },
]

const BOOKIO_URL =
  'https://services.bookio.com/barbershop-majky/widget?lang=sk'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setOpen(false)
      setTimeout(() => {
        const target = document.querySelector(href)
        if (target) {
          const y = target.getBoundingClientRect().top + window.scrollY - 70
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 300)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center transition-all duration-400 px-5 md:px-8 ${
          scrolled || open
            ? 'py-3 md:py-3.5 bg-[rgba(10,10,10,0.92)] backdrop-blur-md border-b border-line'
            : 'py-4 md:py-5 bg-transparent border-b border-transparent'
        }`}
        style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display text-[18px] md:text-[22px] tracking-[0.15em] text-ink whitespace-nowrap"
        >
          BARBER SHOP <span className="text-gold">MAJKY</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="relative text-ink text-[13px] uppercase tracking-[0.18em] transition-colors hover:text-gold
                  after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold after:transition-all
                  hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop book button */}
        <a
          href={BOOKIO_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block bg-gold text-bg px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.15em] transition-all
            hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(201,163,90,0.35)]"
        >
          Rezervovať
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative w-11 h-11 flex items-center justify-center -mr-2"
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute block w-6 h-[2px] bg-ink transition-all duration-300 ${
              open ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute block w-6 h-[2px] bg-ink transition-all duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute block w-6 h-[2px] bg-ink transition-all duration-300 ${
              open ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] md:hidden"
            style={{
              background:
                'radial-gradient(ellipse at top, rgba(201,163,90,0.1) 0%, transparent 60%), #0a0a0a',
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 + i * 0.06 }}
                  className="font-display text-[38px] tracking-[0.08em] text-ink hover:text-gold active:text-gold transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={BOOKIO_URL}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.08 + links.length * 0.06 }}
                className="mt-6 bg-gold text-bg px-10 py-4 rounded-sm text-sm font-semibold tracking-[0.2em] uppercase"
              >
                Rezervovať
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.5 }}
                className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 text-muted text-xs tracking-[0.2em]"
              >
                <a href="tel:0907852255" className="text-gold text-lg font-display tracking-[0.15em]">
                  0907 852 255
                </a>
                <span>PRIBINOVA 19 · HLOHOVEC</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
