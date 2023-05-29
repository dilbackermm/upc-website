import React, { useRef } from 'react'
import Layout from './Layout'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import Link from 'next/link'
import { PdfIcon } from './icons'
import AnimatedText from './AnimatedText'
import mountinPic1 from '../../public/images/silo/mountingPic1.png'
import mountinPic2 from '../../public/images/silo/mountingPic2.png'
import Image from 'next/image'


const Instructions = ({ step, instruction }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-4 first:mt-0 last:mb-0 w-[75%] sm:w-full mx-auto flex flex-col itmes-center justify-between dark:text-light md:w-[80%] '>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}>
            <h3 className='capitalize font-semibold text-xl sm:text-lg sx:text-base '>{step}</h3>
            <p className='font-medium w-full md:text-sm '>
                {instruction}
            </p>
        </motion.div>
    </li>
}


const SilobagMounting = ({ className = "" }) => {


    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <main className={` flex pt-10 bg-primarylight text-dark w-full min-h-auto 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pb-20 !pt-0 bg-transparent mx-32 xl:mx-12 lg:mx-6 '>
                <AnimatedText text="Silo Bag Mounting Instructions" className='sm:!text-4xl pb-12 !text-6xl text-primaryDark' />

                <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
md:w-[2px] md:left-[30px] sm:-left-[10px] xs:-left-[21px]
 ' />

                    <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                        <Instructions
                            step="step 1"
                            instruction="Take out the SILO bag from the box."
                        />
                        <Image src={mountinPic1} className='ml-20 lg:ml-12 sm:ml-0' />
                        <Instructions
                            step="step 2"
                            instruction="Cut the blue cords taking care NOT TO CUT the white cords."
                        />
                        <Instructions
                            step="step 3"
                            instruction="Open, unfold and lay it out flat as shown below"
                        />
                          <Image src={mountinPic2} className='ml-20 lg:ml-12 sm:ml-0' />
                        <Instructions
                            step="step 4"
                            instruction="Place the bag right between the backstop and the tunnel, with the black folded edges 
                            facing the tunnel and the white edges facing the backstop."
                        />
                        <Instructions
                            step="step 5"
                            instruction="Now mount the bag onto the machine pushing it far forward."
                        />
                        <Instructions
                            step="step 6"
                            instruction="ORotate the bag, so the plastic is levelled on the holding pan under the tunnel with the logo 
                            facing the side of the tunnel."
                        />
                        <Instructions
                            step="step 7"
                            instruction="Now remove all the remaining white cords."
                        />
                        <Instructions
                            step="step 8"
                            instruction="Grab the plastic at the lower inside edge and pull out almost 8-10 feet of the bag. In the 
                            case of grains, the bag has to be pulled from the outside edge."
                        />
                        <Instructions
                            step="step 9"
                            instruction="Now attach the stretch rope and seal the free end."
                        />
                        <Instructions
                            step="step 10"
                            instruction="Ensure that the bag is not binding on the machine, the rope and pan are well fastened."
                        />
                        <Instructions
                            step="step 11"
                            instruction="Also ensure the ‘stretch bars’ with the filled bag DO NOT exceed 11” in height."
                        />
                        <Instructions
                            step="step 12"
                            instruction="Extra room will be needed for expansion.
                            "
                        />
                        <Instructions
                            step="step 13"
                            instruction="The RED rape you see near the logo indicates that 5 folds remain until the end of the bag."
                        />
                        <Instructions
                            step="step 14"
                            instruction="On completion of filling seal, the open end immediately."
                        />
                        <Instructions
                            step="step 15"
                            instruction="Now vent the bag quickly with a 3” to 4” strip of repair tape on the finished end."
                        />
                        <Instructions
                            step="step 16"
                            instruction="Make a 1-inch ‘X’ through the tape and bag and let it vent for 2 to 3 days till it stops releasing 
                            the gas built up within and reseal. Please note that inhaling silage gases is hazardous."
                        />
                       

                    </ul>
                </div>
                <div className="flex items-center w-full justify-center">
                <Link
              href="/siloBrochure.pdf" target={"_blank"}
              download={true}
              whileHover={{ y: -5 }}
              className=" flex items-center w-96 sm:w-60 justify-between bg-light  mt-16 rounded-lg shadow-lg border broder-solid border-primaryDark hover:shadow-xl ">
              <h6 className="px-12 py-6 md:p-6 sm:p-3 text-primaryDark  text-3xl md:text-2xl sm:text-xl font-semibold">Download Brochure</h6>
              <span className='p-8'>
                <PdfIcon className={"ml-1 mr-6"} />
              </span>
            </Link>
                </div>
            </Layout>
        </main>
    )
}

export default SilobagMounting



{/* <motion.div
variants={fadeIn('left', 'tween', 0.2, 1)}>
{silomo.map((silomo, index) => (
    <SiloMo
        key={silomo}
        number={index + 1}
        text={silomo}
    />
))}
</motion.div> */}