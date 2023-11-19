import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { PaymentService } from "./payment.service";

const createPayment = catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.createPayment(req.user, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Successfully Payment Submited ",
        success: true,
        data: result
    })
})

const getSuccessPayment = catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.getSuccessPayment(req.params);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Successfully Payment Intent ",
        success: true,
        data: result
    })
})

export const PaymentController = {
    createPayment,
    getSuccessPayment
}
