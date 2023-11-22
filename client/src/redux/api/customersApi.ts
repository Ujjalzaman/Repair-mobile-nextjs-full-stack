import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const CUSTEMERS = '/users'

const customersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        customers: build.query({
            query: (arg:Record<string, any>) => ({
                url: CUSTEMERS,
                method: "GET",
                params: arg
            }),
            transformResponse(response: any, meta: any){
                return {
                    users: response,
                    meta
                }
            },
            providesTags: [tagTypes.customers]
        }),
        getAdmins: build.query({
            query: () => ({
                url: `${CUSTEMERS}/admins`,
                method: "GET"
            }),
            providesTags: [tagTypes.customers]
        }),
        addCustomers: build.mutation({
            query: (data) => ({
                url: `/auth/signup`,
                method: 'POST',
                data: data,
                headers: {'Content-Type': 'multipart/form-data'}
            }),
            invalidatesTags: [tagTypes.customers]

        }),
        customer: build.query({
            query: (id) => ({
                url: `${CUSTEMERS}/${id}`,
                method: 'GET'
            }),
            providesTags: [tagTypes.customers]
        }),
        deleteCustomers: build.mutation({
            query: (id) => ({
                url: `${CUSTEMERS}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.customers]
        }),
        updateCustomers: build.mutation({
            query: ({id, data}) => ({
                url: `${CUSTEMERS}/${id}`,
                method: 'PATCH',
                data: data,
                headers: { 'Content-Type': 'multipart/form-data'},
            }),
            invalidatesTags: [tagTypes.customers]
        })

    }),
})

export const { useAddCustomersMutation, useCustomerQuery, useCustomersQuery, useDeleteCustomersMutation, useUpdateCustomersMutation, useGetAdminsQuery } = customersApi;   