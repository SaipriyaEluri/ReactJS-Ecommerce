
import React from "react";
import CommonSingleView from "./CommonSingleView";
import { kidsWearData } from "../Data/KidsWear";

const KidsWearView = () => {
  return <CommonSingleView data={kidsWearData} pageLink="/kidsWear"/>;
};

export default KidsWearView;