import { User, UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { ICloudinaryResponse, IUpload } from "../../../interfaces/file";
import { Request } from "express";
import { CloudinaryHelper } from "../../../helpers/uploadHelper";
import ApiError from "../../errors/apiError";
import httpStatus from "http-status";
import { IUser } from "../../../interfaces/common";
import { UserInstance } from "../../../constant";

const getAllUser = async (): Promise<IUser[] | null> => {
    const result = await prisma.user.findMany({
        select: UserInstance
    });
    return result;
}

const getSingleAllUser = async (id: string): Promise<IUser | null> => {
    const result = await prisma.user.findUnique({
        where: { id },
        select: UserInstance
    });
    return result;
}

const deleteUser = async (id: string): Promise<User | null> => {
    const result = await prisma.user.delete({
        where: { id }
    });
    return result;
}

const updateUser = async (req: Request): Promise<IUser | null> => {
    const file = req.file as IUpload;
    const id = req.params.id as string;
    const user = JSON.parse(req.body.data);
    if (file) {
        const uploadImage: ICloudinaryResponse = await CloudinaryHelper.uploadFile(file);
        if (uploadImage) {
            user.profileImg = uploadImage.secure_url
        } else {
            throw new ApiError(httpStatus.EXPECTATION_FAILED, 'Failed to Update Image !!')
        }
    }
    const result = await prisma.user.update({
        where: { id },
        data: user,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            address: true,
            profileImg: true,
            createdAt: true,
            updatedAt: true,
            ServiceRequest: true,
            appointmentSchedule: true,
            reviews: true,
            Blogs: true,
        }
    });
    return result;
}

const getAdminUsers = async (): Promise<IUser[] | null> => {
    const result = await prisma.user.findMany({
        where: {
            role: UserRole.admin || UserRole.super_admin
        }
    })
    return result
}

export const UserService = {
    getAllUser,
    deleteUser,
    getSingleAllUser,
    updateUser,
    getAdminUsers
}