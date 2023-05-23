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
    <p className="ml-6 text-3xl font-bold text-primaryDark">
      {hedi}
    </p>
    <p className="ml-6 text-lg py-3 pt-6 leading-8 xs:text-base">
      {feature}
    </p>
    </div>
  </div>
);

export default StartSteps;