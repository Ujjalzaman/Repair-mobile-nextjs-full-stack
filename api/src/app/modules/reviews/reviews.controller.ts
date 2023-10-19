import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Reviews } from "@prisma/client";
import httpStatus from "http-status";
import { ReviewService } from "./reviews.service";

const createReview = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.createReview(req.user, req.body);
    sendResponse<Reviews>(res, {
        statusCode: httpStatus.OK,
        message: "Review Created Successfully",
        success: true,
        data: result
    })
})

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.getAllReviews();
    sendResponse<Reviews[]>(res, {
        statusCode: httpStatus.OK,
        message: "Reviews Retrive Successfully",
        success: true,
        data: result
    })
})

const getReview = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.getReview(req.params.id);
    sendResponse<Reviews>(res, {
        statusCode: httpStatus.OK,
        message: "Review Retrive Successfully",
        success: true,
        data: result
    })
})

const updateReview = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.updateReview(req.params.id, req.body);
    sendResponse<Reviews>(res, {
        statusCode: httpStatus.OK,
        message: "Review Updated Successfully",
        success: true,
        data: result
    })
})

const deleteReview = catchAsync(async (req: Request, res: Response) => {
    await ReviewService.deleteReview(req.params.id);
    sendResponse<Reviews>(res, {
        statusCode: httpStatus.OK,
        message: "Review deleted Successfully",
        success: true,
    })
})

const getMyReviews = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.getMyReviews(req.user);
    sendResponse<Reviews[]>(res, {
        statusCode: httpStatus.OK,
        message: "Review retrieve Successfully",
        success: true,
        data: result
    })
})

export const ReivewController = {
    createReview,
    deleteReview,
    updateReview,
    getAllReviews,
    getReview,
    getMyReviews
}
