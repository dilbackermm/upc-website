import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flec-row`}>
    <div className={`${styles.flexCenter} w-[60px] h-[50px]
    rounded-[30px] bg-[#b39775]`}>
    <p className="font-bold text-[20px] text-white">
      0{number}
    </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
