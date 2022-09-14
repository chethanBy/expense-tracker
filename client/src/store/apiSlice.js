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
  }),
});

export const { useGetCategoriesQuery } = apiSlice;
