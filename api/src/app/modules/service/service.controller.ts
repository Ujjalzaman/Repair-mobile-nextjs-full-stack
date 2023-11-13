import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { Service } from "@prisma/client";
import { ServicesService } from "./service.service";
import pick from "../../../shared/pick";
import { serviceFilterField } from "./service.constant";

const CreateService = catchAsync(async (req: Request, res: Response) => {
    const result = await ServicesService.CreateService(req);
    sendResponse<Service>(res, {
        statusCode: httpStatus.OK,
        message: "Service Updated Successfully!",
        success: true,
        data: result
    })
})

const getAllServices = catchAsync(async (req: Request, res: Response) => {
    const filter = pick(req.query, serviceFilterField);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
    const result = await ServicesService.getServices(req.user, filter, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Services Retrive Successfully",
        success: true,
        data: result
    })
})

const getSingleService = catchAsync(async (req: Request, res: Response) => {
    const result = await ServicesService.getSingleService(req.params.id);
    sendResponse<Service>(res, {
        statusCode: httpStatus.OK,
        message: "Services Retrive Successfully",
        success: true,
        data: result
    })
})

const updateService = catchAsync(async (req: Request, res: Response) => {
    const result = await ServicesService.updateService(req);
    sendResponse<Service>(res, {
        statusCode: httpStatus.OK,
        message: "Service Updated Successfully",
        success: true,
    })
})

const deleteService = catchAsync(async (req: Request, res: Response) => {
    await ServicesService.deleteService(req.params.id);
    sendResponse<Service>(res, {
        statusCode: httpStatus.OK,
        message: "Service deleted Successfully",
        success: true,
    })
})


export const ServicesController = {
    CreateService,
    deleteService,
    updateService,
    getSingleService,
    getAllServices
}
