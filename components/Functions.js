import { useState } from "react";
import style from "../styles/Functions.module.css";

// State Ride Filter
export const StateRideFilter = (props) => {
  const [selectedState, setSelectedState] = useState("");
  const onSelectHandler = (event) => {
    setSelectedYear(event.target.value);
    // console.log(event.target.value);
    props.onSelectedState(event.target.value);
  };
  return (
    <div className={style["expenses-filter"]}>
      <div className={style["expenses-filter__control"]}>
        <select value={props.selectedState} onChange={onSelectHandler}>
          <option value="">State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};
// City Ride Filter
export const CityRideFilter = (props) => {
  const [selectedCity, setSelectedCity] = useState("");
  const onSelectHandler = (event) => {
    setSelectedCity(event.target.value);
    // console.log(event.target.value);
    props.onSelectedCity(event.target.value);
  };
  return (
    <div className={style["expenses-filter"]}>
      <div className={style["expenses-filter__control"]}>
        <select value={props.selectedCity} onChange={onSelectHandler}>
          <option value="">City</option>
          <option value="Panvel">Panvel</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};
