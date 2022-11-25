import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const tempProduct = { ...action.payload, cartQuantity: 1 };
      state.cartItems.push(tempProduct);

      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
    },
    deleteToCart(state, action) {
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem._id !== action.payload._id);

      state.cartItems = nextCartItems;

      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
    },
    incrementProduct(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);

      state.cartItems[itemIndex].cartQuantity += 1;

      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
    },
    decrementProduct(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }

      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, deleteToCart, incrementProduct, decrementProduct, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
