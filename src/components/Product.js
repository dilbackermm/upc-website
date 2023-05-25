import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'

import { motion } from 'framer-motion'

import { useState } from 'react';
import styles from '../styles/index'
import { TitleText, TypingText } from '../components/CustomTexts';
import ExploreCard from '../components/ExploreCard'
import { staggerContainer, textVariant } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Product = ({className = "" }) => {
  const [active, setActive] = useState('prod-3');
  
  return (

    <main className={` pt-0 flex items-center text-dark 
       bg-primarylight pb-0 mb-0 ${className} `} id='products' >
      <Layout className='pt-0 bg-transparent z-0 mx-0'>
      <AnimatedText
                text={"Products "}
                className='pt-12 text-7xl text-primaryDark font-bold text-center' />
      <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once: false, amount:0.25}}
  className={`${styles.innerWidth} mx-auto flex flex-col `}
  >
  
      {/* <TitleText title={<>Choose the world you want
      <br className="md:block hidden"/> to explore </> } textStyles="text-center" /> */}
      <div onClick = { () => {
        if (active == "prod-1") {
            console.log("gfds")
        }
        if (active == "prod-2") {
            console.log(active)
        }
        if (active == "prod-3") {
            console.log(active)
        }
        if (active == "prod-4") {
            console.log(active)
        }
        if (active == "prod-5") {
            console.log(active)
        }
    }
} className=" mt-12 sm:mt-6 flex lg:flex-col flex-row   min-h-[70vh] gap-5">
      {exploreWorlds.map((world, index) => (
        <ExploreCard
        key={world.id}
        {...world}
        index={index}
        active={active}
        handleClick={setActive}
        />
      )
      )}
      </div>
  </motion.div>
        
      </Layout>
    </main>



  )
}

export default Product