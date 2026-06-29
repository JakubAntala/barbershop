import { motion } from 'framer-motion'

const services = [
  {
    tag: 'Vlasy',
    name: 'Classic Cut',
    price: '22 €',
    duration: '40 min',
    desc: 'Strihanie, umývanie, sušenie, styling. Klasika v modernom prevedení.',
  },
  {
    tag: 'Brada',
    name: 'Beard',
    price: '19 €',
    duration: '30 min',
    desc: 'Tvarovanie brady, hot towel, kontúrovanie, umývanie, ošetrenie, konečná úprava.',
  },
  {
    id: 'combo',
    tag: 'Combo · Najobľúbenejšie',
    name: 'Combo',
    price: '32 €',
    duration: '1 hodina',
    desc: 'Strihanie vlasov, úprava brady, hot towel, umývanie, sušenie, styling, ošetrenie, konečná úprava.',
  },
  {
    tag: 'Japanese Head Spa',
    name: 'Head Spa',
    price: '120 €',
    duration: '1h 30min',
    desc: 'Autentický japonský rituál pre hlbokú relaxáciu a zdravie pokožky hlavy.',
    href: '#spa',
  },
  {
    tag: 'Japanese Head Spa · Premium',
    name: 'Head Spa Rituál',
    price: '180 €',
    duration: '2h 30min',
    desc: 'Najkomplexnejší rituál. Plná starostlivosť o pokožku hlavy, vlasy a zmysly.',
    href: '#spa',
  },
  {
    tag: 'Trichológia',
    name: 'Vlasová Mezoterapia',
    price: 'od 80 €',
    duration: '40 min',
    desc: 'Profesionálne riešenie padania vlasov a posilnenie vlasových folikulov.',
    href: '#mezoterapia',
  },
]

// Plynulý scroll na sekciu s offsetom pod sticky navbar
const scrollToSection = (href) => {
  const target = document.querySelector(href)
  if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-[120px] relative">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-[72px]"
        >
          <span className="sec-kicker">Cenník</span>
          <h2 className="text-[clamp(36px,7vw,72px)]">Služby</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-0.5 bg-gold mx-auto mt-5 md:mt-6"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: Math.min(i * 0.08, 0.4) }}
              id={s.id}
              onClick={s.href ? () => scrollToSection(s.href) : undefined}
              role={s.href ? 'link' : undefined}
              tabIndex={s.href ? 0 : undefined}
              onKeyDown={
                s.href
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        scrollToSection(s.href)
                      }
                    }
                  : undefined
              }
              className={`service-card group relative bg-bg-2 border border-line p-6 md:p-10 overflow-hidden transition-all duration-400 scroll-mt-28
                hover:border-gold hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                  s.href ? 'cursor-pointer' : ''
                }`}
            >
              <span className="absolute top-0 left-0 w-[3px] h-0 bg-gold transition-all duration-400 group-hover:h-full" />
              <span className="inline-block bg-[rgba(198,202,206,0.1)] text-gold px-2.5 py-1 text-[9px] md:text-[10px] tracking-[0.22em] md:tracking-[0.25em] uppercase mb-3 md:mb-4 border border-[rgba(198,202,206,0.3)]">
                {s.tag}
              </span>
              <div className="flex justify-between items-baseline gap-3 mb-2 flex-wrap">
                <h3 className="text-[26px] md:text-[32px] tracking-[0.04em] md:tracking-[0.05em] transition-colors group-hover:text-gold">
                  {s.name}
                </h3>
                <span className="font-display text-[28px] md:text-[36px] text-gold leading-none">
                  {s.price}
                </span>
              </div>
              <div className="text-muted text-[12px] md:text-[13px] tracking-[0.15em] uppercase mb-3 md:mb-[18px]">
                {s.duration}
              </div>
              <p className="text-[#bcbcbc] text-[13.5px] md:text-sm leading-[1.65] md:leading-[1.7]">
                {s.desc}
              </p>
              {s.href && (
                <span className="inline-flex items-center gap-1.5 mt-4 md:mt-5 text-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase transition-all group-hover:gap-2.5">
                  Zobraziť viac
                  <span aria-hidden="true">→</span>
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-6 md:mt-8 text-muted text-[13px] md:text-sm">
          + Masáž hlavy ako doplnok{' '}
          <span className="text-gold">+10 €</span> (+10 min)
        </p>
      </div>
    </section>
  )
}
