// ElectronicsPage.js

import React from 'react';
import Navbar from '../Components/Navbar';
import { electronicsData } from '../Data/Electronics';
import CommonView from './CommonView';

const ElectronicsPage = () => {
  return (
    <>
      <Navbar />
      <CommonView pageTitle="Electronics" data={electronicsData} pageLink="/electronics" />
    </>
  );
};

export default ElectronicsPage;
