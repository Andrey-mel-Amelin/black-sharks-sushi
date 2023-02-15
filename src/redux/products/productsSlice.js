import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendUrl } from '../../constants';

export const productsFetch = createAsyncThunk('products/productsFetch', async (id = null, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${backendUrl.deploy}/api/products`);
    return response?.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
    status: null,
    error: null,
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      // перед выполнением запроса
      state.status = 'pending';
    },
    [productsFetch.fulfilled]: (state, action) => {
      // в случае если запрос успешен добавить продукты в стейт
      state.status = 'success';
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      // в случае ошибки
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { incrementProduct, decrementProduct, totalPrice} = productsSlice.actions;
export default productsSlice.reducer;
