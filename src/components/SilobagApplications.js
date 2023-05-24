import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TitleText, TypingText } from './CustomTexts';
import dunnagePic from '../../public/images/dunnageBag/dunnagepic1.png'
import tick from '../../public/images/svgs/tick.svg'
import AnimatedText from './AnimatedText'


const SilobagApplications = ({ className = "" }) => {
    return (
        <main className={` flex pt-0 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pb-0 !pt-0 bg-transparent mx-32 xl:mx-12 lg:mx-6 '>
                {/* <AnimatedText text="Dunnage bag Sizes" className='pb-12 !text-6xl' /> */}
                <div className="flex lg:flex-col items-center">
                    <div className="w-1/2 lg:w-full">
                        <TitleText textStyles={"text-left sm:!text-4xl !text-7xl text-primaryDark"}
                            title={<>Applications of crown silo Bags</>} />
                    </div>
                    <div className="ml-20 sm:ml-0 w-1/2 sm:py-10 lg:w-full py-0">
                        <motion.p
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='font-medium py-6 lg:py-3 xs:py-1 text-dark text-xl lg:text-lg xs:text-base leading-9 text-left'>
                            Ideal for storing all kinds of grains, dried fruits, fertilizers, fodder, and other
                            stuff.
                        </motion.p>
                        <motion.p
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='font-medium py-6 lg:py-3 xs:py-1 text-dark text-xl lg:text-lg xs:text-base leading-9 text-left'>
                            Special machines are used to load and unload grains and other products
                            from these bags.
                        </motion.p>
                        <motion.p
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='font-medium py-6 lg:py-3 xs:py-1 text-dark text-xl lg:text-lg xs:text-base leading-9 text-left'>
                            Sealed immediately after filling up, trapping the oxygen that’s used up by the grains and produces carbon dioxide. The anaerobic condition prevents the formation of fungus or insects in the bags                        </motion.p>
                    </div>
                </div>
            </Layout>
        </main>
    )
}

export default SilobagApplications