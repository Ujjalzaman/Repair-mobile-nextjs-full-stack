import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Order } from "@prisma/client";
import httpStatus from "http-status";
import { OrdersServices } from "./order.service";

const generateOrder = catchAsync(async (req: Request, res: Response) => {
    await OrdersServices.generateOrder(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Order Initialized Successfully",
        success: true
    })
})

const getAllOder = catchAsync(async (req: Request, res: Response) => {
    const result = await OrdersServices.orders(req.user);
    sendResponse<Order[]>(res, {
        statusCode: httpStatus.OK,
        message: "Orders Retrive Successfully",
        success: true,
        data: result
    })
})

const getOrderByServiceId = catchAsync(async (req: Request, res: Response) => {
    const result = await OrdersServices.getOrderByService(req.params.serviceId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Orders Retrive Successfully",
        success: true,
        data: result
    })
})

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
    const result = await OrdersServices.getOrderByService(req.body);
    sendResponse<Order>(res, {
        statusCode: httpStatus.OK,
        message: "Order Retrive Successfully",
        success: true,
        data: result
    })
})

const updateOrder = catchAsync(async (req: Request, res: Response) => {
    const result = await OrdersServices.updateOrder(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Order Updated Successfully",
        success: true
    })
})

const deleteOrder = catchAsync(async (req: Request, res: Response) => {
    await OrdersServices.deleteOrder(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Order deleted Successfully",
        success: true,
    })
})
export const OrderController = {
    generateOrder,
    getAllOder,
    getSingleOrder,
    deleteOrder,
    updateOrder,
    getOrderByServiceId
}
