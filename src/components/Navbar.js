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
        <button href={href} className={`${className} relative group text-light text-2xl lg:text-lg text-left my-4 lg:my-2 font-light`} onClick={handleClick}>
            {title}

            <span className={`h-[1px] inline-block  bg-light  absolute left-0 -bottom-1
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            `}>&nbsp;</span>
        </button >
    )
}



const Navbar = ({ className = "" }) => {


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
                ${isOpen ? 'rotate-45 translate-y-[6.5px] lg:translate-y-1' : '-translate-y-0.5'} `} ></span>
                <span className={`bg-light display-block h-[3px] w-7 lg:h-0.5 lg:w-6 rounded-sm transition-all duration-300 ease-out my-1 lg:my-0.5
    ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
                <span className={`bg-light display-block h-[3px] w-7 lg:h-0.5 lg:w-6 rounded-sm transition-all duration-300 ease-out 
                ${isOpen ? '-rotate-45 -translate-y-[6.5px] lg:-translate-y-1' : 'translate-y-0.5 '} `} ></span>
            </button>




            {
                isOpen ?

                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1, }}
                        className=' min-w-[80vw] lg:min-w-full min-h-[80vh] lg:min-h-full flex flex-col justify-between z-40 
        itmes-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y1/2
        bg-primaryDark/90 rounded-2xl lg:rounded-none py-32 backdrop-blur-xl' >
                        <nav className='flex justify-around lg:flex-col items-start'>
                        <div className='mx-12 lg:hidden flex items-start flex-col justif-center self-center'></div>
                            <div className='mx-12 flex items-left flex-col justif-center text-left'>
                            <h2 className='pb-3 text-3xl text-left font-bold text-light'>Company</h2>
                            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                            <CustomMobileLink href="/#aboutus" title="About" className='' toggle={handleClick} />
                            <CustomMobileLink href="/#products" title="Products" className='' toggle={handleClick} />
                            <CustomMobileLink href="/#contactus" title="Contact" className='' toggle={handleClick} />   
                            </div>
                            <div className='mx-12 lg:pt-6 flex items-left flex-col justif-center  text-left'>
                                <h2 className='pb-3 text-3xl text-left font-bold text-light'>Products</h2>
                            <CustomMobileLink href="/dunnagebag" title="Dunnage Bags" className='' toggle={handleClick} />
                            <CustomMobileLink href="/barrierliners" title="Barrier Liners" className='' toggle={handleClick} />
                            <CustomMobileLink href="/silobag" title="Silo Bags" className='' toggle={handleClick} />   
                            <CustomMobileLink href="/flexitank" title="Flexitanks" className='' toggle={handleClick} />   
                            <CustomMobileLink href="/accessories" title="Accessories" className='' toggle={handleClick} />   
                            </div>
                            
                          
                            <div className='mx-12 lg:hidden flex items-center flex-col justif-center self-center'></div>
                            
                        </nav>




                    </motion.div>

                    : null
            }





        </header>
    )
}

export default Navbar