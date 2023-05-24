import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TitleText, TypingText } from './CustomTexts';
import dunnagePic from '../../public/images/dunnageBag/dunnagepic1.png'
import tick from '../../public/images/svgs/tick.svg'
import AnimatedText from './AnimatedText'


const SilobagMounting = ({ className = "" }) => {
    return (
        <main className={` flex pt-0 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pb-0 !pt-0 bg-transparent mx-32 xl:mx-12 lg:mx-6 '>
                <AnimatedText text="Silo Bag Mounting Instructions" className='pb-12 !text-6xl text-primaryDark' />
                <div className='timeline border-l-2 border-primaryDark ml-3 mt-3 py-16 space-y-14'>
                    <div className='relative'>
                        <div className='dot absolute mt-5 -ml-3 bg-primaryDark h-6 w-6 rounded-full border-8 border-double border-light'>
                        </div>
                        <div className='pl-10'>
                            <p className='text-primaryDark'>
                                Mount the Silage Bag onto the bagging machine. Make sure the bag is
                                pushed as far forward as possible. Rotate the Silage Bag 1/4 turn
                                to level plastic on holding pan under the tunnel. (Logo should be
                                on the side of the tunnel).
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    )
}

export default SilobagMounting