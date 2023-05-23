import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import dunnagePic2 from '../../public/images/dunnageBag/dunnageBag2.png'
import Image from 'next/image'

const DunnageContent = ({ className = "" }) => {
    return (
        <main className={` flex pt-9 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pt-6 bg-transparent  mx-32 xl:mx-12 lg:mx-6'>
                <div className="flex items-center lg:flex-col ">
                    <div className="w-4/12 lg:flex-col">
                        <Image src={dunnagePic2} alt='dunnage bag mr-12' />
                    </div>
                    <div className="w-8/12 lg:flex-col 2xl:ml-12 xl:ml-36 lg:ml-0">
                        <motion.p
                            initial={{ y: 200 }}
                            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2 text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            In short Dunnage bags holds the cargo in place within the containers while transporting.
                            It can be padded in any manner based on the goods it protects. Like right from bubble
                            wraps for smaller items to solid packaging for large items.

                        </motion.p>
                        <motion.p
                            initial={{ y: 200 }}
                            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2 text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            To protect the goods in the containers from shifting vertically, horizontally, or transversely, buffering
                            is essential to protect the goods and keep them intact till their destination is reached. For this, the
                            right dunnage bags are needed.
                        </motion.p>
                        <div className="flex items-center lg:flex-col">
                            <div className="py-9 mx-2 flex flex-col w-1/2 lg:w-full">
                                <motion.div
                                    initial={{ y: 300, opacity:0 }}
                                    whileInView={{ y: 0, opacity:1, transition: { duration: 0.9, ease: "easeInOut" } }}
                                    viewport={{ once: true }}
                                    className="p-5 pt-6 border rounded-lg bg-light border-primaryDark 
                                    sm:border-none sm:p-1 sm:bg-primarylight">
                                    <h2 className="text-3xl font-bold text-primaryDark">Why dunnage bags?</h2>
                                    <p className='text-lg py-3 pt-6 leading-8  xs:text-base '>Dunnage Air Bags are best used to control the movement of cargo
                                        loads in railcars, trucks, or overseas containers. They manage
                                        the movement of cargo by bracing loads, filling voids, protecting
                                        cargo from in-transit damage, and absorbing vibrations.</p>
                                </motion.div>

                            </div>
                            <div
                               
                                className="mr-6 ml-4 flex flex-col w-1/2 lg:w-full">
                                <motion.div 
                                 initial={{ y: 400 }}
                                 whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                                 viewport={{ once: true }}
                                className="p-5 pt-6 border rounded-lg bg-light border-primaryDark 
                                     sm:border-none sm:p-1 sm:bg-primarylight">
                                    <h2 className="text-3xl font-bold text-primaryDark">Who uses dunnage?</h2>
                                    <p className='text-lg py-3  pt-6 leading-8  xs:text-base '>Dunnage Air Bags are best used to control the movement of cargo
                                        loads in railcars, trucks, or overseas containers. They manage
                                        the movement of cargo by bracing loads, filling voids, protecting
                                        cargo from in-transit damage, and absorbing vibrations.</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    )
}

export default DunnageContent