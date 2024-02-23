
import React from "react";
import CommonSingleView from "./CommonSingleView";
import { womensWearData } from "../Data/WomensWear";

const WomensWearView = () => {
  return <CommonSingleView data={womensWearData} pageLink="/WomensWear"/>;
};

export default WomensWearView;