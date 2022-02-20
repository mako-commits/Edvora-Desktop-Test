import React from "react";

const RideDate = () => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <span>{}</span>
    </div>
  );
};

export default RideDate;
