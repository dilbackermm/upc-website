import React from 'react'
import AnimatedText from './AnimatedText'
import Layout from './Layout'
import { motion } from 'framer-motion'
import tick from '../../public/images/svgs/tick.svg'
import Image from 'next/image'



const Points = ({ point }) => {
    return (
      <motion.li
      initial={{x: -200}}
      whileInView={{x:0, transition:{duration:0.9, ease:"easeInOut"}}}
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


const DunnageService = ({ className = "" }) => {
    return (
        <main className={` flex pt-3 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pt-0 !pb-0 bg-transparent  mx-32 xl:mx-12 lg:mx-6 '>
                <h1 className='pt-12 lg:pt-6 text-center text-5xl lg:text-4xl font-bold xs:text-3xl'>Certified Quality and Reliable Customer Services</h1>
                <div className="">
                    <div className="w-full  text-primaryDark">
                        <p className='py-6  text-dark text-xl lg:text-lg xs:text-base leading-9 text-left'>Now you too can become of our global network as our channel
                            partner. What we are looking at is a long through mutual respect
                            and honest coorperation between the partners.
                            What you get in return is fast and unrestricted customer service.
                            Benefit from our production facilities at various locations which
                            allow the duty-free import to almost all countries.
                            Our highly trained team with collective years of experience both
                            in the industry and commercial enterprises to back you up.
                            What we promise is:
                        </p>
                    </div>
                    <div className="w-full px-5 pb-6 mx-auto">

                        <ul className='ml-24 lg:ml-1'>
                           <Points point="Duty-free delivery to almost all countries" />
                           <Points point="Certified products (AAR certificate) with the highest quality" />
                           <Points point="Best prices and fast delivery" />
                           <Points point="Excellent customer service" />
                           <Points point="Headquarters and management in India" />
                           
                        </ul>
                    </div>

                </div>
                <div className='py-12 text-primaryDark text-center'>
                    <h2 className='text-7xl lg:text-4xl font-light'>"Become part of our team</h2>
                    <h2 className='pt-3 text-7xl lg:text-4xl font-light'>Inviting distributors"</h2>
                </div>
            </Layout>
        </main>
    )
}

export default DunnageService