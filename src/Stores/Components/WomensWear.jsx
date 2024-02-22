import React from "react";
import "./components.css";
import { womensWearData } from "../Data/WomensWear";


const WomensWear = () => {

    const fileteredData = womensWearData.slice(0, 5);

    return (
        <>
            <h5 className="products_heading">Women's Wear</h5>
            <div className="product_images">
                {
                    fileteredData.map((item) => {
                        return (
                            <div className="images_child">
                                <img src={item.image} alt="mens_wear" />
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
export default WomensWear;