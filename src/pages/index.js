import Head from 'next/head'
import Layout from '@/components/Layout'
import dunnageBag from "../../public/images/profile/dunnage.png"
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import Product from '@/components/Product'
import Welcome from '@/components/Welcome'
import Industries from '@/components/Industries'
import { motion } from 'framer-motion'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'




export default function Home() {
  return (
    <>
      <Head>
        <title>UPC | Home</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
      <Image src={dunnageBag} alt="dunnage" 
              className='  -z-10 absolute  left-10 top-[61px] w-[50%] h-auto mb-0  
               lg:w-full xl:pr-10 xl:pt-24 xl:pb-6 
              lg:hidden' 
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,       
              33vw"
              />
      <main className="  flex items-center text-dark dark:text-light w-full min-h-screen 
      bg-[#cd8c20]/25  pb-0 mb-0 lg:items-start ">
        <Layout className=' pt-0 pb-0  bg-transparent '>

          <div className="flex items-center justify-between w-full lg:flex-col lg:items-start ">
            <div className='w-1/2 md:w-full'>
            {/* bg-gradient-to-r from-[#F3E8D6] to-[#DBC4AC] */}
            </div>
            <div className="w-1/2 flex flex-col items-center pl-6 self-center lg:w-full lg:text-center sm:pt-9 ">
              <AnimatedText text="Protect Your Goods! " 
              className='!text-8xl !text-left xl:!text-7xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-5xl sm:pt-6' />

              <p className='my-6 text-2xl xl:text-xl md:text-lg sm:text-base font-light '>high-quality, reliable and 
              cost-effective dunnage air bags to protect your cargo from damage during transit.</p>
              <div className='flex items-center self-start mt-2 lg:self-center '>
                <Link href="/dummy.pdf" target={"_blank"}
                  className="flex items-center bg-primaryDark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-primaryDark border-2 border-solid border-transparent hover:border-primaryDark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                  download={true}
                >More
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                
              </div>
              <div className=''>
              <Image src={dunnageBag} alt="dunnage" 
              className='-z-20 opacity-70 hidden 
              lg:inline-block relative ' 
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,       
              33vw"
              />
              </div>
            </div>
          </div>
         
        </Layout>
     
      </main>
      <Product className="z-30"    />
      <Welcome className="z-30" />
      <Industries />
      <AboutUs />
      <ContactUs />
    </>
  )
}
