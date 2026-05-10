import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const BOOKIO_URL =
  'https://services.bookio.com/barbershop-majky/widget?lang=sk'

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  (('ontouchstart' in window) || navigator.maxTouchPoints > 0)

export default function FeaturedSpa() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    // Parallax len na desktop
    if (isTouchDevice() || window.innerWidth < 900) return

    const onScroll = () => {
      if (!sectionRef.current || !bgRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (inView) {
        const offset = (window.innerHeight - rect.top) * 0.15
        bgRef.current.style.transform = `translateY(${offset}px) scale(1.08)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="spa"
      ref={sectionRef}
      className="relative overflow-hidden min-h-[80vh] md:min-h-[90vh] flex items-center"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: "url('/foto/3.webp')" }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,5,5,0.85) 0%, rgba(10,10,10,0.75) 100%), linear-gradient(90deg, rgba(5,5,5,0.85) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.4) 100%)',
        }}
      />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative z-[2] max-w-[640px] py-16 md:py-20 px-1 md:px-12"
        >
          <span className="inline-block text-gold text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.45em] uppercase border-l-2 border-gold pl-3 md:pl-3.5 mb-5 md:mb-[22px]">
            Japanese Head Spa
          </span>
          <h2 className="text-[clamp(36px,8vw,84px)] mb-5 md:mb-[22px] leading-[1.05]">
            Rituál <em className="font-serif text-gold italic">hlbokej</em>
            <br />
            regenerácie
          </h2>
          <p className="text-muted text-[15px] md:text-[17px] leading-[1.7] md:leading-[1.8] mb-7 md:mb-8 max-w-[520px]">
            Autentický japonský Head Spa rituál, ktorý kombinuje hĺbkové čistenie
            pokožky hlavy, masáž, aromaterapiu a starostlivosť o vlasy. Ideálne
            spojenie relaxu a viditeľných výsledkov.
          </p>
          <div className="flex gap-4 md:gap-7 mb-8 md:mb-10 flex-wrap">
            {['Hĺbkové čistenie', 'Aromaterapia', 'Zdravie pokožky'].map((f) => (
              <span
                key={f}
                className="text-[10px] md:text-[12px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-ink flex items-center gap-2 md:gap-2.5 before:content-['◆'] before:text-gold before:text-[7px] md:before:text-[8px]"
              >
                {f}
              </span>
            ))}
          </div>
          <div className="flex gap-3 md:gap-6 mb-7 md:mb-9 flex-wrap">
            <div className="border border-line px-4 md:px-6 py-3 md:py-4 bg-[rgba(0,0,0,0.55)] flex-1 min-w-[140px]">
              <div className="text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] text-muted uppercase">
                Head Spa · 1h 30min
              </div>
              <div className="font-display text-[28px] md:text-[36px] text-gold leading-none mt-1.5">
                120 €
              </div>
            </div>
            <div className="border border-line px-4 md:px-6 py-3 md:py-4 bg-[rgba(0,0,0,0.55)] flex-1 min-w-[140px]">
              <div className="text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] text-muted uppercase">
                Rituál · 2h 30min
              </div>
              <div className="font-display text-[28px] md:text-[36px] text-gold leading-none mt-1.5">
                180 €
              </div>
            </div>
          </div>
          <a
            href={BOOKIO_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-block text-center w-full sm:w-auto"
          >
            Objednať Head Spa
          </a>
        </motion.div>
      </div>
    </section>
  )
}
