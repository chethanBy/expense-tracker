import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:5000/api";

export const apiSlice = createApi({
  // fetchBaseQuery is similar to fetch in js
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query({
      // query makes by default GET request
      //   like get: http://localhost:5000/api/categories
      query: () => "/categories",
    }),
    //   get labels
    getLabels: builder.query({
      // get: http://localhost:5000/api/labels
      query: () => "/labels",
    }),
    // add New Transaction
    // builder.mutation for requests other than GET
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        // post: http://localhost:5000/api/transaction
        // endpoint
        url: "/transaction",
        method: "POST",
        // req.body to server
        body: initialTransaction,
      }),
    }),
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        // delete: http://localhost:5000/api/transaction
        url: "/transaction",
        method: "DELETE",
        // req.body to server
        body: recordId,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = apiSlice;
