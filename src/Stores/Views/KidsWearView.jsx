import React from "react";
import { useParams } from "react-router-dom";
import { kidsWearData } from "../Data/KidsWear";
import Navbar from "../Components/Navbar";


const KidsWearView = () => {

    const {id} = useParams();
    const product = kidsWearData.find((item) => item.id === id);

    return(
        <>
        <Navbar/>
        <div className="individual_product">
            <div className="product_image">
            <img src={product.image} alt="image" />
            </div>
            <div className="product_title">
                <h2>{product.title}</h2>
            </div>
            <div className="product_price">
                <h2>{product.price}</h2>
            </div>
            <div className="product_description">
                <h2>{product.description}</h2>
            </div>
            <div className="add_cart">
                <button className="btn btn-primary">ADD TO CART </button>
            </div>

        </div>
        </>
    )
}
export default KidsWearView;