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
    updateDishStatus: build.mutation({
      query: (body) => ({
        url: `/dish/update/status/${body.id}?status=${body.status}`,
        method: "POST",
      }),
    }),
    getDishesByStatus: build.query({
      query: (query) => ({
        url: `/dish?${query}`,
        method: "GET",
      })
    }),
    deleteDishes: build.mutation({
      query: (body) => ({
        url: `/dish/delete`,
        method: "POST",
        body,
      }),
    }),
    getAllDishes: build.query({
      query: (body) => ({
        url: "/caterer/all/dish",
        method: "POST",
        body
      })
    }),
    getAllMealCourses: build.query({
      query: (body) => ({
        url: "/caterer/all/mealcourse",
        method: "POST",
        body
      })
    }),
    findDishesByRestaurant: build.query({
      query: (body) => ({
        url: `/dish/get/restaurant`,
        method: "POST",
        body,
      }),
    }),
    getSingleDish: build.query({
      query: (id) => ({
        url: `/dish/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDishesByStatusQuery,
  useAddDishesMutation,
  useGetAllDishesQuery,
  useGetSingleDishQuery,
  useUpdateDishesMutation,
  useUpdateDishStatusMutation,
  useGetAllMealCoursesQuery
} = extendedApi;
