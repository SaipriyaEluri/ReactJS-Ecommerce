import React from "react";
import { kitchenData } from "../Data/Kitchen";
import "./components.css";


const Kitchen = () => {
    const fileteredData = kitchenData.slice(0,5);
    return(
        
        <>
            <h5 className="products_heading">Kitchen</h5>
            <div className="product_images">
                {
                    fileteredData.map((item) => {
                        return(
                            <div className="images_child">
                            <img src={item.image} alt="kitchen_images" />
                            </div>
                        )
                       
                    })
                }
            </div>
        </>
    )
}
export default Kitchen;