import { createSlice } from "@reduxjs/toolkit";
import {pushToDatabase} from "../redux/APIcalls/purchaseReport"

export const getTotalPrice = (products) => {
  return products.reduce((sum, { price, quantity }) => sum + price * quantity,0);
};
export const getTotalQuantity = (products) => {
  return products.reduce((sum, { quantity }) => sum + quantity, 0);
};

let initialCart = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
let initialReport = localStorage.getItem('purchaseReport')?JSON.parse(localStorage.getItem('purchaseReport')):[]

const cartSlice = createSlice({  
  name: "cart",
  initialState: {
    products:initialCart,             //each product is stored as object in array
    purchaseReport:initialReport,
  },
  reducers: {
    addToCart: (state, action) => {
      let newCart = [...state.products];
      console.log(action.payload);
      let itemInCart = newCart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;        
      } else {
        itemInCart = {
          id:action.payload.id,
          name:action.payload.name,
          price:action.payload.price,
          quantity: action.payload.quantity,
        };
        state.products.push(itemInCart);                
      }
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    removeFromCart: (state, action) => {                  
      state.products = state.products.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    setNewQuantity: (state, action) => {             
      //takes quantity literal from product object(find by id) and updates quantity directly
      state.products.find((item) => item.id === action.payload.id).quantity = action.payload.qty;
      localStorage.setItem('cart', JSON.stringify(state.products));     
    },
    addCheckoutDetails:(state,action)=>{
      let newReport = [...state.purchaseReport]
      const date = new Date();
    
      newReport = {        
        ...action.payload.deliveryDetails, 
         products:action.payload.products.map((a =>  a.name + "₹" + a.price + " qty: " + a.quantity)).join(", "),
         totalPrice:action.payload.totalPrice,
         purchaseDate:date.toLocaleString()
      }
      state.purchaseReport.push(newReport);             
      pushToDatabase(newReport);
      localStorage.removeItem('cart')           
      state.purchaseReport=[];
      state.products = [];
  },
  },
});

export const { addToCart, removeFromCart, setNewQuantity,addCheckoutDetails } = cartSlice.actions;
export default cartSlice.reducer;
