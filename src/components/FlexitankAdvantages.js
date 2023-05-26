import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import flexi2 from '../../public/images/flexitanks/flexi2.jpg'
import AnimatedText from '@/components/AnimatedText'


const Advantages = ({ adv, content }) => {
  return (
      <motion.li
          initial={{opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once: true }}
          className="flex flex-col my-3 xl:my-2 lg:my-1 sm:my-0
           px-9 lg:px-4 sm:px-0 2xl:px-7 xl:px-6 py-3 lg:py-2 sm:py-1 items-start 
          bg-light sm:bg-primarylight sm:rounded-none sm:border-none rounded-lg border border-primaryDark/75  "
      >
          <h2 className='py-3 lg:py-2 sm:py-1 pl-3 lg:pl-3 sm:pl-1 text-3xl xl:text-2xl sm:text-xl xs:text-lg text-primaryDark font-semibold'>{adv}</h2>
          <p className='pt-2 lg:pt-1 pb-3 pl-3 lg:pl-3 sm:pl-1 text-lg xl:text-base lg:text-lg sm:text-base xs:text-sm text-dark'>{content}</p>
      </motion.li>
  )
}


const FlexitankAdvantages = ({ className = "" }) => {
  return (
    <main className={` flex pt-0 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
      <Layout className='!pt-0 bg-transparent  mx-32 2xl:mx-24 xl:mx-12 lg:mx-6'>
        <div className="flex lg:flex-col items-center justify-center">
          <div className="w-1/2 lg:w-full">
            <Image src={flexi2} alt='green flexitank' className='p-6 xl:p-4  ' />
          </div>
          <div className="w-1/2 ml-24 2xl:ml-20 xl:ml-16  lg:w-full lg:m-0">
            <AnimatedText text="Advantages"
              className='py-6 lg:py-3 text-left text-primaryDark' />
            <p className='p-2  text-xl  text-dark font-normal 
            leading-[2.35rem] xl:leading-[2.1rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
              Flexitank containers have an increasingly growing demand as 
              they are economically viable for bulk traders for transporting non-hazardous liquid cargo. They also
              offer better protection against liquid cargo contamination.

            </p>
            <p className='p-2  text-xl text-dark font-normal 
            leading-[2.35rem] xl:leading-[2.1rem] sm:leading-[2rem] 
            text-left sm:text-lg xs:text-base'>
              Effectively, flexitanks have made transportation more 
              efficient, cost-effective, and also have a lesser 
              environmental impact. They are becoming a preferred 
              replacement for the traditionally used drums and ISO containers.
            </p>
          </div>
        </div>
        <div className="py-6 flex flex-col items-center justify-center">

          <div className="w-[75%] flex flex-col lg:w-full">
          <Advantages adv="1. Cost - Effective Option" 
          content="Flexitanks are less expensive than drums, IBCs, and ISO tank 
          containers. The cost of using flexitanks is 33% less than what is 
          needed to spend when transporting bulk liquid using traditional 
          bulk liquid containers
          " />
          <Advantages adv="2. More Capacity" 
          content="Flexitank containers can carry 15% more payload than what 
          is carried by IBCs. 44% more than drums. And 50% more than bottles. 
          So, they offer more capacity while being an economically viable 
          option for shippers.
          " />
          <Advantages adv="3. Preserves Product Quality" 
          content="Flexitanks keep the quality of liquid carefully intact. 
          They are composed of several layers of polyethylene, each fitted 
          with a pump and a valve. Making it airproof, waterproof, and 
          weatherproof. They are mostly designed for single-use which 
          contributes to reducing the risk of contamination considerably
          " />
          <Advantages adv="4. Faster Loading & Unloading" 
          content="Flexitank storage containers do not require a forklift 
          to load or unload. This makes the entire loading and unloading 
          process faster by up to 90%. It also makes Flexitanks a cheaper 
          option as compared to the cost of using drums. As well as IBCs 
          with a reduced product loss during the process
          " />
          <Advantages adv="5. Requires Less(er) Labor" 
          content="As flexitanks are convenient to handle, load, and unload, 
          the involvement of the labor is comparatively lesser. This makes 
          the logistics revenue considerably lower.
          " />
          </div>
        </div>


      </Layout>
    </main>
  )
}

export default FlexitankAdvantages

