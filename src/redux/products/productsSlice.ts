import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorResponse } from '@remix-run/router';
import axios from 'axios';
import { backendUrl } from '../../constants';

export const productsFetch = createAsyncThunk('products/productsFetch', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${backendUrl.deploy}/api/products`);
    return response?.data;
  } catch (err: unknown) {
    if (err instanceof ErrorResponse) return rejectWithValue(err.data);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')!) : [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [productsFetch.fulfilled.toString()]: (state, action) => {
      // в случае если запрос успешен добавить продукты в стейт
      state.items = action.payload;
    },
    [productsFetch.rejected.toString()]: (state, action) => {
      // в случае ошибки
      state.items = [];
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
