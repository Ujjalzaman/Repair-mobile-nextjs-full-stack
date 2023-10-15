import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const APPOINTMENT = '/appointment'

const appointmentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        appointments: build.query({
            query: () => ({
                url: APPOINTMENT,
                method: "GET"
            }),
            providesTags: [tagTypes.appointment]
        }),
        addAppointment: build.mutation({
            query: (data) => ({
                url: `${APPOINTMENT}/`,
                method: 'POST',
                data: data,
            }),
            invalidatesTags: [tagTypes.appointment]

        }),
        appointment: build.query({
            query: (id) => ({
                url: `${APPOINTMENT}/${id}`,
                method: 'GET'
            }),
            providesTags: [tagTypes.appointment]
        }),
        deleteAppointment: build.mutation({
            query: (id) => ({
                url: `${APPOINTMENT}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.appointment]
        }),
        updateAppointment: build.mutation({
            query: (data) => ({
                url: `${APPOINTMENT}/${data.id}`,
                method: 'PATCH',
                data: data.body
            }),
            invalidatesTags: [tagTypes.appointment]
        })

    }),
})

export const { useAddAppointmentMutation, useAppointmentQuery, useAppointmentsQuery, useDeleteAppointmentMutation, useUpdateAppointmentMutation} = appointmentApi;   