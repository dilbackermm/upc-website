import React from 'react'
import flexitankbanner from '../../public/images/flexitanks/banner.jpg'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'
import Image from 'next/image'

import AnimatedText from '@/components/AnimatedText'

import FlexitankUses from '@/components/FlexitankUses'

import FlexitankAdvantages from '@/components/FlexitankAdvantages'

import FlexitankMisconception from '@/components/FlexitankMisconception'
import FlexitankxChange from '@/components/FlexitankxChange'

{/*  */ }






const flexitank = () => {
  return (
    <>
      <Head>
        <title>Flexitank</title>
        <meta name="description" content="Generated by create next app" />

      </Head>

      <Image src={flexitankbanner} alt="flexitank"
        className='  -z-10 absolute w-full min-h-screen mb-0 object-cover 
             '
        priority
        sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,       
            33vw"
      />

<main className="  flex flex-col  text-dark w-full min-h-screen 
   bg-gradient-to-r bg-top from-[#F0E7D5] to-[#904C06]/80  pb-0 mb-0 lg:items-start ">
        <Navbar className='bg-transparent z-20' />
        <Layout className=' pt-0 pb-0 items-center bg-transparent '>
          <div className='flex flex-col lg:items-center text-dark'>
            <div className='w-3/5 xl:w-full lg:w-full'>
              <AnimatedText text="Crown Flexitanks"
                className='   pt-24 2xl:pt-6 xl:pt-3 lg:pt-16 sm:pt-6 text-dark !text-8xl !text-left xl:!text-6xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-5xl ' />
              <p className='pt-12 pr-24 sm:pr-0 text-2xl 2xl:text-xl md:text-lg sm:text-base  '>
              The flexitanks commonly used by the industry can hold up to 24,000 liters of liquid cargo.
                Flexitanks are used for the transportation of non-hazardous liquids.</p>

            </div>
          </div>
        </Layout>
      </main>

      <FlexitankUses />
      <FlexitankAdvantages />
      <FlexitankMisconception />
      <FlexitankxChange />

    </>
  )
}

export default flexitank

