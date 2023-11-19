'use client';

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/Forms/uploadImage";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { DeviceTypeOptions, StatusOptions, TechnicianNameOptions, deviceIssueOptions } from "@/constants/global";
import { useServiceQuery, useUpdateServiceMutation } from "@/redux/api/serviceApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EditService = ({ params }: { params: any }) => {
    const { id } = params;
    const router = useRouter();
    const [updateService] = useUpdateServiceMutation();
    const { data } = useServiceQuery(id);

    const handleOnSubmit = async (values: any) => {
        const obj = { ...values };
        const file = obj['file']
        delete obj['file']
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append('file', file as Blob);
        formData.append('data', data)
        try {
            const res = await updateService({ id, data: formData });
            if (!!res) {
                message.success("Successfully Added Service Request !");
                router.push('/admin/service-request')
            }
        } catch (error: any) {
            message.loading(error.message)
        }
    }

    const defaultValues = {
        deviceType: data?.deviceType || '',
        appointment_date: data?.appointment_date || '',
        deviceIssue: data?.deviceIssue || '',
        issueDescription: data?.issueDescription || '',
        pickup_date: data?.pickup_date || null,
        estimated_completion_time: data?.estimated_completion_time || null,
        technician: data?.technician || '',
        img: data?.img || ''
    }
    const base = 'admin'
    return (
        <div style={{marginBottom:'8rem', marginTop:'2rem'}}>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "service", link: `/${base}/service-request` },
                ]}
            />
            <h5 className='my-2'>Take Action on User Requests</h5>
            <Form submitHandler={handleOnSubmit} defaultValues={defaultValues}>
                <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                    }}
                >
                    <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
                        Customer Request Informations
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormSelectField
                                name="deviceType"
                                label="Device Type"
                                options={DeviceTypeOptions}
                            />
                        </Col>
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormSelectField
                                name="deviceIssue"
                                label="Device Issue"
                                options={deviceIssueOptions}
                            />
                        </Col>
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormSelectField
                                name="technician"
                                label="Assign Technician"
                                options={TechnicianNameOptions}
                            />
                        </Col>
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormSelectField
                                name="status"
                                label="Status"
                                options={StatusOptions}
                            />
                        </Col>

                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormDatePicker
                                name="appointment_date"
                                label="Appointment Date With Customer"
                            />
                        </Col>
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormDatePicker
                                name="estimated_completion_time"
                                label="Estimated Completion Date and Time"
                                isShow={false}
                            />
                        </Col>

                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormDatePicker
                                name="pickup_date"
                                label="Pickup Date (if device is ready)"
                                isShow={false}
                            />
                        </Col>
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <FormTextArea
                                name="issueDescription"
                                label="Issue Description"
                                rows={8}
                            />
                        </Col>
                        
                        <Col span={12} style={{ margin: "10px 0" }}>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                {defaultValues?.img &&
                                    <div style={{ maxWidth: '100px' }}>
                                        <Image
                                            src={defaultValues?.img}
                                            alt="avatar"
                                            style={{ width: "100%", objectFit:'contain' }}
                                            width={100}
                                            height={200}
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
                <Button htmlType="submit" type="primary" className="bg-primary">submit</Button>
            </Form>
        </div>
    )
}

export default EditService;