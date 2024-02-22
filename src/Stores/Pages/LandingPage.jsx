import React from "react";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Carousel_dashboard from "../Components/Carousel_dashboard";

const LandingPage = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <Carousel_dashboard/>
            <Products/>
        </div>
    )
}
export default LandingPage;