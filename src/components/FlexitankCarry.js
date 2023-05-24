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

const FlexitankCarry = ({ className = "" }) => {
  return (
    <main className={`flex bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus' >
      <Layout className='!pt-6 !pb-6 bg-transparent !z-10 mx-32 xl:mx-12 lg:mx-6'>
        <div className="">
          <AnimatedText text="What can you carry in a Flexitank?" className='!text-left text-primaryDark !text-6xl' />
          <div className='flex lg:flex-col items-center justify-between py-10'>
            <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1 border border-primaryDark rounded-lg shadow-sm bg-secondaryLight/10 p-6'>                    <img
              src="../images/flexitanks/flexitank storage icons-01.png"
              alt="flexitank"
              className="w-[100%] object-contain"
            />
            </div>
            <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1 border border-primaryDark rounded-lg shadow-sm bg-secondaryLight/10 p-6'>
              <img
                src="../images/flexitanks/flexitank storage icons-02.png"
                alt="flexitank"
                className="w-[100%] object-contain"
              />
            </div>
            <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1 border border-primaryDark rounded-lg shadow-sm bg-secondaryLight/10 p-6'>
              <img
                src="../images/flexitanks/flexitank storage icons-03.png"
                alt="flexitank"
                className="w-[100%] object-contain"
              />
            </div>
            <div className='flex flex-col  w-1/3 lg:w-full m-3 lg:m-2 xs:m-1 border border-primaryDark rounded-lg shadow-sm bg-secondaryLight/10 p-6'>
              <img
                src="../images/flexitanks/flexitank storage icons-04.png"
                alt="flexitank"
                className="w-[100%] object-contain"
              />
            </div>
          </div>
          <div className='flex lg:flex-col items-center justify-between pt-5'>
            <div className='flex flex-col  w-1/3 lg:w-full lg:m-2 xs:m-1 -mt-12'>
              <p className='text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] sm:text-lg xs:text-base text-center'>Food-grade liquid</p>
            </div>
            <div className='flex flex-col  w-1/3 lg:w-full lg:m-2 xs:m-1 -mt-12'>
              <p className='text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] sm:text-lg xs:text-base text-center'>Chemicals</p>
            </div>
            <div className='flex flex-col  w-1/3 lg:w-full lg:m-2 xs:m-1 -mt-12'>
              <p className='text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] sm:text-lg xs:text-base text-center'>Water</p>
            </div>
            <div className='flex flex-col  w-1/3 lg:w-full lg:m-2 xs:m-1 -mt-12'>
              <p className='text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] sm:text-lg xs:text-base text-center'>Fuel</p>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default FlexitankCarry