import styles, { layout } from "../style";

const WaitList = () => {
  return (
    // Left side
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Sign Up For
          <br className="sm:block hidden" />
          The Wait List
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Those who sign up before we launch get unlimited access to our
          services!
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}></div>
    </section>
  );
};

export default WaitList;
