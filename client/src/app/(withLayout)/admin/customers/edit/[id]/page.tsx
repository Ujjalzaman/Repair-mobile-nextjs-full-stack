'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { UserTypeOptions } from "@/constants/global";
import { useCustomerQuery, useUpdateCustomersMutation } from "@/redux/api/customersApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditCustomer = ({ params }: { params: any }) => {
    const { id } = params;
    const router = useRouter();
    const [updateCustomers] = useUpdateCustomersMutation();
    const [selectFile, setSelectFile] = useState()
    const handleOnChange = (e: any) => {
        setSelectFile(e.target.files[0])
    }
    const { data } = useCustomerQuery(id);

    const handleOnSubmit = async (values: any) => {
        message.loading("Updating ...");
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
                    values['profileImg'] = data.data.url;
                    try {
                        const res = await updateCustomers({ id, body: values });
                        if (res) {
                            message.success("Successfully Customer Updated !");
                            router.push('/admin/customers')
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

    const defaultValues = {
        name: data?.name || '',
        email: data?.email || '',
        role: data?.role || '',
        address: data?.address || '',
        profileImag: data?.profileImage || ''
    }
    const base = 'admin'
    return (
        <>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "customer", link: `/${base}/customer` },
                ]}
            />
            <h5 className='p-2 text-white'>Update User</h5>
            <Form submitHandler={handleOnSubmit} defaultValues={defaultValues}>
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

                        <div>
                            <label htmlFor="customerimageUpload" className="form-label mb-0 mt-2">Email address</label>
                            <input type="file" name="image" id="customerimageUpload" className="form-control"
                                onChange={(e) => handleOnChange(e)} />
                        </div>

                    </Row>
                </div>
                <Button htmlType="submit" type="primary">Update</Button>
            </Form>
        </>
    )
}

export default EditCustomer;