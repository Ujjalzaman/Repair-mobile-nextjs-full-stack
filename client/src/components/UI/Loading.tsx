import { Row, Space, Spin } from "antd";

function Loading() {
    return (
        <Row
            justify="center"
            align="middle"
            style={{ height: "100vh" }}
        >
            <Space>
                <Spin tip="Loading" size='large' />
            </Space>
        </Row>
    )
}

export default Loading;