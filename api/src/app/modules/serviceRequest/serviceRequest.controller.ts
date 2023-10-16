import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceRequest } from "@prisma/client";
import httpStatus from "http-status";
import { ServiceRequestService } from "./serviceRequest.service";
import { IUser } from "./serviceRequest.interface";

const createServiceRequest = catchAsync(async (req: Request, res: Response) => {
    
    const result = await ServiceRequestService.createServiceRequest(req.user, req.body);
    sendResponse<ServiceRequest>(res, {
        statusCode: httpStatus.OK,
        message: "Service Request Created Successfully",
        success: true,
        data: result
    })
})

const getAllServiceRequest = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceRequestService.getAllServiceRequest(req.user);
    sendResponse<ServiceRequest[]>(res, {
        statusCode: httpStatus.OK,
        message: "Service Request Retrive Successfully",
        success: true,
        data: result
    })
})

const getSingleServiceRequest = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceRequestService.getSingleService(req.params.id);
    sendResponse<ServiceRequest>(res, {
        statusCode: httpStatus.OK,
        message: "Service Request Retrive Successfully",
        success: true,
        data: result
    })
})

const updateServiceRequest = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceRequestService.updateServiceRequest(req.params.id, req.body);
    sendResponse<ServiceRequest>(res, {
        statusCode: httpStatus.OK,
        message: "Service Request Updated Successfully",
        success: true,
        data: result
    })
})

const deleteServiceRequest = catchAsync(async (req: Request, res: Response) => {
    await ServiceRequestService.deleteServiceRequest(req.params.id);
    sendResponse<ServiceRequest>(res, {
        statusCode: httpStatus.OK,
        message: "Service Request deleted Successfully",
        success: true,
    })
})
export const ServiceRequestController = {
    createServiceRequest,
    getAllServiceRequest,
    getSingleServiceRequest,
    deleteServiceRequest,
    updateServiceRequest
}
