import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/redux';
import { PayloadAction } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')!) : [],
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
      const nextCartItems = state.cartItems.filter((cartItem: Product) => cartItem._id !== action.payload._id);

      state.cartItems = nextCartItems;

      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
    },

    incrementProduct(state, action) {
      const itemIndex = state.cartItems.findIndex((item: Product) => item._id === action.payload._id);

      state.cartItems[itemIndex].cartQuantity += 1;

      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
    },

    decrementProduct(state, action) {
      const itemIndex = state.cartItems.findIndex((item: Product) => item._id === action.payload._id);

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }

      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
    },

    getTotals(state, action: PayloadAction) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal: { total: number; quantity: number }, cartItem: { price: number; cartQuantity: number }) => {
          const { price, cartQuantity } = cartItem;
          const itemTotalPrice = price * cartQuantity;

          cartTotal.total += itemTotalPrice;
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
