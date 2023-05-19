import React, { use, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);


    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])


    return <span ref={ref}></span>
}




const Stats = () => {
    return (
        <div className='mb-12 mt-20 py-9 border-dark border-y border-opacity-10'>
            <div className='flex  justify-between'>


                <div className="flex flex-col items-center">
                    <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-3xl'>
                        <AnimatedNumbers value={23} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75 py-1
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>Happy clients</h2>
                </div>
                <div className="flex flex-col items-center">
                    <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-3xl'>
                        <AnimatedNumbers value={27} />K
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75 py-1
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>Cargo shipped</h2>
                </div>
                <div className="flex flex-col items-center">
                    <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-3xl'>
                        <AnimatedNumbers value={22} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75 py-1
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>Countries</h2>
                </div>
                <div className="flex flex-col items-center">
                    <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-3xl'>
                        <AnimatedNumbers value={10} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75 py-1
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>Industrial presence</h2>
                </div>
            </div>
        </div>
    )
}

export default Stats