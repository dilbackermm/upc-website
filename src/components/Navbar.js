import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { Router, useRouter } from 'next/router'
import { motion } from 'framer-motion';
import { useState } from 'react'



const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className}  font relative group  ${router.asPath === href ? "font-semibold" : "font-normal"}  `}>
            {title}

            <span className={`h-[2px] inline-block  bg-primaryDark absolute left-0 -bottom-2
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            `}>&nbsp;</span>
        </Link>
    )
}





const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();


    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light  my-2`} onClick={handleClick}>
            {title}

            <span className={`h-[1px] inline-block  bg-light  absolute left-0 -bottom-1
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            `}>&nbsp;</span>
        </button >
    )
}



const Navbar = ( {className = "" }) => {

   
    const [isOpen, setIsOpen] = useState(false)


    const handleClick = () => {
        setIsOpen(!isOpen)
    }





    return (
        <header
            className={`w-full px-32 py-8 font-medium flex items-center justify-between
            ralative z-10 lg:px-16 md:px-12 sm:px-8 ${className}`} 
        >
     <div className=' '>
        <Link href="/" >
       
                <Logo />
                </Link>
            </div>

            <button className=' fixed lg:right-9 right-12 flex-col justify-center items-center shadow
            flex z-50 bg-primaryDark px-4 py-5  rounded-full' onClick={handleClick} >
                <span className={`bg-light display-block h-[3px] w-7 lg:h-0.5 lg:w-6 rounded-sm transition-all duration-300 ease-out 
                ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `} ></span>
                <span className={`bg-light display-block h-[3px] w-7 lg:h-0.5 lg:w-6 rounded-sm transition-all duration-300 ease-out my-1 lg:my-0.5
    ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
                <span className={`bg-light display-block h-[3px] w-7 lg:h-0.5 lg:w-6 rounded-sm transition-all duration-300 ease-out 
                ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `} ></span>
            </button>

          


            {
                isOpen ?

                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className=' min-w-[80vw] lg:min-w-[70vw] min-h-[90vh] lg:min-h-[70vh] flex flex-col justify-between z-40 
        itmes-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y1/2
        bg-primaryDark/90 rounded-2xl backdrop-blur py-32 ' >
                        <nav className='flex items-center flex-col justif-center'>
                            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                            <CustomMobileLink href="/#aboutus" title="About" className='' toggle={handleClick} />
                            <CustomMobileLink href="/#products" title="Products" className='' toggle={handleClick} />
                            <CustomMobileLink href="/#contactus" title="Contact" className='' toggle={handleClick} />
                        </nav>




                    </motion.div>

                    : null
            }



       

        </header>
    )
}

export default Navbar