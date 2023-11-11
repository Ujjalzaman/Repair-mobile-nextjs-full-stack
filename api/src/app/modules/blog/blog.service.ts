import { Blogs } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { Request } from "express";
import { CloudinaryHelper } from "../../../helpers/uploadHelper";
import { IUpload } from "../../../interfaces/file";
import ApiError from "../../errors/apiError";
import httpStatus from "http-status";

const createBlog = async (req: Request): Promise<Blogs> => {
    const user = req.user;
    const data = JSON.parse(req.body.data);
    const file = req.file;

    if (file) {
        const uploadImage = await CloudinaryHelper.uploadFile(file);
        if (uploadImage) {
            data['img'] = uploadImage.secure_url
        } else {
            throw new ApiError(httpStatus.EXPECTATION_FAILED, 'Failed to Upload Image !')
        }
    }
    if (user) {
        data['userId'] = user.id
    }
    const result = await prisma.blogs.create({
        data: data
    })
    return result
}

const getAllBlogs = async (): Promise<Blogs[] | null> => {
    const result = await prisma.blogs.findMany({
        include: {
            user: true
        }
    });
    return result;
}

const getBlog = async (id: string): Promise<Blogs | null> => {
    const result = await prisma.blogs.findUnique({
        where: { id },
        include: {
            user: true
        }
    });
    return result;
}

const deleteBlog = async (id: string): Promise<Blogs | null> => {
    const result = await prisma.blogs.delete({
        where: { id }
    });
    return result;
}

const updateBlog = async (req: Request): Promise<Blogs | null> => {
    const data: Partial<Blogs> = JSON.parse(req.body.data);
    const file = req.file;
    const id = req.params.id;

    if (file) {
        const uploadImage = await CloudinaryHelper.uploadFile(file);
        if (uploadImage) {
            data['img'] = uploadImage.secure_url
        } else {
            throw new ApiError(httpStatus.EXPECTATION_FAILED, 'Failed to Upload Image !')
        }
    }
    const result = await prisma.blogs.update({
        where: {
            id: id
        },
        data: data
    })
    return result;
}

export const BlogService = {
    createBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
    updateBlog
}