import { useState } from "react";
import { fyiLogo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false); // toggle holds true or false. Determines when menu is open or closed. setToggle changes the state of toggle. Allows for you to add state to toggle
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className=" flex items-center">
        <img
          src={fyiLogo}
          alt="FYI Logo"
          className="w-[50px] h-[42px] rounded-[10px]"
        />
        <h1 className="font-poppins font-semibold text-white text-[30px]">
          FYI101
        </h1>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ml-3">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
