import React from "react";
import "./components.css";
import { womensWearData } from "../Data/WomensWear";

const WomensWear = () => {
  const fileteredData = womensWearData.slice(0, 5);

  return (
    <>
      <h5 className="products_heading">UPTO 50% OFF   |   Women's  Favourite Picks   |   Fashion Top Deals</h5>
      <div className="product_images">
        {fileteredData.map((item) => {
          return (
            <div className="images_child">
              <img
                src={item.image}
                alt="mens_wear"
                style={{
                  height: "100%",
                  aspectRatio: 0.7,
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default WomensWear;
