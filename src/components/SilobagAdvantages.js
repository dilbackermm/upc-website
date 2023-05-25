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
            whileHover={{ scale: 1.1, originX: 0 }}
            transition={{ type: 'tween', }}
            className="flex items-center "
        >

            <Image src={rarrow} alt="check_icon" className='mx-2 sm:mx-0 p-0.5 w-6' />
            <h2 className='py-3 pl-3 text-lg sm:text-base text-dark/75 font-medium'>{point}</h2>
        </motion.li>
    )
}

const SilobagAdvantages = ({ className = "" }) => {
    return (
        <main className={` flex pt-0 bg-primarylight text-dark w-full min-h-auto 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='sm:!-mb-20 !pb-10 sm:!pt-0 !pt-28 bg-transparent mx-32 xl:mx-12 lg:mx-6'>
                <div className="flex flex-row-reverse lg:flex-col items-center">
                    <div className="w-1/2 lg:w-full p-6 lg:p-6">
                        <AnimatedText text="Advantages of crown silo Bags"
                            className='text-left text-primaryDark' />
                    </div>
                    <div className="w-1/2 lg:w-full ">
                        <ul>
                            <Points point="Retains original quality and quantity of the products" />
                            <Points point="Ideal for long term storage" />
                            <Points point="Perfect sealing and anaerobic conditions expel insects and fungus  growth within the bag." />
                            <Points point="Protects the goods from adverse climatic conditions during transit." />
                            <Points point="Lower investment costs and lower total annual costs." />
                        </ul>
                    </div>
                </div>
            </Layout>
        </main>
    )
}
export default SilobagAdvantages