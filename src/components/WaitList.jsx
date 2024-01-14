import styles, { layout } from "../style";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const WaitList = () => {
  /**
   * Represents the email state and its setter function.
   * @type {[string, Function]}
   */
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_klt2zn5",
        "template_yhz3b8m",
        form.current,
        "SmSf5Z1KugtkppslB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`${layout.flexCenter} mt-4`}
      id="waitList"
    >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Sign-Up For
          <br className="sm:block  mt-5" />
          The Wait List
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10 `}>
          Those who sign up before we launch get unlimited access to our
          services!
        </p>
      </div>
      <input
        className="w-full h-[50px] rounded-[20px] bg-discount-gradient text-white font-semibold px-4 py-2 max-w-[200px] "
        type="text"
        placeholder="First Name"
        value={firstName} //allowing for the user to set input
        onChange={(e) => setFirstName(e.target.value)} //updating input
        required // make sure everything is filled out
        name="first_name"
      />
      <input
        className="w-full h-[50px] rounded-[20px] bg-discount-gradient text-white font-semibold px-4 py-2 mt-4 max-w-[200px]"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        name="last_name"
      />
      <input
        className="w-full h-[50px] rounded-[20px] bg-discount-gradient text-white font-semibold px-4 py-2 mt-4 mb-4 max-w-[400px]"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        name="email"
      />
      <input
        type="submit"
        value="Send"
        className={`py-2 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[20px] cursor-pointer`}
      />
    </form>
  );
};
export default WaitList;
