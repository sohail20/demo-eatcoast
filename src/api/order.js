import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllOrder: build.query({
            query: (query) => ({
                url: `/order/get/all?${query}`,
                method: "GET",
            }),
            providesTags: ["Order"]
        }),
        getSingleOrderDetail: build.query({
            query: (query) => ({
                url: `/order/get/detial/${query}`
            }),
            providesTags: ["Order"]
        }),
        updateOrderStatus: build.mutation({
            query: ({ id, status }) => ({
                url: `/order/update/${id}`,
                method: "POST",
                body: { status }
            }),
            invalidatesTags: ["Order"]
        })
    }),
    overrideExisting: false,
});

export const {
    useGetAllOrderQuery,
    useGetSingleOrderDetailQuery,
    useUpdateOrderStatusMutation
} = extendedApi;
