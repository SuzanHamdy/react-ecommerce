import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the item already exists in the cart
      const productIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      
      if (productIndex === -1) {
        // Add new item if it doesn't exist
        state.carts.push(action.payload);
      } else {
        // Update the existing item's quantity or any other property
        state.carts[productIndex] = {
          ...state.carts[productIndex],
          quantity: (state.carts[productIndex].quantity || 1) + (action.payload.quantity || 1),
        };
      }
    },
    removeFromCart: (state, action) => {
      // Remove the item from the cart by filtering it out
      state.carts = state.carts.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
