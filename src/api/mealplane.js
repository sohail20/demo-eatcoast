import { api } from "../store/middleware/api";
const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    mealplaneAdd: build.mutation({
      query: (body) => ({
        url: `/mealplane/add`,
        method: "POST",
        body,
      }),
    }),
    mealplaneUpdate: build.mutation({
      query: (body) => ({
        url: `/mealplane/update`,
        method: "POST",
        body,
      }),
    }),
    mealplaneDelete: build.mutation({
      query: (body) => ({
        url: `/mealplane/delete`,
        method: "POST",
        body,
      }),
    }),
    getAllMealplane: build.mutation({
      query: () => ({
        url: `/mealplane/get`,
      }),
    }),
    searchMealplane: build.mutation({
      query: (body) => ({
        url: `/mealplane/cuisine`,
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
    useMealplaneAddMutation,
    useGetAllMealplaneMutation,
    useMealplaneDeleteMutation,
    useMealplaneUpdateMutation
} = extendedApi;
