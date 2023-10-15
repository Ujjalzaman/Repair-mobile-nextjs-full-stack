'use client';

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { useAppointmentQuery, useUpdateAppointmentMutation } from "@/redux/api/appointmentApi";
import { useCustomerQuery, useUpdateCustomersMutation } from "@/redux/api/customersApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditAppointment = ({ params }: { params: any }) => {
    const { id } = params;
    const router = useRouter();
    const [updateAppointment] = useUpdateAppointmentMutation();
    const { data } = useAppointmentQuery(id);

    const handleOnSubmit = async (values: any) => {
        message.loading("Updating ...")
        try {
            const res = await updateAppointment({ id, body: values });
            if (res) {
                message.success("Successfully Appointment Updated !");
                router.push('/admin')
            }
        } catch (error: any) {
            message.loading(error.message)
        }
    }

    const defaultValues = {
        appointment_date: data?.appointment_date || '',
    }
    const base = 'admin'
    return (
        <>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "appointment", link: `/${base}/appointment` },
                ]}
            />
            <h1>Update Appintment</h1>
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
                            <FormDatePicker
                                name="appointment_date"
                                label="Select Date"
                            />
                        </Col>

                    </Row>
                </div>
                <Button htmlType="submit" type="primary">Update</Button>
            </Form>
        </>
    )
}

export default EditAppointment;