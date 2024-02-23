// kitchen.js

import React from 'react';
import ProductPage from '../Components/Products';
import Navbar from '../Components/Navbar';
import { kitchenData } from '../Data/Kitchen';
import CommonView from './CommonView';

const KitchenPage = () => {
  return (
    <>
      <Navbar />
      <CommonView pageTitle="Electronics" data={kitchenData} pageLink="/kitchen" />
    </>
  );
};

export default KitchenPage;
