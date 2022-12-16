import { api } from "../store/middleware/api";
const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    addDishes: build.mutation({
      query: (body) => ({
        url: `/dish/add`,
        method: "POST",
        body,
      }),
    }),
    updateDishes: build.mutation({
      query: (body) => ({
        url: `/dish/update`,
        method: "POST",
        body,
      }),
    }),
    deleteDishes: build.mutation({
      query: (body) => ({
        url: `/dish/delete`,
        method: "POST",
        body,
      }),
    }),
    findDishesByRestaurant: build.query({
      query: (body) => ({
        url: `/dish/get/restaurant`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useAddDishesMutation } = extendedApi;
