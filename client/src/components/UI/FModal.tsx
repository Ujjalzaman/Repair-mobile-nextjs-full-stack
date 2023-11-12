import { Modal } from 'antd';
import React, { ReactElement, ReactNode, useState } from 'react'
type IProps = {
    children?: ReactElement | ReactNode;
    title?: string;
    handleCancel: () => void;
    handleOk: () => void;
    isModalOpen: boolean;
}

const FModal = ({ children, title, isModalOpen, handleCancel, handleOk }: IProps) => {
    return (
        <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {children}
        </Modal>
    )
}

export default FModal;