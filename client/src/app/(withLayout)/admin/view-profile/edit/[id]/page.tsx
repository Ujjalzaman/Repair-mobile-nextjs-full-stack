'use client';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UploadImage from "@/components/Forms/uploadImage";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { useCustomerQuery, useUpdateCustomersMutation } from "@/redux/api/customersApi";
import { Button, Col, Row, message } from "antd";

const EditProfile = ({ params }: { params: any }) => {
    const { id } = params;
    const { data } = useCustomerQuery(id);

    const handleOnSubmit = async (values: any) => {
            console.log(values)
            message.loading("Updating ...");
            const obj = { ...values };
            const file = obj['file'];
            delete obj['file'];
            const data = JSON.stringify(obj);
            const formData = new FormData();
            formData.append('file', file as Blob);
            formData.append('data', data)
            try {
                // @ts-ignore
                const res = await useUpdateCustomersMutation({ id, body: values });
                if (res) {
                    message.success("Successfully Admin Updated !");
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
    return (
        <div>
            <FBreadCrumb items={[{ label: `${data?.role}`, link: `/${data?.role}` }]} />
            <h3 className="my-2">Update User</h3>

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
                            <FormInput
                                name="address"
                                type="text"
                                size="large"
                                label="Address"
                            />
                        </Col>
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <UploadImage name="file"/>
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" type="primary">Update</Button>
            </Form>
        </div>
    )
}

export default EditProfile;