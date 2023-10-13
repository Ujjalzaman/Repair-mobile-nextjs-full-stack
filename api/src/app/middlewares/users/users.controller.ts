import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./users.service";
import sendResponse from "../../../shared/sendResponse";
import { User } from "@prisma/client";
import httpStatus from "http-status";

const createCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.createCustomer(req.body);
    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        message: "User Created Successfully",
        success: true,
        data: result
    })
})

export const UserController = {
    createCustomer
}
