import React from "react";
import { MenswearData } from "../Data/MensWear";
import "./components.css";


const MensWear = () => {

    const fileteredData = MenswearData.slice(0,5);

    return(
        <>
        <h5 className="products_heading">UPTO 30% OFF   |   Mens Collections     |   Pick Soon</h5>
        <div className="product_images">
            {
                fileteredData.map((item) => {
                    return(
                        <div className="images_child">
                          <img
                src={item.image}
                alt="mens_wear"
                style={{
                  height: "100%",
                  aspectRatio: 1,
                }}
                />
                            </div>
                    )
                })
            }
        </div>

        </>
    )
}
export default MensWear;