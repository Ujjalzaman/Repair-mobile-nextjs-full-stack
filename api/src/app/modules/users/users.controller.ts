import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./users.service";
import sendResponse from "../../../shared/sendResponse";
import { User } from "@prisma/client";
import httpStatus from "http-status";
import { IUser } from "../../../interfaces/common";
import pick from "../../../shared/pick";
import { userSearchableField } from "./users.constant";

const getAllUser = catchAsync(async (req: Request, res: Response) => {
    const filter = pick(req.query, userSearchableField);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
    
    const result = await UserService.getAllUser(filter, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Users Retrieve Successfully",
        success: true,
        data: result
    })
})

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getSingleAllUser(req.params.id);
    sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        message: "User Retrieve Successfully",
        success: true,
        data: result
    })
})

const getAdminUsers = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getAdminUsers();
    sendResponse<IUser[]>(res, {
        statusCode: httpStatus.OK,
        message: "Admin Retrieve Successfully",
        success: true,
        data: result
    })
})

const deleteUser = catchAsync(async (req: Request, res: Response) => {
    await UserService.deleteUser(req.params.id);
    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        message: 'User Deleted Successfully',
        success: true,
    })
})

const updateUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.updateUser(req);
    sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        message: "User Updated Successfully",
        success: true
    })
})

export const UserController = {
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    getAdminUsers
}
