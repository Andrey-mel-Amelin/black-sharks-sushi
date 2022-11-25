import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsFetch = createAsyncThunk('products/productsFetch', async (id = null, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:3001/api/products');
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
      state.status = 'pending';
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { incrementProduct, decrementProduct, totalPrice } = productsSlice.actions;
export default productsSlice.reducer;
