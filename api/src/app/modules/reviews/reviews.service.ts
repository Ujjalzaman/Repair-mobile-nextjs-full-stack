import { Reviews, UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { UserInstance } from "../../../constant";
import { IBlogFilters } from "../blog/blog.interface";
import { IPaginationOtpions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import calculatePagination from "../../../shared/paginationHelper";

const createReview = async (user: any, payload: Reviews): Promise<Reviews> => {
    if (user) {
        payload['userId'] = user.id
    }
    const result = await prisma.reviews.create({
        data: payload
    })
    return result
}

const getAllReviews = async (
    filters: IBlogFilters,
    options: IPaginationOtpions
): Promise<IGenericResponse<Reviews[]>> => {
    const { limit, page, skip } = calculatePagination(options);
    const { searchTerm, ...filterData } = filters;

    const andConditions = [];

    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.entries(filterData).map(([key, value]) => ({
                [key]: { equals: value }
            }))
        });
    }

    if (searchTerm) {
        andConditions.push({
            OR: ['title', 'description'].map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        })
    };
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.reviews.findMany({
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

const getMyReviews = async (user: any): Promise<Reviews[] | null> => {
    const { id } = user;
    if (user.role === UserRole.customer) {
        const result = await prisma.reviews.findMany({
            where: {
                userId: id
            },
            include: {
                user: {
                    select: UserInstance
                }
            }
        });
        return result;
    }
    else {
        const result = await prisma.reviews.findMany({
            include: {
                user: {
                    select: UserInstance
                }
            }
        });
        return result;
    }
}

const getReview = async (id: string): Promise<Reviews | null> => {
    const result = await prisma.reviews.findUnique({
        where: { id },
        include: {
            user: {
                select: UserInstance
            }
        }
    });
    return result;
}

const deleteReview = async (id: string): Promise<Reviews | null> => {
    const result = await prisma.reviews.delete({
        where: { id }
    });
    return result;
}

const updateReview = async (id: string, payload: Partial<Reviews>): Promise<Reviews | null> => {
    const result = await prisma.reviews.update({
        where: {
            id: id
        },
        data: payload
    })
    return result;
}

export const ReviewService = {
    createReview,
    getAllReviews,
    getReview,
    deleteReview,
    getMyReviews,
    updateReview
}