import swal from "sweetalert";
import { api } from "../store/middleware/api";
const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAuthenticate: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const loginResponse = await fetchWithBQ({
          url: `/auth/login/caterer`,
          method: "POST",
          body: _arg,
        });
        if (loginResponse.error)
          return swal("Failed!", loginResponse.error.data.message, "warning");

        localStorage.setItem(
          "token",
          JSON.stringify(loginResponse.data.data.token)
        );
        delete loginResponse.data.data.token;
        localStorage.setItem("user", JSON.stringify(loginResponse.data.data));
        swal("Success!", loginResponse.data.message, "success");
        return loginResponse;
      },
    }),

    forgotPassword: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const forgotResponse = await fetchWithBQ({
          url: "/auth/forgot/password/caterer",
          method: "POST",
          body: _arg,
        });
        if (forgotResponse.error)
          return swal("Failed!", forgotResponse.error.data.message, "warning");
        swal("Success!", forgotResponse.data.message, "success");
        return forgotResponse;
      },
    }),
    verifyOTP: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const otpResponse = await fetchWithBQ({
          url: "/auth/verify/otp/caterer",
          method: "POST",
          body: _arg,
        });
        if (otpResponse.error)
          return swal("Failed!", otpResponse.error.data.message, "warning");
        swal("Success!", otpResponse.data.message, "success");
        return otpResponse;
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetAuthenticateMutation, useForgotPasswordMutation } =
  extendedApi;