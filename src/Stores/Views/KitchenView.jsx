
import React from "react";
import CommonSingleView from "./CommonSingleView";
import { kitchenData } from "../Data/Kitchen";

const KitchenView = () => {
  return <CommonSingleView data={kitchenData} pageLink="/kitchen"/>;
};

export default KitchenView;