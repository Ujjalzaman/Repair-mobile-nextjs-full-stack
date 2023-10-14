import { JwtPayload } from 'jsonwebtoken';
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express{
        // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
        interface Request{
            user: JwtPayload | null
        }
    }
}