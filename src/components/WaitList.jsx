import styles, { layout } from "../style";
import Send from "./Send";

const WaitList = () => (
  <section id="waitList" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Sign Up For
        <br className="sm:block hidden" />
        The Wait List
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10 `}>
        Those who sign up before we launch get unlimited access to our services!
      </p>
    </div>

    {/* Wait List Signup */}
    <div
      className={`${layout.flexCenter} flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0`}
    >
      <input
        className="w-full   h-[50px] rounded-[20px] bg-discount-gradient text-white font-semibold px-4 py-2"
        placeholder="First Name"
      />
      <input
        className="w-full  h-[50px] rounded-[20px] bg-discount-gradient text-white font-semibold px-4 py-2"
        placeholder="Last Name"
      />
      <input
        className="w-full  h-[50px] rounded-[20px] bg-discount-gradient text-white font-semibold px-4 py-2"
        placeholder="Email"
        type="email"
      />
    </div>

    <div className={`${layout.flexCenter} mt-4`}>
      <button>
        <Send />
      </button>
    </div>

    {/* WaitList */}
  </section>
);

export default WaitList;
