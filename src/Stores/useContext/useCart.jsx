import React from 'react'
import { useCart } from './CartContext';
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import "../Views/individualproducts.css";

const UseCart = () => {

    const { cartItems, addToCart, removeToCart } = useCart();

    return (
        <div>
            <Navbar />
            <div>
                {
                    (cartItems.length > 0) ? (
                        cartItems.map((item) => {
                            return (
                                <div className='d-flex align-items-center justify-content-center mt-4'>
                                    <div
                                        className="col-6"
                                        style={{
                                            marginBottom: "1.2rem",
                                            backgroundColor: "#eeeefe",
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
                                    >

                                        <div className="pageSection">
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
                                                        color: "black"
                                                    }}
                                                >{item.description}</p>
                                            </div>
                                            <div className="add_cart">
                                                <button
                                                    className="btn btn-danger"
                                                    style={{
                                                        backgroundColor: "rgb(44 44 95)",
                                                    }}
                                                    onClick={() => { removeToCart(item) }}
                                                >
                                                    <i class="bi bi-trash-fill fs-6"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            );
                        })
                    ) : (
                        <div className='text-center p-5'>
                            <h4>Your Cart is Empty !</h4>
                            <img src="./../../public/Assets/cartempty.webp" alt="emptycart" />
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default UseCart