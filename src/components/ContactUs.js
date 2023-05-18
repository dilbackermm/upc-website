import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'

const ContactUs = ({ className = "" }) => {
  return (
    <main className={` -pt-16  flex items-center bg-primarylight text-primaryDark w-full min-h-screen 
    pb-0 mb-0 ${className} `} >
            <Layout className=' bg-transparent z-20 mx-32 xl:mx-12 lg:mx-6'>
            <AnimatedText text="Contact Us" className='mb-16 !text-8xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' />
            </Layout>
            </main>
  )
}

export default ContactUs