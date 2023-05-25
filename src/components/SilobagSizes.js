import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TitleText, TypingText } from './CustomTexts';
import dunnagePic from '../../public/images/dunnageBag/dunnagepic1.png'
import tick from '../../public/images/svgs/tick.svg'
import styles from '../styles/index'

import AnimatedText from './AnimatedText'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

import rarrow from '../../public/images/svgs/rightarrow.svg'

const SilobagSizes = ({ className = "" }) => {
    return (
        <main className={` flex pt-0 bg-primarylight text-dark w-full min-h-auto 
pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='sm:p-0 sm:!mb-10 sm:m:0 sm:-mt-20 mb-20 !pb-0 !pt-10 bg-transparent mx-32 xl:mx-12 lg:mx-6'>
                <div className="flex flex-row lg:flex-col items-center">
                    <div className="w-1/2 lg:w-full p-6 lg:p-6">
                        <AnimatedText text="Crown Silo Bag Sizes"
                            className='text-left text-primaryDark' />
                    </div>
                    <div className="w-1/2 lg:w-full ">
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.2, 1)}
                            className="flex-[1] flex flex-col">

                            <table className='bg-light shadow-lg border border-solid p-10 border-[#904C06] hover:shadow-xl'>
                                <thead className='text-dark border border-primaryDark'>
                                    <tr>
                                        <th className='py-5 border border-primaryDark'>Size</th>
                                        <th className='py-5 border border-primaryDark'>Thickness</th>
                                        <th className='py-5 border border-primaryDark'>Bags / Pallet</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center font-medium'>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>9' x 200'</td>
                                        <td className='py-1 border border-primaryDark'>9.3 mil</td>
                                        <td className='py-1 border border-primaryDark'>8</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>9' x 250'</td>
                                        <td className='py-1 border border-primaryDark'>9.3 mil</td>
                                        <td className='py-1 border border-primaryDark'>6</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>10' x 250'</td>
                                        <td className='py-1 border border-primaryDark'>9.3 mil</td>
                                        <td className='py-1 border border-primaryDark'>6</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>10' x 300'</td>
                                        <td className='py-1 border border-primaryDark'>9.3 mil</td>
                                        <td className='py-1 border border-primaryDark'>6</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>10' x 500'</td>
                                        <td className='py-1 border border-primaryDark'>9.3 mil</td>
                                        <td className='py-1 border border-primaryDark'>2</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>10.5' x 500'</td>
                                        <td className='py-1 border border-primaryDark'>9.3 mil</td>
                                        <td className='py-1 border border-primaryDark'>2</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>12' x 200'</td>
                                        <td className='py-1 border border-primaryDark'>10 mil</td>
                                        <td className='py-1 border border-primaryDark'>4</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>12' x 300'</td>
                                        <td className='py-1 border border-primaryDark'>10 mil</td>
                                        <td className='py-1 border border-primaryDark'>4</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>12' x 400'</td>
                                        <td className='py-1 border border-primaryDark'>10 mil</td>
                                        <td className='py-1 border border-primaryDark'>2</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1 border border-primaryDark'>12' x 500'</td>
                                        <td className='py-1 border border-primaryDark'>10 mil</td>
                                        <td className='py-1 border border-primaryDark'>2</td>
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