import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Reálne 5★ recenzie z Bookia (services.bookio.com/barbershop-majky).
const reviews = [
  {
    name: 'Katka',
    date: '16. 2. 2026',
    text: 'Skvelé head spa, veľmi príjemný relax, odporúčam. 👌',
  },
  {
    name: 'Peter',
    date: '29. 1. 2026',
    text: 'Skúsený barber, ktorý sa snaží vždy vyhovieť zákazníkovi.',
  },
  {
    name: 'Karaba',
    date: '20. 5. 2026',
    text: 'Dnes som bola so synom a môžem len odporučiť — vždy má vlasy upravené na 1.',
  },
  {
    name: 'Jozef',
    date: '1. 12. 2025',
    text: 'Majky je kúzelník, ďakujem.',
  },
  {
    name: 'Juraj',
    date: '30. 4. 2026',
    text: 'Najlepší barber 🔥',
  },
]

function Counter({ target, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const value = useMotionValue(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(value, target, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = prefix + Math.floor(v) + suffix
        },
      })
      return () => controls.stop()
    }
  }, [inView, target, prefix, suffix, value])

  return (
    <span ref={ref} className="font-display text-[34px] md:text-[42px] text-gold block leading-none mb-1">
      {prefix}0{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-[120px] bg-bg-2 relative">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-12 md:gap-[80px] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="relative group mx-auto md:mx-0 w-full max-w-[400px] md:max-w-none"
          >
            <div
              className="relative aspect-[4/5] bg-cover bg-center bg-no-repeat border border-line transition-transform duration-500 md:group-hover:-translate-x-2 md:group-hover:-translate-y-2"
              style={{
                backgroundImage: "url('/foto/about.webp')",
                boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
              }}
            />
            <div className="absolute top-[15px] left-[15px] -right-[15px] -bottom-[15px] md:top-[25px] md:left-[25px] md:-right-[25px] md:-bottom-[25px] border border-gold -z-10 transition-all duration-500 md:group-hover:top-[30px] md:group-hover:left-[30px] md:group-hover:-right-[30px] md:group-hover:-bottom-[30px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-[13px] md:text-[14px] tracking-[0.3em] text-gold mb-4 md:mb-6 font-sans font-medium">
              O NÁS
            </h3>
            <h2 className="text-[40px] md:text-[56px] mb-5 md:mb-7 leading-[1.05]">
              Viac než strih.
              <br />
              <em className="text-gold font-serif italic">Rituál.</em>
            </h2>
            <p className="text-muted mb-4 md:mb-5 text-[15px] md:text-base leading-[1.7] md:leading-[1.8]">
              Barber Shop Majky vznikol v roku 2019 v Hlohovci s jasnou víziou –
              priniesť mužom kvalitnú starostlivosť, ktorá ide ďaleko za obyčajný
              strih.
            </p>
            <div className="mt-5 md:mt-6">
              <h4 className="text-[11px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase text-gold mb-2.5 md:mb-3 font-sans font-medium">
                Čo hovoria zákazníci
              </h4>
              <div className="space-y-2 md:space-y-2.5">
                {reviews.map((r, i) => (
                  <div
                    key={i}
                    className="border border-line bg-bg-3 rounded-sm px-3.5 py-2.5 md:px-4 md:py-3"
                  >
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <span className="text-gold text-[11px] md:text-xs tracking-[0.18em]">
                        ★★★★★
                      </span>
                      <span className="text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-gold">
                        {r.name}
                      </span>
                    </div>
                    <p className="text-[#cfcfcf] text-[12.5px] md:text-[13px] leading-[1.5] italic">
                      „{r.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-12 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-line">
              <div>
                <Counter target={2019} />
                <span className="text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted">
                  Est.
                </span>
              </div>
              <div>
                <Counter target={1090} suffix="+" />
                <span className="text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted">
                  Followerov
                </span>
              </div>
              <div>
                <Counter target={106} prefix="5★ / " />
                <span className="text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted">
                  Hodnotení
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
