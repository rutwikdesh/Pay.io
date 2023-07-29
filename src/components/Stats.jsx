import React from "react";

const Stats = () => {
  return (
    <div className="">
      <div className="w-full flex flex-row justify-between px-20">
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-white text-[38px] font-poppins font-semibold">
            3800+
          </h1>
          <p className="text-gradient px-4 uppercase text-center text-[20px]">
            User Active
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-gradient text-center">|</p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-white text-[38px] font-poppins font-semibold">
            230+
          </h1>
          <p className="text-gradient px-4 uppercase text-center text-[20px]">
            Trusted by company
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-gradient text-center">|</p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-white text-[38px] font-poppins font-semibold">
            $230M+
          </h1>
          <p className="text-gradient px-4 uppercase text-center text-[20px]">
            Transactions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
