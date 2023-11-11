'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UploadImage from "@/components/Forms/uploadImage";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { UserTypeOptions } from "@/constants/global";
import { useAddCustomersMutation } from "@/redux/api/customersApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateCustomerPage = () => {
    const base = 'admin';
    const router = useRouter();
    const [addCustomers] = useAddCustomersMutation();

    const handleOnSubmit = async (values: any) => {
        const obj = { ...values };
        const file = obj['file']
        delete obj['file']
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append('file', file as Blob);
        formData.append('data', data)
        try {
            const res = await addCustomers(formData);
            if (res) {
                message.success("Successfully Added Service Request !");
                router.push('/admin/customers')
            }
        } catch (error: any) {
            message.loading(error.message)
        }
    }
    return (
        <>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "cusomters", link: `/${base}/customers` },
                ]}
            />
            <h5 className='p-2'>Create User</h5>
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
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <UploadImage name="file" />
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" type="primary">submit</Button>
            </Form>
        </>
    )
}

export default CreateCustomerPage;