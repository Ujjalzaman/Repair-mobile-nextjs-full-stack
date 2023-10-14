import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/apiError";
import httpStatus from "http-status";
import { JwtHelpers } from "../../helpers/jwtHelpers";
import config from "../../config";
import { Secret } from "jsonwebtoken";

const auth = (...authRules: string[]) => async (req:Request, res:Response, next: NextFunction) => {

    try {
        const token = req.headers.authorization;
        if(!token){
            throw new ApiError(httpStatus.NOT_FOUND, 'Token is not found !');
        }
        const verifiedToken = JwtHelpers.verifiedAccessToken(token, config.jwt_secret as Secret);

        req.user = verifiedToken;

        if(authRules.length && !authRules.includes(verifiedToken.role)){
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Not Authorized Please login !')
        }
        next();
    } catch (error) {
        next(error)
    }
}

export default auth;