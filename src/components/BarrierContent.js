import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import barrierliner1 from '../../public/images/barrierliners/barrierliner1.jpg'
import Image from 'next/image'
import rarrow from '../../public/images/svgs/rightarrow.svg'
import AnimatedText from './AnimatedText'


const Points = ({ point }) => {
    return (
        <motion.li
            initial={{ x: -200, opacity:0 }}
            whileInView={{ x: 0, opacity:1, transition: { duration: 1, ease: "easeInOut" } }}
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


const BarrierContent = ({ className = "" }) => {
    return (
        <main className={` flex pt-9 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pt-6 bg-transparent  mx-32 xl:mx-12 lg:mx-6'>
                <div className="flex lg:flex-col items-center justify-center">
                    <div className="w-1/2 lg:w-full">
                        <Image src={barrierliner1} alt='barrier liner image' className='p-6 xl:p-4  ' />
                    </div>
                    <div className="w-1/2 ml-24 2xl:ml-20 xl:ml-16  lg:w-full lg:m-0">
                        <p className='p-2  text-xl  text-dark font-normal leading-[2.35rem] xl:leading-[2.1rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            Goods in containers need protection. Especially when we consider the long haul ahead.
                            They need to be protected against corrosion and damage during transit. This is why
                            barrier liners play an important role here.
                        </p>
                        <p className='p-2  text-xl text-dark font-normal leading-[2.35rem] xl:leading-[2.1rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            At UPC we understand the need for the goods to reach their destination intact.
                        </p>
                    </div>
                </div>
                <div className="py-6 flex flex-col items-center justify-center">

                    <div className="w-[75%] lg:w-full">
                        <p
                            className='p-2  text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            Our range of products is designed to counter all anticipated problems. Like…
                        </p>
                        <div className="w-full">

                            <motion.div
                                initial={{ x: -300, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                                viewport={{ once: true }}
                                className="mt-6 p-5 border-y  border-y-primaryDark 
                                    ">
                                <h2 className="text-3xl font-bold text-primaryDark">Environmental issues</h2>
                                <p className='text-lg py-3 pt-3 leading-8  xs:text-base '>The mode of packaging and the
                                    means of transportation play a key role in managing environmental issues. Our barrier
                                    liners ensure your goods stay safe regardless of changes in the environment.</p>
                            </motion.div>
                            <motion.div
                                initial={{ x: -300, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                                viewport={{ once: true }}
                                className="mt-3 p-5 ">
                                <h2 className="text-3xl font-bold text-primaryDark">Storage</h2>
                                <p className='text-lg py-3 pt-3 leading-8  xs:text-base '>Storage is of prime 
                                importance when it comes to goods. Not only does it have to reach on time but 
                                it also needs to stay safe for a long period. Our barrier liners make it very 
                                effective by protecting the goods and ensuring the contents are retained in 
                                their original condition.</p>
                            </motion.div>
                            <motion.div
                                initial={{ x: -300, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                                viewport={{ once: true }}
                                className="mt-3 p-5   border-y  border-y-primaryDark ">
                                <h2 className="text-3xl font-bold text-primaryDark">Protection</h2>
                                <p className='text-lg py-3 pt-6 leading-8  xs:text-base '>Goods stand to get 
                                damaged with long-term storage or even during transportation. This is why we
                                 need to ensure it can withstand adverse climatic conditions that can corrode
                                  or damage the products. Our liners are sealed well so that it easily protects
                                   the contents within protecting them from heat, moisture, and corrosion.</p>
                            </motion.div>


                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-col items-center">
                    <div className="w-1/2 lg:w-full p-9 lg:p-6">
                        <AnimatedText text="Why are barrier liners mandatory"
                            className='text-left text-primaryDark' />
                    </div>
                    <div className="w-1/2 lg:w-full ps-6 lg:ps-1 ">
                        <ul>
                            <Points point="Ideal for protecting all kinds of products" />
                            <Points point="Acts as a shield during unpredictable climatic conditions" />
                            <Points point="Retains the quality of products" />
                            <Points point="Easy for handling" />
                            <Points point="Easy to pick, pack, and move" />
                        </ul>
                    </div>
                </div>

            </Layout>
        </main>
    )
}

export default BarrierContent