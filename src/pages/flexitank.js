'use client';

import { motion } from 'framer-motion';

import styles from '../styles/index'
import { TitleText, TypingText } from '../components/CustomTexts';
import  StartSteps from '../components/StartSteps';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { startingFeatures } from '../constants';

import React from 'react'

const flexitank = () => {
  return (
    <section className={`${styles.paddings} bg-primarylight relative z-10`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: 'false', amount:0.25}}
    className={`${styles.innerwidth} mx-auto flex lg:flex-row flex-row gap-8`}
    >
    <motion.div
    // variants={planetVariants('left')}
    className={'flex-1 flex-col ${styles.flexCenter}'}
    >
    <TitleText textStyles={"text-center text-[80px] "} title={<>Uses for a Flexitank</>}/>
    <img
      src="../images/products/flexitank2.png"
      alt="flexitank"
      className="w-[90%] h-[90%] object-contain -mt-[100px]"
    />
    </motion.div>
    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="flex-[1] flex justify-center flex-col">
      {/* <TypingText title="| How Metaversus Works" /> */}
      <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
      { startingFeatures.map((feature, index) => (
        <StartSteps
        key={feature}
        number={index + 1}
        text={feature}
        />
      )) }
      </div>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default flexitank