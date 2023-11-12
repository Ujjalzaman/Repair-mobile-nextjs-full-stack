import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const SERVICE_URL = '/services'

const ServiceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        services: build.query({
            query: (arg: Record<string, any>) => ({
                url: SERVICE_URL,
                method: 'GET',
                params: arg
            }),
            transformResponse(response: any, meta:any){
                return {
                    services: response,
                    meta
                }
            },
            providesTags: [tagTypes.service]
        }),
        addService: build.mutation({
            query: (data) => ({
                url: `${SERVICE_URL}/create-service`,
                method: 'POST',
                data: data,
                headers: { 'Content-Type': 'multipart/form-data' },
            }),
            invalidatesTags: [tagTypes.service]
        }),
        service: build.query({
            query: (id) => ({
                url: `${SERVICE_URL}/${id}`,
                method: 'GET'
            }),
            providesTags: [tagTypes.service]
        }),
        deleteService: build.mutation({
            query: (id) => ({
                url: `${SERVICE_URL}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.service]
        }),
        updateService: build.mutation({
            query: ({ id, data }) => ({
                url: `${SERVICE_URL}/${id}/`,
                method: 'PATCH',
                data: data,
                headers: { 'Content-Type': 'multipart/form-data' },
            }),
            invalidatesTags: [tagTypes.service]
        }),
        appointment: build.query({
            query: (id) => ({
                url: `${SERVICE_URL}?status=scheduled`,
                method: 'GET'
            }),
            providesTags: [tagTypes.service]
        }),
    }),
})

export const { useAppointmentQuery, useAddServiceMutation, useDeleteServiceMutation, useServiceQuery, useServicesQuery, useUpdateServiceMutation } = ServiceApi;   