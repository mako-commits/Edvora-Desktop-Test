import React, { createRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { StateRideFilter, CityRideFilter } from "./Functions";
const Dropdown = ({ color }) => {
  const [filteredCity, setFilteredCity] = useState("Panvel");
  const [filteredState, setFilteredState] = useState("Maharashtra");

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const receivedCity = (selectCity) => {
    setFilteredCity(selectCity);
    console.log(selectCity);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-[#F2F2F2] font-normal px-6 py-3 rounded mr-1 mb-1  " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <span className="flex items-center ">
                <svg
                  className="mr-3"
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-6.10352e-05 12.0001H5.99994V10.0001H-6.10352e-05V12.0001ZM-6.10352e-05 0.00012207V2.00012H17.9999V0.00012207H-6.10352e-05ZM-6.10352e-05 7.00012H11.9999V5.00012H-6.10352e-05V7.00012Z"
                    fill="white"
                    fillOpacity="0.8"
                  />
                </svg>

                {color === "white" ? "Filter" : color + " Dropdown"}
              </span>{" "}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-[#131313] " : bgColor + " ") +
                "text-base z-50 float-left py-2 px-[30px] list-none text-left rounded-xl shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <span className="text-[#A5A5A5] ">Filter</span>
              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
              <CityRideFilter
                className="py-2 px-4"
                onSelectedCity={receivedCity}
                selectCity={filteredCity}
              />

              <StateRideFilter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}
