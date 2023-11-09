import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { ICloudinaryResponse, IUpload } from '../interfaces/file';
import config from '../config';

cloudinary.config({
    cloud_name: config.cloudinary.name,
    api_key: config.cloudinary.key,
    api_secret: config.cloudinary.secret
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

const uploadFile = async (file: IUpload):Promise<ICloudinaryResponse> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.path,
            (error: Error, result: ICloudinaryResponse) => {
                fs.unlinkSync(file.path)
                if (error) {
                    reject(error)
                }
                else {
                    resolve(result)
                }
            })
    })
};

export const CloudinaryHelper = {
    uploadFile,
    upload
}