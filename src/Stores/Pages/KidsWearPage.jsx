// ElectronicsPage.js

import React from 'react';
import Navbar from '../Components/Navbar';
import CommonView from './CommonView';
import { kidsWearData } from '../Data/KidsWear';

const KidsWearPage = () => {
  return (
    <>
      <Navbar />
      <CommonView pageTitle="KidsWear" data={kidsWearData} pageLink="/kidswear" />
    </>
  );
};

export default KidsWearPage;
