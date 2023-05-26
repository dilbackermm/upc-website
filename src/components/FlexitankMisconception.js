import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import flexi3 from '../../public/images/flexitanks/flexi3.jpg'
import AnimatedText from '@/components/AnimatedText'
import tick from '../../public/images/svgs/tick.svg'

const Points = ({ point }) => {
  return (
    <motion.li
      initial={{ x: -200 }}
      whileInView={{ x: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, originX: 0 }}
      transition={{ type: 'tween', }}
      className="flex items-center "
    >

      <Image src={tick} alt="check_icon" className='mx-2 sm:mx-0 p-0.5' />
      <h2 className='py-2 pl-3 text-lg sm:text-base text-dark/75 font-medium'>{point}</h2>
    </motion.li>
  )
}

const FlexitankMisconception = ({ className = "" }) => {
  return (
    <main className={` flex items-start bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `}  >
      <Layout className='!py-0 bg-transparent  mx-32 2xl:mx-24 xl:16 xl:mx-12 lg:mx-6'>
        <AnimatedText text="General Misconception For Choosing Flexitank Capacity" className='!text-left text-primaryDark ' />
        <div className="my-9 xl:my-6 lg:my-3  py-3 flex lg:flex-col items-start border-y border-y-dark/75">
          <div className="w-1/2 lg:w-full">
            <p className='p-2  text-xl  text-dark font-normal 
            leading-[2.35rem] xl:leading-[2.1rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
              <span className='font-semibold text-primaryDark'>Myth: </span> A flexitank with a greater
              capacity as compared to the total quantity of load would be a better choice for the bulk load of Liquid
            </p>
          </div>
          <div className="w-1/2 lg:w-full">
            <p className='p-2  text-xl  text-dark font-normal 
            leading-[2.35rem] xl:leading-[2.1rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
              <span className='font-semibold text-primaryDark'>Fact: </span> It is the density/specific
              gravity of the liquid which plays a crucial role in
              determining the correct size of flexitank to be used.
            </p>
          </div>
        </div>
        <div className="my-9 xl:my-6 lg:my-3  py-3 flex lg:flex-col items-start ">
          <div className="w-1/2 lg:w-full">
            <Image src={flexi3} alt="flexitank picture" className='px-9 xl:px-6 lg:px-3' />
          </div>
          <div className="w-1/2 lg:w-full">
            <h2 className='font-bold text-4xl xl:text-3xl md:text-2xl lg:pt-9 sm:pt-5'>
             What Is A Flexitank Made Up Of?
            </h2>
            <div className='pt-6 lg:pt-3'>
            <ul className='ml-5 lg:ml-3'>
                <Points point="Multilayer polyethylene" />
                <Points point="Single and double layer polyethylene" />
                <Points point="Barrier tanks" />
                <Points point="PVC" />
                <Points point="Bottom discharge" />
              </ul>
            </div>
          </div>
        </div>


      </Layout>
    </main>
  )
}

export default FlexitankMisconception
{/* 
 */}