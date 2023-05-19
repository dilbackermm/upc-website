'use client';

import { motion } from 'framer-motion';

import styles from '../styles/index'
import { TitleText, TypingText } from '../components/CustomTexts';
import  StartSteps from '../components/StartSteps';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { uses } from '../constants';

import React from 'react'

const flexitank = () => {
  return (
    <section className={`${styles.paddings} bg-primarylight relative z-10`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: 'false', amount:0.25}}
    className={`${styles.innerwidth} mx-auto flex lg:flex-row flex-row`}
    >
    <motion.div
    // variants={planetVariants('left')}
    className={'flex-1 flex-col ${styles.flexCenter}'}
    >
    <TitleText textStyles={"text-center text-[80px] text-[#904C06]"} title={<>Uses for a Flexitank</>}/>
    <img
      src="../images/products/flexitank2.png"
      alt="flexitank"
      className="w-[90%] object-contain -mt-[50px]"
    />
    <p className='ml-20 mr-24 text-justify text-[#904C06]'>Due to its high efficiency and exceptional contamination prevention, flexitanks are
    used for non-hazardous chemical transportation. But also for food-grade goods like
    edible oil, fruit concentrates, drinks, among others.</p>
    </motion.div>
    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="flex-[1] flex justify-center flex-col">
      {/* <TypingText title="| How Metaversus Works" /> */}
      <div className="mt-[31px] flex flex-col max-w-[100%] mr-24 gap-[24px]">
      { uses.map((feature, index) => (
        <StartSteps
        key={`feature-${index}`}
        {...feature} index={index + 1}
        />
      )) }
      </div>
      </motion.div>
    </motion.div>

    <TitleText textStyles={"mt-20 ml-20 font-medium text-left text-[80px] text-[#904C06]"}
    title={<>What can you carry</>}/>
    <TitleText textStyles={"-mt-5 ml-20 font-medium text-left text-[80px] text-[#904C06]"}
    title={<>in a Flexitank</>}/>

    <div className="flex flex-row items-center justify-between max-w-[100%] ml-24 mr-24 gap-[50px]">
    <div className={`${styles.flexCenter} mt-20 w-auto h-auto
    flex items-center bg-light shadow-lg border
    broder-solid px-5 border-[#904C06] hover:shadow-xl rounded`}>
    <p className="font-bold text-3xl text-primaryDark">
    <img
      src="../images/flexitanks/flexitank storage icons-01.png"
      alt="flexitank"
      className="w-[100%] object-contain p-10"
    />
    </p>
    </div>
    <div className={`${styles.flexCenter} mt-20 w-auto h-auto
    flex items-center bg-light shadow-lg border
    broder-solid px-5 border-[#904C06] hover:shadow-xl rounded`}>
    <p className="font-bold text-3xl text-primaryDark">
    <img
      src="../images/flexitanks/flexitank storage icons-02.png"
      alt="flexitank"
      className="w-[100%] object-contain p-10"
    />
    </p>
    </div>
    <div className={`${styles.flexCenter} mt-20 w-auto h-auto
    flex items-center bg-light shadow-lg border
    broder-solid px-5 border-[#904C06] hover:shadow-xl rounded`}>
    <p className="font-bold text-3xl text-primaryDark">
    <img
      src="../images/flexitanks/flexitank storage icons-03.png"
      alt="flexitank"
      className="w-[100%] object-contain p-10"
    />
    </p>
    </div>
    <div className={`${styles.flexCenter} mt-20 w-auto h-auto
    flex flex-col items-center bg-light shadow-lg border
    broder-solid px-5 border-[#904C06] hover:shadow-xl rounded`}>
    <p className="font-bold text-3xl text-primaryDark">
    <img
      src="../images/flexitanks/flexitank storage icons-04.png"
      alt="flexitank"
      className="w-[100%] object-contain p-10"
    />
    </p>
    </div>
    </div>

    <div class="flex flex-row items-start justify-between max-w-[100%] ml-24 mr-24 gap-[50px]">
  <div class="py-4">efas
  <p className='text-center'>01</p>
  </div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
  <div class="py-8">04</div>
</div>


    
    <div className="flex flex-row mt-5 items-center justify-evenly max-w-[100%] ml-24 mr-24 gap-[50px]">
    <p className="font-normal text-center text-2xl text-primaryDark">Food-grade liquid</p>

    <p className="font-normal text-center text-2xl text-primaryDark">Fuel</p>
</div>

<div className="flex flex-row mt-5 items-center justify-evenly max-w-[100%] ml-24 mr-24 gap-[50px]">
    <p className="font-normal text-center text-2xl text-primaryDark">Chemicals</p>
</div>
   <div className="flex flex-row mt-5 items-center justify-evenly max-w-[100%] ml-24 mr-24 gap-[50px]">
    <p className="font-normal text-center text-2xl text-primaryDark">Water</p>
</div>
   <div className="flex flex-row mt-5 items-center justify-evenly max-w-[100%] ml-24 mr-24 gap-[50px]">
    <p className="font-normal text-center text-2xl text-primaryDark">Fuel</p>
</div>
  </section>
  )
}

export default flexitank