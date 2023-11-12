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