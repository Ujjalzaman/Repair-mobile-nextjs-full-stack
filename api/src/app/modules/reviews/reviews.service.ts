import { Reviews, UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { UserInstance } from "../../../constant";

const createReview = async (user: any, payload: Reviews): Promise<Reviews> => {
    if (user) {
        payload['userId'] = user.id
    }
    const result = await prisma.reviews.create({
        data: payload
    })
    return result
}

const getAllReviews = async (): Promise<Reviews[] | null> => {
    const result = await prisma.reviews.findMany({
        include: {
            user: {
                select: UserInstance
            }
        }
    });
    return result;
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