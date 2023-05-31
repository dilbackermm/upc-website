import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img1 from '../../public/images/silo/img1.jpg'
import img2 from '../../public/images/silo/img2.jpg'
import AnimatedText from './AnimatedText'
import { PdfIcon } from './icons'
import Link from 'next/link'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';



const SilobagSizes = ({ className = "" }) => {
    return (
        <main className={` flex pt-0 bg-primarylight text-dark w-full min-h-auto 
pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='sm:p-0 sm:!mb-10 sm:m:0 sm:-mt-20 mb-20 !pb-0 !pt-10 bg-transparent mx-32 xl:mx-12 lg:mx-6'>
                <div className="flex flex-row lg:flex-col items-center">
                    <div className="w-1/3 lg:w-full p-6 lg:p-6">
                        <AnimatedText text="Crown Silo Bag Sizes"
                            className='text-left text-primaryDark' />
                    </div>
                    <div className="w-2/3 lg:w-full ">
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.2, 1)}
                            className="flex-[1] flex flex-col">

                            <table className='w-full p-5 sm:p-3 xs:p-2 table-auto text-center  bg-light/50 border border-dark/75 shadow-lg pt-12'>
                                <thead className='uppercase text-primaryDark sm:text-sm'>
                                    <tr className='border-b border-b-dark/75'>
                                        <th className='px-2 py-4  md:py-2 sm:ps-2'>Size</th>
                                        <th className='px-2 py-4  md:py-2 sm:ps-2'>Thickness</th>
                                        <th className='px-2 md:py-2 sm:ps-2'>Bags / Pallet</th>
                                    </tr>
                                </thead>
                                <tbody className='text-dark/75 font-medium sm:text-sm'>
                                    <tr className='border-b border-b-dark/25'>
                                        <td className='py-2 lg:py-1'>9&apos; x 200&apos;</td>
                                        <td className='py-2 lg:py-1'>9.3 mil</td>
                                        <td className='py-2 lg:py-1'>8</td>
                                    </tr>
                                    <tr className='border-b border-b-dark/25'>
                                        <td className='py-2 lg:py-1'>9&apos; x 250&apos;</td>
                                        <td className='py-2 lg:py-1'>9.3 mil</td>
                                        <td className='py-2 lg:py-1'>6</td>
                                    </tr>
                                    <tr className='border-b border-b-dark/25'>
                                        <td className='py-2 lg:py-1'>10&apos; x 250&apos;</td>
                                        <td className='py-2 lg:py-1'>9.3 mil</td>
                                        <td className='py-2 lg:py-1'>6</td>
                                    </tr>
                                    <tr className='border-b border-b-dark/25'>
                                        <td className='py-2 lg:py-1'>10&apos; x 300&apos;</td>
                                        <td className='py-2 lg:py-1'>9.3 mil</td>
                                        <td className='py-2 lg:py-1'>6</td>
                                    </tr>
                                    <tr className='border-b border-b-dark/25'>
                                        <td className='py-2 lg:py-1'>10&apos; x 500&apos;</td>
                                        <td className='py-2 lg:py-1'>9.3 mil</td>
                                        <td className='py-2 lg:py-1'>2</td>
                                    </tr>
                                    <tr className='border-b border-b-dark/25'>
                                        <td className='py-2 lg:py-1'>10.5&apos; x 500&apos;</td>
                                        <td className='py-2 lg:py-1'>9.3 mil</td>
                                        <td className='py-2 lg:py-1'>2</td>
                                    </tr>
                                    <tr className='border-b border-b-dark/25'>
                                        <td className='py-2 lg:py-1'>12&apos; x 200&apos;</td>
                                        <td className='py-2 lg:py-1'>10 mil</td>
                                        <td className='py-2 lg:py-1'>4</td>
                                    </tr>
                                    <tr className='border-b border-b-dark/25'>
                                        <td className='py-2 lg:py-1'>12&apos; x 300&apos;</td>
                                        <td className='py-2 lg:py-1'>10 mil</td>
                                        <td className='py-2 lg:py-1'>4</td>
                                    </tr>
                                    <tr className='border-b border-b-dark/25'>
                                        <td className='py-2 lg:py-1'>12&apos; x 400&apos;</td>
                                        <td className='py-2 lg:py-1'>10 mil</td>
                                        <td className='py-2 lg:py-1'>2</td>
                                    </tr>
                                    <tr className=''>
                                        <td className='py-2 lg:py-1'>12&apos; x 500&apos;</td>
                                        <td className='py-2 lg:py-1'>10 mil</td>
                                        <td className='py-2 lg:py-1'>2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </div>





            </Layout>
        </main>
    )
}
export default SilobagSizes