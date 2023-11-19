import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const ORDER_URL = '/order'

const orderApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        orders: build.query({
            query: () => ({
                url: ORDER_URL,
                method: "GET"
            }),
            providesTags: [tagTypes.order]
        }),
        addOrder: build.mutation({
            query: (data) => ({
                url: `${ORDER_URL}/`,
                method: 'POST',
                data: data,
            }),
            invalidatesTags: [tagTypes.order]
        }),
        order: build.query({
            query: (id) => ({
                url: `${ORDER_URL}/${id}`,
                method: 'GET'
            }),
            providesTags: [tagTypes.order]
        }),
        getOrderByService: build.query({
            query: (id) => ({
                url: `${ORDER_URL}/service/${id}`,
                method: 'GET'
            })
        }),
        deleteOrder: build.mutation({
            query: (id) => ({
                url: `${ORDER_URL}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.order]
        }),
        updateOrder: build.mutation({
            query: ({ data }) => ({
                url: `${ORDER_URL}/update-order`,
                method: 'PATCH',
                data: data
            }),
            invalidatesTags: [tagTypes.order]
        }),

    }),
})

export const { useGetOrderByServiceQuery, useAddOrderMutation, useDeleteOrderMutation, useOrderQuery, useOrdersQuery, useUpdateOrderMutation } = orderApi;   