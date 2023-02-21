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
    getVerified: build.mutation({
      query: (body) => ({
        url: `/auth/email/verify/caterer`,
        method: "POST",
        body,
      }),
    }),
    changePassword:build.mutation({
      query: (body) => ({
        url: `/auth/verify/otp/caterer`,
        method: "POST",
        body,
      }),
    })
  }),
  overrideExisting: false,
});

export const {
    useGetRegisterMutation,
    useGetVerifiedMutation,
    useChangePasswordMutation
} = extendedApi;
