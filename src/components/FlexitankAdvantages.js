import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import styles from '../styles/index'
import { TitleText, TypingText } from './CustomTexts';
import { uses } from '../constants';
import StartSteps from './StartSteps';
import AnimatedText from '@/components/AnimatedText'



const FlexitankAdvantages = ({ className = "" }) => {
    return (
        <main className={`flex pt-9 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus' >
            <Layout className='!pt-6 bg-transparent !z-10 mx-32 xl:mx-12 lg:mx-6'>
            <div className="">
                    <AnimatedText text="What can you carry in a Flexitank?" className='!text-left text-primaryDark !text-6xl' />
            </div>

            <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: 'false', amount: 0.25 }}
          className={`${styles.innerwidth} mx-auto mt-20 flex lg:flex-row flex-row`}
        >
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[1] flex items-center flex-col">
            <img
              src="../images/flexitanks/green bladder water tank.jpg"
              alt="green bladder water tank"
              className="w-[90%] object-contain mt-9 mr-16"
            />
          </motion.div>

          <motion.div
            // variants={planetVariants('left')}
            className={'flex-1 flex-col ${styles.flexCenter}'}
          >
            <TitleText textStyles={"text-left text-[80px] text-[#904C06]"} title={<>Advantages</>} />
            <p className='mt-6 text-justify text-[#904C06]'>Flexitank containers have an
              increasingly growing demand as they are economically viable for bulk traders for transporting
              non-hazardous liquid cargo. They also offer better protection against liquid cargo contamination.</p>
            <p className='mt-6 text-justify text-[#904C06]'>Effectively, flexitanks have made transportation more efficient, cost-effective, and also have
              a lesser environmental impact. They are becoming a preferred replacement for the traditionally
              used drums and ISO containers.</p>
          </motion.div>
        </motion.div>

        <div className={`${styles.flexStart} mt-20 w-auto h-auto
    flex flex-col bg-light shadow-lg border
    border-solid p-10 border-[#904C06] hover:shadow-xl rounded-[20px]`}>
          <p className="text-primaryDark text-4xl lg:text-2xl text-center font-semibold">
            1. Cost - Effective Option
          </p>
          <p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base lg:ml-1'>
            Flexitanks are less expensive than drums, IBCs, and ISO tank containers. The cost of using
            flexitanks is 33% less than what is needed to spend when transporting bulk liquid using
            traditional bulk liquid containers.</p>
        </div>

        <div className={`${styles.flexStart} mt-10 w-auto h-auto
    flex flex-col bg-light shadow-lg border
    border-solid p-10 border-[#904C06] hover:shadow-xl rounded-[20px]`}>
          <p className="text-primaryDark text-4xl lg:text-2xl text-center font-semibold">
            2. More Capacity
          </p>
          <p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base lg:ml-1'>
            Flexitank containers can carry 15% more payload than what is carried by IBCs. 44% more
            than drums. And 50% more than bottles. So, they offer more capacity while being an
            economically viable option for shippers.</p>
        </div>

        <div className={`${styles.flexStart} mt-10 w-auto h-auto
    flex flex-col bg-light shadow-lg border
    border-solid p-10 border-[#904C06] hover:shadow-xl rounded-[20px]`}>
          <p className="text-primaryDark text-4xl lg:text-2xl text-center font-semibold">
            3. Preserves Product Quality
          </p>
          <p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base lg:ml-1'>
            Flexitanks keep the quality of liquid carefully intact. They are composed of several layers
            of polyethylene, each fitted with a pump and a valve. Making it airproof, waterproof, and
            weatherproof. They are mostly designed for single-use which contributes to reducing the risk
            of contamination considerably</p>
        </div>

        <div className={`${styles.flexStart} mt-10 w-auto h-auto
    flex flex-col bg-light shadow-lg border
    border-solid p-10 border-[#904C06] hover:shadow-xl rounded-[20px]`}>
          <p className="text-primaryDark text-4xl lg:text-2xl text-center font-semibold">
            4. Faster Loading & Unloading
          </p>
          <p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base lg:ml-1'>
            Flexitank storage containers do not require a forklift to load or unload. This makes the
            entire loading and unloading process faster by up to 90%. It also makes Flexitanks a cheaper
            option as compared to the cost of using drums. As well as IBCs with a reduced product loss
            during the process</p>
        </div>

        <div className={`${styles.flexStart} mt-10 w-auto h-auto
    flex flex-col bg-light shadow-lg border
    border-solid p-10 border-[#904C06] hover:shadow-xl rounded-[20px]`}>
          <p className="text-primaryDark text-4xl lg:text-2xl text-center font-semibold">
            5. Requires Less(er) Labor
          </p>
          <p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base lg:ml-1'>
            As flexitanks are convenient to handle, load, and unload, the involvement of the labor is
            comparatively lesser. This makes the logistics revenue considerably lower.</p>
        </div>
            </Layout>
        </main>
    )
}

export default FlexitankAdvantages