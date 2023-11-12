import { $Enums } from "@prisma/client";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password?: string;
    role: $Enums.UserRole | null;
    address: string | null;
    profileImg: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export type IGenericResponse<T> = {
    meta: {
        page?: number;
        limit?: number;
        total?: number;
    };
    data: T;
};

export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
};


export type IGenericErrorMessage = {
    path: string | number;
    message: string;
};