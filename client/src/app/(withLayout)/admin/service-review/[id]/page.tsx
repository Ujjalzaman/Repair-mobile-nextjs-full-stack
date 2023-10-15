'use client';

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FormSelectField";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { StatusOptions, TechnicianNameOptions, UserTypeOptions } from "@/constants/global";
import { useAddServiceReviewMutation } from "@/redux/api/requestReview";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const ServiceReviewCreationPage = ({ params }: { params: any }) => {
    const { id } = params;
    const base = 'admin';
    const router = useRouter();
    const [addServiceReview] = useAddServiceReviewMutation();

    const handleOnSubmit = async (values: any) => {
        message.loading("Creating ...")
        if (id) {
            values["serviceRequestId"] = id
        }
        try {
            const res = await addServiceReview({ ...values });
            if (res) {
                message.success("Successfully Service Review Added !");
                router.push('/admin/service-review')
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
                    { label: "service-review", link: `/${base}/service-review` },
                ]}
            />
            <h1>Service Review</h1>
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
                            <FormSelectField
                                name="status"
                                label="Select Status"
                                options={StatusOptions}
                            />
                        </Col>

                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormSelectField
                                name="technician_assigne_name"
                                label="Select Technician"
                                options={TechnicianNameOptions}
                            />
                        </Col>
                    </Row>

                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>

                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormDatePicker
                                name="estimated_completion_time"
                                label="Select Completion Date"
                            />
                        </Col>

                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormDatePicker
                                name="ready_for_pickup"
                                label="Estimated Pickup Date"
                            />
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" type="primary">submit</Button>
            </Form>
        </>
    )
}

export default ServiceReviewCreationPage;