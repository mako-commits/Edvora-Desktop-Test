import React from "react";
import data from "../constants/data";
import Image from "next/image";

const CardList = (props) => {
  return (
    <div>
      {data.ridesInfo.map((ride, idx) => (
        <Card
          key={idx}
          rideId={ride.id}
          originStationCode={ride.origin_station_code}
          stationPath={ride.station_path}
          date={ride.date}
          state={ride.state}
          city={ride.city}
          mapUrl={ride.map_url}
        />
      ))}
    </div>
  );
};

const Card = ({
  rideId,
  originStationCode,
  stationPath,
  date,
  state,
  city,
  mapUrl,
  stationCode,
}) => {
  return (
    <>
      <div className="flex flex-wrap bg-[#171717] rounded-[10px] shadow h-auto pl-[29px] pt-[22px] pb-[28px] pr-[20px] my-4">
        <div className="flex-none relative">
          <iframe
            src={mapUrl}
            className="rounded-md"
            width="296"
            height="187"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <ul className="flex-auto">
              <li className=" text-[#CFCFCF]">
                Ride Id : <span className="text-white">{rideId}</span>
              </li>
              <li className="text-lg text-[#CFCFCF]">
                Origin Station :{" "}
                <span className="text-white">{originStationCode}</span>
              </li>
              <li className="text-lg text-[#CFCFCF]">
                station_path : <span className="text-white">{stationPath}</span>
              </li>
              <li className="text-lg text-[#CFCFCF]">
                Date :{" "}
                <span className="text-white">{`${new Date(date).toLocaleString(
                  "en-US"
                )}`}</span>
              </li>
              <li className="text-lg text-[#CFCFCF]">
                Distance : <span className="text-white">20</span>
              </li>
            </ul>
            <div className="text-xs text-white ">
              <span className="bg-black py-[4px] px-[10px] rounded-2xl mr-11">
                {city}
              </span>
              <span className="bg-black py-[4px] px-[10px] rounded-2xl">
                {state}
              </span>
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardList;
