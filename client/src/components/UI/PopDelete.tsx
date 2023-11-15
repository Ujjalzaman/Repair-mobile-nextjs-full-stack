import { Button, message, Popconfirm } from 'antd';
import {DeleteOutlined} from "@ant-design/icons";

const PopDelete = ({title, fc}: {title: string, fc: any}) => {
    const confirm = (e: any) => {
        fc();
        message.success("Succefully Delete !");
    };

    const cancel = (e: any) => {

    };
    return (
        <Popconfirm
            title={title}
            description="Are you sure to delete ?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <Button danger><DeleteOutlined/></Button>
        </Popconfirm>
    )
}

export default PopDelete