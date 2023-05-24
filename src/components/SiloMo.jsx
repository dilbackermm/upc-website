import styles from "../styles";

const SiloMo = ({ number, text }) => (
  // <div className={`${styles.flexCenter} flex-row`}>
  //   <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
  //     {text}
  //   </p>
  // </div>

  <div className='timeline border-l-2 border-primaryDark ml-3 py-5 space-y-14'>
    <div className='relative'>
      <div className='dot absolute -ml-3 bg-primaryDark h-6 w-6 rounded-full border-8 border-double border-light'>
      </div>
      <div className='pl-10 text-xl text-dark'>
        {text}
      </div>
    </div>
  </div>
);

export default SiloMo;