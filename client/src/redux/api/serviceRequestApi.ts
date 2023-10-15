import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const SERVICE_REQUEST = '/service-request'

const serviceRequestApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        serviceRequests: build.query({
            query: () => ({
                url: SERVICE_REQUEST,
                method: "GET"
            }),
            providesTags: [tagTypes.serviceRequest]
        }),
        addServiceRequest: build.mutation({
            query: (data) => ({
                url: `${SERVICE_REQUEST}/`,
                method: 'POST',
                data: data,
            }),
            invalidatesTags: [tagTypes.serviceRequest]

        }),
        getSingleserviceRequest: build.query({
            query: (id) => ({
                url: `${SERVICE_REQUEST}/${id}`,
                method: 'GET'
            }),
            providesTags: [tagTypes.serviceRequest]
        }),
        deleteServiceRequest: build.mutation({
            query: (id) => ({
                url: `${SERVICE_REQUEST}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.serviceRequest]
        }),
        updateServiceRequest: build.mutation({
            query: (data) => ({
                url: `${SERVICE_REQUEST}/${data.id}/`,
                method: 'PATCH',
                data: data.body
            }),
            invalidatesTags: [tagTypes.serviceRequest]
        }),
        tracking: build.mutation({
            query: (data) => ({
                url: `/service-resolve/track`,
                method: 'POST',
                data
            })
        }),

    }),
})

export const {useAddServiceRequestMutation, useDeleteServiceRequestMutation, useServiceRequestsQuery, useUpdateServiceRequestMutation, useTrackingMutation, useGetSingleserviceRequestQuery } = serviceRequestApi;   