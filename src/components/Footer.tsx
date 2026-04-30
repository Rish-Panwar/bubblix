"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import CircleText from "./ui/CircleText"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";



gsap.registerPlugin(useGSAP, ScrollTrigger)

const Footer = () => {

  const text = "bubblix".split("")

  // GSAP animation for the circle text
  useGSAP(() => {
    gsap.to(".circle-text", {
      rotation: 360,
      duration: 7,
      repeat: -1,
      ease: "none",
    })
    //  for the footer text
    gsap.to(".letter", {
      y: -22,
      scale: 1.2,
      duration: 0.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.09,
        yoyo: true,
        repeat: -1,
      },
    })
    // for the socials
    const socialTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
      defaults: { ease: "power2.inOut" }
    })
    socialTimeline.to(".social-icon", {
      rotation: '+=720',
      scale: 1.2,
      duration: 0.8,
      stagger: 0.6, 
      transformOrigin: "center",
    })
  }, [])


return (
  <footer className='bg-[#FEE832] text-[#FE6334]'>
    <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 pt-10">
      <h2 className="footer-text text-[10vw] font-black font-sec">
        {text.map((char, i) => (
          <span key={i} className="letter inline-block">
            {char}
          </span>
        ))}
      </h2>
      <div className="absolute right-24 size-20 top-0 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
        <CircleText />
      </div>
    </div>
    {/* Socials */}
    <div className="socials flex pb-10 items-center justify-center gap-10 text-[#FE6334]">
      <a href="https://www.instagram.com/bubblix/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon transition-colors duration-300 hover:text-pink-600" size={32} />
      </a>
      <a href="https://www.facebook.com/bubblix/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="social-icon transition-colors duration-300 hover:text-[#1877F2]" size={32} />
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="social-icon transition-colors duration-300 hover:text-[#25D366]" size={32} />
      </a>
    </div>
  </footer>
)
}

export default Footer
