import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import dunnagePic from '../../public/images/dunnageBag/dunnagepic1.png'
import Link from 'next/link'
import AnimatedText from './AnimatedText'
import SizeTabs from './SizeTabs'
import { PdfIcon } from './icons'




const DunnageSize = ({ className = "" }) => {
    return (
        <main className={` flex pt-3 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pt-0 !pb-6 bg-transparent  mx-32 xl:mx-12 lg:mx-6 '>
                <AnimatedText text="Dunnage bag Sizes" className='pb-12 !text-6xl' />
                <div className="flex items-center lg:flex-col-reverse">
                    <div className="w-1/2 lg:w-full py-3">
                        <motion.p
                            initial={{ y: -200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='py-6 lg:py-3 xs:py-1 text-dark text-xl lg:text-lg xs:text-base leading-9 xl:leading-8 text-left'>With the right selection, you can rest assured that your goods
                            will reach their destination in perfect condition.Customised dunnage bags - selected based on the goods,
                            economies, weight, quantity, and mode of transportation.
                        </motion.p>
                        <motion.p
                            initial={{ y: -200, opacity: 0 }}
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
                        <Image src={dunnagePic} alt='dunnage' className="ml-16 lg:m-auto" />
                        <p className="font-light text-dark/50 text-sm sm:text-xs font ml-16 lg:text-center self-center pt-2">
                            Images used are for representative purpose only.
                        </p>
                    </div>
                </div>
                <div className=''>

                    <div className='flex flex-col items-center'>
                        <h1 className='py-9 lg:py-3 sm:py-2 text-5xl 2xl:text-4xl xl:text-3xl  lg:text-2xl xs:text-xl text-primaryDark font-bold '>
                            Crown Dunnage Bags specification
                        </h1>
                        <SizeTabs />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/dunnageBrochure.pdf" target={"_blank"}
                        download={true}
                        whileHover={{ y: -5 }}
                        className=" flex items-center w-96 sm:w-60 justify-between bg-light  mt-16 rounded-lg shadow-lg border broder-solid border-primaryDark hover:shadow-xl ">
                        <h6 className="px-12 py-6 md:p-6 sm:p-3 text-primaryDark  text-3xl md:text-2xl sm:text-xl font-semibold">Download Brochure</h6>
                        <span className='p-8'>
                            <PdfIcon className={"ml-1 mr-6"} />
                        </span>
                    </Link>
                </div>

            </Layout>
        </main>
    )
}

export default DunnageSize

{/* <table class="w-full p-3 table-auto text-center  bg-light/50 border border-dark/75 shadow-lg pt-12 sm:text-sm ">
<tbody className='text-dark/90 text-left  '>
     <tr className='border-b border-b-dark/25 '>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Item</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>Polypropelene Woven Air Bag</td>
       
    </tr>
     <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Grammage of fabric</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>Differs based on application</td>
      
    </tr>
     <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Product description</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>Woven fabric with Polyethelene 
        film inside sewn top and bottom with a virgin universal valve onthe side</td>
  
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Level</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>Meets upto LEVEL 1 grade of AAR</td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Fits for</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>All type of general Cargo</td>
    
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Usage Pressure</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>2.5 - 3.0 PSI</td>
    
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Modes of Transportation</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>Road / Rail</td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Void Size Gap</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '> Upto 12" Max </td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Width</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>30" 36" 48" &amp; 60"</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Length</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>Can be cut to various length & customised </td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Load Capacity</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>Upto 45,000 lbs</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Pallet weight</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>Approx : 700 lbs</td>
 
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Packed in</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>Gaylord boxes</td>
       
    </tr>
    <tr className=''>
        <td className=' pl-4 xs:pl-2 py-1 font-semibold'>Gaylord / Pallet size</td>
        <td className=' pl-4 xs:pl-2 py-1 border-l border-l-dark/25 '>100cm x 120cm</td>
        
    </tr>
</tbody>
</table> */}