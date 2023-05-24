import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TitleText, TypingText } from './CustomTexts';
import dunnagePic from '../../public/images/dunnageBag/dunnagepic1.png'
import tick from '../../public/images/svgs/tick.svg'
import AnimatedText from './AnimatedText'
import { silomo } from '@/constants';
import SiloMo from './SiloMo';


const SilobagMounting = ({ className = "" }) => {
    return (
        <main className={` flex pt-0 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pb-20 !pt-0 bg-transparent mx-32 xl:mx-12 lg:mx-6 '>
                <AnimatedText text="Silo Bag Mounting Instructions" className='pb-12 !text-6xl text-primaryDark' />
                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}>
                    {silomo.map((silomo, index) => (
                        <SiloMo
                            key={silomo}
                            number={index + 1}
                            text={silomo}
                        />
                    ))}
                </motion.div>
            </Layout>
        </main>
    )
}

export default SilobagMounting