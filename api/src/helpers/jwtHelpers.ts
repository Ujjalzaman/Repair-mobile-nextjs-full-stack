import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../config';


const createAccessToken = (payload: Record<string, unknown>) => {
    return jwt.sign(payload,   config.jwt_secret as string, { expiresIn: config.jwt_expiredIn });
}

const verifiedAccessToken = (token: string) => {
    return jwt.verify(token, config.jwt_secret as string) as JwtPayload
}

export const JwtHelpers = {
    createAccessToken,
    verifiedAccessToken
}