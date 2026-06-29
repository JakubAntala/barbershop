import { motion } from 'framer-motion'

const hours = [
  ['Pondelok', '9:00 – 19:00'],
  ['Utorok', '9:00 – 19:00'],
  ['Streda', '9:00 – 19:00'],
  ['Štvrtok', '9:00 – 19:00'],
  ['Piatok', '9:00 – 19:00'],
  ['Sobota', 'Zatvorené'],
  ['Nedeľa', 'Zatvorené'],
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-[120px]">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-[72px]"
        >
          <span className="sec-kicker">Nájdeš nás</span>
          <h2 className="text-[clamp(36px,7vw,72px)]">Kontakt</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-0.5 bg-gold mx-auto mt-5 md:mt-6"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1"
          >
            <a
              href="https://maps.google.com/?q=Pribinova+19+Hlohovec"
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 md:gap-5 mb-6 md:mb-7 items-start group md:hover:translate-x-1.5 active:opacity-80 transition-all"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 min-w-[2.75rem] md:min-w-[3rem] border border-gold text-gold flex items-center justify-center text-base md:text-lg transition-all md:group-hover:bg-gold md:group-hover:text-bg">
                📍
              </div>
              <div>
                <div className="text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] text-muted uppercase mb-1">
                  Adresa
                </div>
                <div className="text-base md:text-lg text-ink">
                  Pribinova 19
                  <br />
                  920 01 Hlohovec
                </div>
              </div>
            </a>

            <a
              href="tel:0907852255"
              className="flex gap-4 md:gap-5 mb-6 md:mb-7 items-start group md:hover:translate-x-1.5 active:opacity-80 transition-all"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 min-w-[2.75rem] md:min-w-[3rem] border border-gold text-gold flex items-center justify-center text-base md:text-lg transition-all md:group-hover:bg-gold md:group-hover:text-bg">
                ☎
              </div>
              <div>
                <div className="text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] text-muted uppercase mb-1">
                  Telefón
                </div>
                <div className="text-base md:text-lg text-ink md:group-hover:text-gold transition-colors">
                  0907 852 255
                </div>
              </div>
            </a>

            <a
              href="mailto:barbershopmajky@gmail.com"
              className="flex gap-4 md:gap-5 mb-6 md:mb-7 items-start group md:hover:translate-x-1.5 active:opacity-80 transition-all"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 min-w-[2.75rem] md:min-w-[3rem] border border-gold text-gold flex items-center justify-center text-base md:text-lg transition-all md:group-hover:bg-gold md:group-hover:text-bg">
                ✉
              </div>
              <div>
                <div className="text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] text-muted uppercase mb-1">
                  E-mail
                </div>
                <div className="text-base md:text-lg text-ink md:group-hover:text-gold transition-colors break-all">
                  barbershopmajky@gmail.com
                </div>
              </div>
            </a>

            <div className="flex gap-4 md:gap-5 items-start">
              <div className="w-11 h-11 md:w-12 md:h-12 min-w-[2.75rem] md:min-w-[3rem] border border-gold text-gold flex items-center justify-center text-base md:text-lg">
                ⏱
              </div>
              <div className="flex-1">
                <div className="text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] text-muted uppercase mb-2">
                  Otváracie hodiny
                </div>
                <div>
                  {hours.map(([d, t]) => (
                    <div
                      key={d}
                      className="flex justify-between items-center py-2 md:py-2.5 border-b border-line text-[13px] md:text-sm transition-all md:hover:pl-2 md:hover:border-gold"
                    >
                      <span className="text-muted tracking-[0.08em] md:tracking-[0.1em]">
                        {d}
                      </span>
                      <span
                        className={`font-display text-[15px] md:text-lg tracking-[0.08em] md:tracking-[0.1em] ${
                          t === 'Zatvorené' ? 'text-[#555]' : 'text-gold'
                        }`}
                      >
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2"
          >
            <div className="relative w-full aspect-[4/3] border border-line overflow-hidden transition-colors duration-400 md:hover:border-gold">
              <iframe
                title="Barber Shop Majky – Pribinova 19, Hlohovec"
                src="https://www.google.com/maps?q=Pribinova%2019%2C%20920%2001%20Hlohovec&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                style={{ filter: 'grayscale(100%) invert(92%) contrast(85%) hue-rotate(180deg)' }}
              />
              <a
                href="https://maps.google.com/?q=Pribinova+19+Hlohovec"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-bg/90 border border-gold text-gold px-3 py-2 text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] uppercase transition-all md:hover:bg-gold md:hover:text-bg active:bg-gold active:text-bg backdrop-blur-sm z-[2]"
              >
                Otvoriť v mapách
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
