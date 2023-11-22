import { authKey } from "@/constants/storageKey";
import { IGenericErrorResponse, ISuccessResponseType } from "@/types";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

export const instance = axios.create();

// instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.post['Accept'] = 'application/json';
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
        config.headers.Authorization = accessToken;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
// @ts-ignore
instance.interceptors.response.use(function (response) {
    const responseObj: ISuccessResponseType = {
        data: response?.data?.data,
        meta: response?.data?.meta
    }
    return responseObj;
}, function (error) {
    // const responseObject: IGenericErrorResponse = {
    //     statusCode: error?.reponse?.data?.statusCode || 500,
    //     message: error?.response?.data?.message || "Something went Wrong",
    //     errorMessages: error?.response?.data?.message,
    // }
    // return responseObject;
    return Promise.reject(error);
});