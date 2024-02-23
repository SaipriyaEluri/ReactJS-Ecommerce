// ElectronicsView.js

import React from "react";
import { electronicsData } from "../Data/Electronics";
import CommonSingleView from "./CommonSingleView";

const ElectronicsView = () => {
  return <CommonSingleView data={electronicsData} pageLink="/electronics"/>;
};

export default ElectronicsView;
