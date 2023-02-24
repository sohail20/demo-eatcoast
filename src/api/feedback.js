import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFeedback: build.query({
      query: (query) => ({
        url: `/customerfeedback?${query}`,
        method: "GET",
      }),
    })
  }),
  overrideExisting: false,
});

export const {
    useGetFeedbackQuery
} = extendedApi;
