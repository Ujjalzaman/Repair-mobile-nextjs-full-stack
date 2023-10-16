import { ServiceRequestResolving } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/apiError";
import httpStatus from "http-status";

const createServiceResolve = async (payload: ServiceRequestResolving): Promise<any> => {
    await prisma.$transaction(async (tx) => {
        const isReviewed = await tx.serviceRequest.findFirst({
            where: { id: payload.serviceRequestId }
        })
        if (isReviewed) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Already Reviewed !!')
        }
        const createService = await tx.serviceRequestResolving.create({
            data: payload
        });
        if (createService.id) {
            await tx.serviceRequest.update({
                where: {
                    id: payload.serviceRequestId
                },
                data: {
                    reviewed: true,
                    status: createService.status
                }
            })
        }
        return createService
    })
}

const getAllServiceResolve = async (): Promise<ServiceRequestResolving[] | null> => {
    const result = await prisma.serviceRequestResolving.findMany();
    return result;
}

const getSingleServiceResolve = async (id: string): Promise<ServiceRequestResolving | null> => {
    const result = await prisma.serviceRequestResolving.findUnique({
        where: { id }
    });
    return result;
}

const deleteServiceResolve = async (id: string): Promise<ServiceRequestResolving | null> => {
    const result = await prisma.serviceRequestResolving.delete({
        where: { id }
    });
    return result;
}

const updateServiceResolve = async (id: string, payload: Partial<ServiceRequestResolving>): Promise<ServiceRequestResolving | null> => {
    const result = await prisma.$transaction(async (tx) => {

        const result = await tx.serviceRequestResolving.update({
            where: { id },
            data: payload
        });
        if (payload.status) {
            await tx.serviceRequest.update({
                where: {
                    id: result.serviceRequestId
                },
                data: {
                    status: payload.status
                }
            });
        }

        return result;
    });
    return result;
}


const trackingServiceResolve = async (data: { serviceRequestId: string }): Promise<ServiceRequestResolving | null> => {
    const result = await prisma.serviceRequestResolving.findFirst({
        where: {
            serviceRequest: {
                id: data.serviceRequestId
            },
        },
    });
    return result;
}
export const ServiceResolveService = {
    createServiceResolve,
    getAllServiceResolve,
    getSingleServiceResolve,
    deleteServiceResolve,
    updateServiceResolve,
    trackingServiceResolve
}