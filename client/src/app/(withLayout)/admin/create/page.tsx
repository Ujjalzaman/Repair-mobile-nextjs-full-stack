'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { UserTypeOptions } from "@/constants/global";
import { useAddCustomersMutation } from "@/redux/api/customersApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateAdminPage = () => {
    const base = 'admin';
    const router = useRouter();
    const [addCustomers] = useAddCustomersMutation();
    const [selectFile, setSelectFile] = useState();


    const handleOnChange = (e: any) => {
        setSelectFile(e.target.files[0])
    }

    const handleOnSubmit = async (values: any) => {
        if (selectFile) {
            const formData = new FormData();
            formData.append("image", selectFile);
            formData.append("key", 'd397289afc04f776659233bc4fe00dbc');
            try {
                const response = await fetch("https://api.imgbb.com/1/upload", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    values.profileImg = data.data.url;
                    try {
                        const res = await addCustomers({ ...values });
                        if (res) {
                            message.success("Successfully Admin Created !");
                            router.push('/admin')
                        }
                    } catch (error: any) {
                        message.loading(error.message)
                    }
                } else {
                    console.error("Image upload failed");
                }
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }
    }
    return (
        <>
            <FBreadCrumb items={[{ label: `${base}`, link: `/${base}` }]} />
            <h5 className='p-2 text-white'>Create User</h5>
            <Form submitHandler={handleOnSubmit}>
                <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                    }}
                >
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="name"
                                type="text"
                                size="large"
                                label="Name"
                            />
                        </Col>
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="email"
                                type="email"
                                size="large"
                                label="Email"
                            />
                        </Col>
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormSelectField
                                name="role"
                                label="User Role"
                                options={UserTypeOptions}
                            />
                        </Col>

                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="address"
                                type="text"
                                size="large"
                                label="Address"
                            />
                        </Col>

                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="Password"
                            />
                        </Col>
                        <div>
                            <label htmlFor="customerimageUpload" className="form-label mb-0 mt-2">Email address</label>
                            <input type="file" name="image" id="customerimageUpload" className="form-control"
                                onChange={(e) => handleOnChange(e)} />
                        </div>
                    </Row>
                </div>
                <Button htmlType="submit" type="primary">submit</Button>
            </Form>
        </>
    )
}

export default CreateAdminPage;