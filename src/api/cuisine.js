import { api } from "../store/middleware/api";
const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    cuisineAdd: build.mutation({
      query: (body) => ({
        url: `/cuisine/add`,
        method: "POST",
        body,
      }),
    }),
    cuisineUpdate: build.mutation({
      query: (body) => ({
        url: `/cuisine/update`,
        method: "POST",
        body,
      }),
    }),
    cuisineDelete: build.mutation({
      query: (body) => ({
        url: `/cuisine/delete`,
        method: "POST",
        body,
      }),
    }),
    getAllCuisine: build.query({
      query: () => ({
        url: `/cuisine/get`,
      }),
    }),
    searchCuisine: build.mutation({
      query: (body) => ({
        url: `/cuisine/search`,
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCuisineAddMutation,
  useCuisineDeleteMutation,
  useCuisineUpdateMutation,
  useGetAllCuisineQuery,
  useSearchCuisineMutation
} = extendedApi;
