"use client"
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import BigText from '@/components/BigText'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'

const page = () => {
  return (
    <section>
      <Header />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <BigText />
      <Footer />
    </section>
  )
}

export default page
