import React from "react";
import "../styles/Header/Header.css";
import "../styles/SlideShow/slideshow.css";
import BigLogo from "../assets/MainLogo1.svg";

const SlideShow = () => {
  return (
    <>
      <div className="overflow-hidden relative">
        <div className=" absolute z-10 top-1/2 left-0 right-0 mx-auto  w-full">
          <img src={BigLogo} alt="" className="lg:mx-52 sm:mx-20" />
        </div>
        <div className="overflow-hidden slieshow header_main"></div>
      </div>
    </>
  );
};

export default SlideShow;
