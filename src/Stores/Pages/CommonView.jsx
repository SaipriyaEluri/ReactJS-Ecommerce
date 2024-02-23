// CommonView.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./pages.css";


const CommonView = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const onCategoryChange = (item) => {
    if (selectedProduct.includes(item)) {
      setSelectedProduct(selectedProduct.filter((prod) => prod !== item));
    } else {
      setSelectedProduct([...selectedProduct, item]);
    } 
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? data
      : data.filter((item) => selectedProduct.includes(item.category));

  const uniqueCategories = data.filter((obj, index) => {
    return index === data.findIndex((o) => obj.category === o.category);
  });

 


  return (
    <>
          <div
        className="container"
        style={{
          marginTop: "2rem",
        }}
      >
        <div className="row">
          <div className="col-3">
            <aside>
              {uniqueCategories.map((item) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                     
                     
                    }}
                  >
                    <label>
                      <input
                        type="checkbox"
                        key={item.category}
                        checked={selectedProduct.includes(item.category)}
                        onChange={() => onCategoryChange(item.category)}
                      />
                    </label>
                    <p
                      style={{
                        paddingLeft: "0.6rem",
                      }}
                    >
                      {item.category}
                    </p>
                  </div>
                );
              })}
            </aside>
          </div>

          <div className="col-9">
            {filteredProduct.map((item) => {
              return (
                <div
                  className="col-9"
                  style={{
                    marginBottom: "1.2rem",
                    backgroundColor: "#eeeefe",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Link
                    key={item.id} to={`/${item.link}/${item.id}`}
                    className="pageSection"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        width: "40%",
                        height: "40%",
                      }}
                      title="'CLICK' To See the product"
                      // className="product-img"
                    />
                    <div className="product-details">
                      <p
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </p>
                      <p>Rs. {item.price}</p>
                      <p
                       style={{
                        color:"black"
                       }}
                      >{item.description}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonView;
