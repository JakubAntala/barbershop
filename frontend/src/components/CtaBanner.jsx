import { motion } from 'framer-motion'

const BOOKIO_URL =
  'https://services.bookio.com/barbershop-majky/widget?lang=sk'

export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-[100px] text-center border-y border-line"
      style={{
        background:
          'linear-gradient(135deg, rgba(10,10,10,0.92), rgba(10,10,10,0.98)), radial-gradient(circle at 20% 50%, rgba(201,163,90,0.15), transparent 50%)',
      }}
    >
      <div
        className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full opacity-40 -top-[100px] md:-top-[150px] left-[5%] md:left-[10%] animate-float-slow"
        style={{ background: '#c9a35a', filter: 'blur(60px)' }}
      />
      <div
        className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full opacity-40 -bottom-[100px] md:-bottom-[150px] right-[5%] md:right-[10%] animate-float-slow [animation-direction:reverse] [animation-duration:10s]"
        style={{ background: '#8b3a1f', filter: 'blur(60px)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        className="container-x relative z-[2]"
      >
        <h2 className="text-[clamp(36px,7vw,80px)] mb-4 md:mb-5 leading-[1.05]">
          Pripravený na zmenu?
        </h2>
        <p className="text-muted mb-7 md:mb-9 text-[15px] md:text-base px-2">
          Rezervuj si termín online cez Bookio — jednoducho a rýchlo.
        </p>
        <a
          href={BOOKIO_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary inline-block"
        >
          Rezervuj termín
        </a>
      </motion.div>
    </section>
  )
}
