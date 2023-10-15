import { Modal } from 'antd';
import React, { ReactElement, ReactNode } from 'react'
type IProps = {
    children?: ReactElement | ReactNode;
    title?: string;
    visible: boolean;
    handleCancel: () => void;
}

const FModal = ({ children, title, visible, handleCancel }:IProps) => {
    return (
        <Modal
            title="Tracking Your Service."
            visible={visible}
            onOk={handleCancel}
            onCancel={handleCancel}
        >
            {children}
            {/* {modalData.status ?
          <>
            <h4>Requested time : {modalData?.createdAt}</h4>
            <h1>Curretn Status : {modalData?.status}</h1>
            <h1>Service Requiest id - {modalData?.serviceRequestId}</h1>
            <p>Assig technician Name: {modalData?.technician_assigne_name}</p>
            <p>Completion Estimate Time: {modalData?.estimated_completion_time}</p>
            <p>Pickup Date : {modalData?.ready_for_pickup}</p>
          </>
          : <h2>Not found....</h2>
        } */}
        </Modal>
    )
}

export default FModal