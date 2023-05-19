import styles from "../styles";

const StartSteps = ({ hedi, feature, index}) => (
  <div className={`${styles.flexStart} flex flex-row items-start`}>
    <div className={`${styles.flexCenter} w-[60px] h-[50px]
    flex items-center bg-light shadow-lg border
    broder-solid px-7 border-primaryDark hover:shadow-xl rounded-[30px]`}>
    <p className="font-bold text-3xl text-primaryDark">
      {index}
    </p>
    </div>
    <div className="flex flex-col ">
    <p className="ml-[30px] font-semibold text-4xl text-[#904C06] leading-[32px]">
      {hedi}
    </p>
    <p className="ml-[30px] mt-5 font-normal text-[18px] text-[#4B2204] leading-[32px]">
      {feature}
    </p>
    </div>
  </div>
);

export default StartSteps;