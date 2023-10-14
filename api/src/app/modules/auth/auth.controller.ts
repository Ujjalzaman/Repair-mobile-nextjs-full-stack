import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { AuthService } from "./auth.service";
import config from "../../../config";
import { User } from "@prisma/client";

const LoginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.LoginUser(req.body);
    const {accessToken} = result;
    const cookieOptions = {
        secure : config.env === 'production',
        httpOnly: true
    }
    res.cookie('accessToken', accessToken, cookieOptions)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "User Created Successfully",
        success: true,
        token: accessToken
    })
})

const SignUpUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.SignUpUser(req.body);
    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        message: "User SignUp Successfully",
        success: true,
        data: result
    })
})

export const AuthController = {
    LoginUser,
    SignUpUser
}
