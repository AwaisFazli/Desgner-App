import React from "react";
import Long1 from "../assets/long11.jpg";
import "../styles/LongCards/LongCards.scss";

const LongCards = ({ image, paragraph, tag }) => {
  return (
    <div className="upper mx-7 hover:cursor-pointer">
      <img src={image} alt="" className="w-full" />
      <p className="text-area text-white w-full text-center">{paragraph}</p>
      <div className="tag text-4xl font-bold">{tag}</div>
      <div className="overlay border-2 hover:border-[#B99572]"></div>
    </div>
  );
};

export default LongCards;
