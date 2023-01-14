import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRegisterEmployee: build.mutation({
      query: (body) => ({
        url: `/caterer/employee/add`,
        method: "POST",
        body,
      }),
      invalidatesTags:["Employees"]
    }),
    getEmployees: build.query({
      query: (body) => `/caterer/employee`,
      providesTags: ['Employees'],
    }),
    getUpdateEmployee: build.mutation({
      query: (body) => ({
        url: `/caterer/employee/update`,
        method: "POST",
        body,
      }),
      invalidatesTags:["Employees"]
    }),
    deleteEmployee: build.mutation({
      query: (body) => ({
        url: `/caterer/employee/delete`,
        method: "POST",
        body,
      }),
      invalidatesTags:["Employees"]
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
});

export const { useGetRegisterEmployeeMutation, useGetEmployeeByIdQuery, useGetEmployeesQuery, useDeleteEmployeeMutation, useGetUpdateEmployeeMutation } = extendedApi;
