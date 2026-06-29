import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// === Akciová ponuka – ceny zo základného cenníka ===
const PRICES = {
  cut: 22, // Classic Cut
  beard: 19, // Beard
  combo: 32, // Combo (brada + vlasy)
}
const SEPARATE = PRICES.cut + PRICES.beard // 41 €
const SAVE = SEPARATE - PRICES.combo // 9 €

export default function PromoModal() {
  const [open, setOpen] = useState(false)

  // Zobraz raz za návštevu (reláciu prehliadača)
  useEffect(() => {
    if (sessionStorage.getItem('promoSeen')) return
    const t = setTimeout(() => setOpen(true), 1300)
    return () => clearTimeout(t)
  }, [])

  // Zamkni scroll, keď je otvorené
  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  const dismiss = () => {
    sessionStorage.setItem('promoSeen', '1')
    setOpen(false)
  }

  const goToCombo = () => {
    dismiss()
    setTimeout(() => {
      const el = document.getElementById('combo')
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top: y, behavior: 'smooth' })
        el.classList.add('promo-pulse')
        setTimeout(() => el.classList.remove('promo-pulse'), 2800)
      }
    }, 250)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={dismiss}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[440px] overflow-hidden border border-gold/40 rounded-sm bg-bg-2"
            style={{
              background:
                'linear-gradient(160deg, rgba(20,20,20,0.98), rgba(10,10,10,0.98)), radial-gradient(circle at 30% 0%, rgba(198,202,206,0.18), transparent 60%)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
            }}
          >
            {/* Zatvoriť */}
            <button
              onClick={dismiss}
              aria-label="Zavrieť"
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center text-muted text-xl leading-none transition-colors hover:text-gold active:text-gold z-[2]"
            >
              ×
            </button>

            <div className="px-6 md:px-9 pt-9 pb-7 text-center">
              <span className="inline-block text-gold text-[10px] md:text-[11px] tracking-[0.4em] uppercase border border-gold rounded-sm px-3 py-1.5 mb-5">
                Akciová ponuka
              </span>

              <h3 className="font-display text-[34px] md:text-[42px] leading-[1.05] mb-3">
                Combo: <span className="text-gold">brada + vlasy</span>
              </h3>

              <p className="text-muted text-[14px] md:text-[15px] leading-[1.7] mb-6 max-w-[340px] mx-auto">
                Strih vlasov aj úprava brady v jednom — kompletná premena na
                jednom termíne za výhodnejšiu cenu než samostatne.
              </p>

              {/* Rozpis: samostatne vs. Combo */}
              <div className="flex items-center justify-center gap-2 text-muted text-[12px] md:text-[13px] tracking-[0.04em] mb-3">
                <span>Strih {PRICES.cut} €</span>
                <span className="text-gold">+</span>
                <span>Brada {PRICES.beard} €</span>
                <span className="text-gold">=</span>
                <span className="line-through decoration-rust/80">{SEPARATE} €</span>
              </div>

              <div className="flex items-end justify-center gap-2.5 mb-3">
                <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-muted pb-2">
                  Combo
                </span>
                <span className="font-display text-gold text-[48px] md:text-[56px] leading-none">
                  {PRICES.combo} €
                </span>
              </div>

              <span className="inline-block text-bg bg-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-semibold px-3 py-1 rounded-sm mb-7">
                Ušetríš {SAVE} €
              </span>

              <button
                onClick={goToCombo}
                className="btn-primary w-full text-center"
              >
                Využiť ponuku
              </button>

              <button
                onClick={dismiss}
                className="block mx-auto mt-4 text-muted text-[11px] tracking-[0.2em] uppercase transition-colors hover:text-ink"
              >
                Teraz nie
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
