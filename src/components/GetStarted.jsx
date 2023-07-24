import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] p-[2px] rounded-full bg-blue-gradient cursor-pointer transition-all duration-400 ease-in-out hover:scale-110`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}
      >
        <div className={`${styles.flexStart} justify-start flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient ">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="text-gradient font-medium text-[18px] font-poppins leading-[23px]">
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
