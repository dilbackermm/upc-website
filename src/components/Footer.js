import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import footerLogo from '../../public/images/logo/footer_logo.png'
import Image from 'next/image'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './icons'




const FooterLink = ({ href, title }) => {
  return (
    <Link href={href}
      className=' text-light font-light hover:underline'>
      {title}
    </Link>
  )
}




const Footer = () => {
  return (
    <footer className='w-full 
    font-medium text-lg text-light sm:text-base'>
      <Layout className='pb-8 pt-24 bg-gradient-to-r bg-top from-[#4B2204] to-[#9c6618] '>
        <div className=" lg:py-6 flex flex-raw items-center  justify-between  lg:flex-col">
          <div className='basis-1/2'>
            <Image src={footerLogo} alt="upc logo" />
          </div>

          <div className="flex flex-row  sm:flex-col basis-3/10 gap-24 sm:gap-6">
            <div className='flex items-start  '>
              <ul>
                <li className='py-3'>
                  <h6 className=' text-secondaryLight font-medium  '>Company</h6>
                </li>
                <li className='py-2'>
                  <FooterLink href="/" title="Home" />
                </li>
                <li className='py-2'>
                  <FooterLink href="/#aboutus" title="About" />
                </li>
                <li className='py-2'>
                  <FooterLink href="/#products" title="Products" />
                </li>
                <li className='py-2'>
                  <FooterLink href="/#contactus" title="Contact" />
                </li>
              </ul>
            </div>
            <div className='flex items-start '>
              <ul>
                <li className='py-3'>
                  <h6 className=' text-secondaryLight font-medium '>Products</h6>
                </li>
                <li className='py-2'>
                  <FooterLink href="/dunnagebag" title="Dunnage Bags" />
                </li>
                <li className='py-2'>
                  <FooterLink href="/barrierliners" title="Barrier Liners" />
                </li>
                <li className='py-2'>
                  <FooterLink href="/silobag" title="Silo Bags" />
                </li>
                <li className='py-2'>
                  <FooterLink href="/flexitank" title="Flexitanks" />
                </li>
                <li className='py-2'>
                  <FooterLink href="/accessories" title="Accessories" />
                </li>
              </ul>
            </div>
          </div>


          <div className='flex flex-col basis-2/10 lg:mt-12 sm:mt-16 ms-5 sm:ms-0 '>
            <div className="flex flex-raw">
              <a href="/"><FacebookIcon className="mx-3 pb-3 w-9" /></a>
              <a href="/"><LinkedInIcon className="mx-3 pb-3 w-9 " /></a>
            </div>
          </div>

        </div>
        <h2 className='pt-24 sm:pt-6 pb-4 text-base sm:text-sm text-secondaryLight/70 text-center font-light'>Coppyrights @ 2022 - 2023 United packaging consolidators. All rights reserved</h2>
      </Layout>

    </footer>
  )
}

export default Footer 