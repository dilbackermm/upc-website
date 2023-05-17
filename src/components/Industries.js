import React from 'react'
import Layout from '@/components/Layout'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'
import Image from 'next/image'

import indicon1 from '../../public/images/industry/industry-01.png'
import indicon2 from '../../public/images/industry/industry-02.png'
import indicon3 from '../../public/images/industry/industry-03.png'
import indicon4 from '../../public/images/industry/industry-04.png'
import indicon5 from '../../public/images/industry/industry-05.png'
import indicon6 from '../../public/images/industry/industry-06.png'
import indicon7 from '../../public/images/industry/industry-07.png'
import indicon8 from '../../public/images/industry/industry-08.png'
import indicon9 from '../../public/images/industry/industry-09.png'
import indicon10 from '../../public/images/industry/industry-10.png'







const Industry = ({ img, title }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.9, ease:"easeInOut"}}}
viewport={{once:true}}
      whileHover={{ scale: 1.1, originX: 0 }}
      transition={{ type: 'tween', }}
      className="flex items-center"
    >
      <div className='flex w-[20%] sm:w-[30%] '>
        <Image src={img} alt={title} className=' p-2 m-2 sm:p-2 xs:p-3 border border-solid border-primaryDark rounded-lg bg-light' />
      </div>
      <div className='flex w-[80%] sm:w-[70%] '>
        <h2 className=' text-dark text-2xl sm:text-lg font-regular '>{title}</h2>
      </div>
    </motion.li>
  )
}


const Industries = () => {
  return (
    <main className="-mt-10 -pt-30 z-100 flex items-center text-light w-full min-h-screen 
       bg-primarylight  " >
      <Layout className='mx-24 py-6 xl:mr-3 lg:mr-2 md:mx-4 sm:mx-1 pt-4 bg-transparent text-light '>
        <div className="flex py-6  lg:flex-col-reverse items-center pb-12">
          <div className='w-3/5 lg:w-full py-6'>
            <ul>
            <Industry
              img={indicon1}
              title="constructions"
            />
            <Industry
              img={indicon2}
              title="Steel rolls and coils"
            />
            <Industry
              img={indicon3}
              title="Chemicals and paints"
            />
            <Industry
              img={indicon4}
              title="Food and beverages"
            />
            <Industry
              img={indicon5}
              title="Logistics"
            />
            <Industry
              img={indicon6}
              title="Railroad transportation"
            />
            <Industry
              img={indicon7}
              title="Trucking"
            />
            <Industry
              img={indicon8}
              title="Sea containers"
            />
            <Industry
              img={indicon9}
              title="Bulk/ barges transportation"
            />
            <Industry
              img={indicon10}
              title="High-value electronic equipments"
            />
            </ul>
          </div>
          <div className='w-2/5 lg:w-full xl:ml-2 xl:p-2'>
            <AnimatedText text="Industries we serve" className='text-primaryDark' />
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default Industries