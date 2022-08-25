import React from "react";
import NavWhite from "../assets/NavLogoWhite1.svg";

const Navbar = () => {
  return (
    <div className="absolute top-24 right-0 bg-[#171717] px-9 py-7 text-sm">
      <img src={NavWhite} alt="" />
      <br />
      <div className=" text-white hover:text-[#B99572] hover:transition-colors">
        <p>_____</p>
        <p>_____</p>
        <p>menu</p>
      </div>
    </div>
  );
};

export default Navbar;
