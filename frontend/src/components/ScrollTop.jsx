import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 w-12 h-12 md:w-12 md:h-12 bg-gold text-bg border-0 rounded-sm flex items-center justify-center cursor-pointer text-lg font-bold z-[50] transition-all md:hover:bg-white md:hover:-translate-y-1 active:scale-95"
          style={{
            boxShadow: '0 10px 30px rgba(198,202,206,0.35)',
            paddingBottom: 'env(safe-area-inset-bottom, 0)',
          }}
        >
          ▲
        </motion.button>
      )}
    </AnimatePresence>
  )
}
