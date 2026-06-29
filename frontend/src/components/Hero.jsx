import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const BOOKIO_URL =
  'https://services.bookio.com/barbershop-majky/widget?lang=sk'

// Detekcia mobile / touch zariadenia
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  (('ontouchstart' in window) || navigator.maxTouchPoints > 0)

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    // Parallax len na desktop (žere baterku + vyzerá zle na mobile)
    if (isTouchDevice() || window.innerWidth < 900) return

    const onScroll = () => {
      if (!bgRef.current) return
      const y = window.scrollY
      if (y < window.innerHeight) {
        bgRef.current.style.transform = `translateY(${y * 0.35}px) scale(1.05)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center text-center overflow-hidden">
      <div
        ref={bgRef}
        className="absolute -inset-[5%] bg-cover bg-center bg-no-repeat z-0 will-change-transform"
        style={{
          backgroundImage: "url('/foto/hero.webp')",
          filter: 'brightness(0.35) grayscale(0.2)',
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.85) 100%), radial-gradient(ellipse at center, rgba(198,202,206,0.18) 0%, transparent 55%)',
        }}
      />
      <div className="absolute inset-0 z-[1] hero-grid pointer-events-none" />

      <div className="relative z-[3] w-full max-w-[900px] px-5 md:px-6 py-[90px] md:py-0">
        <img
          src="/foto/transparent-lebka.png"
          alt="Barber Shop Majky"
          className="w-[140px] md:w-[180px] mx-auto my-[-7px] md:my-[-3px] hero-logo-anim"
        />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative inline-block overflow-hidden text-[9px] md:text-[11px] tracking-[0.35em] md:tracking-[0.5em] uppercase text-gold mb-4 md:mb-5 border border-gold px-3.5 md:px-[18px] py-1.5 md:py-2 rounded-sm"
        >
          EST. 2019 · HLOHOVEC
          <span
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(198,202,206,0.25), transparent)',
              animation: 'shimmerMove 3s infinite 2s',
            }}
          />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[clamp(40px,10vw,120px)] mb-3 md:mb-4 leading-[1.02]"
        >
          Barber Shop Majky
          <span className="block italic font-serif text-gold text-[0.5em] md:text-[0.55em] font-bold mt-2 px-2">
            Relax + výsledok, nie len strih
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-muted text-sm md:text-base max-w-[560px] mx-auto mb-8 md:mb-10 tracking-wider px-2"
        >
          Barber &middot; Head Spa &middot; Trichológia. Riešime padanie vlasov a
          zdravie pokožky. Prémiová starostlivosť pre moderného muža.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-[18px] justify-center flex-wrap max-w-[320px] sm:max-w-none mx-auto"
        >
          <a
            href={BOOKIO_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-center"
          >
            Rezervuj termín
          </a>
          <a href="#services" className="btn-ghost text-center">
            Naše služby
          </a>
        </motion.div>
      </div>

      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.3em] text-muted z-[3] scroll-indicator-anim">
        SCROLL ▾
      </div>
    </section>
  )
}
