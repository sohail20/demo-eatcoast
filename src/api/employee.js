import { api } from "../store/middleware/api";
const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRegisterEmployee: build.mutation({
      query: (body) => ({
        url: `/caterer/employee/add`,
        method: "POST",
        body,
      }),
    }),
    getEmployees: build.query({
      query: (body) => `/caterer/employee`,
    }),
    getUpdateEmployee: build.mutation({
      query: (body) => ({
        url: `/caterer/employee/update`,
        method: "POST",
        body,
      }),
    }),
    deleteEmployee: build.mutation({
      query: (body) => ({
        url: `/caterer/employee/delete`,
        method: "POST",
        body,
      }),
    }),
    searchEmployee: build.mutation({
      query: (body) => ({
        url: `/caterer/employee/add`,
        method: "POST",
        body,
      }),
    }),
    getEmployeeById: build.query({
      query: (id) => `/caterer/employee/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetRegisterEmployeeMutation, useGetEmployeeByIdQuery, useGetEmployeesQuery } = extendedApi;
