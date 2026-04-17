"use client"
import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Scene from '@/components/Scene'
import ViewCanvas from '@/components/ViewCanvas'



const page = () => {
  return (
    <section>
      {/* <Scene /> */}
      <Header />
      <Hero />
      <About />
      <ViewCanvas />
      <Products />
    </section>
  )
}

export default page
