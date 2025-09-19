import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Pricing from '@/components/sections/home/Pricing'
import Cta from '@/components/sections/home/Cta'
import About from '@/components/sections/home/About'
import Contact from '@/components/sections/home/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Cta />
      <About />
      <Contact />
    </>
  )
}