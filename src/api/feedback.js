import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFeedback: build.query({
      query: (body) => ({
        url: `/customerfeedback/`,
        method: "GET",
      }),
    })
  }),
  overrideExisting: false,
});

export const {
    useGetFeedbackQuery
} = extendedApi;
