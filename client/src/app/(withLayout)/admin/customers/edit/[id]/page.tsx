'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { UserTypeOptions } from "@/constants/global";
import { useCustomerQuery, useUpdateCustomersMutation } from "@/redux/api/customersApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditCustomer = ({ params }: { params: any }) => {
    const { id } = params;
    const router = useRouter();
    const [updateCustomers] = useUpdateCustomersMutation();
    const { data } = useCustomerQuery(id);

    const handleOnSubmit = async (values: any) => {
        message.loading("Updating ...");
        try {
            const res = await updateCustomers({ id, body: values });
            if (res) {
                message.success("Successfully Customer Updated !");
                router.push('/admin/customers')
            }
        } catch (error: any) {
            message.loading(error.message)
        }
    }

    const defaultValues = {
        name: data?.name || '',
        email: data?.email || '',
        role: data?.role || '',
        address: data?.address || '',
    }
    const base = 'admin'
    return (
        <>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "admin", link: `/${base}` },
                ]}
            />
            <h1>Update User</h1>
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

                    </Row>
                </div>
                <Button htmlType="submit" type="primary">Update</Button>
            </Form>
        </>
    )
}

export default EditCustomer;