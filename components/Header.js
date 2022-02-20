import Image from "next/image";
import React from "react";
import profile from "../images/Profile.svg";
import data from "../constants/data";

const Header = () => {
  return (
    <header className="w-full bg-[#101010] items-center h-[84px]  pt-[21px] pb-[20px] pl-[43px] pr-[42.72px]">
      <div className="relative z-20 flex flex-col justify-center h-full  mx-auto flex-center">
        <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-auto">
            <h1 className="text-white font-bold text-4xl">Edvora</h1>
          </div>

          <div className="relative mt-[20px] mb-[19.72px] flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <span className="text-white mr-[25px]">{data.user.name}</span>
            <a href="#" className="block relative">
              <Image
                alt="profile"
                src={profile}
                className="mx-auto object-cover rounded-full h-10 w-10 "
                width={44}
                height={44}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
