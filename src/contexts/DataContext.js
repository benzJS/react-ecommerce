import React, { useState, useEffect } from "react";

import data from "../data";

export const DataContext = React.createContext();

export default function(props) {
  if (!localStorage.getItem("cartItems")) {
    localStorage.setItem("cartItems", JSON.stringify([]));
  }
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const [state, setState] = useState({ cart: cartItems });
  return (
    <DataContext.Provider
      value={{
        data,
        cart: state.cart,
        addToCart: item => {
          setState({ cart: [...state.cart, item] });
          localStorage.setItem(
            "cartItems",
            JSON.stringify([...cartItems, item])
          );
        },
        removeFromCart: id => {
          const productIndex = state.cart.findIndex(
            productId => productId === id
          );
          setState({
            cart: [
              ...state.cart.slice(0, productIndex),
              ...state.cart.slice(productIndex + 1)
            ]
          });
          localStorage.setItem(
            "cartItems",
            JSON.stringify([
              ...state.cart.slice(0, productIndex),
              ...state.cart.slice(productIndex + 1)
            ])
          );
        }
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
