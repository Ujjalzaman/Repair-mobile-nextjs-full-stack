import { Response } from "express";

type IApiResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string | null;
    meta?: {
        page: number;
        limit: number;
        total: number
    },
    data?: T | null;
    token?: string;
}


const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
    const responseData = {
        statusCode: data.statusCode,
        sucess: data.success,
        message: data.message,
        meta: data.meta || null || undefined,
        data: data.data || null || undefined,
        token: data.token
    };
    res.status(data.statusCode).json(responseData)
}
export default sendResponse;