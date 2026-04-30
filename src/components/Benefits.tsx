"use client"

import { useState, useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type USP = {
  title: string
  description: string
  image?: string
  tagline?: string
  highlight?: string
  alt?: string
}

const Benefits = () => {
  const [usps, setUsps] = useState<USP[]>([])
  const containerRef = useRef(null)

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data/uspData.json")
      const data = await res.json()
      setUsps(data.usp ?? [])
    }
    loadData()
  }, [])

  useGSAP(() => {
    if (!usps.length) return

    const sections = gsap.utils.toArray<HTMLElement>(".alternating-section")

    sections.forEach((section) => {
      const text = section.querySelector(".text-content")
      const image = section.querySelector(".image-content")

      if (text) {
        gsap.from(text.children, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        })
      }

      if (image) {
        gsap.from(image, {
          scale: 0.92,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        })

        gsap.to(image, {
          y: -12,
          duration: 2.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      }
    })

    ScrollTrigger.refresh()
  }, { dependencies: [usps], scope: containerRef })

  if (!usps.length) {
    return (
      <section className="flex items-center justify-center min-h-[60vh] text-slate-500">
        Loading benefits...
      </section>
    )
  }

  return (
    <section ref={containerRef} className="bg-[#BBD8A3] text-sky-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        {usps.map((item, index) => (
          <div
            key={item.title}
            className="alternating-section grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12 min-h-[80vh] md:h-screen place-items-center">
            <div
              className={`text-content space-y-4 text-center md:text-left ${index % 2 === 1 ? "md:col-start-1" : "md:order-2"}`}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-16 m-0">
                {item.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-sky-700 font-semibold">
                {item.tagline}
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 m-0">
                {item.description}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-medium text-sky-600">
                {item.highlight}
              </p>
            </div>

            <div
              className={`image-content rounded-3xl bg-sky-50 p-3 shadow-lg ${index % 2 === 1 ? "md:order-1" : ""}`}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-[250px] sm:h-[320px] md:h-[420px] lg:h-[60vh] w-full rounded-2xl object-contain"/>
              ) : (
                <div className="h-[250px] sm:h-[320px] md:h-[420px] lg:h-[60vh] rounded-2xl bg-slate-100" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits