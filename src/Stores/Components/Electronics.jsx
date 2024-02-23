import React from "react";
import { electronicsData } from "../Data/Electronics";
import "./components.css";

const Electronics = () => {
  const filteredImages = electronicsData.slice(0, 5);
  return (
    <>
      <div className="electronics_container">
        <h5 className="products_heading">UPTO 50% OFF   |   Electronic Essentials For You   |   Top Deals </h5>
        <div className="row">
          <div className="product_images">
            {filteredImages.map((item) => {
              return (
                // <div className="col-12 col-md-6 col-lg-3">
                  <div className="images_child">
                    <img
                      src={item.image}
                      alt="electronics_images"
                      style={{
                        // width: "100%",
                        aspectRatio: 1.5,
                        height: "100%",
                        // resize: "block",
                      }}
                    />
                  </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Electronics;
