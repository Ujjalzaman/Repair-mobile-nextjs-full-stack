import { ServiceRequest, UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createServiceRequest = async (user: any, payload: ServiceRequest): Promise<ServiceRequest> => {

    if (user) {
        payload.userId = user.id
    }
    const result = await prisma.serviceRequest.create({
        data: payload
    });
    return result;
}

const getAllServiceRequest = async (user:any): Promise<ServiceRequest[] | null> => {
    if(user.role === UserRole.customer){
        const result = await prisma.serviceRequest.findMany({
            where:{
                userId: user.id
            }
        })
        return result
    }else{
        const result = await prisma.serviceRequest.findMany();
        return result;

    }
}

const getSingleService = async (id: string): Promise<ServiceRequest | null> => {
    const result = await prisma.serviceRequest.findUnique({
        where: { id }
    });
    return result;
}

const deleteServiceRequest = async (id: string): Promise<ServiceRequest | null> => {
    const result = await prisma.serviceRequest.delete({
        where: { id }
    });
    return result;
}

const updateServiceRequest = async (id: string, payload: Partial<ServiceRequest>): Promise<ServiceRequest | null> => {
    const result = await prisma.serviceRequest.update({
        where: { id },
        data: payload

    });
    return result;
}
export const ServiceRequestService = {
    createServiceRequest,
    getAllServiceRequest,
    getSingleService,
    deleteServiceRequest,
    updateServiceRequest
}