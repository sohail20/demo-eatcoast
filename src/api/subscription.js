import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllSubscriptions: build.query({
            query: (body) => ({
                url: `/caterer/all/sub`,
                method: "POST",
                body
            }),
        }),
        getSubscriptionDetail: build.query({
            query: (body) => ({
                url: "/caterer/sub/details",
                method: "POST",
                body
            })
        }),
        getSubscriptionHistory:build.query({
            query:(body)=>({
                url:"/caterer/all/sub/history",
                method:"POST",
                body
            })
        })
    }),
    overrideExisting: false,
});

export const {
    useGetAllSubscriptionsQuery,
    useGetSubscriptionDetailQuery,
    useGetSubscriptionHistoryQuery
} = extendedApi;
