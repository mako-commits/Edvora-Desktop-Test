import Image from "next/image";
import React, { useState } from "react";

const Card = (props) => {
  return (
    <>
      {/*  */}

      <div className="flex bg-[#171717] rounded-[10px] shadow h-auto pl-[29px] pt-[22px] pb-[28px] pr-[20px]">
        <div className="flex-none  relative">
          <Image
            src={map}
            alt="map"
            className=" rounded-md object-contain pr-4"
            width={296}
            height={187}
          />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <ul className="flex-auto">
              <li className=" text-[#CFCFCF]">
                Ride Id : <span className="text-white">{props.key}</span>
              </li>
              <li className="text-lg text-[#CFCFCF]">
                Origin Station : <span className="text-white">20</span>
              </li>
              <li className="text-lg text-[#CFCFCF]">
                station_path : <span className="text-white">20</span>
              </li>
              <li className="text-lg text-[#CFCFCF]">
                Date : <span className="text-white">20</span>
              </li>
              <li className="text-lg text-[#CFCFCF]">
                Distance : <span className="text-white">20</span>
              </li>
            </ul>
            <div className="text-xs text-white ">
              <span className="bg-black py-[4px] px-[10px] rounded-2xl mr-11">
                City Name
              </span>
              <span className="bg-black py-[4px] px-[10px] rounded-2xl">
                State Name
              </span>
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
