import Header from "../components/Header";
import { useState } from "react";
import data from "../constants/data";
import Rides from "../components/Rides";
export default function Home() {
  const [rides, setRides] = useState(Object.entries(data.ridesInfo));
  console.log(typeof data.ridesInfo);
  return (
    <>
      <Header />
      <Rides items={rides} />
    </>
  );
}
