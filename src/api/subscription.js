import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllSubscriptions: build.query({
            query: () => ({
                url: `/caterer/all/sub`,
                method: "POST",
                body: {
                    "catererId": "63c00bce2197ca82a09533ec",
                    "page": 1,
                    "size": 10
                }
                ,
            }),
        }),
        getSubscriptionDetail: build.query({
            query: (body) => ({
                url: "/caterer/sub/details",
                method: "POST",
                body
            })
        })
    }),
    overrideExisting: false,
});

export const {
    useGetAllSubscriptionsQuery,
    useGetSubscriptionDetailQuery
} = extendedApi;
