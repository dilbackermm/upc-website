import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import siloPic from '../../public/images/silo/silo.png'



const SilobagMain = ({ className = "" }) => {
    return (
        <main className={`flex pt-0 bg-primarylight text-dark w-full min-h-auto 
    pb-0 mb-0 ${className} `}>
            <Layout className='-!mb-20 pt-20 bg-transparent  mx-32 xl:mx-12 lg:mx-6 '>
                {/* <AnimatedText text="Dunnage bag Sizes" className='pb-12 !text-6xl' /> */}
                <div className="flex items-center lg:flex-col-reverse">
                    <div className="w-1/2 lg:w-full py-6">
                        <Image src={siloPic} alt='silo bags' className="lg:m-auto" />
                        <p className="font-light text-dark/50 text-sm sm:text-xs font lg:text-center  pt-2">
                            Images used are for representative purpose only.
                        </p>
                    </div>
                    <div className="ml-20 sm:ml-0 w-1/2 lg:w-full py-0">
                        <motion.p
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='font-normal py-6 lg:py-3 xs:py-1 text-dark text-xl lg:text-lg xs:text-base leading-9 text-left'>
                            The diameter of 8-10 feet and Length of 60 m, 75 m up to 90 m can be produced. Every Bag is folded with an automatic folding machine.
                        </motion.p>
                        <motion.p
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='font-normal  text-dark text-xl lg:text-lg xs:text-base leading-9 text-left'>
                            The outer layer is white with UV protective  coating while the inner layer in contact with the grain is black.
                        </motion.p>
                    </div>
                </div>
            </Layout>
        </main>
    )
}

export default SilobagMain