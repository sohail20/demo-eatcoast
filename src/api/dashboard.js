import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getManagerDash: build.query({
      query: (body) => ({
        url: `/caterer/dash/manager`,
        method: "POST",
        body,
      }),
    }),
    getStaffDash: build.query({
      query: (body) => ({
        url: `/caterer/dash/staff`,
        method: "POST",
        body,
      }),
    }),
    getAddOnes: build.query({
      query: (body) => ({
        url: `/caterer/all/addones`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetManagerDashQuery,
  useGetStaffDashQuery,
  useGetAddOnesQuery
} = extendedApi;
