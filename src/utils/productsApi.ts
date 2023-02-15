import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/redux';

const backendUrl = {
  local: 'http://localhost:3001',
  deploy: 'https://amelin.mesto.backend.nomoredomains.icu/',
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: backendUrl.deploy }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'api/products',
    }),
  }),
});

export const { useGetAllProductsQuery  } = productsApi;
