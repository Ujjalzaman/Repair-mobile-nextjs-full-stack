import { baseApi } from "./baseApi"

const PAYMENT = '/payment'

const paymentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addPayment: build.mutation({
            query: (data) => ({
                url: `${PAYMENT}/`,
                method: 'POST',
                data: data
            })
        }),
        getPaymentInfo: build.query({
            query: (id) => ({
                url: `${PAYMENT}/${id}`,
                method: 'GET',
            })
        })
    }),
})

export const { useAddPaymentMutation, useGetPaymentInfoQuery } = paymentApi;   