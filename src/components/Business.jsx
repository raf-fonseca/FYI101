import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex-row flex rounded-[20px] p-6 ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    {/* Icon */}

    <div className={`w-[64px] h-[64px] ${styles.flexCenter}`}>
      <img
        src={icon}
        alt="icon"
        className="w-[100%] h-[100%] object-contain mr-6"
      />
    </div>
    {/* Text */}

    <div>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    // Left side
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Customize Your <br className="sm:block hidden" />
          Academic Journey
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          No need to feel lost as a student. Receive the guidance you need to
          pursue your goals and personalize your schedule.
        </p>
        <Button styles="mt-10" />
      </div>
      {/* Right Side */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
