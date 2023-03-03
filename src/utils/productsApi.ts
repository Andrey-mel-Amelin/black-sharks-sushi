import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/redux';

const backendUrl = {
  local: 'http://localhost:3001',
  deploy: 'https://amelin.mesto.backend.nomoredomains.icu/',
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: backendUrl.deploy }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'api/products',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ nameProduct }) => ({ type: 'Products' as const, nameProduct })), 'Products']
          : ['Products'],
    }),
    postProduct: builder.mutation({
      query: (data) => ({
        url: `api/products`,
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: data,
      }),
      invalidatesTags: [{ type: 'Products' }],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `api/products/${id}`,
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
      }),
      invalidatesTags: [{ type: 'Products' }],
    }),
  }),
});

export const { useGetAllProductsQuery, usePostProductMutation, useDeleteProductMutation } = productsApi;
