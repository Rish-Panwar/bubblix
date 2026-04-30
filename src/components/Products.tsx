"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { WavyCircles } from "./ui/WavyCircles"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

type Flavor = {
  name: string
  color: string
  img: string
  price: string
}

const Products = () => {
  const [flavors, setFlavors] = useState<Flavor[]>([])
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const imageRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data/flavorsData.json")
      const data = await res.json()
      setFlavors(data.flavors)
    }
    loadData()
  }, [])

  useEffect(() => {
    if (!containerRef.current || !flavors.length) return
    gsap.set(containerRef.current, {
      backgroundColor: flavors[0].color,
    })
  }, [flavors])

  const next = () => {
    if (!flavors.length) return
    setDirection(1)
    setIndex((prev) => (prev + 1) % flavors.length)
  }

  const prev = () => {
    if (!flavors.length) return
    setDirection(-1)
    setIndex((prev) =>
      prev === 0 ? flavors.length - 1 : prev - 1
    )
  }

  useGSAP(() => {
    if (
      !imageRef.current ||
      !textRef.current ||
      !containerRef.current ||
      !flavors.length ||
      !flavors[index]
    ) return

    const currentFlavor = flavors[index]
    const elements = [imageRef.current, textRef.current]

    gsap.killTweensOf(elements)

    gsap.to(containerRef.current, {
      backgroundColor: currentFlavor.color,
      duration: 0.8,
      ease: "power2.inOut",
    })

    if (index === 0) {
      gsap.fromTo(
        elements,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        }
      )
      return
    }

    const tl = gsap.timeline()

    tl.to(elements, {
      x: direction * -80,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    })

    tl.set(elements, {
      x: direction * 80,
    })

    tl.to(elements, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    })

  }, { dependencies: [index, flavors] })

  if (!flavors.length) {
    return <div className="h-screen bg-black" />
  }

  const current = flavors[index]

  return (
    <section className="w-full h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center text-white overflow-hidden">

        <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />

        <h2 className="absolute top-6 md:top-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center uppercase font-bold">
          Meet the Flavors
        </h2>

        <div className="relative w-full h-full flex items-center justify-center">

          <button
            onClick={prev}
            className="absolute left-4 md:left-[10%] top-1/2 -translate-y-1/2 text-2xl md:text-3xl px-4 md:px-5 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-20 hover:bg-white/40 transition">
            ←
          </button>

          <div ref={imageRef} className="flex items-center justify-center mt-20">
            {current?.img && (
              <Image
                src={current.img}
                alt={current.name}
                width={420}
                height={420}
                className="w-[70vw] max-w-[420px] h-auto object-contain"
              />
            )}
          </div>

          <button
            onClick={next}
            className="absolute right-4 md:right-[10%] top-1/2 -translate-y-1/2 text-2xl md:text-3xl px-4 md:px-5 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-20 hover:bg-white/40 transition">
            →
          </button>
        </div>

        <div ref={textRef} className="text-center mt-4 md:mt-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            {current.name}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4">
            Pack of 12 @ {current.price}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}

export default Products