import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createCustomer = async(user: User):Promise<User | null> => {
    const createCustomer = await prisma.user.create({
        data: user
    })
    return createCustomer
}

export const UserService = {
    createCustomer
}