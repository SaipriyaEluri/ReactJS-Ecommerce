
import React from "react";
import CommonSingleView from "./CommonSingleView";
import { MenswearData } from "../Data/MensWear";

const MensWearView = () => {
  return <CommonSingleView data={MenswearData} pageLink="/MensWear"/>;
};

export default MensWearView;