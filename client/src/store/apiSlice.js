import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:5000";

export const apiSlice = createApi({
  // fetchBaseQuery is similar to fetch in js
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query({
      // query makes by default GET request
      // get: 'http://localhost:8080/api/categories'
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),

    // get labels
    getLabels: builder.query({
      // get: 'http://localhost:8080/api/labels'
      query: () => "/api/labels",
      providesTags: ["transaction"],
    }),

    // add new Transaction
    // builder.mutation for requests other than GET
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        // post: 'http://localhost:8080/api/transaction'
        url: "/api/transaction",
        method: "POST",
        // req.body to server
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),

    // delete record
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        // delete: 'http://localhost:8080/api/transaction'
        url: "/api/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
