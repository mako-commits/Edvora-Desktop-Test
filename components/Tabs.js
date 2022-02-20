import { useState } from "react";
import Card from "./Card";
import CardList from "./CardList";
import DropdownRender from "./RideFilter";
import RideFilter from "./RideFilter";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-lg font-bold py-3 block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-transparent border-b-2 border-white"
                    : "text-[#D0CBCB]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Nearest rides
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-lg font-bold py-3  block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-transparent border-b-2 border-white"
                    : "text-[#D0CBCB]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Upcoming rides
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-lg font-bold  py-3  block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-transparent border-b-2 border-white"
                    : "text-[#D0CBCB]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Past rides
              </a>
            </li>
            <DropdownRender />
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-[#292929] w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <CardList />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <CardList />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <CardList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
