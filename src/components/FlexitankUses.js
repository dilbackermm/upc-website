import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import Image from 'next/image'

import store1 from '../../public/images/flexitanks/store1.png'
import store2 from '../../public/images/flexitanks/store2.png'
import store3 from '../../public/images/flexitanks/store3.png'
import store4 from '../../public/images/flexitanks/store4.png'


const Uses = ({ use, content }) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col pl-9 lg:pl-1 2xl:pl-7 xl:pl-6 py-3 lg:py-2 sm:py-1 items-start  "
    >
      <h2 className='py-3 lg:py-2 sm:py-1 pl-3 lg:pl-1 text-3xl xl:text-2xl sm:text-xl xs:text-lg text-primaryDark font-semibold'>{use}</h2>
      <p className='pt-2 lg:pt-1 pb-3 pl-3 lg:pl-1 text-lg xl:text-base lg:text-lg sm:text-base xs:text-sm text-dark'>{content}</p>
    </motion.li>
  )
}


const Items = ({ img, item }) => {
  return (
    <div
      className="flex flex-col items-center "
    >
      <Image src={img} alt="check_icon"
        className='mx-6 xl:mx-3 p-6 2xl:p-5 xl:p-4 
        bg-light rounded-lg border border-primaryDark 
        xl:w-36 w-60 2xl:w-44 sm:w-32 xs:w-28' />
      <h2 className='py-3 text-center text-xl  
      xl:text-lg sm:text-base xs:text-sm text-dark/75 font-medium'>
        {item}
      </h2>
    </div>
  )
}

const FlexitankUses = ({ className = "" }) => {
  return (
    <main className={` flex pt-9 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `}  >
      <Layout className='!py-6 bg-transparent  mx-32 2xl:mx-24 xl:16 xl:mx-12 lg:mx-6'>
        <div className="flex items-start lg:flex-col ">
          <div className="w-5/12 lg:w-full flex flex-col pr-5 xl:pr-0">
            <AnimatedText text="Uses for a Flexitank"
              className='text-left text-primaryDark' />
            <motion.p
              initial={{ x: -200 }}
              whileInView={{ x: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
              viewport={{ once: true }}
              className='py-5 pt-12 text-lg text-dark font-normal leading-[2rem] xl:text-lg sm:leading-[2rem] text-left sm:text-lg xs:text-base'>
              Due to its high efficiency and exceptional contamination prevention,
              flexitanks are used for non-hazardous chemical transportation.
              But also for food-grade goods like edible oil, fruit concentrates,
              drinks, among others.
            </motion.p>
            <Image
              src="../images/products/flexitank2.png"
              alt="flexitank"
              className="w-[90%] object-contain"
            />
          </div>

          <div className="w-7/12 lg:w-full lg:flex-col 2xl:ml-12 xl:ml-36 lg:ml-0 lg:pt-3">
            <ul>
              <Uses
                use="1. Fuel storage"
                content="Liquid fuels including gasoline, diesel, and oil can be stored
               and transported in flexitanks easily. they are primarily utilized 
               for storage. Coupled with a protective lining and berm, 
               to provide extra containment safety to the surrounding environment.
              "
              />
              <Uses
                use="2. Portable water storage"
                content="Flexitanks occupy very little space and are easy to transport.
               In case of emergencies or during disaster reliefs, they are also used to 
               store and transport potable water
              "
              />
              <Uses
                use="3. Food-grade liquid storage"
                content="Flexitanks enable the safe storage of food-grade 
              liquid ingredients, such as milk, juices, wines, fructose 
              syrup and others.
              "
              />
              <Uses
                use="4. Industrial chemical storage"
                content="flexitanks are ideal for transporting and storing industrial 
              liquid chemicals such as liquid detergents, lubricants, fertilizers, 
              liquid latex, and paints, among others.
              "
              />
              <Uses
                use="5. Single-use & primary storage"
                content="Flexitanks can decrease the overall storage costes
               in cases where liquid storage is not for a long duration."
              />
            </ul>
          </div>
        </div>
        <div className="flex lg:flex-col-reverse items-satrt">

          <div className=" flex  w-1/2 lg:w-full ps-6 lg:ps-1 ">
            <div className="flex flex-col lg:flex-row md:flex-col">
              <div className="py-4 xl:py-2 flex flex-row">
                <Items item="Food-grade liquids" img={store1} />
                <Items item="Chemicals" img={store2} />
              </div>
              <div className="py-4 xl:py-2 flex flex-row">
                <Items item="Water" img={store3} />
                <Items item="Oil" img={store4} />
              </div>
            </div>
          </div>
          <div className="w-1/2 lg:w-full p-9 lg:p-6">
            <AnimatedText text="What can you carry in a Flexitank"
              className='text-center text-primaryDark' />
          </div>
        </div>

      </Layout>
    </main>
  )
}

export default FlexitankUses



// <motion.div
// variants={staggerContainer}
// initial="hidden"
// whileInView="show"
// viewport={{ once: 'false', amount: 0.25 }}
// className={`${styles.innerwidth} mx-auto mt-10 flex lg:flex-row flex-row`}
// >
// <motion.div
//   // variants={planetVariants('left')}
//   className={'flex-1 flex-col ${styles.flexCenter}'}
// >
//   <TitleText textStyles={"!text-center text-dark !text-6xl"} title={<>Uses for a Flexitank</>} />
//   <img
//     src="../images/products/flexitank2.png"
//     alt="flexitank"
//     className="w-[90%] object-contain -mt-[50px]"
//   />
//   <p className='ml-20 mr-24 text-lg py-3 pt-6 leading-8 xs:text-base'>Due to its high efficiency and exceptional contamination prevention, flexitanks are
//     used for non-hazardous chemical transportation. But also for food-grade goods like
//     edible oil, fruit concentrates, drinks, among others.</p>
// </motion.div>
// <motion.div
//   variants={fadeIn('left', 'tween', 0.2, 1)}
//   className="flex-[1] flex justify-center flex-col">
//   {/* <TypingText title="| How Metaversus Works" /> */}
//   <div className="mt-[31px] flex flex-col max-w-[100%] mr-24 gap-[24px]">
//     {uses.map((feature, index) => (
//       <StartSteps
//         key={`feature-${index}`}
//         {...feature} index={index + 1}
//       />
//     ))}
//   </div>
// </motion.div>
// </motion.div>