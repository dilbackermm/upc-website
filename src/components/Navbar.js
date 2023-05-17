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

            <span className={`h-[2px] inline-block  bg-primaryDark absolute dark:bg-light left-0 -bottom-2
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
        <button href={href} className={`${className} relative group text-light dark:text-primaryDark my-2`} onClick={handleClick}>
            {title}

            <span className={`h-[1px] inline-block  bg-light  absolute left-0 -bottom-1
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
           dark:bg-primaryDark `}>&nbsp;</span>
        </button >
    )
}



const Navbar = () => {

   
    const [isOpen, setIsOpen] = useState(false)


    const handleClick = () => {
        setIsOpen(!isOpen)
    }





    return (
        <header
            className=' bg-[#cd8c20]/25 w-full px-32 py-8 font-medium flex items-center justify-between
            dark:text-light ralative z-10 lg:px-16 md:px-12 sm:px-8 '
        >
     <div className=' '>
                <Logo />
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

            {/* <div className=' w-full flex justify-between itmes-center lg:hidden ' >




                <nav className="flex items-center justify-center flex-wrap">


                </nav>

                <nav>
                    <CustomLink href="/" title="Home" className='mr-4 text-primaryDark' />
                    <CustomLink href="/about" title="About" className='mx-4 text-primaryDark' />
                    <CustomLink href="/projects" title="Prducts" className='mx-4 text-primaryDark ' />
                    <CustomLink href="/articles" title="Contact" className='ml-4 text-primaryDark ' />
                    <Link href="/" target='_blank'
                        className=' rounded-lg ml-8 bg-primaryDark text-light hover:bg-dark p-2 px-6 text-normal 
                        font-semibold sm:px-4 sm:text-base'
                    >
                        
                        Shop </Link>
                </nav>


            </div> */}


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
                            <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
                            <CustomMobileLink href="#products" title="Products" className='' toggle={handleClick} />
                            <CustomMobileLink href="/articles" title="Contact" className='' toggle={handleClick} />
                        </nav>




                    </motion.div>

                    : null
            }



       

        </header>
    )
}

export default Navbar