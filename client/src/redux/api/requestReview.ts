import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const SERVICE_REQUEST_REVIEW = '/service-resolve'

const serviceReviewApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        serviceReviews: build.query({
            query: () => ({
                url: SERVICE_REQUEST_REVIEW,
                method: "GET"
            }),
            providesTags: [tagTypes.review]
        }),
        addServiceReview: build.mutation({
            query: (data) => ({
                url: `${SERVICE_REQUEST_REVIEW}/`,
                method: 'POST',
                data: data,
            }),
            invalidatesTags: [tagTypes.review]
        }),
        serviceReview: build.query({
            query: (id) => ({
                url: `${SERVICE_REQUEST_REVIEW}/${id}`,
                method: 'GET'
            }),
            providesTags: [tagTypes.review]
        }),
        deleteServiceReview: build.mutation({
            query: (id) => ({
                url: `${SERVICE_REQUEST_REVIEW}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.review]
        }),
        updateServiceReview: build.mutation({
            query: (data) => ({
                url: `${SERVICE_REQUEST_REVIEW}/${data.id}`,
                method: 'PATCH',
                data: data.body
            }),
            invalidatesTags: [tagTypes.review]
        }),

    }),
})

export const { useAddServiceReviewMutation, useDeleteServiceReviewMutation, useServiceReviewQuery, useServiceReviewsQuery, useUpdateServiceReviewMutation } = serviceReviewApi;   