"use client"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from './Button'
import { TextSplitter } from './ui/TextSplitter'
gsap.registerPlugin(useGSAP, ScrollTrigger)

const Hero = () => {

    useGSAP(() => {
        const introTimeline = gsap.timeline()
        introTimeline
            .set('.hero', { opacity: 1 })
            .from('.left-can', {
                y: -20,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
            .from('.right-can', {
                y: -20,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            }, -1)
            .from('.hero-header', {
                scale: 3,
                opacity: 0,
                duration: .5,
                ease: 'power4.in',
                stagger: .5
            })
            .from('.hero-header2', {
                scale: 3,
                opacity: 0,
                duration: .5,
                ease: 'power4.inout',
            })
            .from('.hero-subheading', {
                opacity: 0,
                y: 30,
            }, "+=0.5",
            )
            .from('button', {
                opacity: 0,
                y: 10,
                duration: .3
            })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-container',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5,
            }
        })

        scrollTimeline
            .fromTo('body', {
                backgroundColor: '#FFD41D'
            }, {
                backgroundColor: '#FFC7EA',
                overwrite: 'auto'
            },
                0.5,
            )
    })

    return (
        <section className='hero-container smooth-scroll'>
            <div className="hero opacity-0 relative flex items-center justify-between min-h-[75vh] p-0 ">

                {/* LEFT CAN */}
                <img
                    src="./assets/closeup.svg"
                    alt="closeup-can"
                    className="left-can absolute left-0 bottom-0 w-32 md:w-48 lg:w-72 -translate-x-[30%] md:-translate-x-[20%] lg:-translate-x-[10%] rotate-90 drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]" />

                {/* CENTER CONTENT*/}
                <div className="grid w-full">
                    <div className="grid auto-rows-min place-items-center text-center">
                        <h1 className="font-bold lg:text-7xl text-5xl uppercase leading-[0.7] text-orange-500">
                            <TextSplitter text='Live. Laugh. Drink.' className='hero-header' />
                            <span className="hero-header2 text-[#DA3D20] block mt-2">Bubblix.</span>
                        </h1>

                        <div className="hero-subheading mt-6 text-sky-800">
                            <p className="text-2xl lg:text-4xl font-semibold">
                                Discover the joy of carbonated beverages
                            </p>
                            <p className="text-xl font-sec">
                                0 sugar, 0 calories, 5 delicious flavors.
                            </p>
                        </div>
                        <div className="mt-6">
                            <Button />
                        </div>
                    </div>
                </div>

                {/* RIGHT CAN (floating side) */}
                <img
                    src="./assets/closeup1.png"
                    alt="closeup-can"
                    className="right-can absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] md:translate-x-[20%] lg:translate-x-[15%] w-32 md:w-48 lg:w-64 -rotate-30 drop-shadow-2xl" />
            </div>
        </section>
    )
}

export default Hero