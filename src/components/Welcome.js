import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { LinkArrow, PdfIcon } from './icons'
import { motion } from 'framer-motion'
import Link from 'next/link'






const Welcome = ({ className = "" }) => {
  return (
    // bg-gradient-to-r bg-top from-[#4B2204] to-[#9c6618]
    <main className={` pt-0  flex items-center bg-primarylight text-dark w-full min-h-screen 
       pb-0 mb-0 ${className} `} >
      <Layout className='!py-0 !lg:py-2 bg-transparent z-0 mx-32 xl:mx-12 lg:mx-6'>
        <div className="grid grid-cols-2 lg:flex lg:flex-col gap-16 2xl:gap-9 xl:gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <AnimatedText
                text={"Welcome to UPC"}
                className=' text-primaryDark font-bold text-left' />
              {/* <AnimatedText text={"to UPC "}
                className='text-7xl  text-primaryDark font-bold text-left' /> */}
            </motion.div>
            <Link
              href="/dunnageBrochure.pdf" target={"_blank"}
              download={true}
              whileHover={{ y: -5 }}
              className=" flex items-center w-96 sm:w-60 justify-between bg-light  mt-16 rounded-lg shadow-lg border broder-solid border-primaryDark hover:shadow-xl ">
              <h6 className="px-12 py-6 md:p-6 sm:p-3 text-primaryDark  text-3xl md:text-2xl sm:text-xl font-semibold">Download Brochure</h6>
              <span className='p-8'>
                <PdfIcon className={"ml-1 mr-6"} />
              </span>
            </Link>
          </div>
        
<motion.div>
  <motion.p
  initial={{y:200}}
  whileInView={{y:0, transition:{duration:0.9, ease:"easeInOut"}}}
viewport={{once:true}}
className='p-2 text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:leading-[1.85rem]'>
When it comes to logistics, Dunnage bags are inevitably a part of it.
  </motion.p>
  <motion.p
  initial={{y:200}}
  whileInView={{y:0, transition:{duration:0.9, ease:"easeInOut"}}}
viewport={{once:true}}
className='p-2 text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem]  text-left sm:text-lg xs:leading-[1.85rem]'>
Dunnage bags are poly bladders surrounded by ply’s of poly woven material with a
 valve that can inflate or deflate the bags. Dunnage bags are essentially padded
  bags to secure the goods in place and protect them while transporting by air, 
  sea, rail or road.
  </motion.p>
  <motion.p
  initial={{y:200}}
  whileInView={{y:0, transition:{duration:0.9, ease:"easeInOut"}}}
viewport={{once:true}}
className='p-2 text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:leading-[1.85rem]'>
In short Dunnage bags holds the cargo in place within the containers while transporting.
 It can be padded in any manner based on the goods it protects. Like right from bubble 
 wraps for smaller items to solid packaging for large items.
  </motion.p>
  <motion.p
  initial={{y:200}}
  whileInView={{y:0, transition:{duration:0.9, ease:"easeInOut"}}}
viewport={{once:true}}
className='p-2 text-xl text-dark font-normal leading-[2.35rem] sm:leading-[2rem] text-left sm:text-lg xs:leading-[1.85rem] '>
To protect the goods in the containers from shifting vertically, horizontally, or transversely, 
buffering is essential to protect the goods and keep them intact till their destination 
is reached. For this, the right dunnage bags are needed.
  </motion.p>
  
</motion.div>

        </div>
      </Layout>
    </main>



  )
}

export default Welcome