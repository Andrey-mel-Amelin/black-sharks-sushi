import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: localStorage.getItem('itemsInCart') ? JSON.parse(localStorage.getItem('itemsInCart')) : [],
    productTotalQuantity: 0,
    productTotalAmount: 0,
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);

      localStorage.setItem('itemsInCart', JSON.stringify(state.itemsInCart));
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter((product) => product._id !== action.payload);

      localStorage.removeItem('itemsInCart', JSON.stringify(state.itemsInCart));
    },
    incrementProduct: (state, action) => {
      const productIndex = state.itemsInCart.findIndex((product) => product._id === action.payload._id);
      state.itemsInCart[productIndex].quantity += 1;

      localStorage.setItem('itemsInCart', JSON.stringify(state.itemsInCart));
    },
    decrementProduct: (state, action) => {
      const productIndex = state.itemsInCart.findIndex((product) => product._id === action.payload._id);
      if (state.itemsInCart[productIndex].quantity > 1) {
        state.itemsInCart[productIndex].quantity -= 1;
      }

      localStorage.setItem('itemsInCart', JSON.stringify(state.itemsInCart));
    },
    totalPrice: (state, action) => {
      let { total, quantity } = state.itemsInCart.reduce(
        (totalProduct, product) => {
          const { price, quantity } = product;
          const productTotal = price * quantity;
          totalProduct.total += productTotal;
          totalProduct.quantity += quantity;

          return totalProduct;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.productTotalQuantity = quantity;
      state.productTotalAmount = total
    },
  },
});

export const { setItemInCart, deleteItemFromCart, incrementProduct, decrementProduct, totalPrice } = cartSlice.actions;
export default cartSlice.reducer;
