// import { IAdmin, IDepartment, IMeta } from "@/types"
// import { tagTypes } from "../tag-types"
// import { baseApi } from "./baseApi"

// const ADMIN_URL = '/admins'

// const departmentApi = baseApi.injectEndpoints({
//     endpoints: (build) => ({
//         admins: build.query({
//             query: (arg: Record<string, any>) => ({
//                 url: ADMIN_URL,
//                 method: "GET",
//                 params: arg
//             }),
//             transformResponse: (response: IAdmin, meta: IMeta) => {
//                 return {
//                     admins: response,
//                     meta
//                 }
//             },
//             providesTags: [tagTypes.admin]
//         }),
//         addAdmin: build.mutation({
//             query: (data) => ({
//                 url: '/users/create-admin',
//                 method: 'POST',
//                 data: data,
//                 contentType: "multipart/form-data"
//             }),
//             invalidatesTags: [tagTypes.admin]
//         }),
//         // getSingleDepartment: build.query({
//         //     query: (id) => ({
//         //         url: `${DEPARTMENT_URL}/${id}`,
//         //         method: 'GET'
//         //     }),
//         //     providesTags: [tagTypes.depatment]
//         // }),
//         // updateDepartment: build.mutation({
//         //     query: (data) => ({
//         //         url: `${DEPARTMENT_URL}/${data.id}`,
//         //         method: 'PATCH',
//         //         data: data.body
//         //     }),
//         //     invalidatesTags: [tagTypes.depatment]
//         // }),
//         // deleteDepartment: build.mutation({
//         //     query: (id) => ({
//         //         url: `${DEPARTMENT_URL}/${id}`,
//         //         method: 'DELETE'
//         //     }),
//         //     invalidatesTags: [tagTypes.depatment]
//         // })
//     }),
// })

// export const { useAddAdminMutation, useAdminsQuery } = departmentApi;