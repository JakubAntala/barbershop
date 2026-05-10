import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  { src: '/foto/1.webp' },
  { src: '/foto/3.webp' },
  { src: '/foto/2.webp' },
  { src: '/foto/5.jpg' },
  { src: '/foto/4.webp' },
  { placeholder: 'FOTO 6' },
  { placeholder: 'FOTO 7' },
  { placeholder: 'FOTO 8' },
]

// Iba skutočné fotky sa dajú otvoriť v lightboxe
const photos = items.filter((it) => it.src).map((it) => it.src)

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [],
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length,
      ),
    [],
  )

  // Klávesnica: Esc, ←, →
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, next, prev])

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  const openLightbox = (src) => {
    const idx = photos.indexOf(src)
    if (idx !== -1) setActiveIndex(idx)
  }

  return (
    <section id="gallery" className="py-20 md:py-[120px] bg-bg-2">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-[72px]"
        >
          <span className="sec-kicker">Naša práca</span>
          <h2 className="text-[clamp(36px,7vw,72px)]">Galéria</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-0.5 bg-gold mx-auto mt-5 md:mt-6"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.4) }}
              onClick={() => it.src && openLightbox(it.src)}
              className={`group relative aspect-square border border-line overflow-hidden transition-all duration-400 md:hover:border-gold md:hover:scale-[1.03] md:hover:z-[2] ${
                it.placeholder
                  ? 'bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] flex items-center justify-center'
                  : 'bg-cover bg-center bg-no-repeat cursor-pointer active:scale-[0.98]'
              }`}
              style={it.src ? { backgroundImage: `url(${it.src})` } : {}}
            >
              {it.placeholder ? (
                <span className="text-[#444] text-[10px] tracking-[0.3em]">
                  {it.placeholder}
                </span>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-400 hidden md:block" />
                  <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-gold text-[9px] md:text-[10px] tracking-[0.4em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-100 hidden md:inline-block">
                    VIEW
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-6 md:mt-8 text-muted text-[12px] md:text-[13px] tracking-[0.15em] px-4">
          SLEDUJ NÁS NA INSTAGRAME{' '}
          <a
            href="https://instagram.com/barbershopmajky"
            target="_blank"
            rel="noreferrer"
            className="text-gold hover:underline block md:inline mt-1 md:mt-0"
          >
            @barbershopmajky
          </a>
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            {/* Counter */}
            <div
              className="absolute top-5 left-4 md:top-7 md:left-7 text-gold text-[11px] md:text-xs tracking-[0.3em] font-display z-[2] pointer-events-none"
              style={{ marginTop: 'env(safe-area-inset-top, 0)' }}
            >
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(photos.length).padStart(2, '0')}
            </div>

            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                close()
              }}
              aria-label="Zatvoriť"
              className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 md:w-12 md:h-12 border border-line text-ink flex items-center justify-center text-2xl leading-none transition-all md:hover:border-gold md:hover:text-gold active:border-gold active:text-gold z-[2] bg-bg/40 backdrop-blur-sm"
              style={{ marginTop: 'env(safe-area-inset-top, 0)' }}
            >
              ×
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Predchádzajúca"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 border border-line text-ink flex items-center justify-center text-2xl md:text-3xl leading-none transition-all md:hover:border-gold md:hover:text-gold md:hover:-translate-x-1 active:border-gold active:text-gold bg-bg/40 backdrop-blur-sm z-[2]"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Nasledujúca"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 border border-line text-ink flex items-center justify-center text-2xl md:text-3xl leading-none transition-all md:hover:border-gold md:hover:text-gold md:hover:translate-x-1 active:border-gold active:text-gold bg-bg/40 backdrop-blur-sm z-[2]"
            >
              ›
            </button>

            {/* Image – swipeable */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={photos[activeIndex]}
                alt={`Barber Shop Majky foto ${activeIndex + 1}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onClick={(e) => e.stopPropagation()}
                onDragEnd={(_, info) => {
                  const threshold = 80
                  if (info.offset.x < -threshold || info.velocity.x < -400) next()
                  else if (info.offset.x > threshold || info.velocity.x > 400) prev()
                }}
                className="max-w-[90vw] max-h-[80vh] md:max-h-[85vh] object-contain select-none cursor-grab active:cursor-grabbing"
                style={{
                  boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
                  WebkitUserDrag: 'none',
                }}
                draggable={false}
              />
            </AnimatePresence>

            {/* Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-center px-4 pointer-events-none">
              <span className="hidden md:inline">← → na prepínanie · ESC na zatvorenie</span>
              <span className="md:hidden">Potiahni pre ďalšiu fotku</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
