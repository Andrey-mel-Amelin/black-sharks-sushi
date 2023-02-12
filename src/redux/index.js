import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { productsFetch } from './products/productsSlice';
import cartReducer, { getTotals } from './cart/cartSlice';
import { productsApi } from '../utils/productsApi';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());
