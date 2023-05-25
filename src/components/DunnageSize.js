import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import dunnagePic from '../../public/images/dunnageBag/dunnagepic1.png'
import tick from '../../public/images/svgs/tick.svg'
import AnimatedText from './AnimatedText'


const DunnageSize = ({ className = "" }) => {
    return (
        <main className={` flex pt-3 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pt-0 !pb-6 bg-transparent  mx-32 xl:mx-12 lg:mx-6 '>
                <AnimatedText text="Dunnage bag Sizes" className='pb-12 !text-6xl' />
                <div className="flex lg:flex-col-reverse">
                    <div className="w-1/2 lg:w-full py-3">
                        <motion.p
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='py-6 lg:py-3 xs:py-1 text-dark text-xl lg:text-lg xs:text-base leading-9 text-left'>With the right selection, you can rest assured that your goods
                            will reach their destination in perfect condition.Customised dunnage bags - selected based on the goods,
                            economies, weight, quantity, and mode of transportation.
                        </motion.p>
                        <motion.p
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='py-6 lg:py-3 xs:py-1 text-dark text-xl lg:text-lg xs:text-base leading-9 text-left'>Dunnage bags are available in all shapes and sizes
                            customized to cushion every corner and edges.They are placed in the gaps between the cargo
                            whatever the mode of transportation to protect,
                            secure and stabilize the cargo.They can be used for any type of cargo right from
                            palletized, breakbulk cargo, barrels, to crates and
                            cartons.
                        </motion.p>
                    </div>
                    <div className="w-1/2 lg:w-full py-3">
                        <Image src={dunnagePic} className="ml-16 lg:m-auto" />
                    </div>
                </div>
                <div className='lg:hidden'>
                    <table class="w-full p-5 table-auto text-center  bg-light/50 border border-dark/75 shadow-lg pt-12 ">
                        <thead className='uppercase text-primaryDark'>
                             <tr className='border-b border-b-dark/75'>
                                <th class="px-6 py-4">Inches</th>
                                <th class="px-6 py-4">cms</th>
                                <th class="px-6 py-4">Level 1</th>
                                <th class="px-6 py-4">Level 2</th>
                                <th class="px-6 py-4">Level 3</th>
                                <th class="px-6 py-4">Level 4</th>
                                <th class="px-6 py-4">Level 5</th>
                            </tr>
                        </thead>
                        <tbody className='text-dark/75 font-medium'>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>36 x 48</td>
                                <td className='py-2 lg:py-1'>91 x 118</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>36 x 60</td>
                                <td className='py-2 lg:py-1'>91 x 152</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>36 x 66</td>
                                <td className='py-2 lg:py-1'>91 x 168</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>36 x 72</td>
                                <td className='py-2 lg:py-1'>91 x 183</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>36 x 84</td>
                                <td className='py-2 lg:py-1'>91 x 213</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>36 x 96</td>
                                <td className='py-2 lg:py-1'>91 x 244</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>36 x 102</td>
                                <td className='py-2 lg:py-1'>91 x 359</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>40 x 40</td>
                                <td className='py-2 lg:py-1'>100 x 100</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>40 x 48</td>
                                <td className='py-2 lg:py-1'>100 x 118</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>48 x 48</td>
                                <td className='py-2 lg:py-1'>118 x 118</td>
                                <td className='py-2 lg:py-1'><Image src={tick} alt="check_icon" className='mx-auto' /></td>
                                <td className='py-2 lg:py-1'><Image src={tick} alt="check_icon" className='mx-auto' /></td>
                                <td className='py-2 lg:py-1'><Image src={tick} alt="check_icon" className='mx-auto' /></td>
                                <td className='py-2 lg:py-1'><Image src={tick} alt="check_icon" className='mx-auto' /></td>
                                <td className='py-2 lg:py-1'><Image src={tick} alt="check_icon" className='mx-auto' /></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>48 x 60</td>
                                <td className='py-2 lg:py-1'>118 x 152</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>48 x 66</td>
                                <td className='py-2 lg:py-1'>118 x 168</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>48 x 72</td>
                                <td className='py-2 lg:py-1'>118 x 183</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>48 x 84</td>
                                <td className='py-2 lg:py-1'>118 x 213</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>48 x 96</td>
                                <td className='py-2 lg:py-1'>118 x 245</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                             <tr className='border-b border-b-dark/75'>
                                <td className='py-2 lg:py-1'>48 x 102</td>
                                <td className='py-2 lg:py-1'>118 x 259</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'></td>  
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Layout>
        </main>
    )
}

export default DunnageSize