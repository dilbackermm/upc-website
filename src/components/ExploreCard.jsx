'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, navVariants } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, conte, index, active, handleClick }) => (
  <motion.button
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]  shadow-xl' : 'lg:flex-[0.5] flex-[2] shadow-sm '
      } flex items-center justify-center min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex
  cursor-pointer border border-solid border-primaryDark lg:border-none rounded-3xl  `}
    whileHover={() => handleClick(id)}
    
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold  text-[18px] lg:bg-[rgba(137,96,51,0.7)] lg:glassmorphism  lg:mb-0 lg:text-center lg:px-2 lg:py-3 rounded-[24px]
    text-white absolute z-0  bottom-20 lg:bottom-0 right-[-10px] lg:right-0 lg:left-0 lg:rotate-[0deg] rotate-[-90deg] 
    lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8
    justify-start w-full flex-col bg-[rgba(137,96,51,0.8)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] sm:h-[20px] rounded-[24px] glassmorphism mb-[16px]`}>

        </div>
        <h2 className="mt-[24px] font-semibold  text-[24px] text-white">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-[20px] text-white">
          {conte}
        </p>
      </div>
    )}
  </motion.button>
);

export default ExploreCard;
