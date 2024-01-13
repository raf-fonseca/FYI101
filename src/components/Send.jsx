import React from "react";

const Send = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-2 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Send
    </button>
  );
};

export default Send;
