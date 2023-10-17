import { Modal } from 'antd';
import React, { ReactElement, ReactNode } from 'react'
type IProps = {
    children?: ReactElement | ReactNode;
    title?: string;
    visible: boolean;
    handleCancel: () => void;
}

const FModal = ({ children, title, visible, handleCancel }: IProps) => {
    return (
        <Modal
            title={title}
            open={visible}
            onOk={handleCancel}
            onCancel={handleCancel}>
            {children}
        </Modal>
    )
}

export default FModal;