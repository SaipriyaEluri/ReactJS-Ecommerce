import React from "react";
import { electronicsData } from "../Data/Electronics";
import "./components.css";

const Electronics = () => {

    const filteredImages = electronicsData.slice(0, 4)
    return (
        <>
            <div className="electronics_container">
                <h5 className="products_heading">Electronics</h5>
                <div className="row">
                    <div className="product_images">

                        {
                            filteredImages.map((item) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="images_child">
                                            <img src={item.image} alt="electronics_images" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>

    )
}
export default Electronics;