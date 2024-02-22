import React from "react";
import { kidsWearData } from "../Data/KidsWear";
import "./components.css";


const KidsWear = () => {

   const filteredImages = kidsWearData.slice(0,5);

   return(
    <>
    <h5 className="products_heading">Kids Wear</h5>
     <div className="product_images">
        {
            filteredImages.map((Item) => {
                return(
                    <div className="images_child">
                    <img src={Item.image} alt="Kidswear_images" />
                </div>
                )
            })
        }
    </div>
    </>
   
   )
}

export default KidsWear;