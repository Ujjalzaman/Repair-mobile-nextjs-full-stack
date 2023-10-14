// import { IMeta } from './../../types/common';
// import { tagTypes } from "../tag-types"
// import { baseApi } from "./baseApi"

// const STUDENT_URL = '/students'

// const studentApi = baseApi.injectEndpoints({
//     endpoints: (build) => ({
//         students: build.query({
//             query: (arg: Record<string, any>) => ({
//                 url: STUDENT_URL,
//                 method: "GET",
//                 params: arg
//             }),
//             transformResponse: (response: any, meta: IMeta) => {
//                 return {
//                     students: response,
//                     meta
//                 }
//             },
//             providesTags: [tagTypes.faculty]
//         }),
//         addStudent: build.mutation({
//             query: (data) => ({
//                 url: '/users/create-student',
//                 method: 'POST',
//                 data: data,
//                 contentType: "multipart/form-data"
//             }),
//             invalidatesTags: [tagTypes.student]
//         }),
//         getSingleStudent: build.query({
//             query: (id) => ({
//                 url: `${STUDENT_URL}/${id}`,
//                 method: 'GET'
//             }),
//             providesTags: [tagTypes.faculty]
//         })

//     }),
// })

// export const { useStudentsQuery, useAddStudentMutation, useGetSingleStudentQuery } = studentApi;   