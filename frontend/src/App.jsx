import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FeaturedMeso from './components/FeaturedMeso'
import FeaturedSpa from './components/FeaturedSpa'
import Gallery from './components/Gallery'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import PromoModal from './components/PromoModal'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader hidden={loaded} />
      <Nav />
      <Hero />
      <About />
      <Services />
      <FeaturedMeso />
      <FeaturedSpa />
      <Gallery />
      <CtaBanner />
      <Contact />
      <Footer />
      <ScrollTop />
      <PromoModal />
    </>
  )
}
