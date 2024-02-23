import React from "react";
import "./App.css";
import LandingPage from "./Stores/Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import ElectronicsPage from "./Stores/Pages/ElectronicsPage";
import KitchenPage from "./Stores/Pages/KitchenPage";
import MensWearPage from "./Stores/Pages/MensWearPage";
import WomenswearPage from "./Stores/Pages/WomensWearPage";
import ElectronicsView from "./Stores/Views/ElectronicsView";
import KidsWearView from "./Stores/Views/KidsWearView";
import KitchenView from "./Stores/Views/KitchenView";
import MensWearView from "./Stores/Views/MensWearView";
import WomensWearView from "./Stores/Views/WomensWearView";
import KidsWearPage from "./Stores/Pages/KidsWearPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />    
        <Route path="/electronics" element={<ElectronicsPage />} /> 
        <Route path="/kidsWear" element={<KidsWearPage/>} />  
        <Route path="/kitchen" element={<KitchenPage/>} />
        <Route path="/MensWear" element={<MensWearPage/>} />  
        <Route path="/WomensWear" element={<WomenswearPage/>} />  
        <Route path="/electronics/:id" element={<ElectronicsView/>}  />
        <Route path="/kidswear/:id" element={<KidsWearView/>} />
        <Route path="/kitchen/:id" element={<KitchenView/>} />
        <Route path="/Menswear/:id" element={<MensWearView/>} />
        <Route path="/womenswear/:id" element={<WomensWearView/>} />

      </Routes>
    </div>
  )
}
export default App;
