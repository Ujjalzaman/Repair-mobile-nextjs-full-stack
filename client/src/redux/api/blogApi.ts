import { IMeta } from "@/types";
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const BLOG_URL = '/blog'

const blogApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        blogs: build.query({
            query: (arg: Record<string, any>) => ({
                url: BLOG_URL,
                method: 'GET',
                params: arg
            }),
            transformResponse: (response:any ,meta: IMeta) =>{
                return {
                    blogs: response,
                    meta
                }
            },
            providesTags: [tagTypes.blog]
        }),
        addBlog: build.mutation({
            query: (data) => ({
                url: `${BLOG_URL}/`,
                method: 'POST',
                data: data,
                headers: { 'Content-Type': 'multipart/form-data'},
            }),
            invalidatesTags: [tagTypes.blog]
        }),
        getBlog: build.query({
            query: (id) => ({
                url: `${BLOG_URL}/${id}`,
                method: 'GET'
            }),
            providesTags: [tagTypes.blog]
        }),
        deleteBlog: build.mutation({
            query: (id) => ({
                url: `${BLOG_URL}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.blog]
        }),
        updateBlog: build.mutation({
            query: ({id, data}) => ({
                url: `${BLOG_URL}/${id}/`,
                method: 'PATCH',
                data: data,
                headers: { 'Content-Type': 'multipart/form-data'},
            }),
            invalidatesTags: [tagTypes.blog]
        }),
    }),
})

export const { useAddBlogMutation, useBlogsQuery,useDeleteBlogMutation, useGetBlogQuery, useUpdateBlogMutation } = blogApi;   