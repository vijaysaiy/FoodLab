import { createSlice } from "@reduxjs/toolkit";

import { pushToDatabase } from "../APIcalls/purchaseReport";

export const getTotalPrice = (products) => {
  return products.reduce((sum, { price, quantity }) => sum + price * quantity,0);
};
export const getTotalQuantity = (products) => {
  return products.reduce((sum, { quantity }) => sum + quantity, 0);
};

let initialCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
let initialReport = localStorage.getItem("purchaseReport")
  ? JSON.parse(localStorage.getItem("purchaseReport"))
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: initialCart, 
    purchaseReport: initialReport,
  },
  reducers: {
    addToCart: (state, action) => {
      let newCart = [...state.products];
      let itemInCart = newCart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        itemInCart = {
          ...action.payload,
        };
        state.products.push(itemInCart);
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    setNewQuantity: (state, action) => {
      state.products.find((item) => item.id === action.payload.id).quantity = action.payload.qty;
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    addCheckoutDetails: (state, action) => {
      let newReport = [...state.purchaseReport];
      const date = new Date();
      newReport = {
        ...action.payload.deliveryDetails,
        products: action.payload.products
          .map((a) => a.name + "₹" + a.price + " qty: " + a.quantity)
          .join(", "),
        totalPrice: action.payload.totalPrice,
        purchaseDate: date.toLocaleString(),
      };
      state.purchaseReport.push(newReport);
      pushToDatabase(newReport);
      localStorage.removeItem("cart");      
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, setNewQuantity, addCheckoutDetails } =  cartSlice.actions;
export default cartSlice.reducer;
