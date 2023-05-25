import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img1 from '../../public/images/silo/img1.jpg'
import img2 from '../../public/images/silo/img2.jpg'
import tick from '../../public/images/svgs/tick.svg'
import AnimatedText from './AnimatedText'


const SilobagEnding = ({ className = "" }) => {
    return (
        <main className={`flex pt-0 bg-primarylight text-dark w-full min-h-auto 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pb-0 py-20 bg-transparent -my-16 mx-32 xl:mx-12 lg:mx-6 '>
                <div className="flex lg:flex-col lg:pb-20">
                    <div className="sm:ml-0 w-1/2 h-auto lg:w-full p-5">
                        <Image src={img1} className="lg:m-auto w-auto h-auto object-fill" />
                    </div>
                    <div className="sm:ml-0 w-2/4 h-auto lg:w-full p-5">
                        <Image src={img2} className="lg:m-auto  w-auto h-[93%] object-fill" />
                    </div>
                </div>
                <div className='lg:hidden pb-20 mb-28'>
                    <AnimatedText text="Silo Bag Capacity chart" className='sm:!text-4xl py-20 !text-6xl text-primaryDark' />
                    <table class="w-full p-10 table-auto text-center bg-light/50 border border-dark/75 shadow-lg py-20">
                        <thead className='text-primaryDark'>
                            <tr className='border-b border-b-dark/75'>
                                <th class="px-6 py-4" scope="col"></th>
                                <th class="px-6 py-4" scope="col">HEY SILAGE</th>
                                <th class="px-6 py-4" scope="col">CORN SILAGE</th>
                                <th class="px-6 py-4" scope="col">EAR CORN</th>
                                <th class="px-6 py-4" scope="col">GROUND SHELLED CORN</th>
                                <th class="px-6 py-4" scope="col">SHELLED CORN</th>
                                <th class="px-6 py-4" scope="col">GRAIN</th>

                            </tr>
                            <tr class="bg-clight hover:bg-dark/10 pt-2">
                                <th class="px-6 py-4" scope="col">Bag Size</th>
                                <th class="px-6 py-4" scope="col">Tons</th>
                                <th class="px-6 py-4" scope="col">Tons</th>
                                <th class="px-6 py-4" scope="col">Bushels</th>
                                <th class="px-6 py-4" scope="col">Bushels</th>
                                <th class="px-6 py-4" scope="col">Bushels</th>
                                <th class="px-6 py-4" scope="col">Bushels</th>
                            </tr>
                        </thead>
                        <tbody className='text-dark/75 font-medium'>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">8 x 150</th>
                                <td className='py-2 lg:py-1'>120 -140</td>
                                <td className='py-2 lg:py-1'>140 -150</td>
                                <td className='py-2 lg:py-1'>3200</td>
                                <td className='py-2 lg:py-1'>4500</td>
                                <td className='py-2 lg:py-1'>4500</td>
                                <td className='py-2 lg:py-1'>4600</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">8 x 200</th>
                                <td className='py-2 lg:py-1'>170 -180</td>
                                <td className='py-2 lg:py-1'>190 -200</td>
                                <td className='py-2 lg:py-1'>4300</td>
                                <td className='py-2 lg:py-1'>6200</td>
                                <td className='py-2 lg:py-1'>6200</td>
                                <td className='py-2 lg:py-1'>6350</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">9 x 150</th>
                                <td className='py-2 lg:py-1'>150 -170</td>
                                <td className='py-2 lg:py-1'>160 -190</td>
                                <td className='py-2 lg:py-1'>3900</td>
                                <td className='py-2 lg:py-1'>5500</td>
                                <td className='py-2 lg:py-1'>5500</td>
                                <td className='py-2 lg:py-1'>5650</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">9 x 200</th>
                                <td className='py-2 lg:py-1'>190 -210</td>
                                <td className='py-2 lg:py-1'>220 -240</td>
                                <td className='py-2 lg:py-1'>5300</td>
                                <td className='py-2 lg:py-1'>7500</td>
                                <td className='py-2 lg:py-1'>7500</td>
                                <td className='py-2 lg:py-1'>7680</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">9 x 250</th>
                                <td className='py-2 lg:py-1'>260 -280</td>
                                <td className='py-2 lg:py-1'>280 -300</td>
                                <td className='py-2 lg:py-1'>6600</td>
                                <td className='py-2 lg:py-1'>9500</td>
                                <td className='py-2 lg:py-1'>9500</td>
                                <td className='py-2 lg:py-1'>9730</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">9 x 300</th>
                                <td className='py-2 lg:py-1'>315 -335</td>
                                <td className='py-2 lg:py-1'>340 -360</td>
                                <td className='py-2 lg:py-1'>8000</td>
                                <td className='py-2 lg:py-1'>11500</td>
                                <td className='py-2 lg:py-1'>11500</td>
                                <td className='py-2 lg:py-1'>11780</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">10 x 200</th>
                                <td className='py-2 lg:py-1'>280</td>
                                <td className='py-2 lg:py-1'>300</td>
                                <td className='py-2 lg:py-1'>6100</td>
                                <td className='py-2 lg:py-1'>8700</td>
                                <td className='py-2 lg:py-1'>8700</td>
                                <td className='py-2 lg:py-1'>8900</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">10 x 250</th>
                                <td className='py-2 lg:py-1'>355</td>
                                <td className='py-2 lg:py-1'>380</td>
                                <td className='py-2 lg:py-1'>7700</td>
                                <td className='py-2 lg:py-1'>11000</td>
                                <td className='py-2 lg:py-1'>11000</td>
                                <td className='py-2 lg:py-1'>11275</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">10 x 300</th>
                                <td className='py-2 lg:py-1'>430</td>
                                <td className='py-2 lg:py-1'>460</td>
                                <td className='py-2 lg:py-1'>9400</td>
                                <td className='py-2 lg:py-1'>13400</td>
                                <td className='py-2 lg:py-1'>13400</td>
                                <td className='py-2 lg:py-1'>13730</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">10 x 400</th>
                                <td className='py-2 lg:py-1'>580</td>
                                <td className='py-2 lg:py-1'>620</td>
                                <td className='py-2 lg:py-1'>12700</td>
                                <td className='py-2 lg:py-1'>18100</td>
                                <td className='py-2 lg:py-1'>18100</td>
                                <td className='py-2 lg:py-1'>18550</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">10 x 500</th>
                                <td className='py-2 lg:py-1'>730</td>
                                <td className='py-2 lg:py-1'>780</td>
                                <td className='py-2 lg:py-1'>16000</td>
                                <td className='py-2 lg:py-1'>22800</td>
                                <td className='py-2 lg:py-1'>22800</td>
                                <td className='py-2 lg:py-1'>23370</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">11 x 300</th>
                                <td className='py-2 lg:py-1'>480</td>
                                <td className='py-2 lg:py-1'>510</td>
                                <td className='py-2 lg:py-1'>NA</td>
                                <td className='py-2 lg:py-1'>NA</td>
                                <td className='py-2 lg:py-1'>NA</td>
                                <td className='py-2 lg:py-1'>NA</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">12 x 300</th>
                                <td className='py-2 lg:py-1'>570</td>
                                <td className='py-2 lg:py-1'>630</td>
                                <td className='py-2 lg:py-1'>11500 - 13950</td>
                                <td className='py-2 lg:py-1'>16530 - 19950</td>
                                <td className='py-2 lg:py-1'>16530 - 19950</td>
                                <td className='py-2 lg:py-1'>16530 - 19950</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">12 x 500</th>
                                <td className='py-2 lg:py-1'>970</td>
                                <td className='py-2 lg:py-1'>1070</td>
                                <td className='py-2 lg:py-1'>19650 - 23800</td>
                                <td className='py-2 lg:py-1'>28100 - 33950</td>
                                <td className='py-2 lg:py-1'>28100 - 33950</td>
                                <td className='py-2 lg:py-1'>28100 - 33950</td>
                            </tr>
                            <tr className='hover:bg-dark/10'>
                                <th className='py-2 lg:py-1' scope="row">14 x 500</th>
                                <td className='py-2 lg:py-1'>1300</td>
                                <td className='py-2 lg:py-1'>1360</td>
                                <td className='py-2 lg:py-1'>NA</td>
                                <td className='py-2 lg:py-1'>NA</td>
                                <td className='py-2 lg:py-1'>NA</td>
                                <td className='py-2 lg:py-1'>NA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Layout>
        </main>
    )
}

export default SilobagEnding