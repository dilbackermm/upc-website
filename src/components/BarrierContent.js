import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import barrierliner1 from '../../public/images/barrierliners/barrierliner1.jpg'
import Image from 'next/image'

const BarrierContent = ({ className = "" }) => {
    return (
        <main className={` flex pt-9 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pt-6 bg-transparent  mx-32 xl:mx-12 lg:mx-6'>
                <div className="flex lg:flex-col items-center justify-center">
                    <div className="w-1/2">
                        <Image src={barrierliner1} className='p-6 ' />
                    </div>
                    <div className="w-1/2 ml-24">
                        <motion.p
                            initial={{ y: 200 }}
                            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2  text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            Goods in containers need protection. Especially when we consider the long haul ahead.
                            They need to be protected against corrosion and damage during transit. This is why
                            barrier liners play an important role here.
                        </motion.p>
                        <motion.p
                            initial={{ y: 200 }}
                            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2  text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            At UPC we understand the need for the goods to reach their destination intact.
                        </motion.p>
                    </div>
                </div>
                <div className="py-6 flex flex-col items-center justify-center">

                    <div className="w-[75%]">
                        <p
                            className='p-2  text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            Our range of products is designed to counter all anticipated problems. Like…
                        </p>
                        <div className="w-full">

                            <motion.div
                                initial={{ y: 300, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                                viewport={{ once: true }}
                                className="mt-6 p-5 border-y  border-y-primaryDark 
                                    ">
                                <h2 className="text-3xl font-bold text-primaryDark">Environmental issues</h2>
                                <p className='text-lg py-3 pt-3 leading-8  xs:text-base '>The mode of packaging and the
                                    means of transportation play a key role in managing environmental issues. Our barrier
                                    liners ensure your goods stay safe regardless of changes in the environment.</p>
                            </motion.div>
                            <motion.div
                                initial={{ y: 300, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
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
                                initial={{ y: 300, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
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
            </Layout>
        </main>
    )
}

export default BarrierContent