import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceRequestResolving } from "@prisma/client";
import httpStatus from "http-status";
import { ServiceResolveService } from "./serviceResolve.service";

const createServiceResolv = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceResolveService.createServiceResolve(req.body);
    sendResponse<ServiceRequestResolving>(res, {
        statusCode: httpStatus.OK,
        message: "Service Resolving Created Successfully",
        success: true,
        data: result
    })
})

const getAllServiceResolv = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceResolveService.getAllServiceResolve();
    sendResponse<ServiceRequestResolving[]>(res, {
        statusCode: httpStatus.OK,
        message: "Service Resolving Retrive Successfully",
        success: true,
        data: result
    })
})

const getSingleServiceResolv = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceResolveService.getSingleServiceResolve(req.params.id);
    sendResponse<ServiceRequestResolving>(res, {
        statusCode: httpStatus.OK,
        message: "Service Resolving Retrive Successfully",
        success: true,
        data: result
    })
})

const updateServiceResolv = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceResolveService.updateServiceResolve(req.params.id, req.body);
    sendResponse<ServiceRequestResolving>(res, {
        statusCode: httpStatus.OK,
        message: "Service Resolving Updated Successfully",
        success: true,
        data: result
    })
})

const deleteServiceResolv = catchAsync(async (req: Request, res: Response) => {
    await ServiceResolveService.deleteServiceResolve(req.params.id);
    sendResponse<ServiceRequestResolving>(res, {
        statusCode: httpStatus.OK,
        message: "Service Resolving deleted Successfully",
        success: true,
    })
})

const trackingServiceResolve = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceResolveService.trackingServiceResolve(req.params.id);
    sendResponse<ServiceRequestResolving>(res, {
        statusCode: httpStatus.OK,
        message: "Service Retrive Successfully",
        success: true,
        data: result
    })
})
export const ServiceResolveController = {
    createServiceResolv,
    getAllServiceResolv,
    getSingleServiceResolv,
    deleteServiceResolv,
    updateServiceResolv,
    trackingServiceResolve
}
