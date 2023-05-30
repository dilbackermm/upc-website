import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TitleText, TypingText } from './CustomTexts';
import dunnagePic from '../../public/images/dunnageBag/dunnagepic1.png'
import tick from '../../public/images/svgs/tick.svg'
import AnimatedText from './AnimatedText'
import rarrow from '../../public/images/svgs/rightarrow.svg'

const Points = ({ point }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, originX: 0 }}
            transition={{ type: 'tween', }}
            className="flex items-center "
        >

            <Image src={rarrow} alt="check_icon" className='mx-2 sm:mx-0 p-0.5 w-6' />
            <h2 className='py-3 pl-3 text-lg sm:text-base text-dark/75 font-medium'>{point}</h2>
        </motion.li>
    )
}

const SilobagApplications = ({ className = "" }) => {
    return (
        <main className={` flex pt-0 bg-primarylight text-dark w-full min-h-auto 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pb-10 !pt-0 bg-transparent mx-32 xl:mx-12 lg:mx-6 '>
                <div className="flex lg:flex-col items-center">
                    <div className="w-1/2 lg:w-full p-6 lg:p-6">
                        <AnimatedText text="Applications of crown silo Bags"
                            className='text-left text-primaryDark' />
                    </div>
                    <div className="w-1/2 lg:w-full ">
                        <ul>
                            <Points point="Ideal for storing all kinds of grains, dried fruits,
                            fertilizers, fodder, and other stuff." />
                            <Points point="Sealed immediately after filling up, trapping the oxygen
                            that’s used up by the grains and produces carbon dioxide. The anaerobic
                            condition prevents the formation of fungus or insects in the bags" />
                            <Points point="Special machines are used to load and unload grains and
                            other products from these bags." />
                        </ul>
                    </div>
                </div>
            </Layout>
        </main>
    )
}

export default SilobagApplications