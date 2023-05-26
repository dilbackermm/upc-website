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
        <main className={`flex bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus' >
            <Layout className='!pt-6 bg-transparent !z-10 mx-32 xl:mx-12 lg:mx-6'>
            <div className="">
            <AnimatedText text="Get a Flexitank That First Your Needs on xChange" className='text-center'/>
            </div>
            <p className='py-6 lg:py-3 xs:py-1 text-dark text-2xl lg:text-xl xs:text-base leading-10 text-center font-normal'>
              So, now you’ve had a chance to learn more about Flexitank. Maybe it’s for you – or maybe
              you’re looking for other tank containers?Regardless of where you’re at, finding your next
              container has never been easier.
            </p>


            <div className="">
            <div className='flex lg:flex-col items-start justify-between pt-10'>
               <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1  p-6 lg:p-3 xs:p-1 sm:pt-2 '>
                  <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark'>
                  How do you use flexitanks?
                  </h2>
                  <p className='text-lg lg:text-base xs:text-sm pt-3 sm:pt-1'>
                  So, now you’ve had a chance to learn more about Flexitank. Maybe it’s for you – or maybe you’re looking for other tank containers? Regardless of where you’re at, finding your next container has never been easier.
                  </p>
               </div>
               <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1  p-6 lg:p-3 xs:p-1 sm:pt-2 '>
                  <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark'>
                  How do you unload a flexitank?
                  </h2>
                  <p className='text-lg lg:text-base xs:text-sm pt-3 sm:pt-1'>
                  The front end of the flexitank is lifted and rolled slowly towards the door so that the liquid residue can flow easily towards the product valve. The process is continued until the liquid inside the flexitank is pumped off completely.
                  </p>
               </div>
               <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1  p-6 lg:p-3 xs:p-1 sm:pt-2 '>
                  <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark'>
                  Are flexitanks reusable?

                  </h2>
                  <p className='text-lg lg:text-base xs:text-sm pt-3 sm:pt-1'>
                  While most flexitanks are made for temporary, one-time use, others can contain a liquid for years at a time, or be reused as well. 
                  </p>
               </div>
               </div>
               <div className='flex lg:flex-col items-center justify-between'>
               <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1  p-6 lg:p-3 xs:p-1 sm:pt-2 '>
                  <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark'>
                  How many liters of liquid can a flexitank hold?

                  </h2>
                  <p className='text-lg lg:text-base xs:text-sm pt-3 sm:pt-1'>
                  Depending on the density of the liquid, these flexitanks are available with capacities ranging from 10,000 to 24,000 liters. Some companies also offer a range of 1,000L up to 100,000L.
                  </p>
               </div>
               <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1  p-6 lg:p-3 xs:p-1 sm:pt-2 '>
                  <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark'>
                  How much does a flexitank cost?
                  </h2>
                  <p className='text-lg lg:text-base xs:text-sm pt-3 sm:pt-1'>
                  Flexitanks are very cost-efficient. The cost of the flexitank depends on what type of Flexi bag is purchased. The price of a flexitank container set ranges from 100 USD/set up to 500 USD/set.
                  </p>
               </div>
               <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1  p-6 lg:p-3 xs:p-1 sm:pt-2 '>
                  <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark'>
                  What liquids can be transported in a Flexitank?
                  </h2>
                  <p className='text-lg lg:text-base xs:text-sm pt-3 sm:pt-1'>
                  Drinking water, fruit juices and concentrates, wine, sweeterners, malt extracts, olive oils, all type of edible oils, paints, chemicals, bio diesel … liquid detergents, lubricants, inks, and a lot of other free flowing liquid items.
                  </p>
               </div>
          </div>
          </div>
            </Layout>
        </main>
    )
}

export default FlexitankAdvantages