import React from 'react'
import dunnagepic1 from '../../public/images/dunnageBag/dunnageBag1.jpg'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { AnimateSharedLayout } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import DunnageContent from '@/components/DunnageContent'
import DunnageBenefits from '@/components/DunnageBenefits'
import DunnageSize from '@/components/DunnageSize'
import DunnageService from '@/components/DunnageService'


{/* bg-gradient-to-r from-[#F3E8D6] to-[#DBC4AC] */ }


const dunnagebag = () => {
  return (
    <>
      <Head>
        <title>Dunnage Bags</title>
        <meta name="description" content="Generated by create next app" />

      </Head>

      <Image src={dunnagepic1} alt="dunnage"
        className='  -z-10 absolute w-full min-h-screen mb-0 object-cover '
        priority
        sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,       
            33vw"
      />

      <main className="  flex flex-col  text-dark w-full min-h-screen 
   bg-gradient-to-r bg-top from-[#F0E7D5] to-[#904C06]/80  pb-0 mb-0 lg:items-start ">
        <Navbar className='bg-transparent' />
        <Layout className=' pt-0 pb-0 items-center bg-transparent '>
          <div className='flex flex-col lg:items-center text-dark'>
            <div className='w-3/5 2xl:w-4/5 xl:w-full lg:w-full'>
              <AnimatedText text="crown Dunnage Bags"
                className='   pt-36 2xl:pt-0 xl:pt-3 lg:pt-16 sm:pt-6 text-dark !text-8xl !text-left xl:!text-7xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-5xl ' />
              <p className='pt-12 pr-24 sm:pr-0 text-2xl 2xl:text-xl md:text-lg sm:text-base  '>
                Dunnage bags holds the cargo in place within the containers while transporting.
                It can be padded in any manner based on the goods it protects.</p>
            </div>
          </div>
        </Layout>
      </main>
      <DunnageContent />
      <DunnageBenefits />
      <DunnageSize />
      <DunnageService />
    </>
  )
}

export default dunnagebag

