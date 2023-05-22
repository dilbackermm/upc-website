import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'
import dunnage from '../../public/images/dunnageBag/dunnageBenefit.png'
import Image from 'next/image'


const Benefits = ({ benefit }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, originX: 0 }}
            transition={{ type: 'tween', }}
            className="flex items-center w-full border-b border-b-primaryDark "
        >
            <h2 className='py-5 pl-3 text-2xl sm:text-xl text-primaryDark font-medium '>{benefit}</h2>
        </motion.li>
    )
}



const DunnageBenefits = ({ className = "" }) => {
    return (
        <main className={` flex pt-3 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='pt-0 bg-transparent !z-10 mx-32 xl:mx-12 lg:mx-6 '>
                <AnimatedText text="Benefits of UPC Dunnage Bags " className='!pt-6 pb-14' />
                <Image src={dunnage} className='absolute w-[600px]  right-60 z-20 -translate-y-16' />
                <div className='py-12'>
                   
                    <ul className='mt-12 tex-left border-t border-y-primaryDark'>
                        <Benefits benefit="AAR approved" />
                        <Benefits benefit="Moister resistant" />
                        <Benefits benefit="Light weight" />
                        <Benefits benefit="Easy to remove at destination" />
                        <Benefits benefit="Constructed from 100% recycle materials" />
                        <Benefits benefit="Easy, fast and safe to apply" />
                        <Benefits benefit="Time saving" />
                    </ul>
                    
                </div>
            </Layout>
        </main>
    )
}

export default DunnageBenefits