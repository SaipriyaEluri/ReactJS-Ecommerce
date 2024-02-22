import React from "react";
import { mensWearData } from "../Data/MensWear";
import "./components.css";


const MensWear = () => {

    const fileteredData = mensWearData.slice(0,5);

    return(
        <>
        <h5 className="products_heading">Mens Wear</h5>
        <div className="product_images">
            {
                fileteredData.map((item) => {
                    return(
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
export default MensWear;