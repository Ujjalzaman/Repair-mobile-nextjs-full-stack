import { UserRole, appointmentSchedule } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createAppointment = async (user: any, payload: appointmentSchedule): Promise<appointmentSchedule> => {
    if (user) {
        payload.userId = user.id
    }
    const result = await prisma.appointmentSchedule.create({
        data: payload
    });
    return result;
}

const getAllAppointment = async (user: any): Promise<appointmentSchedule[] | null> => {
    if (user.role === UserRole.customer) {
        const result = await prisma.appointmentSchedule.findMany({
            where: {
                userId: user.id
            },
            include: {
                user: true,
                serviceRequest: true
            }
        });
        return result;
    }
    else {
        const result = await prisma.appointmentSchedule.findMany({
            include: {
                user: true,
                serviceRequest: true
            }
        });
        return result;
    }
}

const getSingleAppointment = async (id: string): Promise<appointmentSchedule | null> => {
    const result = await prisma.appointmentSchedule.findUnique({
        where: { id },

    });
    return result;
}

const deleteAppointment = async (id: string): Promise<appointmentSchedule | null> => {
    const result = await prisma.appointmentSchedule.delete({
        where: { id }
    });
    return result;
}

const updateAppointment = async (id: string, payload: Partial<appointmentSchedule>): Promise<appointmentSchedule | null> => {
    const result = await prisma.appointmentSchedule.update({
        where: { id },
        data: payload

    });
    return result;
}
export const AppointmentService = {
    createAppointment,
    getAllAppointment,
    getSingleAppointment,
    deleteAppointment,
    updateAppointment
}