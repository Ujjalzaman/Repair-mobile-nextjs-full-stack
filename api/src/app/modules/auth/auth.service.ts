import { User } from '@prisma/client';
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/apiError";
import httpStatus from "http-status";
import bcrypt from 'bcrypt';
import { JwtHelpers } from "../../../helpers/jwtHelpers";
import { ILoginResponse, IProps } from "./auth.interface";
import { CloudinaryHelper } from '../../../helpers/uploadHelper';
import { Request } from 'express';
import { ICloudinaryResponse, IUpload } from '../../../interfaces/file';

const LoginUser = async (user: IProps): Promise<ILoginResponse> => {
    const { email: IEmail } = user;
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: IEmail,
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
        { email, role, id, profileImg }
    )
    return { accessToken, user: {email, role, id, profileImg} }
}

const SignUpUser = async (req: Request): Promise<User | null> => {
    let user: User = JSON.parse(req.body.data)
    const file = req.file as IUpload;
    if(file){
        const uploadImage: ICloudinaryResponse = await CloudinaryHelper.uploadFile(file);
        if (uploadImage) {
            user.profileImg = uploadImage.secure_url;
        }else{
            throw new ApiError(httpStatus.EXPECTATION_FAILED, 'Failed to upload image')
        }
    }

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