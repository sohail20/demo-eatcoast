import { getCaterer } from "helper";
import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    addBank: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const caterer = getCaterer()
        if (caterer) {
          const bankResponse = await fetchWithBQ({
            url: `/caterer/bank/add`,
            method: "POST",
            body: { ..._arg, catererId: caterer._id }
          });
          if (bankResponse.error)
            return swal("Failed!", bankResponse.error.data.message, "warning");
          swal("Success!", bankResponse.data.message, "success");
          return bankResponse;
        }
      },
      providesTags: ["Bank"]
    }),
    getActiveBank: build.query({
      query: (status) => ({
        url: `/caterer/bank?status=${status}`,
        method: "GET",
      }),
      invalidatesTags: ["Bank"]
    })
  }),
  overrideExisting: false,
});

export const {
  useAddBankMutation,
  useGetActiveBankQuery
} = extendedApi;
