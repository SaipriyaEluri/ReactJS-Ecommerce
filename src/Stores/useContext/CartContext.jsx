import { createContext, useContext, useState } from "react";
import React from 'react'


const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems,item])
    }
    const removeToCart = (item) => {
        setCartItems(cartItems.filter((it) => it !== item))
    }

    return(
        
            <CartContext.Provider value={{cartItems,addToCart,removeToCart}}>
                {children}
            </CartContext.Provider>
          
    )
}

export const useCart = () => {
    return useContext(CartContext)
}