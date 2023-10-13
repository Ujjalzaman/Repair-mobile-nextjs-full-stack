import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(process.cwd(), '.env')});

export default {
    env: process.env.NODE_ENV,
    databse: process.env.DATABASE_URL,
    port: process.env.PORT
}