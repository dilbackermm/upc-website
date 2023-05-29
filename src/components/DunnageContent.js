import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import dunnagePic2 from '../../public/images/dunnageBag/dunnageBag2.png'
import Image from 'next/image'

const DunnageContent = ({ className = "" }) => {
    return (
        <main className={` flex pt-9 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} >
            <Layout className='!py-6 bg-transparent  mx-32 xl:mx-12 lg:mx-6'>
                <div className="flex items-center lg:flex-col ">
                    <div className="w-4/12 lg:w-full lg:flex-col">
                        <Image src={dunnagePic2} alt='dunnage bag mr-12' />
                    </div>
                    <div className="w-8/12 lg:w-full lg:flex-col 2xl:ml-12 xl:ml-36 lg:ml-0 lg:pt-3">
                        <motion.p
                            initial={{ x: -200 }}
                            whileInView={{ x: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2 text-xl text-dark font-normal leading-[2.35rem] xl:leading-[2rem] xl:text-lg sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            Dunnage bags are poly bladders surrounded by ply’s of poly woven material with a valve that can inflate or deflate the bags. 
Dunnage bags are essentially padded bags to secure the goods in place and protect them while transporting by air, sea, rail or road.

                        </motion.p>
                        <motion.p
                            initial={{ x: -200 }}
                            whileInView={{ x: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2 text-xl text-dark font-normal leading-[2.35rem] xl:leading-[2rem] xl:text-lg sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
                            Dunnage bags, also known as airbags, and inflatable bags, are used to secure and
                            stabilize cargo. Introduced around 1970, dunnage bags provide convenient and
                            cost-effective cargo stabilization in ISO sea containers, closed railcars,
                            trucks, and oceangoing vessels.
                        </motion.p>

                    </div>
                </div>
                <div className="flex items-center lg:flex-col">
                    <div className="py-9 mx-2 flex flex-col w-1/2 lg:w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.9 } }}
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
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.9 } }}
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
            </Layout>
        </main>
    )
}

export default DunnageContent