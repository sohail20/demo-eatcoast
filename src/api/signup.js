import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRegister: build.mutation({
      query: (body) => ({
        url: `/auth/signup/caterer`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
    useGetRegisterMutation
} = extendedApi;
