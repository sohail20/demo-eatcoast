import { getCurrentEmpoyee } from "helper";
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
      query: ({id,data}) => ({
        url: `/restaurant/update/${id}`,
        method: "POST",
        body:data,
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
    getRestaurantByUserId: build.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const user = getCurrentEmpoyee()
        if (user) {
          const restaurantResponse = await fetchWithBQ({
            url: `/restaurant/user/${user._id}`,
            method: "GET",
          });
          if (restaurantResponse.error)
            return swal("Failed!", loginResponse.error.data.message, "warning");
          swal("Success!", restaurantResponse.data.message, "success");
          return restaurantResponse;
        }
      },
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
  useGetRestaurantByUserIdQuery,
  useGetRestaurantByIdMutation,
} = extendedApi;
