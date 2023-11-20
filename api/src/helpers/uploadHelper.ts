import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { ICloudinaryResponse } from '../interfaces/file';
import config from '../config';

cloudinary.config({
    cloud_name: config.cloudinary.name,
    api_key: config.cloudinary.key,
    api_secret: config.cloudinary.secret
});

const upload = multer({ storage: multer.memoryStorage() });

const uploadFile = async (file: any): Promise<ICloudinaryResponse> => {
    if (!file || !file.buffer) {
        throw new Error("File not provided or invalid.");
    }

    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { resource_type: 'auto' },
            (error: any, result: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        ).end(file.buffer);
    });
};

export const CloudinaryHelper = {
    uploadFile,
    upload
};