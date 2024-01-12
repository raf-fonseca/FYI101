import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full text-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 text-gradient">
          Get
        </p>
        <img src={arrowUp} className="w-[23px] h-[23px]" alt="arrow" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
