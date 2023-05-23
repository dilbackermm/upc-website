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



const FlexitankCapacity = ({ className = "" }) => {
    return (
        <main className={`flex pt-9 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus' >
            <Layout className='!pt-6 bg-transparent !z-10 mx-32 xl:mx-12 lg:mx-6'>
            <div className="">
                    <AnimatedText text="Recommended Flexitank Capacity by Liquid Type" className='!text-left text-primaryDark !text-6xl' />
            </div>

            <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: 'false', amount: 0.25 }}
          className={`${styles.innerwidth} mx-auto mt-12 flex lg:flex-row flex-row`}
        >
          <motion.div
            // variants={planetVariants('left')}
            className={'flex-1 flex-col ${styles.flexCenter}'}
          >
            <p className='mr-24 p-2 text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>The most widely available flexitank containers
              come between 10,000 liters and 24,000 liters. Flexitank models are available in 16,000L, 18,000L,
              20,000L, 22,000L, and 24,000L.Some companies also offer a range of 1,000L up to 100,000L — depending
              on the customer’s requirements</p>
            <p className='mt-6 p-2 text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:text-base'>Here’s a reference table for various types of
              liquids and corresponding flexitank capacity:</p>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[1] flex flex-col">

            <table className='bg-light shadow-lg border
    border-solid p-10 border-[#904C06] hover:shadow-xl'>
              <thead className='text-dark border border-primaryDark'>
                <tr>
                  <th className='py-5 border border-primaryDark'>Type of product to be transported</th>
                  <th className='py-5 border border-primaryDark'>Density (kg/m)</th>
                  <th className='py-5 border border-primaryDark'>Recommended size of flexitank</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr>
                  <td className='py-1 border border-primaryDark'>Latex</td>
                  <td className='py-1 border border-primaryDark'>60-95</td>
                  <td className='py-1 border border-primaryDark'>19,000 L</td>
                </tr>
                <tr>
                  <td className='py-1 border border-primaryDark'>Polyol</td>
                  <td className='py-1 border border-primaryDark'>1,100</td>
                  <td className='py-1 border border-primaryDark'>19,000 L</td>
                </tr>
                <tr>
                  <td className='py-1 border border-primaryDark'>Glycerin</td>
                  <td className='py-1 border border-primaryDark'>1,260</td>
                  <td className='py-1 border border-primaryDark'>20,000 L</td>
                </tr>
                <tr>
                  <td className='py-1 border border-primaryDark'>Palm oil</td>
                  <td className='py-1 border border-primaryDark'>887.5</td>
                  <td className='py-1 border border-primaryDark'>21,000 L</td>
                </tr>
                <tr>
                  <td className='py-1 border border-primaryDark'>Olive oil</td>
                  <td className='py-1 border border-primaryDark'>905</td>
                  <td className='py-1 border border-primaryDark'>22,000 L</td>
                </tr>
                <tr>
                  <td className='py-1 border border-primaryDark'>Wine</td>
                  <td className='py-1 border border-primaryDark'>285.7</td>
                  <td className='py-1 border border-primaryDark'>24,000 L</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
            </Layout>
        </main>
    )
}

export default FlexitankCapacity