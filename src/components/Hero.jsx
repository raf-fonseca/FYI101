import styles from "../style";
import { robot, getStarted } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-32 px-6`}
      >
        {/* Main Title */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Your AI <br className="sm:block hidden" />{" "}
            <span className="text-gradient">
              Personal <br className="sm:block hidden" />{" "}
            </span>
            <span className="text-gradient">
              Assistant <br className="sm:block hidden" />{" "}
            </span>
          </h1>
        </div>

        {/* Lower Title */}
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For Students
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Transforming your study experience: optimizing student life with
          personalized support.
        </p>
      </div>
      {/* Right side */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <a
          href="#waitList"
          className="w-[20%] h-[20%] z-[6] cursor-pointer absolute"
        >
          <img
            src={getStarted}
            alt="Get started"
            style={{ transform: "translate(-30%, -30%)" }}
          />
        </a>
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
