import { baseApi } from "./baseApi"

const AUTH_URL = '/auth'

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (loginData) => ({
                url: `${AUTH_URL}/login`,
                method: 'POST',
                data: loginData,
            }),
        }),
        userSignUp: build.mutation({
            query: (loginData) => ({
                url: `${AUTH_URL}/signup`,
                method: 'POST',
                data: loginData,
            }),
        }),
    })
})

export const { useUserLoginMutation, useUserSignUpMutation } = authApi