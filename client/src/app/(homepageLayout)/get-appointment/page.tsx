'use client';

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/Forms/uploadImage";
import SubHeader from "@/components/UI/SubHeader"
import { DeviceTypeOptions, deviceIssueOptions } from "@/constants/global";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import { isLoggedIn } from "@/service/auth.service";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'

const GetAppointment = () => {
    const router = useRouter();

    if (typeof window !== 'undefined') {
        const isUserLoggedIn = isLoggedIn();
      
        if (!isUserLoggedIn) {
          router.push('/login');
        }
      }

    const [addService] = useAddServiceMutation();
    const serviceRequestOnSubmit = async (values: any) => {
        message.loading("Creating ...");
        const obj = { ...values };
        const file = obj['file'];
        delete obj['file'];
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('data', data)
        try {
            const res = await addService(formData);
            if (!!res) {
                message.success("Successfully Added Service Request !");
                Swal.fire({
                    icon: "success",
                    title: "Appointment Schedule",
                    text: 'We will email you meeting Link',
                    showConfirmButton: false,
                    timer: 6000
                });
                router.push('customer/service-request')
            }
        } catch (error: any) {
            message.error(error.message)
        }
    }

    return (
        <div>
            <SubHeader title='Get Appointment' />
            <div className="container-full mx-4" style={{ marginTop: '7rem', marginBottom: '8rem' }}>
                <div className="row">
                    <div className="col-md-9">
                        <div className='container'>
                            <div>
                                <Form submitHandler={serviceRequestOnSubmit}>
                                    <div
                                        style={{
                                            border: "1px solid #d9d9d9",
                                            borderRadius: "5px",
                                            padding: "15px",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
                                            Basic information
                                        </p>
                                        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                                            <Col span={12} style={{ margin: "10px 0" }}>
                                                <FormSelectField
                                                    name="deviceType"
                                                    label="Your Device Type"
                                                    options={DeviceTypeOptions}
                                                />
                                                <div className="mt-3">
                                                    <FormSelectField
                                                        name="deviceIssue"
                                                        label="Your Device Issue"
                                                        options={deviceIssueOptions}
                                                    />
                                                </div>

                                                <div className="mt-3">
                                                    <label>Upload ScreenShot</label>
                                                    <UploadImage
                                                        name="file"
                                                    />
                                                </div>

                                                <div className="mt-3">
                                                    <FormTextArea
                                                        name="issueDescription"
                                                        label="Issue Description"
                                                        rows={6}
                                                    />
                                                </div>
                                            </Col>
                                            <Col span={12} style={{ margin: "10px 0" }}>
                                                <FormDatePicker
                                                    name="appointment_date"
                                                    label="Select Date"
                                                    isShow={true}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <Button htmlType="submit" type="primary" className="bg-primary">submit</Button>
                                </Form>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="rounded border-0 text-center py-5 mb-3" style={{ background: '#d7ded6', maxHeight: '13rem', overflow: 'hidden' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                <i className="ri-map-pin-line text-primary"></i>
                            </div>
                            <h3 className="text-uppercase">Address</h3>
                            <p>123 Amsterdem, Tronto, Canda</p>
                        </div>

                        <div className="rounded border-0 text-center py-5 mb-3" style={{ background: '#d7ded6', maxHeight: '13rem', overflow: 'hidden' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                <i className="ri-phone-line text-primary"></i>
                            </div>
                            <h3 className="text-uppercase">Phone Number</h3>
                            <p>+8801751040425</p>
                        </div>

                        <div className="rounded border-0 text-center py-5 mb-3" style={{ background: '#d7ded6', maxHeight: '13rem', overflow: 'hidden' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                <i className="ri-time-line text-primary"></i>
                            </div>
                            <h3 className="text-uppercase">Openning Hours</h3>
                            <p>All Day : 9AM to 6PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetAppointment;