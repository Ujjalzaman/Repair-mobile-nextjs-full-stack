'use client';

import { useState, useEffect } from 'react';
import { Button, Col, Modal, Row, message } from 'antd';
import { useServiceRequestsQuery, useTrackingMutation } from '@/redux/api/serviceRequestApi';
import Form from '@/components/Forms/Form';
import FormSelectField from '@/components/Forms/FormSelectField';
const TrackingPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [tracking] = useTrackingMutation();
  const { data, isLoading } = useServiceRequestsQuery(undefined);
  const [modalData, isModalData] = useState<any>({})

  const serviceOptions = data?.map((item: any) => {
    return {
      label: item?.deviceType,
      value: item?.id,
    }
  })

  const showModal = () => {
    setIsVisible(true)
  }

  const handleCancel = () => {
    setIsVisible(false)
  }

  const handleTracking = async (value: any) => {
    message.loading("Tracking ...");
    try {
      const res = await tracking(value).unwrap();
      if (res.id) {
        message.success("Successfully Retrive data ");
        isModalData(res)
        showModal();
      }
    } catch (error: any) {
      message.error("Not tacking any Step Pleas try again leter !!")
    }
  }
  return (
    <div>
      <h1>Tracking My Request Status</h1>
      <Form submitHandler={handleTracking}>
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
                name="serviceRequestId"
                label="Select Request"
                options={serviceOptions && serviceOptions}
              />
            </Col>
          </Row>
        </div>
        <Button htmlType="submit" type="primary">submit</Button>
      </Form>

      <Modal
        title="Tracking Your Service."
        visible={isVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        {modalData.status ?
          <>
            <h4>Requested time : {modalData?.createdAt}</h4>
            <h1>Curretn Status : {modalData?.status}</h1>
            <h1>Service Requiest id - {modalData?.serviceRequestId}</h1>
            <p>Assig technician Name: {modalData?.technician_assigne_name}</p>
            <p>Completion Estimate Time: {modalData?.estimated_completion_time}</p>
            <p>Pickup Date : {modalData?.ready_for_pickup}</p>
          </>
          : <h2>Not found....</h2>
        }
      </Modal>
    </div>
  )
}

export default TrackingPage