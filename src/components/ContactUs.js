import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import Form from '@/components/Form'
import phoneIcon from '../../public/images/svgs/phone.svg'
import mailIcon from '../../public/images/svgs/mail.svg'
import Image from 'next/image'
import mailIllustration from '../../public/images/contact/mailDraw.png'



const ContactUs = ({ className = "" }) => {
  return (
    <main className={` flex pt-9 bg-light/75 text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus' >
      <Layout className='!pt-6 bg-transparent z-20 mx-32 xl:mx-12 lg:mx-6'>
        <AnimatedText text="Contact Us" className='mb-16 !text-8xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' />
        <div className="flex lg:flex-col-reverse items-center">
          <div className="w-2/5 lg:w-full  flex mx-3 flex-col ">
            <p className=' text-xl leading-8'>Fill in the form with your questions, comments and concerns, and we will get right back to you.</p>
            <Image src={mailIllustration} alt="mail_illustration" className="w-full h-auto " />
            <h2 className='pt-6 text-2xl font-bold leading-8 text-primaryDark'>Other ways to reach us</h2>
            <div className="flex flex-col justify-items-center py-3">
              <div className='flex items-center'>
                <Image src={phoneIcon} alt="check_icon" className='mx-2 w-9 pt-2 sm:mx-0 p-0.5' />
                <div className='flex flex-col '>
                  <h2 className='pt-3 pl-3 text-base text-dark/75 font-medium'>Phone</h2>
                  <h2 className=' pl-3 text-base text-dark font-medium'>+91 91485 22002 &#40;India&#41;</h2>
                  <h2 className=' pl-3 text-base text-dark font-medium'>1-800-875-8441 &#40;USA&#41;</h2>
                </div>
              </div>
              <div className='py-3 flex items-center'>
                <Image src={mailIcon} alt="check_icon" className='mx-2 w-9 pt-2 sm:mx-0 p-0.5' />
                <div className='flex flex-col '>
                  <h2 className='pt-3 pl-3 text-base text-dark/75 font-medium'>E-mail</h2>
                  <h2 className=' pl-3 text-base text-dark font-medium'>sales@unitedpackaging.biz</h2>
                </div>
              </div>

            </div>
          </div>
          <div className="w-3/5 lg:w-full flex mx-5 ">
            <Form />
          </div>
        </div>
        <div className="flex items-center lg:flex-col lg:items-start border-t border-t-dark/50 pt-6">
          <div className='flex flex-col '>
            <h2 className='pt-3 px-3 text-lg sm:text-base text-dark/75 font-medium'>Corporate Office</h2>
            <h2 className=' px-3 text-base sm:text-base text-dark font-medium'>#53, 1st floor, 4th Block 5th Cross, Kormangala , Bangalore 560034 India</h2>
          </div>
          <div className='flex flex-col '>
            <h2 className='pt-3 px-3 text-lg sm:text-base text-dark/75 font-medium'>USA Office</h2>
            <h2 className=' px-3 text-base sm:text-base text-dark font-medium'>214 Main Street, Suite 207,
              Hackensack, NJ 07601, USA</h2>
          </div>
          <div className='flex flex-col '>
            <h2 className='pt-3 px-3 text-lg sm:text-base text-dark/75 font-medium'>Factory Address</h2>
            <h2 className=' px-3 text-base sm:text-base text-dark font-medium'># 361,Somapura Industrial Area,1st stage
              Nelamangala Taluk, Somapura village,
              Bengaluru Rural 562111 India</h2>
          </div>
        </div>

      </Layout>
    </main>
  )
}

{/* <div className='py-3 flex items-center'>

<div className='flex flex-col '>
  <h2 className='pt-3 pl-3 text-lg sm:text-base text-dark/75 font-medium'>Corporate Office</h2>
  <h2 className=' pl-3 text-base sm:text-base text-dark font-medium'>#53, 1st floor, 4th Block 5th Cross, Kormangala , Bangalore 560034 India</h2>
</div>
</div>
<div className='py-2 flex items-center'>

<
</div> */}

export default ContactUs