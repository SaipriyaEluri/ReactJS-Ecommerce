// Mens wear.js

import React from 'react';
import ProductPage from '../Components/Products';
import Navbar from '../Components/Navbar';
import { womensWearData } from '../Data/WomensWear';
import CommonView from './CommonView';

const WomenswearPage = () => {
  return (
    <>
      <Navbar />
      <CommonView pageTitle="Womens Clothing" data={womensWearData} pageLink="/WomensWear" />
    </>
  );
};

export default WomenswearPage;
