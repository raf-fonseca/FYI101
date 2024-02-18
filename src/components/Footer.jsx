import React from "react";
import { fyiLogo } from "../assets";
import styles from "../style";
export const Footer = () => {
    return (
        <div className="flex-1 flex-row justify bg-black ">
            <hr className="w-full border-2 border-slate-800 mb-2 mt-4" />

            <div className="footer-text text-white flex flex-row">
                <img
                    src={fyiLogo}
                    alt="Logo"
                    className="w-[28px] h-[24px] rounded-[5px] mr-3"
                />
                <div
                    className={`flex flex-1 footer-text text-white mb-4 ${styles.paragraph}`}
                >
                    Copyright 2024 FYI101 Corp. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
