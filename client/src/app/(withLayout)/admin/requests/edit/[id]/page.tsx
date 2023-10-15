'use client';

import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { DeviceTypeOptions } from "@/constants/global";
import { useCustomerQuery } from "@/redux/api/customersApi";
import { useGetSingleserviceRequestQuery, useUpdateServiceRequestMutation } from "@/redux/api/serviceRequestApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditCustomerRequest = ({params}: {params:any}) => {
    const { id } = params;
    const router = useRouter();
    const [updateServiceRequest] = useUpdateServiceRequestMutation();
    const { data } = useGetSingleserviceRequestQuery(id);

    const handleOnSubmit = async (values: any) => {
        message.loading("Updating ...");
        try {
            const res = await updateServiceRequest({ id, body: values });
            if (res) {
                message.success("Successfully Request Updated !");
                router.push('/admin/requests')
            }
        } catch (error: any) {
            message.loading(error.message)
        }
    }

    const defaultValues = {
        deviceType: data?.deviceType || '',
        issueDescription: data?.issueDescription || '',
    }
    const base= 'admin'
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
                            <FormSelectField
                                name="deviceType"
                                label="Device Type"
                                options={DeviceTypeOptions}
                            />
                        </Col>

                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormTextArea
                                name="issueDescription"
                                label="Issue Description"
                                rows={4}
                            />
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" type="primary">Update</Button>
            </Form>
        </>
  )
}

export default EditCustomerRequest;