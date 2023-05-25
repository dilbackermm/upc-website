import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'
import dunnage from '../../public/images/dunnageBag/dunnageBenefit.png'
import Image from 'next/image'
import transportation1 from '../../public/images/dunnageBag/transportation1.png'
import transportation2 from '../../public/images/dunnageBag/transportation2.png'
import transportation3 from '../../public/images/dunnageBag/transportation3.png'
import worldclass1 from '../../public/images/dunnageBag/worldclass1.png'
import worldclass2 from '../../public/images/dunnageBag/worldclass2.png'
import worldclass3 from '../../public/images/dunnageBag/worldclass3.png'
import worldclass4 from '../../public/images/dunnageBag/worldclass4.png'



const Benefits = ({ benefit }) => {
    return (
        <motion.li
            initial={{ x: 200 }}
            whileInView={{ x: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, originX: 0 }}
            transition={{ type: 'tween', }}
            className="flex items-center w-full border-b border-b-primaryDark "
        >
            <h2 className='py-5 2xl:py-4 xl:py-3 pl-3 text-2xl 2xl:text-xl lg:text-lg xs:text-base text-primaryDark font-medium '>{benefit}</h2>
        </motion.li>
    )
}



const DunnageBenefits = ({ className = "" }) => {
    return (
        <main className={` flex items-start pt-3 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} >
            <Layout className='!pt-0 !pb-6 bg-transparent  mx-32 xl:mx-12 lg:mx-6 '>
                <AnimatedText text="Benefits of UPC Dunnage Bags " className='!pt-6 pb-14' />
                <Image src={dunnage} className='absolute w-[600px] 2xl:w-[440px] xl:w-[360px] right-60 xl:right-32  z-20 -translate-y-16
                2xl:translate-y-5
                lg:relative lg:right-auto lg:m-auto lg:pt-6' />
                <div className='py-12 lg:py-6'>

                    <ul className='mt-12 lg:mt-1 tex-left border-t border-y-primaryDark'>
                        <Benefits benefit="AAR approved" />
                        <Benefits benefit="Moister resistant" />
                        <Benefits benefit="Light weight" />
                        <Benefits benefit="Easy to remove at destination" />
                        <Benefits benefit="Constructed from 100% recycle materials" />
                        <Benefits benefit="Easy, fast and safe to apply" />
                        <Benefits benefit="Time saving" />
                    </ul>

                </div>
                <div className="py-12">
                    <AnimatedText text="Why use Crown’s Dunnage" className='!pt-24 xl:!pt-9 lg:!py-5 lg  !text-left text-primaryDark !text-6xl' />
                    <p  className='py-6 lg:py-3 xs:py-1 text-dark text-2xl 2xl:text-xl 2xl:leading-[2rem] lg:text-lg xs:text-base leading-10 text-left'>During transit, your packages may go through tough environmental
                        conditions while in sorting facilities, trucks, ships and other vehicles.
                        Dunnage is useful because it prevents items from moving and helps to
                        absorb shock. Here are the three main benefits of using dunnage:</p>
                    <div className='flex flex-col items-center justify-between lg:pt-4'>
                        <motion.div
                        initial={{ x: 200 }}
                        whileInView={{ x: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                        viewport={{ once: true }}
                        className='flex flex-col  w-2/3 lg:w-full m-3 lg:m-2 xs:m-1 border-y border-y-primaryDark lg:border lg:border-primaryDark lg:rounded-lg lg:shadow-sm lg:bg-secondaryLight/10 p-6 xl:p-4'>
                            <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark py-2'>
                                1. Damage protection
                            </h2>
                            <p className='text-lg 2xl:text-base lg:text-lg md:text-base xs:text-sm py-2'>
                                Dunnage protects packages when they are sliding across a truck,
                                ship, or train. Proper dunnage can be incredibly cheap, but it protects
                                valuable, fragile, and loose items. 
                            </p>
                        </motion.div>
                        <motion.div
                        initial={{ x: 200 }}
                        whileInView={{ x: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                        viewport={{ once: true }}
                        className='flex flex-col w-2/3 lg:w-full m-3 lg:m-2 xs:m-1 lg:border lg:border-primaryDark lg:rounded-lg lg:shadow-sm lg:bg-secondaryLight/10 px-6 py-2 xl:py-1 xl:px-4 '>
                            <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark py-2'>
                                2. Moisture protection
                            </h2>
                            <p className='text-lg 2xl:text-base lg:text-lg md:text-base xs:text-sm py-2'>
                                Depending on where products are being shipped, moisture can
                                harm the products. With the right dunnage, you can protect valuable
                                equipment like electronics from moisture when shipping.
                            </p>
                        </motion.div>
                        <motion.div
                        initial={{ x: 200 }}
                        whileInView={{ x: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
                        viewport={{ once: true }}
                        className='flex flex-col w-2/3 lg:w-full m-3 lg:m-2 xs:m-1 border-y border-y-primaryDark lg:border lg:border-primaryDark lg:rounded-lg lg:shadow-sm lg:bg-secondaryLight/10 p-6 xl:p-4'>
                            <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark py-2'>
                                3. Shock Protection
                            </h2>
                            <p className='text-lg 2xl:text-base lg:text-lg md:text-base xs:text-sm py-2'>
                                Products being shipped can slide around, drop, get squished, or be
                                subject to collision, which can lead to shock and vibration. Dunnage
                                is always put in place to act as a shock absorber to prevent damage.
                            </p>
                        </motion.div>
                    </div>
                    <p className='py-6 lg:py-3 xs:py-1 text-dark text-2xl 2xl:text-xl 2xl:leading-[2rem] lg:text-lg xs:text-base leading-10 text-left'>To keep the goods in the containers from shifting vertically,
                        horizontally, or transversely, buffering is essential to protect the
                        goods and keep them intact till their destination is reached. <br />
                        <span className='font-bold text-primaryDark'>For this, the right dunnage bags are needed.
                        </span></p>
                </div>

                <div className='py-5 border-y border-primaryDark/50 flex lg:flex-col  items-center '>
                    <div className="w-1/3 lg:w-full">
                        <h2 className='text-primaryDark text-4xl lg:text-2xl text-center font-semibold'>
                            At Sea</h2></div>
                    <div className="w-1/3 lg:w-full"><Image src={transportation2} /></div>
                    <div className="w-1/3 lg:w-full">
                        <ul>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Loading ships</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Unloading ships</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Heavy seas</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Movement around the
                                terminal and wharf</p></li>
                        </ul>
                    </div>
                </div>
                <div className='py-5 border-b border-primaryDark/50 flex lg:flex-col  items-center '>
                    <div className="w-1/3 lg:w-full">
                        <h2 className='text-primaryDark text-4xl lg:text-2xl text-center font-semibold'>
                            On The Road</h2></div>
                    <div className="w-1/3 lg:w-full"><Image src={transportation3} /></div>
                    <div className="w-1/3 lg:w-full">
                        <ul>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Turning corners</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Emergency swerving</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Heavy Breaking / skidding</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Stop / start accelaration</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Uneven surfaces</p></li>
                        </ul>
                    </div>
                </div>
                <div className='py-5 border-b border-primaryDark/50 flex lg:flex-col  items-center '>
                    <div className="w-1/3 lg:w-full">
                        <h2 className='text-primaryDark text-4xl lg:text-2xl text-center font-semibold'>
                            By Rail</h2></div>
                    <div className="w-1/3 lg:w-full"><Image src={transportation1} /></div>
                    <div className="w-1/3 lg:w-full">
                        <ul>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Shunting</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Emergency breaking</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Defective wheels / rail joints</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Vibrations</p></li>
                            <li><p className='p-3 xl:pt-1 lg:p-2 xs:p-1 text-left text-dark/75 font-medium text-xl xl:text-lg xs:text-base ml-12 lg:ml-1'>Loading / unloading container</p></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6">
                    <AnimatedText text="CrownDunnage Bags: world-class " className='!pt-24 !text-left text-primaryDark !text-6xl lg:!text-4xl' />

                    <div className=' py-6 flex flex-col lg:flex-col items-start justify-between'>

                        <div className='flex items-center sm:flex-col'>
                            <Image src={worldclass1} className='w-56 lg:w-40 ' />
                            <div className="ml-12">
                                <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark py-2'>
                                    Direct from the manufacturer       </h2>
                                <p className='text-xl lead lg:text-base xs:text-sm py-2'>
                                    You stand to gain a lot with our attractive prices as you
                                    are now buying directly from the manufacturer. We are
                                    fully integrated and have complete control over the
                                    prices without compromising on quality.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center sm:flex-col'>
                            <Image src={worldclass2} className='w-56 lg:w-40 ' />
                            <div className="ml-12">
                                <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark py-2'>
                                    Exclusive branding       </h2>
                                <p className='text-xl lead lg:text-base xs:text-sm py-2'>Would you prefer your products marked with your
                                    name and logo? We just made it simpler for you!
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center sm:flex-col'>
                            <Image src={worldclass3} className='w-56 lg:w-40 ' />
                            <div className="ml-12">
                                <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark py-2'>
                                    Area protection      </h2>
                                <p className='text-xl lead lg:text-base xs:text-sm py-2'>We promise exclusive protection for your area of sales
                                    and shall forward any inquiries from your area to you.
                                    This helps you benefit from attractive prices and acquire
                                    new customers through our efforts.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center sm:flex-col'>
                            <Image src={worldclass4} className='w-56 lg:w-40 ' />
                            <div className="ml-12 ">
                                <h2 className='text-2xl lg:text-xl xs:text-lg font-semibold text-primaryDark py-2'>
                                    Delivery of shipment       </h2>
                                <p className='text-xl lead lg:text-base xs:text-sm py-2'>
                                    Goods can be shipped to you directly from our production plants to whichever customer/destination you
                                    choose on your behalf.
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

            </Layout>
        </main>
    )
}

export default DunnageBenefits