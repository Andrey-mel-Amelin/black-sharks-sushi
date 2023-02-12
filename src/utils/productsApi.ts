import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/redux';

const backendUrl = {
  local: 'http://localhost:3001',
  deploy: ''
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: backendUrl.local }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'api/products',
    }),
  }),
});

export const { useGetAllProductsQuery  } = productsApi;
