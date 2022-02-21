import { useState } from "react";
import CardList from "./CardList";
import Tabs from "./Tabs";

const Rides = (props) => {
  const [filteredCity, setFilteredCity] = useState("Panvel");
  const [filteredState, setFilteredState] = useState("Maharashtra");

  const receivedCity = (selectCity) => {
    setFilteredCity(selectCity);
    console.log(selectCity);
  };

  return (
    <div className="px-[43px] pt-[29px] bg-[#292929]">
      <Tabs onSelectedCity={receivedCity} selectCity={filteredCity} />
    </div>
  );
};

export default Rides;
