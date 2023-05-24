import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'
import aboutLogo from '../../public/images/about/about-logo.png'
import Image from 'next/image'
import Stats from './Stats'
import WhyUpc from './WhyUpc'




const AboutUs = ({ className = "" }) => {
    return (
        <main className={` -pt-16  flex items-center bg-primarylight text-primaryDark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='aboutus' >
            <Layout className=' bg-transparent z-20 mx-32 xl:mx-12 lg:mx-6'>
                <AnimatedText text="About Us" className='mb-16 !text-8xl lg:!text-7xl sm:!text-6xl xs:!text-5xl sm:mb-8 ' />
                <div className="grid grid-cols-2 lg:flex lg:flex-col gap-16 2xl:gap-9 xl:gap-6 items-center">
                    <div className="flex flex-col items-center">


                        <Image src={aboutLogo} alt="UPC Logo" className="w-full h-auto px-24 " />
                        <h2 className='Capitalize font-bold text-Dark text-5xl lg:text-4xl text-center 
    leading-[60px] py-6  border-y-2 border-primaryDark '>UNITED PACKAGING CONSOLIDATORS</h2>
                        <div className="flex justify-between  pt-3 ">
                            <h6 className='font-bold text-xl lg:text-lg sm:text-base text-primaryDark  p-5 mx-2 sm:p-2 sm:mx-1' >Accessible</h6>
                            <h6 className='font-bold text-xl lg:text-lg sm:text-base text-primaryDark p-5 mx-2 sm:p-2 sm:mx-1' >Adaptable</h6>
                            <h6 className='font-bold text-xl lg:text-lg sm:text-base text-primaryDark p-5 mx-2 sm:p-2 sm:mx-1' >Affordable</h6>
                        </div>

                    </div>
                    <motion.div className='flex flex-col '>
                        <motion.p
                            initial={{ y: 200 }}
                            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2 text-xl text-dark font-normal leading-[2.25rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            UPC is a fully integrated manufacturing company offering evolving packaging solutions for all your logistic needs.
                        </motion.p>
                        <motion.p
                            initial={{ y: 200 }}
                            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2 text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            At UPC, our strength is our capacity to produce &#40;per month&#41;  </motion.p>
                        <motion.div className=' flex justify-between py-5 px-2' >
                            <motion.div
                                initial={{ y: 200 }}
                                whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center">
                                <h1 className='text-5xl lg:text-3xl xs:text-2xl font-bold'>15,000</h1>
                                <p className='text-lg md:text-lg sm:text-base xs:text-sm pt-2 text-primaryDark/90 text-center'>  PE Liner bags</p>
                            </motion.div>
                            <motion.div
                                initial={{ y: 200 }}
                                whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center">
                                <h1 className='text-5xl lg:text-3xl xs:text-2xl font-bold'>6,000</h1>
                                <p className='text-lg md:text-lg sm:text-base xs:text-sm pt-2 text-primaryDark/90text-center '>woven coated <br />
                                    PP/HDP Liners</p>
                            </motion.div>
                            <motion.div
                                initial={{ y: 200 }}
                                whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center">
                                <h1 className='text-5xl lg:text-3xl xs:text-2xl font-bold'>15,000</h1>
                                <p className='text-lg md:text-lg sm:text-base xs:text-sm pt-2 text-primaryDark/90 text-center'>Thermal / <br />
                                    Aluminium Liners</p>
                            </motion.div>

                        </motion.div>
                        <motion.p
                            initial={{ y: 200 }}
                            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2 text-xl text-dark font-normal leading-[2.25rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            We have the capacity to produce over 100,000 dunnage bags per month and offer
                            competitive rates with a focus on quality and commitment to delivery.
                            With over eighty years of combined industry experience, our team provide
                            a comprehensive logistic plan to industries to implement safe transportation
                            of their goods.
                        </motion.p>
                       
                    </motion.div>
                </div>
                <Stats />
                <WhyUpc />
            </Layout>
        </main>
    )
}

export default AboutUs