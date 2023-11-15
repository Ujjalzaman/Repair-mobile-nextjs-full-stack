'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UploadImage from "@/components/Forms/uploadImage";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { UserTypeOptions } from "@/constants/global";
import { useCustomerQuery, useUpdateCustomersMutation } from "@/redux/api/customersApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EditCustomer = ({ params }: { params: any }) => {
    const { id } = params;
    const router = useRouter();
    const [updateCustomers] = useUpdateCustomersMutation();
    const { data } = useCustomerQuery(id);
    const handleOnSubmit = async (values: any) => {
        const obj = { ...values };
        const file = obj['file']
        delete obj['file']
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append('file', file as Blob);
        formData.append('data', data)
        try {
            const res = await updateCustomers({id, data: formData});
            if (res) {
                message.success("Successfully Updated User Profile!");
                router.push('/customer/view-profile')
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
        profileImg: data?.profileImg || ''
    }
    const base = 'customer'
    return (
        <>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "view profile", link: `/${base}/view-profile` },
                ]}
            />
            <h5 className='my-2'>Update My Info</h5>
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
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="name"
                                type="text"
                                size="large"
                                label="Name"
                            />
                        </Col>
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="email"
                                type="email"
                                size="large"
                                label="Email"
                            />
                        </Col>
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormSelectField
                                name="role"
                                label="User Role"
                                options={UserTypeOptions}
                                disabled={true}
                            />
                        </Col>

                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="address"
                                type="text"
                                size="large"
                                label="Address"
                            />
                        </Col>

                        <Col span={12} style={{ margin: "10px 0" }}>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                            {defaultValues?.profileImg &&
                                <div style={{ maxWidth: '100px' }}>
                                    <Image
                                        src={defaultValues.profileImg}
                                        alt="avatar"
                                        style={{ width: "100%" }}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            }
                            <div>
                                <label>Change Image </label>
                                <UploadImage name="file" />
                            </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" type="primary" className="bg-primary">Update</Button>
            </Form>
        </>
    )
}

export default EditCustomer;