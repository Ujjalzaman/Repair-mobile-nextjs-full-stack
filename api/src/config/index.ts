import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const DatabaseURL = process.env.NODE_ENV === 'development' ? process.env.DATABASE_URL : process.env.DATABASE_PROD_URL

export default {
    env: process.env.NODE_ENV,
    databse: DatabaseURL,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SCRET,
    jwt_expiredIn: process.env.JWT_EXPIRED_IN,
    jwt_secret_salt: process.env.JWT_SCRET_SALT_ROUND,
    cloudinary: {
        name: process.env.CLOUND_NAME,
        key: process.env.API_KEY,
        secret: process.env.API_SECRET
    },
    stripe:{
        publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        secretKey: process.env.STRIPE_SECRET_KEY
    }
}