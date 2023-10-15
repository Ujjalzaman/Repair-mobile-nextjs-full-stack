'use client'


import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import Actionbar from "@/components/UI/ActionBar";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { useAddAppointmentMutation } from "@/redux/api/appointmentApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface IParams {
    params: any;
}

const EditDepartmentPage = ({ params }: IParams) => {
    const { id } = params;
    const [addAppointment] = useAddAppointmentMutation();
    const router = useRouter();
    const onSubmit = async (values:any) => {
        if(id){
            values['serviceRequestId'] = id
        }
        message.loading("Creating ...");
        try {
            const res = await addAppointment(values);
            if(res){
                message.success("Successfully appointment schedule !!")
                router.push('/customer/appointment')
            }
        } catch (error: any) {
            message.error(error.message)
        }
    }
    return (
        <>
            <FBreadCrumb
                items={[
                    {label: "service-request",link: "/service-request",},
                ]}
            />
            <Actionbar title="Get Appointment"> </Actionbar>

            <Form submitHandler={onSubmit}>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <FormDatePicker
                            name="appointment_date"
                            label="Select Date"
                        />
                    </Col>

                </Row>
                <Button htmlType="submit" type="primary">Confirm Appointment</Button>
            </Form>
        </>
    )
}

export default EditDepartmentPage