import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { appointmentSchedule } from "@prisma/client";
import httpStatus from "http-status";
import { AppointmentService } from "./appointment.service";

const createAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.createAppointment(req.user, req.body);
    sendResponse<appointmentSchedule>(res, {
        statusCode: httpStatus.OK,
        message: "Appoinment Created Successfully",
        success: true,
        data: result
    })
})

const getAllAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.getAllAppointment();
    sendResponse<appointmentSchedule[]>(res, {
        statusCode: httpStatus.OK,
        message: "Appointment Request Retrive Successfully",
        success: true,
        data: result
    })
})

const getSingleAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.getSingleAppointment(req.params.id);
    sendResponse<appointmentSchedule>(res, {
        statusCode: httpStatus.OK,
        message: "Appointment Retrive Successfully",
        success: true,
        data: result
    })
})

const updateAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.updateAppointment(req.params.id, req.body);
    sendResponse<appointmentSchedule>(res, {
        statusCode: httpStatus.OK,
        message: "Appointment Updated Successfully",
        success: true,
        data: result
    })
})

const deleteAppointment = catchAsync(async (req: Request, res: Response) => {
    await AppointmentService.deleteAppointment(req.params.id);
    sendResponse<appointmentSchedule>(res, {
        statusCode: httpStatus.OK,
        message: "Appointment deleted Successfully",
        success: true,
    })
})
export const AppointmentController = {
    createAppointment,
    getAllAppointment,
    getSingleAppointment,
    deleteAppointment,
    updateAppointment
}
