import styles, { layout } from "../style";
import React, { useState } from "react";
import Send from "./Send";

function WaitList() {
  /**
   * Represents the email state and its setter function.
   * @type {[string, Function]}
   */
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("https://your-api-url.com", {
      // replace with your actual API URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, firstName, lastName }),
    });

    if (response.ok) {
      console.log("Success:", await response.json());
    } else {
      console.log("Error:", response.status);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${layout.flexCenter} mt-4`}>
      <input
        className="w-full   h-[50px] rounded-[20px] bg-discount-gradient text-white font-semibold px-4 py-2"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        className="w-full  h-[50px] rounded-[20px] bg-discount-gradient text-white font-semibold px-4 py-2"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        className="w-full   h-[50px] rounded-[20px] bg-discount-gradient text-white font-semibold px-4 py-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">
        <Send />
      </button>
    </form>
  );
}

export default WaitList;
