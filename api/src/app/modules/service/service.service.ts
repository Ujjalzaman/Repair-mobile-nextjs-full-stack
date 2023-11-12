import { Prisma, Service, UserRole } from '@prisma/client';
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/apiError";
import httpStatus from "http-status";
import { CloudinaryHelper } from '../../../helpers/uploadHelper';
import { Request } from 'express';
import { UserInstance } from '../../../constant';
import { IPaginationOtpions } from '../../../interfaces/pagination';
import calculatePagination from '../../../shared/paginationHelper';
import { serviceSearchTermField } from './service.constant';

const CreateService = async (req: Request): Promise<Service | null> => {
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
    const result = await prisma.service.create({
        data: data,
        include: {
            user: {
                select: UserInstance
            }
        }
    });
    return result;
}

const getServices = async (
    user: any,
    filters: any,
    options: IPaginationOtpions
): Promise<Service[] | null> => {
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
    const whereConditions: Prisma.ServiceWhereInput = andConditions.length > 0 ? { AND: andConditions } : {};
    if (searchTerm) {
        andConditions.push({
            OR: serviceSearchTermField.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        })
    };

    if (user.role === UserRole.customer) {
        const result = await prisma.service.findMany({
            where: {
                userId: user.id
            },
            include: {
                user: {
                    select: UserInstance
                }
            }
        })
        return result
    } else {
        const result = await prisma.service.findMany({
            skip,
        take: limit,
        where: whereConditions,
        orderBy: options.sortBy && options.sortOrder ? {
            [options.sortBy]: options.sortOrder
        } : {
            createdAt: 'desc'
        }
        });
        return result;

    }
}

const getSingleService = async (id: string): Promise<Service | null> => {
    const result = await prisma.service.findUnique({
        where: { id },
        include: {
            user: {
                select: UserInstance
            }
        }
    });
    return result;
}

const deleteService = async (id: string): Promise<Service | null> => {
    const result = await prisma.service.delete({
        where: { id }
    });
    return result;
}

const updateService = async (req: Request): Promise<Service | null> => {
    const file = req.file;
    const id = req.params.id;
    const data = JSON.parse(req.body.data);
    if (file) {
        const uploadImage = await CloudinaryHelper.uploadFile(file);
        if (uploadImage) {
            data['img'] = uploadImage.secure_url
        } else {
            throw new ApiError(httpStatus.EXPECTATION_FAILED, 'Failed to Upload Image !')
        }
    }
    const result = await prisma.service.update({
        where: { id },
        data: data
    });
    return result;
}

export const ServicesService = {
    CreateService,
    getServices,
    updateService,
    deleteService,
    getSingleService
}