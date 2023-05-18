import React from 'react'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'
import Image from 'next/image'
import tick from '../../public/images/svgs/tick.svg'




const Points = ({ point }) => {
    return (
      <motion.li
      initial={{y:200}}
      whileInView={{y:0, transition:{duration:0.9, ease:"easeInOut"}}}
  viewport={{once:true}}
        whileHover={{ scale: 1.1, originX: 0 }}
        transition={{ type: 'tween', }}
        className="flex items-center "
      >
    
        <Image src={tick} alt="check_icon" className='mx-2 p-0.5' />
       <h2 className='py-3 pl-3 text-lg text-dark/75 font-medium'>{point}</h2>
      </motion.li>
    )
  }


const WhyUpc = () => {
  return (
    <div className="flex py-6  lg:flex-col items-start pb-3">
         <div className="w-1/2 flex flex-col">
        <AnimatedText text="Why UPC?" className='text-primaryDark text-left' />
        <motion.p
                            initial={{ y: 200 }}
                            whileInView={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='p-2 pt-9 text-xl text-dark font-normal leading-[2.25rem] sm:leading-[2rem] text-left sm:text-lg'>
                            At UPC we invest quality time and take great effort in understanding our client-packaging needs
                            and customize our products accordingly to achieve the best results. <br />
                            We are internationally accredited with ISO 9001:2015, FSSC 22000, and BRC certifications.
                        </motion.p>
        </div>
        <div className="w-1/2">
<p className='text-dark font-semibold text-xl'>The core values that make clients come back to us for more</p>
<ul className='pt-9 ml-12 timeline'>
    <Points point="20-year standing in the industry" />
    <Points point="Excellence in quality and service" />
    <Points point="Proven record of timely delivery" />
    <Points point="Cost effective solutions" />
    <Points point="Wide range of products and easy adaptation to specific needs Quick response and turnaround in communications" />
    <Points point="International accreditations" />
    <Points point="Large manufacturing set up to process large volumes and thereby reducing costs" />
    <Points point="Strong team with expertise in manufacturing process" />
</ul>
        </div>
    </div>
  )
}

export default WhyUpc