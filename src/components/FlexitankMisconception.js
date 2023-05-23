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
  
      <Image src={tick} alt="check_icon" className='mx-2 sm:mx-0 p-0.5' />
     <h2 className='py-3 pl-3 text-lg sm:text-base text-dark/75 font-medium'>{point}</h2>
    </motion.li>
  )
}

const FlexitankMisconception = ({ className = "" }) => {
    return (
        <main className={`flex pt-9 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus' >
            <Layout className='!pt-6 bg-transparent !z-10 mx-32 xl:mx-12 lg:mx-6'>
            <div className="">
                    <AnimatedText text="General Misconception For Choosing Flexitank Capacity" className='!text-left text-primaryDark !text-6xl' />
            </div>
            <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: 'false', amount: 0.25 }}
          className={`${styles.innerwidth} mx-auto mt-10 flex lg:flex-row flex-row`}
        >
          <motion.div
            className={'flex-1 flex-col ${styles.flexCenter} mr-8'}
          >
            <p className='py-6 lg:py-3 xs:py-1 text-dark text-2xl lg:text-xl xs:text-base leading-10 text-left font-medium'><span className='text-primaryDark'>Myth:</span> A flexitank with a greater capacity as
              compared to the total quantity of load would be a better choice for the bulk load of liquid</p>
          </motion.div>
          <motion.div
            className="flex-[1] flex flex-col">
            <p className='py-6 lg:py-3 xs:py-1 text-dark text-2xl lg:text-xl xs:text-base leading-10 text-left font-medium'><span className='text-primaryDark'>Fact:</span> It is the density/specific gravity of the liquid which plays a crucial role in
              determining the correct size of flexitank to be used.</p>
          </motion.div>
        </motion.div>

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
              src="../images/flexitanks/usaid-bladder-tank-lg-2.jpg"
              alt="green bladder water tank"
              className="w-[90%] object-contain mt-9 mr-16"            />
          </motion.div>

          <motion.div
            className={'flex-1 flex-col ${styles.flexCenter}'}
          >
            <TitleText textStyles={"text-left text-5xl text-[#904C06]"} title={<>What Is A Flexitank Made Up Of?</>} />
            <TitleText textStyles={"text-left text-5xl text-[#904C06]"} title={<></>} />
            <p className='py-6 lg:py-3 xs:py-1 text-dark text-2xl lg:text-xl xs:text-base leading-10 text-left font-normal'>A Flexitank container is a bulk liquid
              storage tank. Made of numerous layers of polyethylene and a woven polypropylene outer covering.
              They are manufactured using different types of materials such as:</p>
            
              <div className="w-full mx-auto">

<ul className='lg:ml-1'>
   <Points point="Multilayer polyethylene" />
   <Points point="Single and double layer polyethylene" />
   <Points point="Barrier tanks" />
   <Points point="PVC" />
   <Points point="Bottom discharge" />
</ul>
</div>
          </motion.div>
        </motion.div>
            </Layout>
        </main>
    )
}

export default FlexitankMisconception