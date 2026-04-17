"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

type Flavor = {
  name: string
  color: string
  img: string
  price: string
  gradient: string[]
}

const Products = () => {
  const [flavors, setFlavors] = useState<Flavor[]>([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const loadFlavors = async () => {
      try {
        const res = await fetch("/data/flavorsData.json")
        if (!res.ok) throw new Error(`Failed: ${res.status}`)

        const data = await res.json()
        setFlavors(data.flavors)
      } catch (error) {
        console.error("Error fetching flavors:", error)
      }
    }

    loadFlavors()
  }, [])

  // Auto carousel
  useEffect(() => {
    if (flavors.length === 0) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flavors.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [flavors])

  if (flavors.length === 0) return null

  const current = flavors[index]

  return (
    <section className="product-section mt-20">
      <div
        className="relative flex flex-col items-center justify-center h-screen overflow-hidden py-12 text-white transition-all duration-700"
        style={{
          background: `linear-gradient(135deg, ${current.gradient[0]}, ${current.gradient[1]})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Title */}
        <h2 className="relative text-2xl md:text-4xl lg:text-6xl text-center uppercase font-bold mb-4">
          Meet the Flavors
        </h2>

        {/* Subtitle */}
        <p className="relative text-sm md:text-base lg:text-xl text-center opacity-90 mb-10">
          Crafted to refresh. Designed to delight. <br />
          Pick your vibe. Pop the fizz.
        </p>

        {/*  CENTERED IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.img}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -40 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center mb-8"
          >
            <Image
              src={current.img}
              alt={current.name}
              width={280}
              height={280}
              className="object-contain"
            />
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-3">
                {current.name}
              </h1>
              <p className="text-xl opacity-80">
                @ {current.price}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Products