import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    addBank: build.mutation({
      query: (body) => ({
        url: `/caterer/bank/add`,
        method: "POST",
        body,
      }),
    })
  }),
  overrideExisting: false,
});

export const {
    useAddBankMutation
} = extendedApi;
