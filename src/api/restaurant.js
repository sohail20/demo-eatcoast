import { api } from "../store/middleware/api";
const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    addRestaurant: build.mutation({
      query: (body) => ({
        url: `/restaurant/add`,
        method: "POST",
        body,
      }),
    }),
    deleteRestaurant: build.mutation({
      query: (body) => ({
        url: `/restaurant/delete`,
        method: "POST",
        body,
      }),
    }),

    updateRestaurant: build.mutation({
      query: (body) => ({
        url: `/restaurant/update`,
        method: "POST",
        body,
      }),
    }),
    searchRestaurant: build.mutation({
      query: (body) => ({
        url: `/restaurant/search`,
        method: "POST",
        body,
      }),
    }),
    getRestaurantById: build.mutation({
      query: (query) => `/restaurant/${query}`,
    }),
    getAllRestaurants: build.mutation({
      query: (query) => `/restaurant`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddRestaurantMutation,
  useDeleteRestaurantMutation,
  useUpdateRestaurantMutation,
  useSearchRestaurantMutation,
  useGetRestaurantByIdMutation,
} = extendedApi;
