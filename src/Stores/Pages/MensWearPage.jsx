// Mens wear.js

import React from 'react';
import Navbar from '../Components/Navbar';
import { MenswearData } from '../Data/MensWear';
import CommonView from './CommonView';

const MensWearPage = () => {
  return (
    <>
      <Navbar />
      <CommonView pageTitle="Mens Clothing" data={MenswearData} pageLink="/Menswear" />
    </>
  );
};

export default MensWearPage;
