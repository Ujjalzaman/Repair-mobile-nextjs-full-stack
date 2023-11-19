'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { useAddOrderMutation } from "@/redux/api/orderApi";
import { useServiceQuery } from "@/redux/api/serviceApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GeneratePayment = ({ params }: { params: any }) => {
  const router = useRouter();
  const { id } = params;
  const { data } = useServiceQuery(id);
  const [addOrder] = useAddOrderMutation()
  const handleOnSubmit = async (values: any) => {
    message.success("Creating ...");
    const obj = { ...values };
    if (data) {
      obj['serviceId'] = data.id
    }
    obj['hardware'] = parseInt(obj['hardware'])
    obj['technician_bill'] = parseInt(obj['technician_bill'])
    obj['software'] = parseInt(obj['software'])
    try {
      const res = await addOrder(obj);
      if (res) {
        message.success("Successfully Added Service Request !");
        router.push('/admin/service-request')
      }
    } catch (error: any) {
      message.loading(error.message)
    }
  }
  const base = 'admin';
  return (
    <div style={{ marginBottom: '7rem' }}>
      <FBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "cusomters", link: `/${base}/customers` },
        ]}
      />
      <h5 className='my-2'>Generate Payment Information</h5>
      <div className="d-flex justify-content-between card p-2 my-2 mb-4">
        <div>
          <h5>{data?.deviceType}</h5>
          <p> {data?.deviceIssue}</p>
          <p>
            {data?.issueDescription}
          </p>
        </div>
        <div>
          {data?.img && <Image src={data?.img} height={100} width={100} alt="device image" className="rounded object-fit-cover" />}
        </div>
      </div>
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
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                name="hardware"
                type="text"
                size="large"
                label="Hardware Amount"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                name="parts"
                type="text"
                size="large"
                label="Parts Name"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                name="software"
                type="text"
                size="large"
                label="Software Amount"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                name="technician_bill"
                type="text"
                size="large"
                label="Technician Bill"
              />
            </Col>

            <Col span={24} style={{ margin: "10px 0" }}>
              <label>Technician Ovserbation.</label>
              <FormTextArea
                name="oversarbation"
                rows={6}
              />
            </Col>
          </Row>
        </div>
        <Button htmlType="submit" type="primary" className="bg-primary">submit</Button>
      </Form>
    </div>
  )
}

export default GeneratePayment;