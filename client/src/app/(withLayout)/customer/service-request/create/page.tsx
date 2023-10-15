'use client';

import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { DeviceTypeOptions } from "@/constants/global";
import { useAddServiceRequestMutation } from "@/redux/api/serviceRequestApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreatePage = () => {
  const base = 'customer';
  const router = useRouter();
  const [addServiceRequest] = useAddServiceRequestMutation();
  const serviceRequestOnSubmit = async(values: any) =>{
    message.loading("Creating ...");
    try {
      const res = await addServiceRequest({...values});
      if(res){
        message.success("Successfully Added Service Request !");
      }
      router.push('/customer/service-request')
    } catch (error:any) {
      message.error(error.message)
    }

  }
  return (
    <>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "service-request", link: `/${base}/service-request` },
                ]}
            />
            <h1>Create Service Request</h1>
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
                <Button htmlType="submit" type="primary">submit</Button>
            </Form>
        </>
  )
}

export default CreatePage