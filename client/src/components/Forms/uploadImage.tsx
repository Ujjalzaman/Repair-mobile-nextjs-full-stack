import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
};
type ImageUploadProps = {
    name: string;
}

const UploadImage = ({ name }: ImageUploadProps) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const { setValue } = useFormContext();

    const handleChange: UploadProps["onChange"] = (
        info: UploadChangeParam<UploadFile>
    ) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            setValue(name, info.file.originFileObj)
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <>
            <Upload
                name={name}
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="/api/file"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: "100%" }}
                        width={100}
                        height={100}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>
        </>
    );
};

export default UploadImage;