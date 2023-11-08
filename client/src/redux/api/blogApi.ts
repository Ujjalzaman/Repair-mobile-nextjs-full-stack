import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const BLOG_REQUEST = '/blog'

const blogApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        blogs: build.query({
            query: () => ({
                url: BLOG_REQUEST,
                method: "GET"
            }),
            providesTags: [tagTypes.blog]
        }),
        addBlog: build.mutation({
            query: (data) => ({
                url: `${BLOG_REQUEST}/`,
                method: 'POST',
                data: data,
            }),
            invalidatesTags: [tagTypes.blog]
        }),
        getBlog: build.query({
            query: (id) => ({
                url: `${BLOG_REQUEST}/${id}`,
                method: 'GET'
            }),
            providesTags: [tagTypes.blog]
        }),
        deleteBlog: build.mutation({
            query: (id) => ({
                url: `${BLOG_REQUEST}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.blog]
        }),
        updateBlog: build.mutation({
            query: (data) => ({
                url: `${BLOG_REQUEST}/${data.id}/`,
                method: 'PATCH',
                data: data.body
            }),
            invalidatesTags: [tagTypes.blog]
        }),
    }),
})

export const { useAddBlogMutation, useBlogsQuery,useDeleteBlogMutation, useGetBlogQuery, useUpdateBlogMutation } = blogApi;   