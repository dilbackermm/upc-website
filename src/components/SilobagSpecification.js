import React from 'react'
import Layout from './Layout'
import { PdfIcon } from './icons'
import Link from 'next/link'
import AnimatedText from './AnimatedText'
import rarrow from '../../public/images/svgs/rightarrow.svg'

const SilobagSpecification = ({ className = "" }) => {
    return (
        <main className={` flex pt-0 bg-primarylight text-dark w-full min-h-auto 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='sm:p-6 sm:!mb-10 !pb-0 !pt-20 bg-transparent mx-32 xl:mx-12 lg:mx-6'>
                <AnimatedText text="Silo Bag Specifications" className='sm:!text-4xl pb-12 !text-6xl text-primaryDark' />
                <div className='lg:hidden'>
                    <table class="w-full p-5 sm:p-3 xs:p-2 table-auto text-center  bg-light/50 border border-dark/75 shadow-lg pt-12 ">
                        <thead className='uppercase text-primaryDark'>
                            <tr className='border-b border-b-dark/75'>
                                <th class="px-6 py-4">Sl.No.</th>
                                <th class="px-6 py-4">Specifaication</th>
                                <th class="px-6 py-4">Units</th>
                                <th class="px-6 py-4">Standard</th>
                            </tr>
                        </thead>
                        <tbody className='text-dark/75 font-medium'>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>1</td>
                                <td className='py-2 lg:py-1'>Width</td>
                                <td className='py-2 lg:py-1'>mm</td>
                                <td className='py-2 lg:py-1'>In house</td>
                            </tr>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1' rowSpan={2}>2</td>
                                <td className='py-2 lg:py-1'>Thicknes</td>
                                <td className='py-2 lg:py-1'>micron</td>
                                <td className='py-2 lg:py-1'>In house</td>
                            </tr>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>GSM</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'>180 - 240</td>
                            </tr>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>3</td>
                                <td className='py-2 lg:py-1'>Tensile Strength - MD</td>
                                <td className='py-2 lg:py-1'>kg / cm 2</td>
                                <td className='py-2 lg:py-1'>ASTM D882</td>
                            </tr>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>4</td>
                                <td className='py-2 lg:py-1'>Tensile Strength - TD</td>
                                <td className='py-2 lg:py-1'>kg / cm 2</td>
                                <td className='py-2 lg:py-1'>ASTM D882</td>
                            </tr>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>5</td>
                                <td className='py-2 lg:py-1'>Elongation MD</td>
                                <td className='py-2 lg:py-1'>%</td>
                                <td className='py-2 lg:py-1'>ASTM D882</td>
                            </tr>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>6</td>
                                <td className='py-2 lg:py-1'>Elongation TD</td>
                                <td className='py-2 lg:py-1'>%</td>
                                <td className='py-2 lg:py-1'>ASTM D882</td>
                            </tr>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>7</td>
                                <td className='py-2 lg:py-1'>Dart Impact Method - B</td>
                                <td className='py-2 lg:py-1'>grams</td>
                                <td className='py-2 lg:py-1'>ASTM D1709</td>
                            </tr>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>8</td>
                                <td className='py-2 lg:py-1'>COF - Static</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'>ASTM D1894</td>
                            </tr>
                            <tr className='border-b border-b-dark/25'>
                                <td className='py-2 lg:py-1'>9</td>
                                <td className='py-2 lg:py-1'>COF - Static</td>
                                <td className='py-2 lg:py-1'></td>
                                <td className='py-2 lg:py-1'>ASTM D1894</td>
                            </tr>
                            <tr className='pb-2'>
                                <td className='py-2 lg:py-1'>10</td>
                                <td className='py-2 lg:py-1'>WVTR</td>
                                <td className='py-2 lg:py-1'>gm / ms 2 / day</td>
                                <td className='py-2 lg:py-1'>ASTM F1249</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="sm:py-0 py-12">
                    <p
                        className='pt-3 pb-2 lg:py-1 font-normal text-dark text-xl lg:text-lg sm:text-base text-left'>
                        Three or five or seven co-extruded layers of polyethylene plastic film UV protected.
                    </p>
                    <p
                        className='pt-3 pb-2 lg:py-1 font-medium text-dark text-xl lg:text-lg sm:text-base text-left'>
                        Sizes:
                        <p className='pt-2 lg:py-1 pl-6 lg:pl-3 font-normal'>a. Diameter of 7 to 12 feet</p>
                        <p className='pt-2 lg:py-1 pl-6 lg:pl-3 font-normal'>b. Length of 60m, 75 m, 120 m or higher  &#40;inhouse automatic folding machine&#41; </p>
                    </p>
                    <p
                        className='pt-3 pb-2 lg:py-1 font-medium text-dark text-xl lg:text-lg sm:text-base text-left'>
                        Capacity ranges from 180-250 tons or higher  &#40;for dry products&#41;
                        <p className='pt-2 lg:py-1 pl-6 lg:pl-3 font-normal'> a. Dry products: soft wheat, durum wheat, maize, sorghum, soybean, rice, barley, sunflower, oats, every grain product.</p>
                        <p className='pt-2 lg:py-1 pl-6 lg:pl-3 font-normal' > b. Wet products: grains of any kind, silage, biomasses, mush, by products of industrial processes, forage.</p>
                    </p>
                </div>
               
            </Layout>
        </main>
    )
}
export default SilobagSpecification