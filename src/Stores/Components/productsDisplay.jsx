// ProductDisplay.js

import React from "react";
import "./components.css";

const ProductDisplay = ({ data, title }) => {
  const filteredImages = data.slice(0, 4);

  return (
    <>
      <div className="electronics_container">
        <h5 className="products_heading">{title}</h5>
        <div className="row">
          <div className="product_images">
            {filteredImages.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="images_child">
                  <img src={item.image} alt={`product_${index}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
