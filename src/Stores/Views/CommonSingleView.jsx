// ProductView.js

import React from "react";
import {Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./individualproducts.css";


const CommonSingleView = ({ data }) => {
  const { id } = useParams();
  console.log('ID:', id);
  console.log(data.link,'data-------')

  const product = data.find((item) => item.id === id);
  console.log(product,'product--------')
  console.log(product.link,'wwwww')
 
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <Link key={data.id}
        to={`/${product.link}`}
        style={{
          textDecoration: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: "rgb(44 44 95)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: 10,
              marginLeft: 60,
            }}
          >
            <i
              class="bi bi-chevron-left"
              style={{
                color: "#fff",
                fontSize: "1rem",
              }}
            ></i>
          </div>
          <p
            style={{
              color: "#000",
              fontSize: "1rem",
              fontWeight: "normal",
              alignSelf: "center",
              paddingTop: 25,
              paddingLeft: 10,
            }}
          >
            Go Back
          </p>
        </div>
      </Link>
      <div className="product-container">
        <div className="individual_product">
          <div className="product_image">
            <img src={product.image} alt="image"
             style={{
              width:"100%"
             }}
            />
          </div>
          <div className="product-details">
            <p className="product_title">{product.title}</p>
            <p className="product_price">Rs. {product.price}</p>
            <p className="product_description">{product.description}</p>
            <div className="add_cart">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "rgb(44 44 95)",
                }}
              >
                ADD TO CART{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonSingleView;
