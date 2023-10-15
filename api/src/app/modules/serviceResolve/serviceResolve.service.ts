import { ServiceRequestResolving } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createServiceResolve = async (payload: ServiceRequestResolving): Promise<ServiceRequestResolving> => {
    const result = await prisma.serviceRequestResolving.create({
        data: payload
    });
    return result;
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
    const result = await prisma.serviceRequestResolving.update({
        where: { id },
        data: payload
    });
    return result;
}

const trackingServiceResolve = async (data:{serviceRequestId:string}): Promise<ServiceRequestResolving | null> => {
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