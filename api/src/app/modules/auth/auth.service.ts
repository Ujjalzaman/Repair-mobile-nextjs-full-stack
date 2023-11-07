import { User } from '@prisma/client';
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/apiError";
import httpStatus from "http-status";
import bcrypt from 'bcrypt';
import { JwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import { ILoginResponse, IProps } from "./auth.interface";

const LoginUser = async (user: IProps): Promise<ILoginResponse> => {
    const { email: IEmail, password } = user;
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: IEmail
        }
    })
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User is not Found !!');
    }

    const isPassMatched = await bcrypt.compare(user.password, isUserExist.password);

    const { email, role, id, profileImg } = isUserExist
    if (isUserExist && !isPassMatched) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Password is not mathced !!');
    }
    const accessToken = JwtHelpers.createAccessToken(
        { email, role, id, profileImg },
        config.jwt_secret as Secret,
        config.jwt_expiredIn as string
    )
    return { accessToken, user: isUserExist }
}

const SignUpUser = async (user: User): Promise<User | null> => {
    const { password } = user;
    if (password) {
        user.password = await bcrypt.hashSync(password, 12)
    }
    const result = await prisma.user.create({
        data: user
    })
    return result;
}

export const AuthService = {
    LoginUser,
    SignUpUser
}