import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Galéria – fotky aj videá. type: 'image' | 'video'
const media = [
  { type: 'image', src: '/foto/cut1.webp' },
  { type: 'image', src: '/foto/cut2.webp' },
  { type: 'video', src: '/foto/video1.mp4', poster: '/foto/poster1.webp' },
  { type: 'image', src: '/foto/cut3.webp' },
  { type: 'image', src: '/foto/spa1.webp' },
  { type: 'video', src: '/foto/video2.mp4', poster: '/foto/poster2.webp' },
  { type: 'image', src: '/foto/spa2.webp' },
  { type: 'image', src: '/foto/spa3.webp' },
  { type: 'video', src: '/foto/video3.mp4', poster: '/foto/poster3.webp' },
  { type: 'image', src: '/foto/interior.webp' },
  { type: 'image', src: '/foto/spa4.webp' },
  { type: 'image', src: '/foto/3.webp' },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null
  const current = isOpen ? media[activeIndex] : null

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % media.length)),
    [],
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + media.length) % media.length,
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
          {media.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.4) }}
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-square border border-line overflow-hidden bg-cover bg-center bg-no-repeat cursor-pointer transition-all duration-400 md:hover:border-gold md:hover:scale-[1.03] md:hover:z-[2] active:scale-[0.98]"
              style={{ backgroundImage: `url(${it.type === 'video' ? it.poster : it.src})` }}
            >
              {it.type === 'video' ? (
                <>
                  <div className="absolute inset-0 bg-black/25 transition-colors duration-400 md:group-hover:bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-bg/55 border border-gold backdrop-blur-sm flex items-center justify-center text-gold text-lg md:text-xl pl-1 transition-all md:group-hover:bg-gold md:group-hover:text-bg">
                      ▶
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-gold text-[9px] md:text-[10px] tracking-[0.4em]">
                    VIDEO
                  </span>
                </>
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
              {String(media.length).padStart(2, '0')}
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

            {/* Media – obrázok (swipeable) alebo video */}
            <AnimatePresence mode="wait">
              {current.type === 'video' ? (
                <motion.video
                  key={activeIndex}
                  src={current.src}
                  poster={current.poster}
                  controls
                  autoPlay
                  playsInline
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-[90vw] max-h-[80vh] md:max-h-[85vh] object-contain rounded-sm"
                  style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.7)' }}
                />
              ) : (
                <motion.img
                  key={activeIndex}
                  src={current.src}
                  alt={`Barber Shop Majky ${activeIndex + 1}`}
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
              )}
            </AnimatePresence>

            {/* Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-center px-4 pointer-events-none">
              <span className="hidden md:inline">← → na prepínanie · ESC na zatvorenie</span>
              <span className="md:hidden">Potiahni / šípky pre ďalšie</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
