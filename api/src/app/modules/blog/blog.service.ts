import { Blogs } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { Request } from "express";
import { CloudinaryHelper } from "../../../helpers/uploadHelper";
import ApiError from "../../errors/apiError";
import httpStatus from "http-status";
import { UserInstance } from "../../../constant";
import { IPaginationOtpions } from "../../../interfaces/pagination";
import { IBlogFilters, blogSearchablFields } from "./blog.interface";
import calculatePagination from "../../../shared/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";

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
        data: data,
    })
    return result
}
const getAllBlogs = async (
    filters: IBlogFilters,
    options: IPaginationOtpions
): Promise<IGenericResponse<Blogs[]>> => {
    const { limit, page, skip } = calculatePagination(options);
    const { searchTerm, ...filterData } = filters;

    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: blogSearchablFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        })
    };
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.entries(filterData).map(([key, value]) => ({
                [key]: { equals: value }
            }))
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.blogs.findMany({
        skip,
        take: limit,
        where: whereConditions,
        include: {
            user: {
                select: UserInstance
            }
        },
        orderBy: options.sortBy && options.sortOrder ? {
            [options.sortBy]: options.sortOrder
        } : {
            createdAt: 'desc'
        }
    })
    const total = await prisma.blogs.count({ where: whereConditions });

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    }
}

const getBlog = async (id: string): Promise<Blogs | null> => {
    const result = await prisma.blogs.findUnique({
        where: { id },
        include: {
            user: {
                select: UserInstance
            }
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