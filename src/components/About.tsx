"use client"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextSplitter } from './ui/TextSplitter'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const About = () => {
    // GSAP animation for the about section
    useGSAP(() => {
        const aboutTimeline = gsap.timeline()
        aboutTimeline.from('.can-group', {
            x: 30,
            y: -30,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        })
        const aboutScrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 60%',
                end: 'bottom 110%',
                scrub: 1,
            }
        })
        aboutScrollTimeline
            .from('.side-heading .split-char', {
                scale: 1.5,
                y: 40,
                rotate: -25,
                opacity: 0,
                stagger: .5,
                ease: 'back.out(3)',
                duration: 1
            })
            .from('.side-body', {
                y: 20,
                opacity: 0,
            })
            

    })

    return (
        <section className='about-section mt-20 px-10 mb-0'>
            <div className="relative z-80 grid md:grid-cols-2 h-screen items-center gap-4">
                <div className="grid auto-rows-min text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-sky-900 uppercase tracking-wide">
                        <TextSplitter text='try all flavors.' className='side-heading' />
                    </h2>
                    <p className="side-body text-xl md:text-2xl text-sky-950 font-sec font-semibold mt-4">
                        Our Soda is made with real fruit extracts, natural sweeteners, and carbonated water, creating a refreshing and guilt-free beverage that satisfies your cravings without compromising on taste.
                    </p>
                </div>
                <div className="grid auto-rows-min">
                    <img
                        src="./assets/group2.png"
                        alt="all flavors"
                        className='can-group right-0' />
                </div>
            </div>
        </section>
    )

}
export default About
