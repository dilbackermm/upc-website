import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import styles from '../styles/index'
import { TitleText, TypingText } from '../components/CustomTexts';
import { uses } from '../constants';
import StartSteps from '../components/StartSteps';


const FlexitankUses = ({ className = "" }) => {
  return (
    <main className={` flex pt-9 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
      <Layout className='!pt-6 bg-transparent !z-10 mx-32 xl:mx-12 lg:mx-6'>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: 'false', amount: 0.25 }}
          className={`${styles.innerwidth} mx-auto mt-10 flex lg:flex-row flex-row`}
        >
          <motion.div
            // variants={planetVariants('left')}
            className={'flex-1 flex-col ${styles.flexCenter}'}
          >
            <TitleText textStyles={"!text-center text-dark !text-6xl"} title={<>Uses for a Flexitank</>} />
            <img
              src="../images/products/flexitank2.png"
              alt="flexitank"
              className="w-[90%] object-contain -mt-[50px]"
            />
            <p className='ml-20 mr-24 text-lg py-3 pt-6 leading-8 xs:text-base'>Due to its high efficiency and exceptional contamination prevention, flexitanks are
              used for non-hazardous chemical transportation. But also for food-grade goods like
              edible oil, fruit concentrates, drinks, among others.</p>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[1] flex justify-center flex-col">
            {/* <TypingText title="| How Metaversus Works" /> */}
            <div className="mt-[31px] flex flex-col max-w-[100%] mr-24 gap-[24px]">
              {uses.map((feature, index) => (
                <StartSteps
                  key={`feature-${index}`}
                  {...feature} index={index + 1}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </main>
  )
}

export default FlexitankUses