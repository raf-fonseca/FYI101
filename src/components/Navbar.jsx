import { useState } from "react";
import { fyiLogo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false); // toggle holds true or false. Determines when menu is open or closed. setToggle changes the state of toggle. Allows for you to add state to toggle
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            {/* Logo */}
            <div className=" flex items-center">
                <img
                    src={fyiLogo}
                    alt="FYI Logo"
                    className="w-[50px] h-[42px] rounded-[10px] mr-3"
                />
                <h1 className="font-poppins font-semibold text-white text-[30px]">
                    FYI101
                </h1>
                {/* Normal navLinks */}
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
            {/* Mobile hamburger menu */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    // Mobile navLinks but vertical now
                    className={`${
                        toggle ? "flex" : "hidden"
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] leading-[40px] text-white `}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
