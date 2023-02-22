import { BASE_URL } from "../../config";
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed

export const api = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    tagTypes: ['Post', 'User', "Employees", "Documents"],
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token && token !== null && token !== "") {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 30,
  endpoints: () => ({}),
});
